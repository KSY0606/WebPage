/* 드롭다운 js */

$(document).ready(function() {
    var main = $('.main-menu');
    // 마우스 over 시
    main.mouseenter(function() {

        $('.sub-menu').show();

        $('.sub-back').css({
            'top': '160px',
            height: 180 + 'px'
        });
    });

    // 마우스  leave 시
    main.mouseleave(function() {
        $('.sub-menu').hide();
        $('.sub-back').css('height', '0')
    });
});