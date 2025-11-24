$(function(){
    $(".gnb").on("mouseenter", function(){
        $(".logo").addClass("on");
    })
    $(".gnb").on("mouseleave", function(){
        $(".logo").removeClass("on");
    })

    $('.tnb-sch > a').on('click', function(){
        $('.tnb-sch-wrap').css({
            top : "0"
        })
    })

    $('.tnb-sch-close').on('click',function(){
        $('.tnb-sch-wrap').css({
            top : '-300px'
        })
    })
    $('.tnb-sitemap > a').on('click', function(e){
        e.preventDefault();
        $('.tnb-sitemap-wrap').css({
            left : "0",
        })
    })

    $('.tnb-sitemap-close').on('click', function(e){
        e.preventDefault();
        $('.tnb-sitemap-wrap').css({
            left : "-100%",
        })
    })

    let scroll = "";
    $(window).on("scroll",function(){
        scroll = $(window).scrollTop();
        if(scroll > 800){
            $("#header").addClass("active");
        }else {
            $("#header").removeClass("active");
        }
    })
})

