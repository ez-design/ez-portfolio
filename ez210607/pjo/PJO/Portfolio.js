 //-----------------------------스크롤버튼
 $(".scroll span").each(function(){
    var thisOffset = $("."+$(this).data('id')).offset().top;

    $(this).click(function(){
        $("html, body").animate({
            scrollTop : thisOffset
        }, 1000);
        $(this).addClass('on');
    });
});


//----------------------------섹션이동 시 리모콘에 하이라이트
$(document).scroll(function(){
var scrolltop = $(window).scrollTop();
$("header, section, footer").each(function(){
    if(scrolltop >= $(this).offset().top){
        $("span[data-id="+$(this).attr('class')+"]").addClass('on').siblings().removeClass('on');
    }
});
});
