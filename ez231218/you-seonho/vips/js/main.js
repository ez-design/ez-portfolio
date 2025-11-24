/* 파일명 : main.js
   작성자 : 유선호
   작성일 : 2024.03.20
   속  성 : 메인페이지에서 사용된 jqeury (header 빼고) */

$(document).ready(function(){
   const visual_swiper = new Swiper('.visual .swiper', { /* 팝업을 감싼는 요소의 class명 */

   autoplay: {  /* 팝업 자동 실행 */
      delay: 3000,
      disableOnInteraction: true,
   },

   loop: true,  /* 마지막 팝업에서 첫번째 팝업으로 자연스럽게 넘기기 */
   });
   
   const salad = new Swiper('.salad .swiper', { /* 팝업을 감싼는 요소의 class명 */
      
   autoplay: {  /* 팝업 자동 실행 */
      delay: 3000,
      disableOnInteraction: true,
      },

      loop: true,

      slidesPerView: 2, /* 한번에 보일 팝업의 수 - 모바일 제일 작은 사이즈일때 */
      spaceBetween: 0, /* 팝업과 팝업 사이 여백 */
      breakpoints: {
         320: {    /* 768px 이상일때 적용 */
            slidesPerView: 2,
            spaceBetween: 28,
         },
         768: {    /* 768px 이상일때 적용 */
            slidesPerView: 3,
            spaceBetween: 33,
         },
         1024: {    /* 768px 이상일때 적용 */
            slidesPerView: 3,
            spaceBetween: 33,
         },
         1320: {    /* 768px 이상일때 적용 */
            slidesPerView: 4,
            spaceBetween: 28,
         },
      },
   });


   let scrolling 
   let pickup_top
   let windowH

   function pickup_chk(){
      scrolling = $(window).scrollTop();
      windowH = $(window).height();
      pickup_top = $('.guide .inner .pickup .pickup_text').offset().top
      if(scrolling >= (pickup_top - windowH*0.3)){
         $('.guide').addClass('active')
      }else{
         $('.guide').removeClass('active')
      }
   }
   pickup_chk()
   $(window).scroll(function(){
      pickup_chk()
   })
  
})
