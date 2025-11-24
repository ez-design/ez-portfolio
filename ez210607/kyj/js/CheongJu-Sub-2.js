$(document).ready(function(){

    // .section_two .inner .depth_three .left
    $(".section_two .inner .depth_three .left li").click(function(){
        $(this).addClass("on").siblings().removeClass("on");
        $("#"+$(this).data("id")).addClass("on").siblings().removeClass("on");
        $(".section_two .inner .search_bar").css("display", "none");
    });

    // .section_two .inner .calendar .month
    $(".section_two .inner .calendar .month li").click(function(){
        $(this).addClass("on").siblings().removeClass("on");
    });

    // .section_two .inner .depth_three .right li
    $(".section_two .inner .depth_three .right li").click(function(){
        $(this).addClass("on").siblings().removeClass("on");
        // $("#"+$(this).data("id")).addClass("on").siblings().removeClass("on");
    });
    $(".section_two .inner .depth_three .right li:nth-of-type(2)").click(function(){
        $(this).addClass("on").siblings().removeClass("on");
        $("#"+$(this).data("id")).addClass("on").siblings().removeClass("on");
        $(".section_two .inner .search_bar").css("display", "none");
    });
    $(".section_two .inner .depth_three .right li:last-of-type").click(function(){
        $(this).addClass("on").siblings().removeClass("on");
        $("#"+$(this).data("id")).addClass("on").siblings().removeClass("on");
        $(".section_two .inner .search_bar").css("display", "none");
    });

    // .section_two .inner .conBox.on.comfy
    $(".section_two .inner .depth_three .right li:last-child").click(function(){
        $(".section_two .inner .conBox.on").addClass("comfy").siblings().removeClass("comfy");
    });

    //.section_two .inner .search_bar 
    $(".section_two .inner .depth_three .right li:first-of-type").click(function(){
        $(this).addClass("on").siblings().removeClass("on");
        $(".section_two .inner .search_bar").css("display", "block");
        $(".section_two .inner .search_bar").css("display", "flex");
    });
    $(".section_two .inner .search_bar").mouseover(function(){
        $(this).css("display", "block");
        $(".section_two .inner .search_bar").css("display", "flex");
    });
    $(".section_two .inner .search_bar .title div").click(function(){
        $(".section_two .inner .search_bar").css("display", "none");
        $(".section_two .inner .depth_three .right li").removeClass("on");
    });

    //.section_two .inner .search_bar .four
    $(".datepicker").datepicker({
        dateFormat: "yy-mm-dd"
    });
    $.datepicker.setDefaults({
        monthNames: ['1월', '2월', '3월', '4월', '5월', '6월', '7월', '8월', '9월', '10월', '11월', '12월'],  
        dayNamesMin: ['일', '월', '화', '수', '목', '금', '토'],
        dayNames: ['일요일', '월요일', '화요일', '수요일', '목요일', '금요일', '토요일'],                
        showMonthAfterYear: true 
    });
});