$(document).ready(function(){
    const swiper = new Swiper('.swiper', { /* 팝업을 감싼는 요소의 class명 */

        // autoplay: { 
        //     delay: 5000,
        //     disableOnInteraction: true,
        // },

        loop: true,  /* 마지막 팝업에서 첫번째 팝업으로 자연스럽게 넘기기 */

        pagination: {  /* 몇개의 팝업이 있는지 보여주는 동그라미 */
            el: '.swiper-pagination', /* 해당 요소의 class명 */
            clickable: true,  /* 클릭하면 해당 팝업으로 이동할 것인지 값 */
            type: 'fraction',  /* type fraction을 주면 paging이 숫자로 표시됨 */
            renderBullet: function (index, className) {   /* paging에 특정 코드 넣기 */
                return '<span class="' + className + '">' + (index + 1) + "</span>";
            },
        },
        centeredSlides: true, /* 팝업을 화면에 가운데 정렬(가운데 1번이 옴) */
        slidesPerView: 3,
	    spaceBetween: 0,
        navigation: {  /* 이전, 다음 버튼 */
            nextEl: '.product .product_list .next',  /* 다음 버튼의 클래스명 */
            prevEl: '.product .product_list .prev',  
        },

    });

    let scrolling 
    function scroll_chk(){
        scrolling = $(window).scrollTop()
        if(scrolling > 0){
            $('header').addClass('fiexd')
        }else{
            $('header').removeClass('fiexd')
        }
    }
    scroll_chk()
    $(window).scroll(function(){
        scroll_chk()
    })
}) ////document.ready
