$(function(){
    $('.gnb .depth1').on('mouseenter' , function(){
        $('.gnb-s').hide()
        $(this).find('dl').show()
        $('#header').addClass('on')
        $('.depth2 , .gnb-bg').show()
    })
    $('#header').on('mouseleave' , function(){
        $('#header').removeClass('on')
        $('.depth2 , .depth1 > .gnb-s, .gnb-bg').hide()
    })


})