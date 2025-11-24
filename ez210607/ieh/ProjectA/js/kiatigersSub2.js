var swiper = new Swiper(".mySwiper1", {
    slidesPerView: 3,
    spaceBetween: 20,
    slidesPerGroup: 1,
    loop: true,
    loopFillGroupWithBlank: true,
    autoplay: {
        delay: 1500,
        disableOnInteraction: false,
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
        560: {
            slidesPerView: 2,
            spaceBetween: 40,
        },
        900: {
            slidesPerView: 3,
            spaceBetween: 50,
        },
    },
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