$(document).ready(function(){
    let main_obj_top
    let scrolling 
    let window_h
    let offset = 200
    let class_name = 'active'

    function scroll_chk(){
        main_obj_top = $('.main').offset().top
        scrolling = $(window).scrollTop()
        window_h = $(window).height()
        if((sec03_obj_top - scrolling - window_h) < -offset){
            $('.main').addClass(class_name)
        }else{
            $('.main').removeClass(class_name)
        }
    }
})//$(document).ready