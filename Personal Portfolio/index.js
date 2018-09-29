$(document).ready(function () {
    $('#navAbout').click(function () {
        var top = $('#about').offset().top - 50;
        $('html').animate({scrollTop: top}, 800);
    });

    $('#navPortfolio').click(function () {
        var top = $('#portfolio').offset().top - 50;
        $('html').animate({scrollTop: top}, 800);
    });

    $('#navContact').click(function () {
        var top = $('#contact').offset().top - 50;
        $('html').animate({scrollTop: top}, 800);
    });

    window.onscroll = function () {
        var winScrollY = window.scrollY;
        var aboutTop = $('#about').offset().top - 50;
        var portfolioTop = $('#portfolio').offset().top - 50;
        var contactTop = $('#contact').offset().top - 50;

        if (winScrollY < portfolioTop) {
            $('#navAbout').addClass('active');
            $('#navPortfolio').removeClass('active');
            $('#navContact').removeClass('active');
        }
        else if (winScrollY >= portfolioTop && winScrollY < contactTop) {
            $('#navPortfolio').addClass('active');
            $('#navAbout').removeClass('active');
            $('#navContact').removeClass('active');
        }
        else if (winScrollY >= contactTop) {
            $('#navContact').addClass('active');
            $('#navAbout').removeClass('active');
            $('#navPortfolio').removeClass('active');
        }
    };

});


