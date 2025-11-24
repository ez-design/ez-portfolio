$('.history-wrap>li').click(function(){
  $('.history-wrap>li.active').removeClass('active'),
  $(this).addClass('active')
});
