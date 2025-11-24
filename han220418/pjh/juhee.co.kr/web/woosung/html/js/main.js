$(function(){


    $('.gnb .depth1 > a').on('mouseenter' , function(){
        $('.header-wrap').addClass('on')
        $('.gnb-sub').stop().slideDown()
    })
    $('.header').on('mouseleave' , function(){
        $('.header-wrap').removeClass('on')
        $('.gnb-sub').stop().slideUp()
    })


    $('.tnb-menu-btn').on('click' , function(){
        $('.tnb-menu-gnb').css({
            'top' : '0'
        })
    })
    $('.tnb-close-btn').on('click' , function(){
        $('.tnb-menu-gnb').css({
            'top' : '-100%'
        })
    })



    let $section = $('section')
    let scroll = '';
    let rdTop =  '';
    let farmTop =  '';
    let recruitTop =  '';
    let winHeight = $(window).height()

    $(window).on('scroll' , function(){
        scroll = $('html,body').scrollTop()
        console.log(scroll)
        rdTop = $section[2].offsetTop
        // console.log(rdTop)
        if(scroll > rdTop){
            $('.rd-more').css({
                'width': '57%'
            })
        }else {
            $('.rd-more').css({
                'width': '100%'
            })
        }

        farmTop = $section[5].offsetTop
        // console.log(farmTop)
        if($(window).scrollTop() > ( farmTop - winHeight)){
            $('.contents-bg').css({
                'transform' : 'scale(1)'
            })
        }else {
            $('.contents-bg').css({
                'transform' : 'scale(1.2)'
            })
        }

        recruitTop = $section[6].offsetTop
        // console.log(recruitTop)
        if($(window).scrollTop() > ( recruitTop - winHeight)){
            $('.recruit-bg').css({
                'transform' : 'scale(1)'
            })
        }else {
            $('.recruit-bg').css({
                'transform' : 'scale(1.2)'
            })
        }

        
    })


    let $circle = $('.rd-more-box');	
    $('.rd-more').on('mousemove', function(e){		
        $circle.css("display","flex");
        TweenLite.to($circle, 1.5, {
            css: {
                left: e.offsetX ,
                top:  e.offsetY
            },
            ease:  Power3.easeOut
        });
    });



    let fSite = 0;
    $('.f-site-btn').on('click' , function(){
        if(fSite == 0){
            $(this).next().height(130)
            fSite = 1;
        }else{
            $(this).next().height(0)
            fSite = 0;
        }
    }) 
    
   
/*     const circle = document.querySelector('.rd-more-box');
    const rdMore = document.querySelector('.rd-more');

    rdMore.addEventListener('mousemove', (e) => {
        const mouseX = e.offsetX;
        const mouseY = e.offsetY;
        circle.style.left = mouseX + 'px';
        circle.style.top = mouseY + 'px';
    }); */

    let currentSc = 0;
    let winSc = '';
    $(window).on('scroll' , function(){
        winSc = $('html , body').scrollTop()
        if(winSc == 0){
            $('.header').removeClass('header-on')
        }else if(winSc < 50){
            $('.header').addClass('header-on')
        }else {
            $('.header').addClass('header-on')
            if( currentSc < winSc ){
                $('.header').addClass('header-up')
                currentSc = $('html , body').scrollTop()
            }else {
                $('.header').removeClass('header-up')
                currentSc = $('html , body').scrollTop()
            }
        }
    })
      
    

})