//모바일 메뉴 열기/닫기
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
    $(".mMenuBt").click(function() {
        $("ul.gnb").addClass("on");
    });
    $(".bt .close").click(function() {
        $("ul.gnb").removeClass("on");
    });

    // 2차 메뉴 열기
    $(".gnb > li > a").click(function() {
        $(this).next().slideToggle(300);
        //this 다음 요소를 슬라이드토글
        $(".gnb > li > a").not(this).next().slideUp(300);
        //this가 아니라면 다음 요소는 슬라이드업
        return false;
        //a href="#"을 클릭했을때 목적지가 없어서 리프레시 되는것을 막음
    });
});

// 스크롤에 따라 헤더디자인 변경
$(document).scroll(function() {
    var scroll = $(window).scrollTop();
    if (scroll > 100) {
        $(".top").addClass("on");
    } else if (scroll < 99) {
        $(".top").removeClass("on");
    }
});

// 모바일에서만 스와이퍼 구현
// let iw = window.innerWidth;
// if (iw < 641) {
//     const swiper1 = new Swiper('.swiper-container.swipe1', {
//         scrollbar: {
//             el: '.swiper-scrollbar',
//             hide: true,
//         },
//         navigation: {
//             nextEl: '.swiper-button-next',
//             prevEl: '.swiper-button-prev',
//         },
//     });
// }

//윈도우 사이즈에 따라 스와이퍼 옵션 변경
const swiper1 = new Swiper('.swiper-container.swipe1', {
    slidesPerView: 1,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
        clickable: true,
    },
    centeredSlides: true,
    direction: 'vertical',
    breakpoints: {
        // when window width is >= 640px
        640: {
            direction: 'horizontal',
            pagination: {
                el: '.swiper-pagination',
                type: 'progressbar',
            },
            loop: true,
        }
    },
});

// 20년 2월 4일 릴리즈된 구글 크롬(Google Chrome)80버전부터 새로운 쿠키 정책이 적용 되어 Cookie의 SameSite 속성의 기본값이 "None"에서 "Lax"로 변경.
// Cookie의 SameSite 속성은 서로 다른 도메인간의 쿠키 전송에 대한 보안을 설정해야한다.

// 카카오 지도 API를 이용하여 제주본사와, 판교오피스 삽입
let kakaomap1 = document.querySelector('#jejuMap');
let kakaomap2 = document.querySelector('#pangyoMap');
// 좌표 상수선언
const markerPosition1 = new kakao.maps.LatLng(33.450701, 126.570667);
const markerPosition2 = new kakao.maps.LatLng(37.4017201, 127.1080387);
let options1 = {
    center: markerPosition1,
    level: 4
};
let options2 = {
    center: markerPosition2,
    level: 4
};
let map1 = new kakao.maps.Map(kakaomap1, options1);
let map2 = new kakao.maps.Map(kakaomap2, options2);

// 마커삽입 및 생성
let marker1 = new kakao.maps.Marker({
    position: markerPosition1
});
let marker2 = new kakao.maps.Marker({
    position: markerPosition2
});
marker1.setMap(map1);
marker2.setMap(map2);