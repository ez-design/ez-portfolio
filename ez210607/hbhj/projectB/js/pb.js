var swiper1 = new Swiper(".s2Swiper", {
    slidesPerView: 3,
    loop: true,
    loopFillGroupWithBlank: true,
    autoplay: {
        delay: 2000,
        disableOnInteraction: false
    },
    centeredSlides: true,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});
var swiper2 = new Swiper(".thumbSlide.t1", {
    loop: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next.nb.n1",
        prevEl: ".swiper-button-prev.pb.p1",
    },
    slidesPerView: 3,
    spaceBetween: 10,
    freeMode: {
        enable: true
    },
    watchSlidesProgress: true,
    breakpoints: {
        640: {
            slidesPerView: 3,
            spaceBetween: 10,
        },
        768: {
            slidesPerView: 4,
            spaceBetween: 10,
        },
        1024: {
            slidesPerView: 5,
            spaceBetween: 20,
        },
    },
});
new Swiper(".bottomSwiper.b1", {
    loop: true,
    thumbs: {
        swiper: swiper2,
    },
});
var swiper3 = new Swiper(".thumbSlide.t2", {
    loop: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next.nb.n2",
        prevEl: ".swiper-button-prev.pb.p2",
    },
    slidesPerView: 3,
    spaceBetween: 10,
    freeMode: {
        enable: true
    },
    watchSlidesProgress: true,
    breakpoints: {
        640: {
            slidesPerView: 3,
            spaceBetween: 10,
        },
        768: {
            slidesPerView: 4,
            spaceBetween: 10,
        },
        1024: {
            slidesPerView: 5,
            spaceBetween: 20,
        },
    },
});
new Swiper(".bottomSwiper.b2", {
    loop: true,
    thumbs: {
        swiper: swiper3,
    },
});
var swiper4 = new Swiper(".thumbSlide.t3", {
    loop: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next.nb.n3",
        prevEl: ".swiper-button-prev.pb.p3",
    },
    slidesPerView: 3,
    spaceBetween: 10,
    freeMode: {
        enable: true
    },
    watchSlidesProgress: true,
    breakpoints: {
        640: {
            slidesPerView: 3,
            spaceBetween: 10,
        },
        768: {
            slidesPerView: 4,
            spaceBetween: 10,
        },
        1024: {
            slidesPerView: 5,
            spaceBetween: 20,
        },
    },
});
new Swiper(".bottomSwiper.b3", {
    loop: true,
    thumbs: {
        swiper: swiper4,
    },
});
var swiper5 = new Swiper(".thumbSlide.t4", {
    loop: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next.nb.n4",
        prevEl: ".swiper-button-prev.pb.p4",
    },
    slidesPerView: 3,
    spaceBetween: 10,
    freeMode: {
        enable: true
    },
    watchSlidesProgress: true,
    breakpoints: {
        640: {
            slidesPerView: 3,
            spaceBetween: 10,
        },
        768: {
            slidesPerView: 4,
            spaceBetween: 10,
        },
        1024: {
            slidesPerView: 5,
            spaceBetween: 20,
        },
    },
});
new Swiper(".bottomSwiper.b4", {
    loop: true,
    thumbs: {
        swiper: swiper5,
    },
});
var swiper6 = new Swiper(".thumbSlide.t5", {
    loop: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next.nb.n5",
        prevEl: ".swiper-button-prev.pb.p5",
    },
    slidesPerView: 3,
    spaceBetween: 10,
    freeMode: {
        enable: true
    },
    watchSlidesProgress: true,
    breakpoints: {
        640: {
            slidesPerView: 3,
            spaceBetween: 10,
        },
        768: {
            slidesPerView: 4,
            spaceBetween: 10,
        },
        1024: {
            slidesPerView: 5,
            spaceBetween: 20,
        },
    },
});
new Swiper(".bottomSwiper.b5", {
    loop: true,
    thumbs: {
        swiper: swiper6,
    },
});
var swiper7 = new Swiper(".thumbSlide.t6", {
    loop: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next.nb.n6",
        prevEl: ".swiper-button-prev.pb.p6",
    },
    slidesPerView: 3,
    spaceBetween: 10,
    freeMode: {
        enable: true
    },
    watchSlidesProgress: true,
    breakpoints: {
        640: {
            slidesPerView: 3,
            spaceBetween: 10,
        },
        768: {
            slidesPerView: 4,
            spaceBetween: 10,
        },
        1024: {
            slidesPerView: 5,
            spaceBetween: 20,
        },
    },
});
new Swiper(".bottomSwiper.b6", {
    loop: true,
    thumbs: {
        swiper: swiper7,
    },
});
//스크롤 모션
var mHtml = $("html");
var page = 1;
mHtml.animate({
    scrollTop: 0
}, 10);
if ($(window).width() > 1024) {
    $(window).on("wheel", function(e) {
        if (mHtml.is(":animated")) return;
        if (e.originalEvent.deltaY > 0) {
            if (page == 9) return;
            page++;
        } else if (e.originalEvent.deltaY < 0) {
            if (page == 1) return;
            page--;
        };
        var posTop = (page - 1) * $(window).height();
        mHtml.animate({
            scrollTop: posTop
        });
    });
};
//today
var monthNames = ["JAN", "FEB", "MAR", "APR", "MAY", "JUN", "JUL", "AUG", "SEP", "OCT", "NOV", "DEC"];
var dayNames = ['SUNDAY', 'MONDAY', 'TUESDAY', 'WEDNESDAY', 'THURSDAY', 'FRIDAY', 'SATURDAY', 'SUNDAY'];

