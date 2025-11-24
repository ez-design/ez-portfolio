var swiper = new Swiper(".basic", {
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      pagination: {
        el: ".swiper-pagination",
      },
      loop: true,
      // slidesPerView: 2,
      // spaceBetween: 5,
      // slidesPerView: 1,
      autoplay: {
        delay: 2000,
        disableOnInteraction: false,
      },
});