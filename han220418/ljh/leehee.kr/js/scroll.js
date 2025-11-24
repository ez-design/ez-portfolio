$(function(){
    var indiNum;
    var scTop;
    
    function mainScroll(e){
        e.preventDefault();
        indiNum = $(this).index();
        scTop = $('#container>section').eq(indiNum).offset().top;
        $("html,body").stop().animate({
            "scrollTop":scTop
        },1000)
    }
    
    $('#gnb li').on('click' , mainScroll)
    $('.indicator li').on('click' , mainScroll)
    
    $('.indi-wrap .top').on('click',function(){
        $("html,body").stop().animate({
            "scrollTop":0
        },1000)
    })
    $('.indi-wrap .contact').on('click',function(){
        var footer = $('#footer').offset().top;
        $("html,body").stop().animate({
            "scrollTop":footer
        },1000)
    })

})


