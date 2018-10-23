require.config({
    baseUrl:"../../node_modules",
    paths:{
        "jquery":["jquery/dist/jquery.min"],
        "bootstrap":["bootstrap/dist/js/bootstrap.min"],
        "popper.js":["popper.js/dist/umd/popper"]
    },
    shim:{
        "bootstrap":{
            deps:["jquery"]
        },
        "popper.js":{
            deps:["bootstrap"]
        }
    }
});

require(["jquery","bootstrap"],function($){
    $(document).ready(function () {
        var data = {
            board: [],
            player: '',
            computer: '',
            status: '',
            pointArr: [[90, 90], [250, 90], [410, 90],
                [90, 250], [250, 250], [410, 250],
                [90, 410], [250, 410], [410, 410]],
            timeIns: null
        };
    
        $('li').on('click', function () {
            if (data.status == 'player') {
                var index = $(this).attr('id');
                if (data.board[index] === undefined) {
                    data.board[index] = data.player;
                    drawBoard();
    
                    var winArr = isWin();
                    if (winArr) {
                        drawLine(winArr);
    
                        data.status = 'finish';
                    } else {
                        if (isFinish()) {
                            data.status = 'finish';
                            window.setTimeout(initialBoard,1000);
                        } else {
                            data.status = 'computer';
                            window.setTimeout(computerMove, 1000);
                        }
    
    
                    }
                }
            }
        });
    
        $('#btnO').on('click', function () {
            data.player = 'O';
            data.computer = 'X';
            $('#myModal').modal('hide');
        });
    
        $('#btnX').on('click', function () {
            data.player = 'X';
            data.computer = 'O';
            $('#myModal').modal('hide');
        });
    
        function computerMove() {
            var moveFlag = false;
            //如果电脑走这一步能赢，取这一步
            for (var i = 0; i < 9; i++) {
                if (data.board[i] === undefined) {
                    data.board[i] = data.computer;
    
                    var winArr = isWin();
                    if (winArr) {
                        drawBoard();
                        drawLine(winArr);
                        data.status = 'finish';
                        return;
                    } else {
                        data.board[i] = undefined;
                    }
                }
            }
    
            //如果玩家走这一步能赢，取这一步
            for (var i = 0; i < 9; i++) {
                if (data.board[i] === undefined) {
                    data.board[i] = data.player;
                    if (isWin()) {
                        data.board[i] = data.computer;
                        moveFlag = true;
                        break;
                    } else {
                        data.board[i] = undefined;
                    }
                }
            }
    
    
            //电脑连续走两步，如果有获胜方式，取这一步
            if (!moveFlag) {
                for (var i = 0; i < 9; i++) {
                    if (data.board[i] === undefined) {
                        data.board[i] = data.computer;
    
                        var count = 0;
                        for (var j = 0; j < 9; j++) {
                            if (data.board[j] === undefined) {
                                data.board[j] = data.computer;
                                if (isWin()) {
                                    count++;
                                }
                                data.board[j] = undefined;
                            }
                        }
    
                        if (count >= 2) {
                            moveFlag = true;
                            break;
                        }
                        data.board[i] = undefined;
                    }
                }
            }
    
    
    
    
    
            //没有较优走法，先取中间，再取四个角，最后取剩下的
            if (!moveFlag) {
                if (data.board[4] === undefined) {
                    data.board[4] = data.computer;
                    moveFlag = true;
                }
            }
    
    
            var arr = [0, 2, 6, 8];
    
            if (!moveFlag) {
                for (var i = 0; i < arr.length; i++) {
                    if (data.board[arr[i]] === undefined) {
                        data.board[arr[i]] = data.computer;
                        moveFlag = true;
                        break;
                    }
                }
            }
    
            if (!moveFlag) {
                for (var i = 0; i < 9; i++) {
                    if (data.board[i] === undefined) {
                        data.board[i] = data.computer;
                        moveFlag = true;
                        break;
                    }
                }
            }
    
            drawBoard();
    
            if (isFinish()) {
                data.status = 'finish';
                window.setTimeout(initialBoard,1000);
            } else {
                data.status = 'player';
            }
        }
    
        function isFinish() {
            var count = 0;
            for (var i = 0; i < 9; i++) {
                if (data.board[i] !== undefined) {
                    count++;
                }
            }
    
            return count == 9 ? true : false;
        }
    
        function isWin() {
            for (var i = 0; i < 3; i++) {
                if (data.board[i * 3] !== undefined && data.board[i * 3] == data.board[i * 3 + 1]
                    && data.board[i * 3 + 1] == data.board[i * 3 + 2]) {
                    return [i * 3, i * 3 + 2];
                }
            }
    
            for (var i = 0; i < 3; i++) {
                if (data.board[i] !== undefined && data.board[i] == data.board[i + 3]
                    && data.board[i + 3] == data.board[i + 6]) {
                    return [i, i + 6];
                }
            }
    
            if (data.board[0] !== undefined && data.board[0] == data.board[4]
                && data.board[0] == data.board[8]) {
                return [0, 8];
            }
    
            if (data.board[2] !== undefined && data.board[2] == data.board[4]
                && data.board[2] == data.board[6]) {
                return [6, 2];
            }
    
            return false;
        }
    
        function drawBoard() {
            var list = $('li');
            for (var i = 0; i < 9; i++) {
                if (data.board[i] !== undefined) {
                    $(list[i]).text(data.board[i]);
                }else{
                    $(list[i]).text('');
                }
            }
        }
    
        function drawLine(arr) {
            var count = 0;
            var total = 6;
            $('#winCanvas').show();
            data.timeIns = window.setInterval(function () {
                var cav = document.getElementById('winCanvas');
                var cxt = cav.getContext('2d');
    
                var [x1, y1] = data.pointArr[arr[0]];
                var [x2, y2] = data.pointArr[arr[1]];
    
                var add = 40;
    
                if(x1 == x2){
                    y1 -= add;
                    y2 += add;
                }
    
                if(y1 == y2){
                    x1 -= add;
                    x2 += add;
                }
    
                if(x1 < x2 && y1 < y2){
                    x1 -= add;
                    y1 -= add;
                    x2 += add;
                    y2 += add;
                }
    
                if(x1 < x2 && y1 > y2){
                    x1 -= add;
                    y1 += add;
                    x2 += add;
                    y2 -= add;
                }
    
                cxt.clearRect(0, 0, 500, 500);
                cxt.strokeStyle = '#ff6000';
                cxt.lineWidth = 3;
    
                if (count % 2 === 0) {
                    cxt.beginPath();
                    cxt.moveTo(x1, y1);
                    cxt.lineTo(x2, y2);
                    cxt.closePath();
                    cxt.stroke();
                }
    
    
                count++;
    
                if (count >= total) {
    
                    initialBoard();
                }
            }, 1000);
        }
    
        function initialBoard(){
            data.board = [];
    
            if(data.timeIns != null){
                window.clearInterval(data.timeIns);
            }
            data.timeIns = null;
            if(data.player == 'X'){
                data.status = 'player';
            }
            else{
                data.status = 'computer';
                window.setTimeout(computerMove, 1000);
            }
    
            $('#winCanvas').hide();
    
            drawBoard();
        }
    
        $('#roleSelect').on('click',function () {
            if(data.timeIns != null){
                window.clearInterval(data.timeIns);
            }
        });
    
    
        $('#myModal').on('hidden.bs.modal', function () {
            initialBoard();
        });
    
        $('#myModal').on('show.bs.modal', function () {
            data.status = 'modal';
        });
    
        $('#myModal').modal({
            backdrop: 'static'
        });
        //$('#myModal').modal('show');
    });
});

