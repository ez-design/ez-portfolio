new Swiper('.swiper-container.one', {
    navigation: {
        nextEl: '.one .swiper-button-next',
        prevEl: '.one .swiper-button-prev',
    },
    observer: true,
    observeParents: true,
    //탭안의 스와이퍼 갱신
});

$(function () {
    $('.col').hide();
    $('.c1').hover(function () {
        $('.col01').slideToggle();
    })
    $('.c2').hover(function () {
        $('.col02').slideToggle();
    });

    //nav

    $('div.title > span:eq(0)').click(function () {
        location.href = "./ez210215/jmj/project/html/speaker_sub.html";
    })

    $('div.title > span:eq(1)').click(function () {
        location.href = "./ez210215/jmj/project/html/headphone_sub.html";
    })

    $('div.title > span:eq(2)').click(function () {
        location.href = "./ez210215/jmj/project/html/designer.html";
    })

    $('div.title > span:eq(3)').click(function () {
        location.href = "./ez210215/jmj/project/html/sketch.html";
    })


    //top image-swiper

    $(".colorbox > div").click(function () {
        $("#" + $(this).data('id')).addClass("on").siblings().removeClass('on');
    });

    //logo
    $('.logo').click(function () {
        location.href = "./ez210215/jmj/project/html/b&o.html";
    });

    // nav 
    // $('.fas.fa-bars').click(function () {
    //     $('.nav').toggle();
    // });

    $('.fas.fa-bars').click(function(){
        $(this).hide();
        $('.nav').addClass('on');
    })
      $('.fas.fa-slash').click(function(){
        $('.nav').removeClass('on');
        $('.fas.fa-bars').show();
    })

});


