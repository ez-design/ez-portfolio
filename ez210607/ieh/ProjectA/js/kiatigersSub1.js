// Initialize Swiper
var swiper1 = new Swiper(".mySwiper1", {
    loop: true,
    loopFillGroupWithBlank: true,
    slidesPerView: 6,
    spaceBetween: 5,
    slidesPerGroup: 1,
    pagination: {
        el: ".swiper-pagination",
        type: "fraction",
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    breakpoints: {
        320: {
            slidesPerView: 1,
            spaceBetween: 20,
        },
        464: {
            slidesPerView: 2,
            spaceBetween: 40,
        },
        680: {
            slidesPerView: 3,
            spaceBetween: 40,
        },
        900: {
            slidesPerView: 4,
            spaceBetween: 40,
        },
        1024: {
            slidesPerView: 5,
            spaceBetween: 10,
        },
        1200: {
            slidesPerView: 6,
            spaceBetween: 10,
        },
    },
});

var swiper2 = new Swiper(".mySwiper2", {
    loof: true,
    allowTouchMove: false,
    thumbs: {
        swiper: swiper1,
    },
});
$(".mySwiper1 .swiper-slide").click(function(){
    $(this).addClass('on').siblings().removeClass('on');
});
$(".tap > .tapbt > button").click(function() {
    $(this).addClass('on').siblings().removeClass('on');
    $("#" + $(this).data('id')).addClass('on').siblings().removeClass('on');
});
// 모바일메뉴 open/close
$(".mmenu").click(function() {
    $(".mNav").addClass("on");
    // nav에 on클래스 추가/삭제
});
$(".mclose").click(function() {
    $(".mNav").removeClass("on");
    // nav에 on클래스 추가/삭제
});
// 모바일용 아코디언 메뉴
$(".msnb").hide();
// .mSnb를 숨기고 시작
$(".mNav > div > span").click(function() {
    $(this).next().slideToggle(300);
    //this 다음 요소를 슬라이드다운
    $(".mNav > div > span").not(this).next().slideUp(300);
});

$(document).ready(function(){
    $(".snb ul").hover(function() {
        $("li[data-id=" + $(this).attr('id')+"]").toggleClass('on').siblings().removeClass('on');
    });
})