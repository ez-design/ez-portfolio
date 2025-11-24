$(function(){
    /* $('.depth1').on('mouseenter' , function(){
        $('.depth1 ul').hide()
        $(this).next().show()
        $('.depth1').removeCalss('on')
        $(this).addClass('on')
    }) */

    /* $('.depth1').on('mouseenter' , function(){
        $(this).find('ul').show()
    })
    $('.depth1').on('mouseleave' , function(){
        $(this).find('ul').hide()
    }) */

    /* $('.depth1').on('mouseenter' , function(){
        $('.depth1').addClass('on')
    })
    $('.depth1').on('mouseleave' , function(){
        $('.depth1').removeClass('on')
    }) */

    $('.depth1').on('mouseenter' , function(){
        $('.depth1 ul').hide()
        $(this).find('ul').show()
    })
    $('.depth1').on('mouseleave' , function(){
        $('.depth1 ul').hide()
        $(this).find('ul').hide()
    })
})