$(function () {

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

    //logo
    $('.logo').click(function () {
        location.href = "./ez210215/jmj/project/html/b&o.html";
    });

    // nav 
    // $('.fas.fa-bars').click(function () {
    //     $('.nav').toggle();
    // });

    // nav 
    $('.fas.fa-bars').click(function(){
        $(this).hide();
        $('.nav').addClass('on');
    })
      $('.fas.fa-slash').click(function(){
        $('.nav').removeClass('on');
        $('.fas.fa-bars').show();
    })
})