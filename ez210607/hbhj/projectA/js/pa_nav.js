//모바일 메뉴 열기/닫기
$(document).ready(function() {
    //리사이징 할때마다 새로고침
    var lastWidth = $(window).width();
    $(window).resize(function() {
        if ($(window).width() != lastWidth) {
            location.reload();
            lastWidth = $(window).width();
            return false;
        }
    });
    $(".sub > ul > li").hover(function() {
        if ($(this).hasClass('active')) {
            $(this).find(' > ul').stop().slideUp(300);
            $(this).removeClass('active');
        } else {
            $(this).find(' > ul').stop().slideDown(300);
            $(this).addClass('active');
        }
    });
    //모바일 나브
    if ($(window).width() < 641) {
        $(".mMenuBt").click(function() {
            $(".gnb").addClass("on");
        });
        $(".mclose").click(function() {
            $(".gnb").removeClass("on");
        });
        $(".gnb > ul > li").click(function() {
            $(this).addClass("on").siblings().removeClass('on');
            $("#" + $(this).data('id')).addClass('on').siblings().removeClass('on');
        });
    }
});