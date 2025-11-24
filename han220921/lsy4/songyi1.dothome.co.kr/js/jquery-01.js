$(function(){
    let scroll = '';
    $(window).on('scroll' , function(){
        scroll = $(window).scrollTop();
        if(scroll > 80){
            $('#header').addClass('on');
        }else{
            $('#header').removeClass('on');
        }
    });
});
$(function(){
    $('.qmenu-box-tebmenu').on('click' , function(){
        $('.qmenu-box-tab').hide();
        $(this).next().show()
        $('.qmenu-box-tebmenu').removeClass('on')
        $(this).addClass('on')
    })
    $('.gnb').on('mouseover' , function(){
      $('.all-menu > span').css({
        'color' : '#014a94',
      });
      $('.logo').addClass('on');
    });
    $('.gnb').on('mouseout' , function(){
      $('.all-menu > span').css({
        'color' : '#fff',
      });
      $('.logo').removeClass('on');
    });
    $('.tnb-sch-btn').on('click' , function(){
      $('.tnb-sch-form').show()
    })
    $('.sch-close').on('click' , function(){
      $('.tnb-sch-form').hide()
    })
});