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

    function setGrid(){
        var h = $('.grid li').width() * 0.6;
        $('.grid li').height(h);

        var titleH = $('.grid span').height();
        $('.grid span').css('lineHeight',`${titleH}px`);
    }

    setGrid();

    $('.frame-box').on('load',function () {
        var w = window.screen.availWidth;
        var h = window.screen.availHeight;

        var pw = $(this).parent().width();


        var scale = pw * 2 / w;

        var sw = Math.ceil(w * scale);
        var sh = Math.ceil(h * scale);

        var top = Math.ceil((h - sh)/2);
        var left = Math.ceil((w - pw)/2);



        $(this).css({
            'width':w+'px',
            'height':h+'px',
            'transform':`scale(${scale})`,
            'top':`-${top}px`,
            'left':`-${left}px`,
            'display':'block'
        });
    })

    // $('#frameTest').load(function () {
    //     var w = this.contentDocument.body.scrollWidth;
    //     var h = this.contentDocument.body.scrollHeight;
    //
    //     var pw = $(this).parent().css('width');
    //     var ph = pw * 0.6;
    //     $(this).parent().css('height',ph);
    //     $(this.contentDocument.body).find('#result').attr('scrolling','no');
    //     $(this).width(w);
    //     $(this).height(h);
    //
    //     var scale = pw / w;
    //     $(this).css('transform',`scaleX(${scale})`);
    // })

});


