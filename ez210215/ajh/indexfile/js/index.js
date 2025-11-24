// var swiper1 = new Swiper('.horizon', {
//     slidesPerView: "auto",
//     freeMode: true,
//     mousewheel: true,
//     keyboard: {
//         enabled: true,
//         onlyInViewport: false,
//     },
// });

// var swiper2 = new Swiper(".workSwiper", {
//     slidesPerView: 1,
//     spaceBetween: 30,
//     loop: true,
//     navigation: {
//         nextEl: ".swiper-button-next.workBt",
//         prevEl: ".swiper-button-prev.workBt",
//     },
// });


var iw = window.innerWidth;
if (iw > 641) {
    // new Swiper('.horizon', {
    //     slidesPerView: "auto",
    //     direction: "vertical",
    //     // freeMode: true,
    //     mousewheel: true,
    //     keyboard: {
    //         enabled: true,
    //         onlyInViewport: false,
    //     },
    // });

    new Swiper(".workSwiper", {
        slidesPerView: 1,
        spaceBetween: 30,
        loop: true,
        navigation: {
            nextEl: ".swiper-button-next.workBt",
            prevEl: ".swiper-button-prev.workBt",
        },
    });

} else if (iw < 641) {
    
}

$(function () {
    $("main").addClass("text-focus-in");
    
    $("a.expBt.ready").click(function() {
        alert('사이트 준비중입니다 :)');
        console.log('사이트 준비중입니다 :)');
        return false;
    })
    //  모바일 전용 메뉴버튼
    $(".menuBt").click(function(){
		$(this).toggleClass("open");
	});
});

//  모바일
if ($(window).width() < 641) {
    $(document).scroll(function () {
        var scroll = $(window).scrollTop();
        if (scroll > 534) {
          $(".mainWork").addClass("swiper-slide-active");
        }
        else if (scroll < 533) {
          $(".mainWork").removeClass("swiper-slide-active");
        }
      });
}