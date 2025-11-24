$(document).ready(function(){
    var swiper = new Swiper(".mySwiper", {
        slidesPerView: 1,
        spaceBetween: 0,
        mousewheel: true,
        freeMode: false,
        
    });
    var swiper2 = new Swiper(".section_swiper", {
        slidesPerView: 'auto',
        spaceBetween: 0,
        mousewheel: true,
        freeMode: true,
    });
    $('.index .cnt li').not('.num04').on('mouseenter', function(){
        $('.index .cnt li').removeClass('on')
        $(this).addClass('on')
    })
    /*$('.index .cnt li').on('mouseleave', function(){
        $('.index .cnt li').removeClass('on')
    })*/
    
    $('.header .gnb_wrap ul li[data-link="main"]').on('click', function(){
        swiper.slideTo(0, 500)
    });
    $('.header .gnb_wrap ul li[data-link="intro"]').on('click', function(){
        swiper.slideTo(1, 500)
    });
    $('.header .gnb_wrap ul li[data-link="project"]').on('click', function(){
        swiper.slideTo(2, 500)
    });
    $('.header .gnb_wrap ul li[data-link="contact"]').on('click', function(){
        swiper.slideTo(5, 500)
    });
    $('.index ul li.kps').on('click', function(){
        swiper.slideTo(3, 500)
    });
    $('.index ul li.hospital').on('click', function(){
        swiper.slideTo(4, 500)
    });
    $('.index ul li.pusan_uni').on('click', function(){
        swiper.slideTo(5, 500)
    });

    var cursor = document.querySelector(".cursor");
    var img_slide = document.querySelectorAll(".swiper-slide");
    var photo_hover = document.querySelectorAll(".project .photo, .index .cnt li a, .project .view_btn a, .contact ul li a");
    function cursorEvent(e){
        cursor.style.top = e.pageY - scrollY + "px";
        cursor.style.left = e.pageX + "px";
    }
    window.addEventListener('mousemove', cursorEvent);
    img_slide.forEach(link =>{
        if ( link !== img_slide ){
            link.addEventListener("mouseleave", () => {
                cursor.classList.remove("on");
            });
            link.addEventListener("mouseover", () => {
                cursor.classList.add("on");
            });
        }  
    });
    photo_hover.forEach(link =>{
        if ( link !== photo_hover ){
            link.addEventListener("mouseleave", () => {
                cursor.classList.remove("active");
            });
            link.addEventListener("mouseover", () => {
                cursor.classList.add("active");
            });
        }  
    });
    
    /*$(".project .photo").on("mouseover", function() {
        $('.cursor').addClass('active')
    }); // Hover
    $(".project .photo").on("mouseout", function() {
         $('.cursor').removeClass('active')
    }); // Mouseout*/

    AOS.init({
        offset: 500, // 해당 콘텐츠가 하단에서 몇 px 위로 올라와에 나타나는 효과가 나타날지 셋팅하는 값
        duration: 850, // 애니메이션 효과가 작동되는 시간
        easing: 'linear', // 가속도
    });
})