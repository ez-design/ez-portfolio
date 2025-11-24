$(document).ready(function(){
	$('header .gnb .inner ul li').on('mouseenter', function(){
        $('header .gnb .inner ul li').removeClass('on')
        $(this).addClass('on')
        $('header .gnb .inner ul li[data-on2]').addClass('on')
    })
    $('header .gnb .inner').on('mouseleave', function(){
        $('header .gnb .inner ul li').removeClass('on')
        $('header .gnb .inner ul li[data-on]').addClass('on')
        $('header .gnb .inner ul li[data-on2]').addClass('on')
    })

    /* top버튼 클릭하면 위로 올라가라는 의미*/
    $('.top').on('click',function(){
        $('html, body').animate({
            scrollTop : 0
        }, 500)
    })
    AOS.init({
        offset: 200, // 해당 콘텐츠가 하단에서 몇 px 위로 올라와에 나타나는 효과가 나타날지 셋팅하는 값
        duration: 500, // 애니메이션 효과가 작동되는 시간
        easing: 'ease', // 가속도
    });
})