$('.news-box').slick({
    dots: true,
    infinite: false,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
        {
            breakpoint: 1280,
            settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            infinite: true,
            dots: true
            }
        },
        {
            breakpoint: 780,
            settings: {
            slidesToShow: 1,
            slidesToScroll: 1
            }
        },
    ]
});




var video = $("#main-video");
var timer = $(".visual-btn-circle .circle-bar");
var play = $(".play-btn-auto");
var pause = $(".play-btn-pause");

$(pause).on("click", function(){
    timer.removeClass("play").addClass("pause");
    video.get(0).pause();
    $(play).css({
        opacity : "1"
    })
    $(pause).css({
        display : "none"
    })
})

$(play).on("click", function(){
    timer.removeClass("pause").addClass("play");
    video.get(0).play();
    $(play).css({
        opacity : "0"
    })
    $(pause).css({
        display : "block"
    })
})
