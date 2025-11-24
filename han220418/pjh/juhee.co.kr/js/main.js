$(function(){
    /* 
    let winHeight = $(window).height()
    $(window).on('resize' , function(){
        winHeight = $(window).height()
        $section.height(winHeight)
    }) 
    */
    
    /* NAV */
    let $section = $('section')
    let $gnbLi = $('.gnb li')
    let scrollNum = '';
    let gnbNum = ['1','2','5','7','9',]
    for( let i= 0; i < $gnbLi.length; i++ ){
        $('.gnb li').eq(i).on('click' , function(){
            gnbAni(i)
        })
        $('.all-wrap li').eq(i).on('click' , function(){
            $('.all-btn').removeClass('on'),
            $('.all-wrap').removeClass('on')
            gnbAni(i)
        })
    }
    function gnbAni(k){
        scrollNum = $section.eq(gnbNum[k]).offset().top
        $('html , body').animate({
            scrollTop : scrollNum
        },800)
    }

    $('.all-btn').on('click' , function(){
        $('.all-btn').toggleClass('on'),
        $('.all-wrap').toggleClass('on')
    })

    /* MOUSEMOVE */
    let docStyle = document.documentElement.style;
    document.addEventListener('mousemove', function(e) {
        docStyle.setProperty('--mouse-x', e.clientX);
        docStyle.setProperty('--mouse-y', e.clientY);
    });

    /* WELCOME */
    let didScroll = false;
    let paralaxTitles = document.querySelectorAll('.slide-txt');
    const scrollInProgress = () => {
        didScroll = true
    }
    const raf = () => {
        if(didScroll) {
            paralaxTitles.forEach((element, index) => {
            element.style.transform = "translateX(-"+ window.scrollY*6 + "px)"
            // element.style.transform = "translateX(-"+ window.scrollY / 4 + "%)"
            })
            didScroll = false;
        }
        requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);
    window.addEventListener('scroll', scrollInProgress)
    



    /* BG - COLOR */
    let $bgBorder = $('.bg-border span')
    let bgBorderLength = $bgBorder.length
    console.log(bgBorderLength)
    let color1 = ['#ffff00' , '#dfdf03' , '#363538']
    let color2 = ['#87ceeb' , '#1cb0b9' , '#e8d3c2']
    let color3 = ['#fb699a' , '#21e1cd' , '#363538']
    let color4 = ['#0080c7' , '#3ac6cf' , '#0080c7']
    let color5 = ['#0080c7' , '#0f3987' , '#fb7373']
    let color6 = ['#3ac6cf' , '#2a9fa7' , '#fa4980']
    let color7 = ['#ffff00' , '#dfdf03' , '#363538']
    let color8 = ['#fc5d2c' , '#d14e26' , '#1e3e4b']
    let color9 = ['#fff' , '#b5b4b4' , '#363538']
    let color10 = ['#ffff00' , '#dfdf03' , '#363538']


    /* let currentSc = '';
    $(window).on('scroll' , function(){
        currentSc = $('html , body').scrollTop();
        for( let i = 0 ; i < 10 ; i++     ){
            colorNum = 'color' + ( i + 1 )
            console.log(colorNum)
            if($section.eq(i).offset().top < currentSc  && $section.eq(i+1).offset().top > currentSc ){
                $bgBorder.eq(0).css({'background-color' : colorNum[0]})
                $bgBorder.eq(1).css({'background-color' : colorNum[1]})
                $bgBorder.eq(2).css({'background-color' : colorNum[2]})
                $bgBorder.eq(3).css({'background-color' : colorNum[1]})
                $bgBorder.eq(4).css({'background-color' : colorNum[2]})
            }
        }
    }) */

    // let currentSc = '';
    // let winHeight = $(window).height()
    // $(window).on('scroll' , function(){
    //     currentSc = $('html , body').scrollTop();
    //     if($section.eq(0).offset().top < currentSc  && $section.eq(1).offset().top > currentSc /* $(window).scrollTop() > ( $section.eq(0).offset().top - winHeight) && $(window).scrollTop() < ( $section.eq(1).offset().top - winHeight) */){
    //         $bgBorder.eq(0).css({'background-color' : color1[0]})
    //         $bgBorder.eq(1).css({'background-color' : color1[1]})
    //         $bgBorder.eq(2).css({'background-color' : color1[2]})
    //         $bgBorder.eq(3).css({'background-color' : color1[1]})
    //         $bgBorder.eq(4).css({'background-color' : color1[2]})
    //     }
    // })

    let currentSc = '';
    let winHeight = $(window).height()
    $(window).on('scroll' , function(){
        currentSc = $('html , body').scrollTop();
        if($(window).scrollTop() > ( $section.eq(0).offset().top - winHeight)){
            $bgBorder.eq(0).css({'background-color' : color1[0]})
            $bgBorder.eq(1).css({'background-color' : color1[1]})
            $bgBorder.eq(2).css({'background-color' : color1[2]})
            $bgBorder.eq(3).css({'background-color' : color1[1]})
            $bgBorder.eq(4).css({'background-color' : color1[2]})
        }
        if($(window).scrollTop() > ( $section.eq(1).offset().top - winHeight)){
            $bgBorder.eq(0).css({'background-color' : color2[0]})
            $bgBorder.eq(1).css({'background-color' : color2[1]})
            $bgBorder.eq(2).css({'background-color' : color2[2]})
            $bgBorder.eq(3).css({'background-color' : color2[1]})
            $bgBorder.eq(4).css({'background-color' : color2[2]})
        }
        if($(window).scrollTop() > ( $section.eq(2).offset().top - winHeight)){
            $bgBorder.eq(0).css({'background-color' : color3[0]})
            $bgBorder.eq(1).css({'background-color' : color3[1]})
            $bgBorder.eq(2).css({'background-color' : color3[2]})
            $bgBorder.eq(3).css({'background-color' : color3[1]})
            $bgBorder.eq(4).css({'background-color' : color3[2]})
        }
        if($(window).scrollTop() > ( $section.eq(3).offset().top - winHeight)){
            $bgBorder.eq(0).css({'background-color' : color4[0]})
            $bgBorder.eq(1).css({'background-color' : color4[1]})
            $bgBorder.eq(2).css({'background-color' : color4[2]})
            $bgBorder.eq(3).css({'background-color' : color4[1]})
            $bgBorder.eq(4).css({'background-color' : color4[2]})
        }
        if($(window).scrollTop() > ( $section.eq(4).offset().top - winHeight)){
            $bgBorder.eq(0).css({'background-color' : color5[0]})
            $bgBorder.eq(1).css({'background-color' : color5[1]})
            $bgBorder.eq(2).css({'background-color' : color5[2]})
            $bgBorder.eq(3).css({'background-color' : color5[1]})
            $bgBorder.eq(4).css({'background-color' : color5[2]})
        }
        if($(window).scrollTop() > ( $section.eq(5).offset().top - winHeight)){
            $bgBorder.eq(0).css({'background-color' : color6[0]})
            $bgBorder.eq(1).css({'background-color' : color6[1]})
            $bgBorder.eq(2).css({'background-color' : color6[2]})
            $bgBorder.eq(3).css({'background-color' : color6[1]})
            $bgBorder.eq(4).css({'background-color' : color6[2]})
        }
        if($(window).scrollTop() > ( $section.eq(6).offset().top - winHeight)){
            $bgBorder.eq(0).css({'background-color' : color7[0]})
            $bgBorder.eq(1).css({'background-color' : color7[1]})
            $bgBorder.eq(2).css({'background-color' : color7[2]})
            $bgBorder.eq(3).css({'background-color' : color7[1]})
            $bgBorder.eq(4).css({'background-color' : color7[2]})
        }
        if($(window).scrollTop() > ( $section.eq(7).offset().top - winHeight)){
            $bgBorder.eq(0).css({'background-color' : color8[0]})
            $bgBorder.eq(1).css({'background-color' : color8[1]})
            $bgBorder.eq(2).css({'background-color' : color8[2]})
            $bgBorder.eq(3).css({'background-color' : color8[1]})
            $bgBorder.eq(4).css({'background-color' : color8[2]})
        }
        if($(window).scrollTop() > ( $section.eq(8).offset().top - winHeight)){
            $bgBorder.eq(0).css({'background-color' : color9[0]})
            $bgBorder.eq(1).css({'background-color' : color9[1]})
            $bgBorder.eq(2).css({'background-color' : color9[2]})
            $bgBorder.eq(3).css({'background-color' : color9[1]})
            $bgBorder.eq(4).css({'background-color' : color9[2]})
        }
        if($(window).scrollTop() > ( $section.eq(9).offset().top - winHeight)){
            $bgBorder.eq(0).css({'background-color' : color10[0]})
            $bgBorder.eq(1).css({'background-color' : color10[1]})
            $bgBorder.eq(2).css({'background-color' : color10[2]})
            $bgBorder.eq(3).css({'background-color' : color10[1]})
            $bgBorder.eq(4).css({'background-color' : color10[2]})
        }
    })


    /* BAR */
    let barSc = ''
    $(window).on('scroll' , function(){
        barSc = (  currentSc / ( $('html , body').height() - $(window).height() ) ) * 135
        $('.bar-line-mini').css({
            'top' : barSc
        })
        
    })



})