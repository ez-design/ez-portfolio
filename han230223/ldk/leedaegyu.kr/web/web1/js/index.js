var swiper = new Swiper(".visual", {
  slidesPerView: 1,
  spaceBetween: 0,
  loop: true,
  effect: "fade",
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  autoplay:{
    delay:5000}
});
var swiper = new Swiper(".photo-swiper", {
  slidesPerView: 3,
  spaceBetween: 20,
  loop: true,
  speed: 3500,
  autoplay:{
    delay:2500}
});
var swiper = new Swiper(".video-swiper", {
  slidesPerView: 3,
  spaceBetween: 20,
  loop: true,
  speed: 3000,
  autoplay:{
    delay:3000}
});
$('.event-slick').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: true,
  appendArrows: $('.event-pager'),
  prevArrow: '.event-pager-prev',
  nextArrow: '.event-pager-next',
  autoplay: true,
  autoplaySpeed: 3500,
  fade: true,
  asNavFor: '.event-nav'
  });
  $('.event-nav').slick({
  slide: 'a',
  slidesToShow: 2,
  slidesToScroll: 1,
  arrows: false,
  autoplay: true,
  autoplaySpeed: 3500,
  focusOnSelect: true,
  rtl: true,
  asNavFor: '.event-slick',
});
$(".event-slick").on('afterChange', function(event,slick,currentSlide)
{$(".current-num").text(currentSlide + 1);});
