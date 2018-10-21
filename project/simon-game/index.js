$(document).ready(function () {
    var data = {
        status: 'stop',
        count: 0,
        strictFlag: false,
        queue: [],
        timeHandle: null,
        timeOutHandle: null,
        animateEndHandle: null,
        startHandle: null,
        wrongHandle: null,
        step: 0,//动画播放顺序
        currentIndex: null, //当前点击顺序
        maxCount: 0,
        clickTarget: null
    };

    $('#btnSwitch').bootstrapSwitch({
        onText: 'ON',
        offText: 'Off',
        onColor: 'success',
        offColor: 'danger',
        size: 'mini',
        onSwitchChange(e, status) {
            if (status == true) {
                initData();
                $('#countPanel').text('- -');
                $('#countPanel').css('color', '#ff0037');
            } else {
                clearData();
                data.status = 'stop';
                $('#strictIcon').removeClass('strictOn');

                $('#countPanel').text('- -');
                $('#countPanel').css('color', '#820021');
            }
        }
    });

    function showCount() {
        if (data.count < 10) {
            $('#countPanel').text('0' + data.count);
        } else {
            $('#countPanel').text(data.count);
        }
    }

    function generateQueue() {
        data.queue = [];
        for (var i = 0; i < data.count; i++) {
            var id = Math.floor(Math.random() * 4) + 1;
            data.queue.push(id);
        }
    }

    function startAnimate() {
        data.step = 0;
        data.status = 'animate';
        data.currentIndex = 0;

        if (data.timeHandle !== null) {
            window.clearInterval(data.timeHandle);
        }

        data.timeHandle = window.setInterval(AnimateQueue, 2000);
    }

    function AnimateQueue() {
        var id = '#colorBtn' + data.queue[data.step];

        $(id).animate({
            opacity: 1
        }, 1000, function () {
            $('#sound3')[0].play();
        });
        $(id).animate({
            opacity: 0.5
        }, 500);

        data.step++;
        if (data.step >= data.queue.length) {
            window.clearInterval(data.timeHandle);
            data.timeHandle = null;
            data.animateEndHandle = window.setTimeout(function () {
                data.status = 'player';
                data.timeOutHandle = window.setTimeout(function () {
                    clickWrong();
                }, data.count * 3000);
            }, 2000);
        }
    }

    $('#btnStart').on('click', function () {
        if (data.status != 'stop') {
            clearData();
            data.status = 'start';
            data.count = 1;


            showCount();
            generateQueue();
            data.startHandle = window.setTimeout(startAnimate, 500); //点击开始有一个0.5秒的延迟
        }
    });

    $('#btnStrict').on('click', function () {
        if (data.status != 'stop') {
            data.strictFlag = !data.strictFlag;
            if (data.strictFlag) {
                $('#strictIcon').addClass('strictOn');
            } else {
                $('#strictIcon').removeClass('strictOn');
            }
        }
    });

    $('.colorBtn').on('click', function () {
        if (data.status !== 'player') {
            return;
        }

        let val = $(this).attr('data-index');
        val = parseInt(val);

        if (val === data.queue[data.currentIndex]) {
            data.currentIndex++;
            $('#sound3')[0].play();
            if (data.currentIndex >= data.queue.length) {
                data.count++;
                showCount();

                if (data.timeOutHandle !== null) {
                    window.clearTimeout(data.timeOutHandle);
                    data.timeOutHandle = null;
                }

                if (data.count >= data.maxCount) {
                    data.status = 'win';
                    showWin();
                }
                else {
                    generateQueue();
                    startAnimate();
                }
            }
        }
        else {
            clickWrong();
        }
    });

    $('.colorBtn').on('mousedown', function () {
        if (data.status !== 'player') {
            return;
        }

        data.clickTarget = '#' + $(this).attr('id');
        $(this).css('opacity', '1');
    });

    $('.colorBtn').on('mouseup', function () {
        if (data.status !== 'player') {
            return;
        }

        //$(this).css('opacity','0.5');
    });

    window.onmouseup = function () {
        if (data.clickTarget !== null) {
            $(data.clickTarget).css('opacity', '0.5');
            data.clickTarget = null;
        }
    };

    function showWin() {
        $('#myModal').modal('show');
    }

    function initData() {
        data.status = 'initial';
        data.count = 0;
        data.strictFlag = false;
        data.queue = [];
        data.maxCount = 15;
        data.step = 0;
        data.currentIndex = 0;
    }

    function clearData() {
        if (data.timeHandle !== null) {
            window.clearInterval(data.timeHandle);
            data.timeHandle = null;
        }

        if (data.timeOutHandle !== null) {
            window.clearTimeout(data.timeOutHandle);
            data.timeOutHandle = null;
        }

        if (data.animateEndHandle !== null) {
            window.clearTimeout(data.animateEndHandle);
            data.animateEndHandle = null;
        }

        if (data.startHandle !== null) {
            window.clearTimeout(data.startHandle);
            data.startHandle = null;
        }

        if (data.wrongHandle !== null) {
            window.clearTimeout(data.wrongHandle);
            data.wrongHandle = null;
        }

        $('#countPanel').stop(true);
        $('.colorBtn').stop(true);

        $('#colorBtn1').css('opacity', '0.5');
        $('#colorBtn2').css('opacity', '0.5');
        $('#colorBtn3').css('opacity', '0.5');
        $('#colorBtn4').css('opacity', '0.5');
    }


    function clickWrong() {
        data.status = 'wrong';
        $('#sound1')[0].play();
        if (data.strictFlag) {
            data.count = 1;
            generateQueue();
        }

        if (data.timeOutHandle !== null) {
            window.clearTimeout(data.timeOutHandle);
            data.timeOutHandle = null;
        }

        if (data.clickTarget !== null) {
            $(data.clickTarget).css('opacity', '0.5');
            data.clickTarget = null;
        }

        $('#countPanel').text('!!');
        $('#countPanel').animate({color: '#820021'}, 500);
        $('#countPanel').animate({color: '#ff0037'}, 500, function () {
            data.wrongHandle = window.setTimeout(function () {
                showCount();
                startAnimate();
            }, 500);
        });
    }

    $('#btnClose').on('click', function () {
        $('#myModal').modal('hide');
    });



});