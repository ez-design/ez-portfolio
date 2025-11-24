$(document).ready(function(){

    // console = {};
    // console.log = function(){};
    // console.warn = function(){};
    // console.error = function(){};

    let win_w
   let pc_mobile
   let scrolling

   function resize_chk(){
        win_w = $(window).width()
        if(win_w > 1024){
            pc_mobile = 'pc'
        }else{
            pc_mobile = 'mobile'
        }
        console.log(pc_mobile)
   }

   //브라우저 로딩되었을 때 단 한 번 실행
   resize_chk()

   $(window).resize(function(){ //브라우저가 리사이즈 할 때마다 1번 실행
       resize_chk() 
   })

   function scroll_chk(){
        scrolling = $(window).scrollTop()
        if(scrolling > 0){ //스크롤이 조금이라도 되었다면
            $('header').addClass('fixed')
        }else{
            $('header').removeClass('fixed')
        }
        console.log(scrolling)
    }
    scroll_chk() // 브라우저가 로딩되었을 때 한 번 실행
    $(window).scroll(function(){ // 스크롤 할 때 마다 한 번 실행
        scroll_chk() 
    }) 

    $('header .gnb .gnb_wrap ul.depth1 > li').on('mouseenter focusin', function(){
        if(pc_mobile == 'pc'){
            $('header').addClass('menu_over')
            $('header .gnb .gnb_wrap ul.depth1 > li').removeClass('on')
            $(this).addClass('on')
        }
   })
   $('header').on('mouseleave', function(){
    if(pc_mobile == 'pc'){
        $('header').removeClass('menu_over')
        $('header .gnb .gnb_wrap ul.depth1 > li').removeClass('on')
    }
    })
    $('header .gnb .gnb_wrap ul.depth1  > li:last-child > ul.depth2  > li:last-child > a').on('focusout', function(){
        if(pc_mobile == 'pc'){
            $('header').removeClass('menu_over')
            $('header .gnb .gnb_wrap ul.depth1 > li').removeClass('on')
        }
    })

    $('header .gnb .gnb_wrap ul.depth1 > li > a').on("click", function(e){
        if(pc_mobile == 'mobile'){
            e.preventDefault();		/* a 태그의 href를 작동 시키지 않음 */
            $(this).parent().toggleClass('open')
        }
    });

    
    

    $('footer .family_site_1 .family_open').on('click', function(){
        $('footer .family_site_1').addClass('open')
        $('footer .family_site_1 ul').slideDown()
    })
    $('footer .family_site_1 .family_close').on('click', function(){
        $('footer .family_site_1').removeClass('open')
        $('footer .family_site_1 ul').slideUp()
    })
    
    $('footer .family_site_2 .family_open').on('click', function(){
        $('footer .family_site_2').addClass('open')
        $('footer .family_site_2 ul').slideDown()
    })
    $('footer .family_site_2 .family_close').on('click', function(){
        $('footer .family_site_2').removeClass('open')
        $('footer .family_site_2 ul').slideUp()
    })

    $('footer .family_site_3 .family_open').on('click', function(){
        $('footer .family_site_3').addClass('open')
        $('footer .family_site_3 ul').slideDown()
    })
    $('footer .family_site_3 .family_close').on('click', function(){
        $('footer .family_site_3').removeClass('open')
        $('footer .family_site_3 ul').slideUp()
    })

    $('footer .family_site_4 .family_open').on('click', function(){
        $('footer .family_site_4').addClass('open')
        $('footer .family_site_4 ul').slideDown()
    })
    $('footer .family_site_4 .family_close').on('click', function(){
        $('footer .family_site_4').removeClass('open')
        $('footer .family_site_4 ul').slideUp()
    })

    $('footer .family_site_5 .family_open').on('click', function(){
        $('footer .family_site_5').addClass('open')
        $('footer .family_site_5 ul').slideDown()
    })
    $('footer .family_site_5 .family_close').on('click', function(){
        $('footer .family_site_5').removeClass('open')
        $('footer .family_site_5 ul').slideUp()
    })

    $('footer .family_site_6 .family_open').on('click', function(){
        $('footer .family_site_6').addClass('open')
        $('footer .family_site_6 ul').slideDown()
    })
    $('footer .family_site_6 .family_close').on('click', function(){
        $('footer .family_site_6').removeClass('open')
        $('footer .family_site_6 ul').slideUp()
    })

    $('footer .family_site_7 .family_open').on('click', function(){
        $('footer .family_site_7').addClass('open')
        $('footer .family_site_7 ul').slideDown()
    })
    $('footer .family_site_7 .family_close').on('click', function(){
        $('footer .family_site_7').removeClass('open')
        $('footer .family_site_7 ul').slideUp()
    })


})