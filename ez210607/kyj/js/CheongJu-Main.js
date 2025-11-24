$(document).ready(function(){
  // header .header .mobile-menu
  $("header .header .mobile-menu").click(function(){
    $("header .nav").css({
      "transform": "translateX(0%)",
      "transition": "width 0.5s ease-in"
    });
  });

  $("header .nav .inner .zero img").click(function(){
    $("header .nav").css({
      "transform": "translateX(-100%)",
      "transition": "width 0.5s ease-in"
    });
  });


  $('.section-one .slick').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnFocus: false, 
    pauseOnHover: false,
  });
  
  // .section-two .inner .calendar .day
  $(".section-two .inner .calendar .day li").click(function(){
    $(this).addClass("on").siblings().removeClass("on");
  });

  $('.section-two .inner .slick').slick({
    slidesToShow: 4,
    slidesToScroll: 4,
    arrows : true, 
		draggable : true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  });

  $(".section-three .inner .notice .tap-menu li").click(function(){
    $(this).addClass("on").siblings().removeClass("on");
    $("#"+$(this).data("id")).addClass("on").siblings().removeClass("on");
    $('.section-three .inner .notice .slick').slick('refresh');
  });

  $('.section-three .inner .notice .slick').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows : true,
    draggable : true, 
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  });

  $('.section-four .slick').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnFocus: false, 
    pauseOnHover: false,
  });


});
// var clamp1 = new MultiClamp(document.querySelector('p.word'), {
//   ellipsis: '...',
//   clamp: 3,
// });
var clamp1 = new MultiClamp(document.querySelector('p.ellipsis'), {
  ellipsis: '...',
  clamp: 3,
});
var clamp2 = new MultiClamp(document.querySelector('p.ellipsis2'), {
  ellipsis: '...',
  clamp: 3,
});
var clamp3 = new MultiClamp(document.querySelector('p.ellipsis3'), {
  ellipsis: '...',
  clamp: 3,
});