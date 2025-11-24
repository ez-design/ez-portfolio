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
   


    $("header .inner .gnb .subgnball > ul > li > ul > li > a").click(function() {
        $(this).addClass("on");
        $("header .inner .gnb .subgnball > ul > li > ul > li > a").not(this).removeClass("on");
});
    // nav의 하위메뉴 숨기고 시작
    if ($(window).width() > 640) {
        $("nav > div").hover(function() {
            $(this).addClass("on");
            $("nav > div").not(this).removeClass("on");
            $(this).children("ul").slideToggle(300);
            //this의 자식 요소를 슬라이드다운
            $("nav > div").not(this).children("ul").slideUp(300);
            //this와 관계없는 자식 요소를 슬라이드업
        });
    } else if ($(window).width() < 640) {
        // 모바일메뉴 open/close
        $(".mMenuBt").click(function() {
            $(".gnb").addClass("on");
            // .gnb에 on클래스 추가/삭제    
        });
        $(".mCloseBt").click(function() {
            $(".gnb").removeClass("on");
            // .gnb에 on클래스 추가/삭제
        });

        //모바일 .gnb 탭스타일
        $(".gnb > div > span").click(function() {
            $(this).addClass('on').siblings().removeClass('on');
            $("#" + $(this).data('id')).addClass('on').siblings().removeClass('on');
        });

        //nav 하위메뉴 slideToggle
        $("nav > div").click(function() {
            $(this).addClass("on");
            $("nav > div").not(this).removeClass("on");
            $(this).children("ul").slideToggle(300);
            //this의 자식 요소를 슬라이드다운
            $("nav > div").not(this).children("ul").slideUp(300);
            //this와 관계없는 자식 요소를 슬라이드업
        });
            $("header .inner .gnb .subgnball > ul > li > ul > li > a").click(function() {
                $(this).addClass("on");
                $("header .inner .gnb .subgnball > ul > li > ul > li > a").not(this).removeClass("on");
        });
    }
});


//메인 스와이퍼//
var swiper = new Swiper(".visualSwiper", {
    spaceBetween: 40,
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
  
//숫자 카운팅
function numberCounter(target_frame, target_number) {
    this.count = 0; this.diff = 0;
    this.target_count = parseInt(target_number);
    this.target_frame = document.getElementById(target_frame);
    this.timer = null;
    this.counter();
  };
   
   
    numberCounter.prototype.counter = function() {
        var self = this;
        this.diff = this.target_count - this.count;
   
        if(this.diff > 0) {
            self.count += Math.ceil(this.diff / 10);
        }
   
        this.target_frame.innerHTML = this.count.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
   
        if(this.count < this.target_count) {
            this.timer = setTimeout(function() { self.counter(); }, 30);
        } else {
            clearTimeout(this.timer);
        }
    };
   
  $(document).ready(function(){ 
  $(window).bind("scroll", function(){
  if($(window).scrollTop() > 900){
    new numberCounter("counter1", 49);
    new numberCounter("counter2", 52);
    new numberCounter("counter3", 2000);
    $(this).unbind();
  }
  })
  });
  



//배경변경//
  $(document).ready(function(){
	var webtongHeight = $('.hoverimg .hovercon img').outerHeight(true);
	$('.hoverimg .hovercon img').css('height', webtongHeight);
	
	$(".hoverimg .hovercon img").hover(function(){
		var bg = $(this).attr('data-bg');
		$("#contents").css('background-image', 'url('+ bg +')');
	});
});


//탭//
$(function(){
    $(".tab ul li").click(function(){
        $(this).addClass('on')
                .siblings().removeClass('on');
        $("#"+$(this).data('id')).addClass('on')
                .siblings().removeClass('on');
    });
});