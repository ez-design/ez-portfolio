// ==== HEADER-S ==== //
$('.gnb,.tnb').mouseover(function(){
  $('.header').css('background-color','#fff'),
  $('.depth1 > a > span').css('color','#333'),$('.tnb').css('color','#555')
});
$('.header').mouseleave(function(){
  $('.header').css('background-color','rgba(0,0,0,0.4)'),
  $('.depth1 > a > span,.tnb').css('color','#fff')
});
$('.depth1').hover(function(){
  $('.depth2-bg').css('transform','scaleY(1)')},
  function(){$('.depth2-bg').css('transform','scaleY(0)')
});
// ==== HEADER-E ==== //


// ==== SIDE-S ==== //
$(window).scroll(function(){
  var scrollTop = $(this).scrollTop();
  if (scrollTop > 500) {
    $('.side-top').css({'visibility':'visible','opacity':'1'})
  } else {$('.side-top').css({'visibility':'hidden','opacity':'0'})}
});
$('.side-top').click(function(){
  $('html, body').animate({scrollTop: 0}, 300)
});
// ==== SIDE-E ==== //