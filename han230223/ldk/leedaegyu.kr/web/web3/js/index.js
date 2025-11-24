function nowHeight(){
  var vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty('--vh', `${vh}px`);
}
$(document).ready(nowHeight)
$(window).resize(nowHeight);

$(document).ready(function(){
  $('.visual-txt').eq(0).show()
});

var visualSwiper = new Swiper(".visual-swiper", {
  slidesPerView: 1,
  loop: true,
  pagination: {
    el: ".visual-pager",
    clickable: true,
  },
  autoplay:{
    delay: 7000,
    disableOnInteraction: false,
  },
    speed: 800,
});
var visualTxtSwiper = new Swiper(".visual-txt-swiper", {
  slidesPerView: 1,
  effect: 'fade',
  loop: true,
  autoHeight : true,
  autoplay:{
    delay: 7000,
    disableOnInteraction: false,
  },
  speed: 800,
});
visualSwiper.controller.control = visualTxtSwiper;
visualTxtSwiper.controller.control = visualSwiper;

var prSwiper = new Swiper(".pr-swiper", {
  slidesPerView: 1 ,
  centeredSlides: true,
  loop: true,
  navigation: {
    nextEl: ".pr-next",
    prevEl: ".pr-prev",
  },
  autoplay: {
    delay: 4000,
    disableOnInteraction: false,
  },
  speed: 1200,
  breakpoints: {
    1280: {
      slidesPerView: 'auto',
      spaceBetween: 30,
      centeredSlides: false,
    },
    768: {
      slidesPerView: 'auto',
      spaceBetween: 30,
    },
    576: {
      slidesPerView: 'auto',
      spaceBetween: 15,
    }
  },
});