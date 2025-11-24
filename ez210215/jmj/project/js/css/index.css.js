new Swiper('.swiper-container.t1', {
    navigation: {
        nextEl: '.t1 .swiper-button-next',
        prevEl: '.t1 .swiper-button-prev',
    },
    observer: true,
    observeParents: true,
    //탭안의 스와이퍼 갱신
});

new Swiper(".u1", {
    spaceBetween: 30,
    effect: "fade",
    navigation: {
        nextEl: ".swiper-button-next.p2",
        prevEl: ".swiper-button-prev.p2",
    },
    pagination: {
        el: ".swiper-pagination.p2",
        clickable: true,
    },
    observer: true,
    observeParents: true,
});


$(function () {

    $('.bt.t1').click(function () {
        location.href = "/html/sketch.html";
    })
    $('.bt.t2').click(function () {
        location.href = "/html/headphone_sub.html";
    })
    $('.bt.t3').click(function () {
        location.href = "/html/speaker_sub.html";
    })
    $('.bt.t4').click(function () {
        location.href = "/html/designer.html";
    })


    $('.bt03').click(function () {
        location.href = "/html/jmj_Project.pdf";
    })


    // 탭메뉴 

    $(".tab > div").click(function () {
        $(this).addClass('on').siblings().removeClass('on');
        $("#" + $(this).data('id')).addClass('on').siblings().removeClass('on');
    });



    // window.addEventListener('scroll', function() {
    //     console.log("Scrollin'");
    //   });

})



