
// Initialize Swiper
var swiper1 = new Swiper(".mySwiper1", {
    loop: true,
    loopFillGroupWithBlank: true,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
});
var swiper2 = new Swiper(".mySwiper2", {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});
var swiper3 = new Swiper(".mySwiper3", {
    slidesPerView: 6,
    spaceBetween: 30,
    slidesPerGroup: 1,
    loop: true,
    loopFillGroupWithBlank: true,
    autoplay: {
        delay: 1000,
        disableOnInteraction: false,
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next.btn",
        prevEl: ".swiper-button-prev.btp",
    },
    breakpoints: {
        320: {
            slidesPerView: 2,
            spaceBetween: 20,
        },
        768: {
            slidesPerView: 4,
            spaceBetween: 40,
        },
        1024: {
            slidesPerView: 5,
            spaceBetween: 50,
        },
    },
});


$(document).ready(function() {
    $("div.tab1 > ul.gamebt > li").click(function() {
        $(this).addClass('on').siblings().removeClass('on');
        $("#" + $(this).data('id')).addClass('on').siblings().removeClass('on');
    });
    $("div.tab2 > ul.contentbt > li").click(function() {
        $(this).addClass('on').siblings().removeClass('on');
        $("#" + $(this).data('id')).addClass('on').siblings().removeClass('on');
        clamp1.reload();
        clamp2.reload();
        clamp3.reload();
        clamp4.reload();
        clamp5.reload();
        clamp6.reload();
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
});

//counting
function counting() {
    $('.counting').each(function () {
        var $this = $(this),
            countTo = $this.attr('data-count');

        $({ countNum: $this.text() }).animate({
            countNum: countTo
            //시작 숫자와 종료숫자를 비교한다
        },
            {
                duration: 1000,
                easing: 'linear',
                step: function () {
                    $this.text(Math.floor(this.countNum));
                },
                complete: function () {
                    $this.text(this.countNum);
                }

            });
    });
}
// counting();
function counting2() {
    $('.counting2').each(function() {
        var $this = $(this),
            countTo = $this.text();
        // 속성값으로 소수점을 쓸 수 없어서 해당 태그에 텍스트로 원하는 수치 입력, 스크립트에서 변수로 받기
        // 초기값 0을 여기서 미리설정하기
        $({ countNum: 0 }).animate({ countNum: countTo }, {
            duration: 3000,
            easing: 'linear',
            step: function() {
                // 소수점아래 수 정리 메서드 .toFixed(n) 사용하기
                $this.text(this.countNum.toFixed(3));
            },
            complete: function() {
                $this.text(this.countNum.toFixed(3));
            }
        });
    });
}
counting2();

$(document).scroll(function(){
    var scrolltop = $(window).scrollTop();
        if(scrolltop >= $(".sec02").offset().top + 300){
            counting();
        }
});

$(document).ready(function(){
    $(".snb ul").hover(function() {
        $("li[data-id=" + $(this).attr('id')+"]").toggleClass('on').siblings().removeClass('on');
    });
})

//multiclamp
new MultiClamp(document.querySelector('p.ellipsis1'), {
    ellipsis: '...',
    clamp: 2
});
new MultiClamp(document.querySelector('p.ellipsis2'), {
    ellipsis: '...',
    clamp: 2
});
new MultiClamp(document.querySelector('p.ellipsis3'), {
    ellipsis: '...',
    clamp: 2
});
var clamp1 = new MultiClamp(document.querySelector('p.ellipsis4'), {
    ellipsis: '...',
    clamp: 2
});
var clamp2 = new MultiClamp(document.querySelector('p.ellipsis5'), {
    ellipsis: '...',
    clamp: 2
});
var clamp3 = new MultiClamp(document.querySelector('p.ellipsis6'), {
    ellipsis: '...',
    clamp: 2
});
var clamp4 = new MultiClamp(document.querySelector('p.ellipsis7'), {
    ellipsis: '...',
    clamp: 2
});
var clamp5 = new MultiClamp(document.querySelector('p.ellipsis8'), {
    ellipsis: '...',
    clamp: 2
});
var clamp6 = new MultiClamp(document.querySelector('p.ellipsis9'), {
    ellipsis: '...',
    clamp: 2
});
