var swiper1 = new Swiper('.scroll_v', {
    direction: 'vertical',
    slidesPerView: 1,
    mousewheel: {
        sensitivity: 1,
    },

    speed: 500,
    pagination: {
        el: '.pageVertical',
        clickable: true,
        dynamicBullets: true,
    },
    navigation: {
        nextEl: '.scroll_v .swiper-button-next.nb.n1',
        prevEl: '.scroll_v .swiper-button-prev.pb.p1',
    },
    keyboard: {
        enabled: true,
        onlyInViewport: false,
    },
    eventsTarget: 'scroll_v',
    on: {
        slideChangeTransitionStart: function () {
            $(".sec02, .sec03, .sec04").removeClass("on");
            $(".sec02 h1").hide();
            //$('.title').removeClass('aos-init').removeClass('aos-animate');
        },
        slideChangeTransitionEnd: function () {
            $(".sec02, .sec03, .sec04").addClass("on");
            $('.sec02 h1').slideDown(1000);
            // setTimeout(function () {
            //     $(".sec03").addClass("on");
            // }, 1000);
            // AOS.init(); 
        },
    }
    
    // //현재슬라이드에서 AOS 작동, 가로스와이퍼에서만 실행됨(주석처리된것은 가로 스크롤에서만 사용할것)
    // //vertical에서는 애니메이션 이벤트로 등장여부를 조정하는 정도로만 타협
});

// sec01 스와이퍼 슬라이드
var swiper = new Swiper(".mySwiper", {
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
    // spaceBetween: 30,
    effect: "fade",
    fadeEffect:  {crossFade: true},
    loop: true,
    loopFillGroupWithBlank: true,
    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
    },
    autoplayDisableOnIteraction: true,
  });


//swiper active 슬라이드 확대형
var swiper7 = new Swiper(".expandSlide", {
    // spaceBetween: 30,
    slidesPerView: 3,
    loop: true,
    loopFillGroupWithBlank: true,
    centeredSlides: true,
    autoplay: {
        delay: 2000,
        disableOnInteraction: false
    },
    navigation: {
        nextEl: ".expandSlide .swiper-button-next.nb.n2",
        prevEl: ".expandSlide .swiper-button-prev.pb.p2",
    },
});