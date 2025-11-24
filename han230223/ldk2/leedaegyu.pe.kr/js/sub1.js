$(".lnb-wrap li:nth-child(3)").addClass("on");
$(".main").addClass("dark-bg");

var swiper = new Swiper(".overview-swiper", {
  slidesPerView: 1,
  loop: true,
  effect : "fade",
  autoplay: {delay: 3500},
  speed: 600,
  navigation: {
    prevEl: ".overview-prev",
    nextEl: ".overview-next",
  },
});
var swiper = new Swiper(".store-swiper", {
  slidesPerView: 3,
  spaceBetween: 30,
  navigation: {
    prevEl: ".store-prev",
    nextEl: ".store-next",
  },
});