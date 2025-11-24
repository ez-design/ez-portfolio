// 클릭 시 하위메뉴 열기, close버튼으로 하위메뉴 닫기
$(document).ready(function(){
     //리사이징 할때마다 새로고침
     var lastWidth = $(window).width();
     $(window).resize(function(){
         if($(window).width()!=lastWidth){
             location.reload();
             lastWidth = $(window).width();
             return false;
         }
     });
    $(".mMenuBt").click(function(){
        $("nav").addClass("dpFlex");
    });
    $(".close").click(function(){
        $("nav").removeClass("dpFlex");
    });
    $(".depth1 > a").click(function(){
        $(this).next().addClass("on");
        $(".depth1 > a").not(this).siblings().removeClass("on");
    });
    //리사이징 할때마다 새로고침
    var lastWidth = $(window).width();
    $(window).resize(function(){
        if($(window).width()!=lastWidth){
            location.reload();
            lastWidth = $(window).width();
            return false;
        }
    });
});

new Swiper('.swiper-container.swipe1', { 
    scrollbar: {
        el: '.swiper-scrollbar',
        hide: true,
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    autoplay: {delay: 2000},
});

new Swiper('.swiper-container.swipe2', { 
    autoplay: {delay: 2000},
    loop: true,
    direction: 'vertical',
});
// querySelector를 하나하나 설정해 줘야지만 적용이 된다.
// 일괄적용이 안되며, 첫번째 객체만 적용이 된다.
var clamp1 = new MultiClamp(document.querySelector('p.ellipsis'), {
    ellipsis: '...', // 끝자리 붙을 모양
    clamp: 1 // 라인수
});
var clamp2 = new MultiClamp(document.querySelector('p.ellipsis2'), {
    ellipsis: '...',
    clamp: 2
});
// display: none/flex가 되는 탭안에서는 새로고침을 해줘야 하므로, 변수처리 하여 탭을 누를때마다 .reload()를 실행시킨다

// clamp1.reload();
// clamp2.reload();