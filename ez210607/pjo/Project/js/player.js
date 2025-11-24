$(document).ready(function(){
    var tabBtn = $(".tab-btn > ul > li");
    var tabCont = $(".tab-cont > div");
    
    tabCont.hide().eq(0).show();
    
    tabBtn.click(function(e){
        e.preventDefault();
        var target = $(this);
        var index = target.index();
        tabBtn.removeClass("active");
        target.addClass("active");
        tabCont.css("display","none");
        tabCont.eq(index).css("display","block");
    });

    $("ul.menu li a").click(function(){
        $(this).addClass("on");
        $("ul.menu li a").not(this).removeClass("on");
    });
    $("ul.menu li a").hover(function(){
        $(this).addClass("on");
        $("ul.menu li a").not(this).removeClass("on");
    });

    $(".pt1").show(function(){
        $(".pt h1").addClass("on");
    }); 

});



$('.player-center').slick({
    centerMode: true,
    centerPadding: '0',
    slidesToShow: 5,
    arrows:true,
    dots: false,
    prevArrow: '<button class="slide-arrow prev-arrow"></button>',
    nextArrow: '<button class="slide-arrow next-arrow"></button>',
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '0',
          slidesToShow: 3
        }
      },
      {
        breakpoint: 480,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '0',
          slidesToShow: 3
        }
      },
      {
        breakpoint: 320,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '0',
          slidesToShow: 3
        }
      },
    ]
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

$(".headL ul li.sub").click(function(){
  $("div.nav").toggleClass("on");
 });
 





// function getDate(date) {
// 	return date.toLocaleDateString().replace(/\./g, "").split(" ");
// }

// window.onload = function() {
//   const Tday = new Date();
  
//   const nowMonth = Tday.getMonth();
  
//   const [y, m] = getDate(new Date(Tday.setMonth(nowMonth)));

//   const lastDay = getDate(new Date(y, m, 0)).pop() * 1;
  
//   const day = new Date([y, m, 1].join("-")).getDay();
  
//   const maxDay = Math.ceil((+day + lastDay) / 7) * 7;

//   let html = '';

//   for (let i = 1; i <= maxDay; i++) {
//     const d = i > day && lastDay >= i - day ? i - day : '';
//     const cls = !d ? 'background' : '';

//     html += `<div class="dateSel ${cls}">${d}</div>`;
//   }

//   document.querySelector('.dateSel').innerHTML = html;
//   document.querySelector('.date_text').innerText = `${y}년 ${m}월`;
// }





