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

      pagination: {  /* 몇개의 팝업이 있는지 보여주는 동그라미 */
         el: '.swiper-pagination', /* 해당 요소의 class명 */
         clickable: true,  /* 클릭하면 해당 팝업으로 이동할 것인지 값 */
      },
   });

   const biz_swiper = new Swiper('.biz .swiper', { /* 팝업을 감싼는 요소의 class명 */
      slidesPerView: 2, /* 한번에 보일 팝업의 수 - 모바일 제일 작은 사이즈일때 */
      spaceBetween: 0, /* 팝업과 팝업 사이 여백 */
      breakpoints: {
         768: {    /* 768px 이상일때 적용 */
            slidesPerView: 3,
            spaceBetween: 28,
         },
         1024: {    /* 768px 이상일때 적용 */
            slidesPerView: 4,
            spaceBetween: 25,
         },
         1320: {    /* 768px 이상일때 적용 */
            slidesPerView: 4,
            spaceBetween: 28,
         },
      },
      navigation: {
         nextEl: '.biz .next',
         prevEl: '.biz .prev',
      },
   });

   
   const room_swiper = new Swiper('.room .swiper', { /* 팝업을 감싼는 요소의 class명 */
      centeredSlides: true,
      slidesPerView: 'auto',
      spaceBetween: 16, /* 팝업과 팝업 사이 여백 */
      breakpoints: {
         360: {    /* 360px 이상일때 적용 */
            spaceBetween: 108,
         },
         768: {    /* 768px 이상일때 적용 */
            spaceBetween: 108,
         },
         1024: {    /* 1024px 이상일때 적용 */
            spaceBetween: 108,
         },
         1320: {    /* 1320px 이상일때 적용 */
            spaceBetween: 108,
         },
      },
      loop: true,  
      autoplay: {
         delay: 3000,
         disableOnInteraction: true,
	   },
   });

   $(window).load(function(){
      room_swiper.slideReset()
   })

})