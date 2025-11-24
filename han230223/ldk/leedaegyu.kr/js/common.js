/* 모바일 실제 vh */
function nowHeight(){
  var vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty('--vh', `${vh}px`);
}
$(document).ready(nowHeight)
$(window).resize(nowHeight);
/* 모바일 실제 vh */


/* 모달 */
let lastFocus;

$('.modal-open').click(function(){
  lastFocus = document.activeElement;
  $('.modal').fadeIn(400).attr('aria-hidden','false');
  $('.modal-box').hide();   
  if($(this).parent().hasClass('web3')) {
    $('#modal-web3').show().attr('tabindex','0').focus()
  } else if($(this).parent().hasClass('web2')) {
    $('#modal-web2').show().attr('tabindex','0').focus()
  } else if($(this).parent().hasClass('web1')) {
    $('#modal-web1').show().attr('tabindex','0').focus()
  } else if($(this).parent().hasClass('promo')) {
    $('#modal-promo').show().attr('tabindex','0').focus()
  } else {
    $('#modal-isome').show().attr('tabindex','0').focus()
  };
  $('body').css('overflow','hidden');
});

function modalClose() {
  $('.modal').fadeOut(400).attr('aria-hidden','true')
  $('.modal-box').scrollTop(0)
  $('body').css('overflow','auto')
  $('.modal-box').attr('tabindex','-1')
  if (lastFocus) {
    lastFocus.focus()
  }
};
$('.modal-bg, .modal-close').click(modalClose);
$(document).keydown(function(event){
  if (event.keyCode == 27) {
    modalClose()
  }
});
/* 모달 */


/* GNB */
$('.gnb-btn').click(function(){
  var winWidth = $(window).width();
  if (winWidth < 768) {
    if ($(this).parent().index() === 0) {
      var homeOffset = $('#main-con').offset().top;
      $('html, body').animate({scrollTop: homeOffset});
    } else if ($(this).parent().index() === 1) {
      var profileOffset = $('.profile').offset().top;
      $('html, body').animate({scrollTop: profileOffset - 200});
    } else if ($(this).parent().index() === 2) {
      var webOffset = $('.web').offset().top;
      $('html, body').animate({scrollTop: webOffset - 200});
    } else if ($(this).parent().index() === 3) {
      var graphicOffset = $('.graphic').offset().top;
      $('html, body').animate({scrollTop: graphicOffset - 200});
    } else {
      var contactOffset = $('.contact').offset().top;
      $('html, body').animate({scrollTop: contactOffset});
    }
  } else {
    if ($(this).parent().index() === 0) {
      var homeOffset = $('#main-con').offset().top;
      $('html, body').animate({scrollTop: homeOffset});
    } else if ($(this).parent().index() === 1) {
      var profileOffset = $('.profile').offset().top;
      $('html, body').animate({scrollTop: profileOffset});
      $('.profile .sec-tit').focus();
    } else if ($(this).parent().index() === 2) {
      var webOffset = $('.web').offset().top;
      $('html, body').animate({scrollTop: webOffset});
      $('.web .sec-tit').focus();
    } else if ($(this).parent().index() === 3) {
      var graphicOffset = $('.graphic').offset().top;
      $('html, body').animate({scrollTop: graphicOffset});
      $('.graphic .sec-tit').focus();
    } else {
      var contactOffset = $('.contact').offset().top;
      $('html, body').animate({scrollTop: contactOffset});
      $('.contact .sec-tit').focus();
    }
  }
});
/* GNB */


/* 커서 이펙트 */
$('.side-compass').click(function(){
  if (window.innerWidth > 1279) {
    $('#lineEffect').fadeToggle()
  } else {
    $('.modal-compass').fadeIn(400)
    $(this).css({
      'transform':'translateX(120%)',
      'opacity':'0'
    })
  }
});
$('.compass-bg').click(function(){
  $('.modal-compass').fadeOut(400)
  $('.side-compass').css({
    'transform':'translateX(0)',
    'opacity':'1'
  })
})

function lineEffect(){

  var canvas = document.getElementById('lineEffect');
  var ctx = canvas.getContext('2d');
  var points = [];
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  if (window.innerWidth > 1279){
    ctx.globalAlpha = 1;
  } else {
    ctx.globalAlpha = 0;
  }

  var MAX_POINTS = 15;

  document.addEventListener('mousemove', function(event) {
      points.unshift({
          x: event.clientX + 13,
          y: event.clientY + 5,
      });
      if (points.length > MAX_POINTS) {
          points.pop();
      }
  });

  function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.beginPath();
    ctx.strokeStyle = '#cd2d2d';
    ctx.lineWidth = 5;
    ctx.setLineDash([25, 25]);
    ctx.moveTo(points[0].x, points[0].y);

    if(points.length < 1) return;
    
    for (var i = 1; i < points.length; i++) {
      ctx.lineTo(points[i].x, points[i].y);
    }
    ctx.stroke();
    points.pop()
  }
  setInterval(draw, 30);
};

$(window).resize(function(){
  lineEffect();
  $('.modal-compass').fadeOut(400);
  $('.side-compass').css({
    'transform':'translateX(0)',
    'opacity':'1'
  })
});
$(document).ready(lineEffect);
/* 커서 이펙트 */


/* 스크롤 타륜 애니메이션 */
$(window).scroll(function(){
  var sc = $(window).scrollTop()
  $('.scroll-wheel').css('transform','rotate(' + (sc * 0.6) + 'deg)')
});
/* 스크롤 타륜 애니메이션 */



var webSwiper = new Swiper(".web-swiper", {
  slidesPerView: 1 ,
  effect: "fade",
  loop: true,
  navigation: {
    nextEl: ".web-next",
    prevEl: ".web-prev",
  },
  speed: 400,
});

var graphicSwiper = new Swiper(".graphic-swiper", {
  slidesPerView: 1 ,
  effect: "fade",
  loop: true,
  navigation: {
    nextEl: ".graphic-next",
    prevEl: ".graphic-prev",
  },
  speed: 400,
});


/* 스위퍼 슬라이드 높이 통일 */
function webHeight(){
  var wh = $('.web3 .web-desc').height()
  $('.web1 .web-desc, .web2 .web-desc').height(wh)
}
$(document).ready(webHeight)
$(window).resize(webHeight);
/* 스위퍼 슬라이드 높이 통일 */


/* 스위퍼 네비 색 */
$('.swiper-nav .swiper-next').mouseenter(function(){
  $(this).css('color','#332114')
})
$('.swiper-nav .swiper-next').mouseleave(function(){
  $(this).css('color','#664e3d')
});
/* 스위퍼 네비 색 */
