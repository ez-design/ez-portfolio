$(document).ready(function(){
    let scrolling 
    function scroll_chk(){
        scrolling = $(window).scrollTop()
        if(scrolling > 0){//조금이라도 스크롤 함
            $('.header').addClass('fixed')
        }else{//상단에 있는 경우 -- 스크롤 안한 경우 또는 다시 올라간 경우
            $('.header').removeClass('fixed')
        }
    }
    scroll_chk() //문서 로드되었을 때 1번 실행
    $(window).scroll(function(){
        scroll_chk()
    })


    
    $('.header .gnb .depth01 > li').on('mouseenter', function(){
        $('.header').addClass('menu_over')
        $('.header .gnb .depth01 > li').removeClass('on')
        $(this).addClass('on')
    })
    $('.header .gnb .depth01 > li').on('mouseleave', function(){
        $('.header').removeClass('menu_over')
        $('.header .gnb .depth01 > li').removeClass('on')
    })
    $('.header .gnb .depth02 > li').on('mouseenter', function(){
        $('.header .gnb .depth02 > li').removeClass('on')
        $(this).addClass('on')
    })
    $('.header_top .tnb .service .open').on('click', function(){
        $('.header_top .tnb .service').addClass('on')
    })
    $('.header_top .tnb .service .close').on('click', function(){
        $('.header_top .tnb .service').removeClass('on')
    })
    $('.header_top .tnb .lang .open').on('click', function(){
        $('.header_top .tnb .lang').addClass('on')
    })
    $('.header_top .tnb .lang .close').on('click', function(){
        $('.header_top .tnb .lang').removeClass('on')
    })
})