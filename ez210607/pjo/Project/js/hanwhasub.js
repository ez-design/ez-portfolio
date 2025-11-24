$(document).ready(function(){
    
    $("ul.menu li a").click(function(){
        $(this).addClass("on");
        $("ul.menu li a").not(this).removeClass("on");
    });
    $("ul.menu li a").hover(function(){
        $(this).addClass("on");
        $("ul.menu li a").not(this).removeClass("on");
    });
});

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
    
    $(".MheadR").click(function() {
        $("ul.Mgnb").addClass("on");
    });
    $("li.bt").click(function() {
        $("ul.Mgnb").removeClass("on");
    });


    // 2차 메뉴 열기
    $(".Mgnb a.M").click(function() {
        $(this).addClass("on");
        $(".Mgnb a.M").not(this).removeClass("on");
        // on일때 폰트컬러 주황으로 변경


        $(this).next().slideToggle(300);
        //this 다음 요소를 슬라이드토글
        $(".Mgnb a.M").not(this).next().slideUp(300);
        // $(".Mgnb a.M").not(this).next().removeClass("on");
        //this가 아니라면 다음 요소는 슬라이드업
        return false;
        //a href="#"을 클릭했을때 목적지가 없어서 리프레시 되는것을 막음
    });


    
});



var swiper = new Swiper(".mySwiper", {
    pagination: {
      el: ".swiper-pagination",
      type: "fraction",
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });
  $(".headL ul li.sub").click(function(){
    $("div.nav").toggleClass("on");
   });
   