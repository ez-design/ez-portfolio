$(function(){
    function gnbUp(){
        $('.gnb .depth2').stop().slideUp(200);
        $('.gnb-bg').stop().slideUp(200);
        $('.logo img').attr({src: "/img/logo-w.svg"});
    } 
    
    function gnbDown(){
        $('.gnb .depth2').stop().slideDown(200);
        $('.gnb-bg').stop().slideDown(200);
        $('.logo img').attr({src: "/img/logo-b.svg"});
    } 
    
    $('.gnb').on('mouseenter', gnbDown);
    $('.gnb').on('mouseleave', gnbUp);

});


$(function () {

    let winWidth = "";

    $(window).on("load", function () {
        $(".all-menu").stop().hide();
        winWidth = $(window).width();
    });

    $(window).on("resize", function () {
        winWidth = $(window).width();
        if (1080 < winWidth) {
        allClose();
        $(".gnb-m .depth1 > a").removeClass('on');
        }
    });

    $(".all-menu-open").on("click", function () {
       allOpen();
    });

    $(".all-menu-close").on("click", function () {
       allClose();
    });

    $(".gnb-m .depth1 > a").on("click", function (e) {
        e.preventDefault();
        $(".all-menu .depth2").stop().slideUp();
        $(this).next().stop().slideToggle();
        $(this).parent().siblings().find('a').removeClass('on');
        $(this).toggleClass('on');
    })

    function allOpen() {
        $('.all-menu').stop().show(0);
        $(".all-menu-box").css({
            "right": 0,
        });
    }
    function allClose() {
        $(".all-menu").stop().hide();
        $(".all-menu-box").css({
            "right": "-100%",
        });
        $(".all-menu .depth2").stop().slideUp();
    }
});