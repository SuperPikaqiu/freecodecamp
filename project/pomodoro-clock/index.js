$(document).ready(function () {
    var data = {
        break: 5,
        session: 25,
        timeCount: 0,
        status: 'sessionPause',
        timeIns: null,
        cxt:null
    };

    $('#breakAdd').on('click', function () {
        if (data.status == 'sessionPause' || data.status == 'breakPause') {
            data.break += 1;

            $('#breakText').text(data.break);
            if(data.status == 'breakPause'){
                data.timeCount = 0;
                $('#time').text(data.break);
            }

        }

    });

    $('#breakMinus').on('click', function () {
        if (data.status == 'sessionPause' || data.status == 'breakPause') {
            if (data.break > 1) {
                data.break -= 1;

                $('#breakText').text(data.break);
                if(data.status == 'breakPause'){
                    data.timeCount = 0;
                    $('#time').text(data.break);

                }
            }
        }

    });

    $('#sessionAdd').on('click', function () {
        if (data.status == 'sessionPause') {
            data.session += 1;
            data.timeCount = 0;
            $('#sessionText').text(data.session);
            $('#time').text(data.session);
        }

    });

    $('#sessionMinus').on('click', function () {
        if (data.status == 'sessionPause') {
            if (data.session > 1) {
                data.session -= 1;
                data.timeCount = 0;
                $('#sessionText').text(data.session);
                $('#time').text(data.session);
            }
        }

    });

    $('#clock').on('click', function () {
        var newStatus = '';
        switch (data.status) {
            case 'sessionRunning':
                newStatus = 'sessionPause';
                break;
            case 'sessionPause':
                newStatus = 'sessionRunning';
                break;
            case 'breakRunning':
                newStatus = 'breakPause';
                break;
            case 'breakPause':
                newStatus = 'breakRunning';
                break;
        }

        data.status = newStatus;
    });

    data.timeIns = window.setInterval(function () {
        if (data.status == 'sessionPause' || data.status == 'breakPause') {
            return;
        }

        data.timeCount++;

        if (data.status == 'sessionRunning') {
            if (data.timeCount > data.session * 60) {
                data.status = 'breakRunning';
                data.timeCount = 0;
                $('#status').text('Break!');
            }
        } else if (data.status == 'breakRunning') {
            if (data.timeCount > data.break * 60) {
                data.status = 'sessionRunning';
                data.timeCount = 0;
                $('#status').text('Session');
            }
        }

        updateTime();

    }, 1000);

    function updateTime() {
        var total;
        var current = data.timeCount;

        if (data.status == 'sessionRunning' || data.status == 'sessionPause') {
            total = data.session;
        } else {
            total = data.break;
        }

        var tmp = total * 60 - current;
        var h = Math.floor(tmp / 3600);
        var m = Math.floor((tmp - 3600 * h) / 60);
        var s = tmp % 60;

        if(h > 0 && m < 10){
            m = '0'+m;
        }


        if (s < 10) {
            s = '0' + s;
        }

        var str = h > 0 ? (h + ':' + m + ':' + s) : m + ':' + s;

        $('#time').text(str);
        draw();
    }



    function draw(){
        if(data.cxt == null){
            var cav = document.getElementById('fillCanvas');
            data.cxt = cav.getContext('2d');
        }

        var total,color;

        if(data.status == 'sessionRunning' || data.status == 'sessionPause'){
            total = data.session * 60;
            color = '#92d200';
        }
        else{
            total = data.break * 60;
            color = '#ff3400';
        }

        var per = ((total- data.timeCount) / total).toFixed(2);
        var height = Math.round(336 * per);
        var cxt = data.cxt;
        cxt.clearRect(0,0,350,350);

        cxt.fillStyle = color;

        cxt.beginPath();
        cxt.arc(175,175,168,0,360);
        cxt.closePath();

        cxt.fill();

        cxt.fillStyle = '#3c3c3c';
        cxt.fillRect(0,7,350,height);
    }


    $('#time').text(data.session);


});