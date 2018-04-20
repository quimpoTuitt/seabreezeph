$(document).ready(function () {

    var menu = $('.main-menu');
    var origOffsetY = menu.offset().top;

    function scroll() {
        if ($(window).scrollTop() >= origOffsetY) {
      $('.main-menu').addClass('sticky');
            $('.content').addClass('menu-padding');
        } else {
            $('.main-menu').removeClass('sticky');
            $('.content').removeClass('menu-padding');
        }


    }

    document.onscroll = scroll;

});



