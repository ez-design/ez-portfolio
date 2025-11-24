$(document).ready(function() {
    //리사이징 할때마다 새로고침
    var lastWidth = $(window).width();
    $(window).resize(function() {
        if ($(window).width() != lastWidth) {
            location.reload();
            lastWidth = $(window).width();
            return false;
        }
    });



    $(".gnb li a").click(function() {
        $(".nav .inner .sub").toggleClass("on");
    });




});


//경복궁둘러보기

$(".tab .tab_content .conbox").hide().eq(0).show();
$(".tab .tab_right .tab_menu div span > img").click(function() {
    $(this).addClass('on').siblings().removeClass('on');
    $("#" + $(this).data('id')).fadeIn(500)
        .siblings('.conbox').fadeOut(300);

    $(".tab .tab_right .tab_menu .circle").click(function() {
        $(this).addClass('on').siblings().removeClass('on');
    });

});




//경복궁 역사

// var menu = ['현재', '1900년대', '1800년대', '1500년대', '1400년대', '1300년대']
var mySwiper = new Swiper('.mySwiper', {
    // If we need pagination
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
        renderBullet: function(index, className) {
            return '<span class="' + className + '">' + '</span>';
        },
    },

    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
})


$(document).ready(function() {
    // 탭메뉴 가로형
    $(".guide_tab ul li").click(function() {
        $(this).addClass('on')
            .siblings().removeClass('on');
        $("#" + $(this).data('id')).addClass('on')
            .siblings().removeClass('on');
    });
});


//알림판 
var swiper = new Swiper(".guideSwiper", {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});

//메인
var swiper = new Swiper(".visualSwiper", {
    spaceBetween: 30,
    effect: "fade",
    centeredSlides: true,
    autoplay: {
        delay: 3500,
        disableOnInteraction: false,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
});


//맨위로가기
var btn = $('#scroll-to-top');

$(window).scroll(function() {
    if ($(window).scrollTop() > 300) {
        btn.addClass('show');
    } else {
        btn.removeClass('show');
    }
});

btn.on('click', function(e) {
    e.preventDefault();
    $('html, body').animate({
        scrollTop: 0
    }, '300');
});


//모바일메뉴
$(".mMenuBt").click(function() {
    $("nav .minner").addClass("open");
    // nav에 open클래스 추가/삭제
});
$(".mCloseBt").click(function() {
    $("nav .minner").removeClass("open");
    // nav에 open클래스 추가/삭제
});

if ($(window).width() < 641) {
    // 모바일용 아코디언 메뉴
    $(".mSnb").hide();
    // .mSnb를 숨기고 시작
    $(".gnbMenu > .title").click(function() {
        $(this).next().slideToggle(300);
        //this 다음 요소를 슬라이드다운
        $(".gnbMenu > .title").not(this).next().slideUp(300);
        return false;
        // a href="#"일때 갈곳이 없으면 무조건 페이지 상단(처음)으로 이동하는데
        // 클릭한 다음 링크기능을 수행못하도록 return false;를 입력
    });
};

