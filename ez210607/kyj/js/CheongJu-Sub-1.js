$(document).ready(function(){
    $(".section-two .inner .art-center .park div:last-child dd span").click(function(){
        $(".section-two .inner .art-center .park .pop-up").css({
            "display": "block",
        });
    });

    $(".section-two .inner .art-center .park .pop-up div img").click(function(){
        $(".section-two .inner .art-center .park .pop-up").css({
            "display": "none",
        });
    });
});

// var art_center = document.querySelector(".section-two .inner .art-center").scrollIntoView({ behavior: "smooth",});