var swiper1 = new Swiper(".d01", {
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


// var swiper2 = new Swiper(".d02", {
//   pagination: {
//   el: ".swiper-pagination.p1",
//     },
//     observer:true,
//     observeParents:true,
//   });
// var swiper2 = new Swiper('.swiper-container.d02', {
//   scrollbar: {
//       el: '.swiper-scrollbar',
//       hide: true,
//   },
//   navigation: {
//       nextEl: '.swiper-button-next',
//       prevEl: '.swiper-button-prev',
//   },
// });

  // 태블릿 에서만
// var iw = window.innerWidth;
// if (iw < 1081) {
 
// }

$(function () {


  //logo
  $('.logo').click(function () {
      location.href = "./html/b&o.html";
  });

  // nav 
  // $('.fas.fa-bars').click(function () {
  //     $('.nav').toggle();
  // });

    // nav 
    $('.fas.fa-bars').click(function(){
      $(this).hide();
      $('.nav').addClass('on');
  })
    $('.fas.fa-slash').click(function(){
      $('.nav').removeClass('on');
      $('.fas.fa-bars').show();
  })

  $('div.title > span:eq(0)').click(function(){
    location.href="./ez210215/jmj/project/html/speaker_sub.html";
  })

  $('div.title > span:eq(1)').click(function(){
    location.href="./ez210215/jmj/project/html/headphone_sub.html";
  })

  $('div.title > span:eq(2)').click(function(){
    location.href="./ez210215/jmj/project/designer.html";
  })

  $('div.title > span:eq(3)').click(function(){
    location.href="./ez210215/jmj/project/sketch.html";
  })

})


