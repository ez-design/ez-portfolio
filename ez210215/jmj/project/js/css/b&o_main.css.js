var swiper = new Swiper(".h01", {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });

  var swiper = new Swiper(".s01", {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },

    
  });

 $(function(){
      // nav 
      $('.fas.fa-bars').click(function(){
        $(this).hide();
        $('.nav').addClass('on');
    })
      $('.fas.fa-slash').click(function(){
        $('.nav').removeClass('on');
        $('.fas.fa-bars').show();
    })

    $('.more').click(function(){
      location.href="../html/speaker_sub.html";
    })

    $('.more02').click(function(){
      location.href="../html/headphone_sub.html";
    })

    $('div.title > span:eq(0)').click(function(){
      location.href="../html/speaker_sub.html";
    })

    $('div.title > span:eq(1)').click(function(){
      location.href="../html/headphone_sub.html";
    })

    $('div.title > span:eq(2)').click(function(){
      location.href="../html/designer.html";
    })

    $('div.title > span:eq(3)').click(function(){
      location.href="../html/sketch.html";
    })

    $('ul > li:eq(0)').click(function(){
      location.href="../html/speaker_sub.html";
    })

    $('ul > li:eq(1)').click(function(){
      location.href="../html/headphone_sub.html";
    })

    $('ul > li:eq(2)').click(function(){
      location.href="../html/designer.html";
    })

    $('ul > li:eq(3)').click(function(){
      location.href="../html/sketch.html";
    })

    $('.bt').click(function(){
      location.href="../html/designer.html";
    })

    $('.more03').click(function(){
      location.href="../html/sketch.html";
    })

    $('.logo').click(function(){
      location.href="../html/b&o.html";
    })



 




  })