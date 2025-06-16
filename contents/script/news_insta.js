$(document).ready(function () {
    //custom 영역 flow
    setInterval(newsFlow, 20);
});

var moveNum3 = 0;
function newsFlow() {

    moveNum3++;

    var instaWidth = $('.content-box2 .img-stack li').first().outerWidth();
    console.log(instaWidth);

    if (moveNum3 > instaWidth) {

        $('.content-box2 .img-stack').append($('.content-box2 .img-stack li').first()).css({
            left: 0
        });

        moveNum3 = 0;

    } else {

        $('.content-box2 .img-stack').css({
            left: -moveNum3
        });
    }
}