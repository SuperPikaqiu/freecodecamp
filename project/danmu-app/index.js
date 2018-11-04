import 'bootstrap/dist/css/bootstrap.min.css';
import './index.scss';

import 'jquery/dist/jquery.min';

$(document).ready(function () {
    let myCanvas = $('#myCanvas');
    let cxt = myCanvas[0].getContext('2d');
    let canvasWidth = myCanvas.width();
    let canvasHeight = myCanvas.height();
    myCanvas[0].height = canvasHeight;
    myCanvas[0].width = canvasWidth;

    cxt.textBaseline = 'top';
    cxt.strokeStyle = '#000';



    let textArray = [];
    let currentTextArr = [];

    $('#btnSend').click(sendText);

    $('#btnClear').click(function () {
        currentTextArr = [];
    });

    function sendText() {
        var text = $('#textInput').val();

        if(!text){
            return;
        }

        $('#textInput').val('');

        var t = Math.floor(timeSpan / 50) + 2;
        var size = 30;
        var color = 'rgb(255,0,0)';
        var speed = 3;
        cxt.font = size + 'px Arial';
        var width = cxt.measureText(text).width;
        var y = Math.floor(Math.random() * (300 - size + 1));

        var textObj = {
            timeIndex: t,
            x: screen.availWidth,
            y: y,
            speed: speed,
            color: color,
            text: text,
            size: size,
            width: width,
            visible: true,
            userInput:true
        };

        textArray.push(textObj);
    }


    function generateText() {
        for(let i=0;i<500;i++){
            var timeIndex = Math.floor(Math.random() * 120);

            var r = Math.floor(Math.random() * 256);
            var g = Math.floor(Math.random() * 256);
            var b = Math.floor(Math.random() * 256);
            var size = Math.floor(Math.random()*20)+20;
            cxt.font = size + 'px Arial';
            var width = cxt.measureText('Hello').width;
            var speed = Math.floor(Math.random() * 3)+2;

            var x = screen.availWidth;
            var y = Math.floor(Math.random() * (300-size+1));

            var textObj = {
                timeIndex: timeIndex,
                x: x,
                y: y,
                speed: speed,
                color: 'rgb(' + r + ',' + g + ',' + b + ')',
                text: 'Hello',
                size:size,
                width:width,
                visible : true,
                userInput:false
            };

            textArray.push(textObj);
        }

    }

    generateText();

    let timeSpan = 0;

    window.onkeydown = function(e){
        if(e.keyCode == 13){
            sendText();
            return false;
        }
    };

    window.onresize = function(){
        canvasWidth = myCanvas.width();
        canvasHeight = myCanvas.height();
        myCanvas[0].height = canvasHeight;
        myCanvas[0].width = canvasWidth;

        cxt.textBaseline = 'top';
        cxt.strokeStyle = '#000';

        drawText();
    };

    window.setInterval(function () {
        timeSpan += 1;
        var time = timeSpan / 50;
        var newTextArr = textArray.filter(function (val) {
            return val.timeIndex === time;
        });

        currentTextArr = currentTextArr.concat(newTextArr);

        drawText();
    }, 20);

    function drawText() {
        cxt.clearRect(0,0,canvasWidth,canvasHeight);
        cxt.save();
        cxt.beginPath();
        for(let textNode of currentTextArr){
            if(textNode.visible){
                cxt.font = textNode.size + 'px Arial';
                textNode.x -= textNode.speed;
                cxt.fillStyle = textNode.color;

                if(textNode.userInput){

                    cxt.strokeStyle = '#000';
                    cxt.strokeRect(textNode.x,textNode.y,textNode.width,textNode.size);
                }

                cxt.fillText(textNode.text,textNode.x,textNode.y);



                if(textNode.x <= -textNode.width){
                    textNode.visible = false;
                }
            }

        }
        cxt.closePath();
        cxt.restore();
    }
});


