$(document).ready(function() {
  var lastWidth = $(window).width();
     $(window).resize(function(){
         if($(window).width()!=lastWidth){
             location.reload();
             lastWidth = $(window).width();
             return false;
         }
     });//리사이징 새로고침

  $("a[href^='#']").click(function(event){
    event.preventDefault();
    var target=$(this.hash);
    $('html,body').animate({scrollTop:target.offset().top},500)
    
  })

  //TAB
$(".tab1 ul li").click(function(){
  $(this).addClass('on').siblings().removeClass('on');
  $("#"+$(this).data('id')).addClass('on').siblings().removeClass('on');
  });

  $(".tab2 > div > div").click(function(){
      $(this).addClass('on')
              .siblings().removeClass('on');
      $("#"+$(this).data('id')).addClass('on')
              .siblings().removeClass('on');
  });

//BUTTON
 $(".tBox button").each(function(){
   $(this).click(function(){
     $(this).prev().find(".read").toggle()
     $(this).prev().find(".dots").toggle()
   })
 })
 $(".cBox button").each(function(){
  $(this).click(function(){
    $(this).prev().find(".read").toggle()
    $(this).prev().find(".dots").toggle()
  })
})

});


//OTHER  
$('.sw1').slick({
  slidesToShow: 3,
  draggable : false, 
  responsive: [
    {
      breakpoint: 1560,
      settings: {
        slidesToShow: 2,
      }
    },
    {
      breakpoint: 640,
      settings: {
        slidesToShow: 1,
      }
    },
  ]
});

//All
$('.vertical-slider').slick({
  arrows: false,
  dots: true,
  infinite: false,
  vertical: true,
  verticalSwiping: true,
//   customPaging : function(slider, i) {
//     $(slider.$slides[i]).data();
//     if (i=='0'){
//       i = "HOME";
//     } else if (i=='1'){
//       i = "TRAILER";
//     }else if (i=='2'){
//       i = "CHARACTER";
//     }else if (i=='3'){
//       i = "GALLERY";
//     }
//     return '<a class="dot">'+i+'</a>';
//     },
});

//스크롤감지
$('.vertical-slider').mousewheel(function(e) {
  if (e.deltaY < 0) {
      if ($(this).slick('slickCurrentSlide') == $(this).find('.slide').length - 1) {
          return
      }

      e.preventDefault()
      $(this).slick('slickNext')
  } else {
      if ($(this).slick('slickCurrentSlide') == 0) {
          return
      }

      e.preventDefault()
      $(this).slick('slickPrev')
  }

});

//CHARACTER

$('.character').slick({
  // arrows : true,
  dots: true,
  infinite: false,
    // customPaging: function(slide, i) {
  //   // console.log( slide.$slider[0] )
  //   //아래 마크업처럼 적용할 버튼들의 마크업을 대입하면 된다.

  //   // slick내부에서 슬라이드 개수 만큼 for문으로 생성 ( 슬라이드 개수 만큼 복제된다. )
  //   return '<div class="slide-banner">' +' <div class="bn-item"> luca'+ '</div>' + '</div>'
  //   }
  customPaging : function(slider, i) {
    $(slider.$slides[i]).data();
    if (i=='0'){
      i = "Luca";
    } else if (i=='1'){
      i = "Alberto";
    }else if (i=='2'){
      i = "Giulia";
    }else if (i=='3'){
      i = "Other";
    }
    return '<a class="dot">'+i+'</a>';
    },
});

//WORLD DESIGN
$('.S2').slick({
  arrows: true, 
  infinite: true,
});


//GALLERY
$('.Gs1').slick({
  slidesToShow: 4,
  vertical: true,
  verticalSwiping: true,
  draggable : false, 
  arrows: false,
  dots: false,
  infinite: true,
  autoplay: true,
  autoplaySpeed: 2000,
  responsive: [
    {
      breakpoint: 1560,
      settings: {
        slidesToShow: 3,
      }
    },
    {
      breakpoint: 640,
      settings: {
        slidesToShow: 1,
      }
    },
    // {
    //   breakpoint: 320,
    //   settings: {
    //     slidesToShow: 1,
    //   }
    // }
  ]
});
