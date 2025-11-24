var bullet = ['SEASONAL', 'COFFEE', 'BEVERAGE', 'FOOD'];
var swiper = new Swiper(".menu-swiper", {
  slidesPerView: 1,
  autoplay: {delay: 3500},
  loop: true,
  effect: "fade",
  allowTouchMove: false,
  pagination: {
    el: ".menu-pager",
    clickable: true,
    renderBullet: function (index, className) {
      return '<span class="' + className + '">' + (bullet[index]) + '</span>';
    }
  },
});
var swiper = new Swiper(".brand-swiper", {
  slidesPerView: 1,
  loop: true,
  effect: "fade",
  autoplay: {delay: 4500},
  speed: 600,
  allowTouchMove: false,
  navigation: {
    prevEl: ".brand-swiper-prev",
    nextEl: ".brand-swiper-next",
  },
});
var swiper = new Swiper(".event-swiper", {
  slidesPerView: "auto",
  loop: true,
  loopAdditionalSlides : 1,
  centeredSlides: true,
  autoplay: {delay: 3500},
  speed: 1200,
  navigation: {
    prevEl: ".event-swiper-prev",
    nextEl: ".event-swiper-next",
  },
});

$(document).mousemove(function(e){
  var mouseX = e.clientX;
  var mouseY = e.clientY;

  $('.cursor').css({
      left: mouseX + "px",
      top : mouseY + "px"
  })
});
var eItem = $('.menu-item, .event-swiper .swiper-slide.event-item a, .notice-item')
$(eItem).hover(function(){
  $('.cursor').css({
    'transform':'translate(-50%, -50%) scale(1)',
    'opacity':'1'
  });
  $(this).css('cursor','none')
});
$(eItem).mouseleave(function(){
  $('.cursor').css({
    'transform':'translate(-50%, -50%) scale(0.5)',
    'opacity':'0'
  })
  $(this).css('cursor','auto')
});