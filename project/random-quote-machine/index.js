import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';
import './index.scss';

import 'jquery/dist/jquery.min';
import 'jqueryui/jquery-ui.min';

var colors = ['#16a085', '#27ae60', '#2c3e50', '#f39c12', '#e74c3c', '#9b59b6', '#FB6964',
    '#342224', "#472E32", "#BDBB99", "#77B1A9", "#73A857"];

$(document).ready(function () {
    getQuote();

    $('#btnNewQuote').on('click',getQuote);
});



function getQuote() {
    $.ajax({
        headers: {
            "X-Mashape-Key": "OivH71yd3tmshl9YKzFH7BTzBVRQp1RaKLajsnafgL2aPsfP9V",
            Accept: "application/json",
            "Content-Type": "application/x-www-form-urlencoded"
        },
        url: 'https://andruxnet-random-famous-quotes.p.mashape.com/cat=',
        success: function (r) {
            if (typeof r === 'string') {
                r = JSON.parse(r);
            }
            if (Array.isArray(r)) {
                r = r[0];
            }

            if (!inFrame()) {
                $('#tweetLink').attr('href', '#');
                $('#tumblrLink').attr('href', '#');

            }

            $('.quote-text').animate({
                opacity: 0
            }, 500, function () {
                $(this).animate({
                    opacity: 1
                }, 500);
                $('#quoteText').text(r.quote);
            });

            $('.quote-author').animate({
                opacity: 0
            }, 500, function () {
                $(this).animate({
                    opacity: 1
                }, 500);
                $('#author').text(r.author);
            });

            var color = Math.floor(Math.random() * colors.length);

            $('html body').animate({
                backgroundColor:colors[color],
                color:colors[color]
            },1000);

            $('.btn').animate({
                backgroundColor:colors[color]
            },1000);
        }
    });
}

function inFrame() {
    try {
        return window.self !== window.top;
    }
    catch (e) {
        return true;
    }
}