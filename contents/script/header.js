/* header */

$(document).ready(function () {

    $('.content-box > li').mouseenter(function () {
        $(this).find('.content-sub').stop().slideDown();
    });

    $('.content-box > li').mouseleave(function () {
        $('.content-sub').stop().slideUp();
    });
});
