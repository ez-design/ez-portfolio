$(function(){
    // 사이트맵
    $('.tnb-site-btn').on('click' , function(){
        $('.tnb-site-wrap').slideDown()
    })
    $('.tnb-site-close').on('click' , function(){
        $('.tnb-site-wrap').slideUp()
    })
    

    $('.gnb > ul .depth1').on('mouseenter' , function(){
        $('.s-tit , .gnb > ul .depth1 .depth2').hide(),
        $(this).find('.s-tit , .depth2').show()
        $('#header').addClass('on')
    })
    $('#header').on('mouseleave' , function(){
        $(this).find('.s-tit , .gnb > ul .depth1 .depth2.depth2').hide(),
        $('#header').removeClass('on')
    })

    
})