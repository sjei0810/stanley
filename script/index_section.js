

$(document).ready(function () {
    //custom 영역 flow
    setInterval(customFlow, 20);
});



var moveNum = 0;

function customFlow() {

    moveNum++;

    var boxWidth = $('.custom .img-stack li').first().outerWidth();
    console.log(boxWidth);


    if (moveNum > boxWidth) {

        $('.custom .img-stack').append($('.custom .img-stack li').first()).css({
            left: 0
        });

        /* $('.wrapper .img-stack').append($('.wrapper .img-stack li').first()).css({
            left: 0
        }); */

        moveNum = 0;

    } else {

        $('.custom .img-stack').css({
            left: -moveNum
        });
    }

}


$(document).ready(function () {
    //custom 영역 flow
    setInterval(instaFlow, 20);
});


var moveNum2 = 0;
function instaFlow() {

    moveNum2++;

    var liWidth = $('.insta .img-stack li').first().outerWidth();
    console.log(liWidth);

    if (moveNum2 > liWidth) {

        $('.insta .img-stack').append($('.insta .img-stack li').first()).css({
            left: 0
        });

        moveNum2 = 0;

    } else {

        $('.insta .img-stack').css({
            left: -moveNum2
        });
    }
}