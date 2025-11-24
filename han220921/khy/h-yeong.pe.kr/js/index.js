$(function(){
    $(".main-follow").on("click", function(){
        secOffset = $("#main").offset().top;
        $("html, body").animate({
            scrollTop: secOffset,
        },1000)
    })
})