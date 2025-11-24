$(function(){
    $(".gnb").on("mouseenter", function(){
        $("#header").addClass("on");
        $(".all-menu-open span").css({
            backgroundColor : "#64594e"
        })
    })
    $(".gnb").on("mouseleave", function(){
        $("#header").removeClass("on");
        $(".all-menu-open span").css({
            backgroundColor : "#fff"
        })
    })

    $(".all-menu-open").on("click", function(){
        $(".all-menu-box").stop().slideDown();
    })
    $(".all-menu-close").on("click", function(){
        $(".all-menu-box").css({
            display : "none"
        });
    })

    $('.all-menu-wrap .depth1 > a').on('click', function(){
        $(this).parent().toggleClass("on").siblings().removeClass("on");
    })

    $(window).on("resize", function(){
        $(".all-menu-wrap .depth1").stop().removeClass("on");
        $('.all-menu-box').css({
            display : "none"
        })
    })

    $(window).on("resize", function(){
        winWidth = $(window).width();
        if(winWidth > 1280){
            $(".all-menu-wrap .depth1").stop().removeClass("on");
        }
    })

    AOS.init();
})