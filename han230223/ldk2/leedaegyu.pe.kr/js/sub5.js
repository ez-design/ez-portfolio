$(".lnb-wrap li:nth-child(4)").addClass("on");

var swiper = new Swiper(".space-swiper", {
  slidesPerView: 1,
  loop: true,
  effect : "fade",
  autoplay: {delay: 3500},
  navigation: {
    prevEl: ".space-prev",
    nextEl: ".space-next",
  },
});