var today = new Date();

var year = today.getFullYear();
var month = (monthNames[today.getMonth()]);
var day = ('0' + today.getDate()).slice(-2);
var day2 = (dayNames[today.getDay()]);

document.getElementById("day").innerHTML = `${day}, ${day2}`;
document.getElementById("yearMonth").innerHTML = `${year} ${month}`;

$(function() {
    //메뉴 버튼
    $(".menuBt").hover(function() {
        $(".menuBt img").toggleClass("on");
    });
    //스크롤 버튼
    $(".scrollMenu span").each(function() {
        var thisOffset = $("." + $(this).data('id')).offset().top;

        $(this).click(function() {
            $("html, body").animate({
                scrollTop: thisOffset
            }, 1000);
            $(this).addClass('on');
        });
    });
});
//----------------------------섹션이동 시 리모콘에 하이라이트
if ($(window).width() > 1024) {
    $(document).scroll(function() {
        var scrolltop = $(window).scrollTop();
        $("header, section, footer").each(function() {
            if (scrolltop >= $(this).offset().top) {
                $("span[data-id=" + $(this).attr('class') + "]").addClass('on').siblings().removeClass('on');
            } else if (scrolltop >= $(".s7").offset().top + 130) {
                $("span[data-id=footer]").addClass('on').siblings().removeClass('on');
            }
        });
    });
    //nav 
    $(".menuBt").click(function() {
        $("nav.gnb").addClass("on");
    });
    $(".menuClose").click(function() {
        $("nav.gnb").removeClass("on");
    });
};
//모바일 top 스크롤 시 배경색상 변경
if ($(window).width() < 1024) {
    $(document).scroll(function() {
        var scroll = $(window).scrollTop();
        if (scroll > 100) {
            $(".top").addClass("roll");
        } else if (scroll < 99) {
            $(".top").removeClass("roll");
        }
    });
    //모바일 top버튼
    $(".mTop").on("click", function(){
        $("html, body").animate({
            scrollTop : 0
        }, 500);
    });
    //nav 
    $(".menuBt").click(function() {
        $("nav.mMenu").addClass("on");
    });
    $(".menuClose").click(function() {
        $("nav.mMenu").removeClass("on");
    });
}