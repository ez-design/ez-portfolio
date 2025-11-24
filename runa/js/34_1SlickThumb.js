// ---------------------------Slick
$(document).ready(function() {
    // 사진의 비율을 살린 갤러리디자인
    $('.slider.slider-for').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        asNavFor: '.slider.slider-nav',
        autoplay: true,
        autoplaySpeed: 2000,
    });
    $('.slider.slider-nav').slick({
        slidesToShow: 3,
        slidesToScroll: 3,
        asNavFor: '.slider.slider-for',
        infinite: true,
        centerMode: true,
        focusOnSelect: true,
        autoplay: true,
        autoplaySpeed: 2000,
    });

    // 사진이 꽉차보이는 갤러리디자인
    $('.slider2.slider-for').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        asNavFor: '.slider2.slider-nav'
    });
    $('.slider2.slider-nav').slick({
        slidesToShow: 3,
        slidesToScroll: 3,
        asNavFor: '.slider2.slider-for',
        infinite: true,
        centerMode: true,
        focusOnSelect: true,
    });

    // 기본 슬릭 + autoplay
    $('.slider3').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        infinite: true,
        pauseOnHover: false, // 마우스 올리면 멈춤 기능 비활성화
        pauseOnFocus: false, // 수동 동작시키면 멈춤 기능 비활성화
    });

    // vertical 갤러리
    $('.slider4.slider-for').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        asNavFor: '.slider4.slider-nav',
        autoplay: true,
        autoplaySpeed: 2000,
        infinite: true,
        arrows: false
    });
    $('.slider4.slider-nav').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        asNavFor: '.slider4.slider-for',
        infinite: true,
        centerMode: true,
        focusOnSelect: false,
        autoplay: true,
        autoplaySpeed: 2000,
        vertical: true,
        verticalSwiping: true,  
    });

});
