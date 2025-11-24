$(function(){
  var lastWidth = $(window).width();
     $(window).resize(function(){
         if($(window).width()!=lastWidth){
             location.reload();
             lastWidth = $(window).width();
             return false;
         }
     });//리사이징 새로고침
     
  $("header .submenu > .un > a").click(function(){
      $(this).next().slideToggle(300);
      $("header .submenu > .un > a").not(this).next().slideUp(300);
      return false;
  })


  $("header >ul>li").hover(function(){
      $(".submenu",this).stop().slideToggle(300)
      $("header .submenu > .un > a").not(this).next().slideUp(300);
  });

  $(".p2_left > ul>li").click(function(){
      $(this).addClass("on").siblings().removeClass("on")
      $("#"+$(this).data("id")).addClass("on").siblings().removeClass("on")
  })

 

  if($(window).width() < 1024){
    $(".wrap").click(function(){
     $(".sitemap").addClass('on');
    })
    $(".sitemap_button").click(function(){
      $(".sitemap").removeClass("on");
    });

    //ie
    $(".ie9 .wrap").click(function(){
      $(".ie9 .sitemap").show();
     })
    $(".ie9 .sitemap_button").click(function(){
    $(".ie9 .sitemap").slideUp(300);
    });


    $(".sitemap .sitebox .n_t").click(function(){
      $(this).next().stop().slideToggle(300);
      $(".sitemap .sitebox .n_t").not(this).next().slideUp(300)
      return false;
    });
    $(".sitemap .sitebox .n_t").each(function(){
      $(this).click(function(){
        $(this).addClass('on')
        $(".sitemap .sitebox .n_t").not(this).removeClass("on")
      })
    })
    $(".sitemap .submenu > .un > a").click(function(){
      $(this).next().slideToggle(300);
      $(".sitemap .submenu > .un > a").not(this).next().slideUp(300);
      return false;
  })
  }
  else if($(window).width()>1024){
     $('.menu').click(function(){
    $('.sitemap').stop().slideToggle(300);
  })
  }

})


// 홍보자료/ 채널
$('.p2_slide').slick({
  autoplay: true,
  autoplaySpeed: 2500,
  prevArrow: false,
  nextArrow: false
});

$('.p4_slide').slick({
  infinite: true,
  slidesToShow: 3,
  responsive: [
      {
        breakpoint: 1200,
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
$('.p6_slide').slick({
  infinite: true,
  slidesToShow: 3,
});
