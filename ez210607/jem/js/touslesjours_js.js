$(document).ready(function(){
AOS.init();

// $(".tab2  ul li").click(function(){
//     $(this).addClass("on").siblings().removeClass("on")
//     $("#"+$(this).data("id")).addClass("on").siblings().removeClass("on")
//   });

  $(".tab  ul li").click(function(){
    $(this).addClass("on").siblings().removeClass("on")
    $("#"+$(this).data("id")).addClass("on").siblings().removeClass("on")
  });
  
  $(" header .menu").click(function(){
    $(".menu_inner").slideDown().addClass("on")
  })
$(".close").click(function(){
  $(".menu_inner").slideUp().removeClass("on")
  return false
  });
});

if($(window).width() < 1024){
  $(".nav > div> .menu_t").click(function(){
    $(this).next().slideToggle(300)
    $(".nav > div> .menu_t").not(this).next().slideUp(300);
    return false
  })
}

//products

const swiper1 = new Swiper(".newproduct1", {
  loop: true,
  spaceBetween: 10,
  slidesPerView: 5,
//   freeMode: true,
  watchSlidesProgress: true,
  breakpoints: {
      320: {
          slidesPerView: 3,
      },
      1560: {
          slidesPerView: 5,
      }
  },
});
new Swiper(".newproduct2", {
  loop: true,
  spaceBetween: 10,
  effect: "fade",
  navigation: {
      nextEl: ".newproduct2 .swiper-button-next",
      prevEl: ".newproduct2 .swiper-button-prev",
  },
  thumbs: {
      swiper: swiper1,
      slideThumbActiveClass: "swiper-slide-active"
  },
});


const swiper2 = new Swiper(".product1", {
  loop: true,
  spaceBetween: 10,
  slidesPerView: 5,
//   freeMode: true,
  watchSlidesProgress: true,
  breakpoints: {
      320: {
          slidesPerView: 3,
      },
      1560: {
          slidesPerView: 5,
      }
  },
});
new Swiper(".product2", {
  loop: true,
  spaceBetween: 10,
  effect: "fade",
  navigation: {
      nextEl: ".product2 .swiper-button-next",
      prevEl: ".product2 .swiper-button-prev",
  },
  thumbs: {
      swiper: swiper2,
      slideThumbActiveClass: "swiper-slide-active"
  },
});

const swiper3 = new Swiper(".product1-1", {
  loop: true,
  spaceBetween: 10,
  slidesPerView: 5,
//   freeMode: true,
  watchSlidesProgress: true,
  breakpoints: {
      320: {
          slidesPerView: 3,
      },
      1560: {
          slidesPerView: 5,
      }
  },
});
new Swiper(".product2-1", {
  loop: true,
  spaceBetween: 10,
  effect: "fade",
  navigation: {
      nextEl: ".product2-1 .swiper-button-next",
      prevEl: ".product2-1 .swiper-button-prev",
  },
  thumbs: {
      swiper: swiper3,
      slideThumbActiveClass: "swiper-slide-active"
  },
});
//
const swiper4 = new Swiper(".product1-2", {
  loop: true,
  spaceBetween: 10,
  slidesPerView: 5,
//   freeMode: true,
  watchSlidesProgress: true,
  breakpoints: {
      320: {
          slidesPerView: 3,
      },
      1560: {
          slidesPerView: 5,
      }
  },
});
new Swiper(".product2-2", {
  loop: true,
  spaceBetween: 10,
  effect: "fade",
  navigation: {
      nextEl: ".product2-2 .swiper-button-next",
      prevEl: ".product2-2 .swiper-button-prev",
  },
  thumbs: {
      swiper: swiper4,
      slideThumbActiveClass: "swiper-slide-active"
  },
});

