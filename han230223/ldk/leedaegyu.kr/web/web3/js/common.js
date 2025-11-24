/* HEADER-S ========================================= */
$(window).scroll(function(){
  var scrollTop = $(this).scrollTop();
  if (scrollTop > 100) {
    $('.header').css({'top':'-95px'})
  } else {$('.header').css({'top':'0'})}
});
$('.depth1 > a').mouseover(function(){
  $('.header').css('background-color','#fff')
  $('.h-logo a img').attr('src','/web/web3/img/logo_b.svg')
  $('.depth1 > a').css('color',"#222")
  $('.lang-wrap').css('color',"#264047")
  $(this).css('color','#158d51')
  $('.lang span,.menu-ico').css('background-color','#264047')
  $('.search path').css('fill','#264047')
});
$('.depth1').mouseenter(function(){
  $(this).children('.depth2').stop().slideDown()
})
$('.depth1').mouseleave(function(){
  $(this).children('.depth2').stop().slideUp()
})
$('.gnb').mouseleave(function(){
  $('.header').css('background-color','transparent')
  $('.h-logo a img').attr('src','/web/web3/img/logo_w.svg')
  $('.depth1 > a,.lang-wrap').css('color',"#fff")
  $('.lang span,.menu-ico').css('background-color','#fff')
  $('.search path').css('fill','#fff')
});
/* HEADER-E ========================================= */


/* MODAL-S ========================================== */
$('.search').click(function(){
  $('.modal-search').fadeIn(300)
  $('.modal-search').attr('aria-hidden','false')
  $('.search-input').focus()
});
$('.search-bg').click(function(){
  $('.modal-search').fadeOut(300)
  $('.modal-search').attr('aria-hidden','true')
});
$('.all-menu').click(function(){
  let allMenu = $('.modal-all-menu')
  $(this).toggleClass('close').toggleClass('open')
  if($(allMenu).hasClass('active')){
    $(allMenu).fadeOut(500)
    $(allMenu).removeClass('active')
    $(allMenu).attr('aria-hidden','false')
    $('body').css('overflow','auto')
  } else {
    $(allMenu).fadeIn(300)
    $(allMenu).addClass('active')
    $(allMenu).attr('aria-hidden','false')
    $('body').css('overflow','hidden')
  }
});
$(window).resize(function(){
  var windowWidth = $(window).width()
  if (windowWidth > 1023){
    $('.all-depth2').show()
  } else {
    $('.all-depth2').hide()
  }
  $('.all-depth1 button').removeClass('on')
});
$('.all-depth1 button').click(function(){
  var windowWidth = $(window).width()
  if (windowWidth < 1024){
  $('.all-depth2').slideUp();
  if ($(this).siblings('.all-depth2').is(':hidden')){
     $(this).siblings('.all-depth2').slideDown()
     $('.all-depth1 button').removeClass('on')
     $(this).addClass('on')
  } else {
     $(this).siblings('.all-depth2').slideUp()
     $('.all-depth1 button').removeClass('on')
  }}
});
/* MODAL-E ========================================== */


/* SIDE-MENU-S ====================================== */
$(window).scroll(function(){
  var scrollTop = $(this).scrollTop()
  if (scrollTop > 400) {
    $('.side-top').css({'visibility':'visible','opacity':'1'})
  } else {$('.side-top').css({'visibility':'hidden','opacity':'0'})}
});
$('.side-top').click(function(){
  $('html, body').animate({scrollTop: 0}, 300)
});
/* SIDE-MENU-E ====================================== */