//
const swiper5 = new Swiper(".product1-3", {
  loop: true,
  spaceBetween: 10,
  slidesPerView: 5,
//   freeMode: true,
  watchSlidesProgress: true,
  breakpoints: {
      320: {
          slidesPerView: 3,
      },
      1560: {
          slidesPerView: 5,
      }
  },
});
new Swiper(".product2-3", {
  loop: true,
  spaceBetween: 10,
  effect: "fade",
  navigation: {
      nextEl: ".product2-3 .swiper-button-next",
      prevEl: ".product2-3 .swiper-button-prev",
  },
  thumbs: {
      swiper: swiper5,
      slideThumbActiveClass: "swiper-slide-active"
  },
});
//
const swiper6 = new Swiper(".product1-4", {
  loop: true,
  spaceBetween: 10,
  slidesPerView: 5,
//   freeMode: true,
  watchSlidesProgress: true,
  breakpoints: {
      320: {
          slidesPerView: 3,
      },
      1560: {
          slidesPerView: 5,
      }
  },
});
new Swiper(".product2-4", {
  loop: true,
  spaceBetween: 10,
  effect: "fade",
  navigation: {
      nextEl: ".product2-4 .swiper-button-next",
      prevEl: ".product2-4 .swiper-button-prev",
  },
  thumbs: {
      swiper: swiper6,
      slideThumbActiveClass: "swiper-slide-active"
  },
});
//
const swiper7 = new Swiper(".product1-5", {
  loop: true,
  spaceBetween: 10,
  slidesPerView: 5,
//   freeMode: true,
  watchSlidesProgress: true,
  breakpoints: {
      320: {
          slidesPerView: 3,
      },
      1560: {
          slidesPerView: 5,
      }
  },
});
new Swiper(".product2-5", {
  loop: true,
  spaceBetween: 10,
  effect: "fade",
  navigation: {
      nextEl: ".product2-5 .swiper-button-next",
      prevEl: ".product2-5 .swiper-button-prev",
  },
  thumbs: {
      swiper: swiper7,
      slideThumbActiveClass: "swiper-slide-active"
  },
});
//
const swiper8 = new Swiper(".product1-6", {
  loop: true,
  spaceBetween: 10,
  slidesPerView: 5,
//   freeMode: true,
  watchSlidesProgress: true,
  breakpoints: {
      320: {
          slidesPerView: 3,
      },
      1560: {
          slidesPerView: 5,
      }
  },
});
new Swiper(".product2-6", {
  loop: true,
  spaceBetween: 10,
  effect: "fade",
  navigation: {
      nextEl: ".product2-6 .swiper-button-next",
      prevEl: ".product2-6 .swiper-button-prev",
  },
  thumbs: {
      swiper: swiper8,
      slideThumbActiveClass: "swiper-slide-active"
  },
});
//
const swiper9 = new Swiper(".product1-7", {
  loop: true,
  spaceBetween: 10,
  slidesPerView: 5,
//   freeMode: true,
  watchSlidesProgress: true,
  breakpoints: {
      320: {
          slidesPerView: 3,
      },
      1560: {
          slidesPerView: 5,
      }
  },
});
new Swiper(".product2-7", {
  loop: true,
  spaceBetween: 10,
  effect: "fade",
  navigation: {
      nextEl: ".product2-7 .swiper-button-next",
      prevEl: ".product2-7 .swiper-button-prev",
  },
  thumbs: {
      swiper: swiper9,
      slideThumbActiveClass: "swiper-slide-active"
  },
});
//
const swiper10 = new Swiper(".product1-8", {
  loop: true,
  spaceBetween: 10,
  slidesPerView: 5,
//   freeMode: true,
  watchSlidesProgress: true,
  breakpoints: {
      320: {
          slidesPerView: 3,
      },
      1560: {
          slidesPerView: 5,
      }
  },
});
new Swiper(".product2-8", {
  loop: true,
  spaceBetween: 10,
  effect: "fade",
  navigation: {
      nextEl: ".product2-8 .swiper-button-next",
      prevEl: ".product2-8 .swiper-button-prev",
  },
  thumbs: {
      swiper: swiper10,
      slideThumbActiveClass: "swiper-slide-active"
  },
});
//
const swiper11 = new Swiper(".product1-9", {
  loop: true,
  spaceBetween: 10,
  slidesPerView: 5,
//   freeMode: true,
  watchSlidesProgress: true,
  breakpoints: {
      320: {
          slidesPerView: 3,
      },
      1560: {
          slidesPerView: 5,
      }
  },
});
new Swiper(".product2-9", {
  loop: true,
  spaceBetween: 10,
  effect: "fade",
  navigation: {
      nextEl: ".product2-9 .swiper-button-next",
      prevEl: ".product2-9 .swiper-button-prev",
  },
  thumbs: {
      swiper: swiper11,
      slideThumbActiveClass: "swiper-slide-active"
  },
});
//
const swiper12 = new Swiper(".product1-10", {
  loop: true,
  spaceBetween: 10,
  slidesPerView: 5,
//   freeMode: true,
  watchSlidesProgress: true,
  breakpoints: {
      320: {
          slidesPerView: 3,
      },
      1560: {
          slidesPerView: 5,
      }
  },
});
new Swiper(".product2-10", {
  loop: true,
  spaceBetween: 10,
  effect: "fade",
  navigation: {
      nextEl: ".product2-10 .swiper-button-next",
      prevEl: ".product2-10 .swiper-button-prev",
  },
  thumbs: {
      swiper: swiper12,
      slideThumbActiveClass: "swiper-slide-active"
  },
});

// // community

new Swiper(".c1", {
    pagination: {
      el: ".swiper-pagination",
      dynamicBullets: true
    },
    loop: true,
    // autoplay: {
    //     delay: 2000,
    // }
  });