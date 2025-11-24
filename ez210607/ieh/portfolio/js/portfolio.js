var swiper = new Swiper(".mySwiper", {
    direction: "vertical",
    slidesPerView: 1,
    mousewheel: {
        sensitivity: 1,
    },
    speed: 500,
    pagination: {
        el: ".pageVertical",
        clickable: true,
    },
    keyboard: {
        enabled: true,
        onlyInViewport: false,
    },
    eventsTarget: 'mySwiper',
    on: {
        slideChangeTransitionStart: function() {
            $(".sec02, .sec03, .sec04").removeClass("on");
            // $(".sec02 h1, .sec02 h2").hide();
        },
        slideChangeTransitionEnd: function() {
            $(".sec02, .sec03, .sec04").addClass("on");
            // $(".sec02 h1, .sec02 h2").slideDown(1000);
        },
    }
});
var swiper = new Swiper(".pA", {
    loop: true,
    loopFillGroupWithBlank: true,
    autoplay: {
        delay: 2000,
        disableOnInteraction: false,
    },
    pagination: {
      el: ".pg1",
    },
  });
  var swiper = new Swiper(".pB", {
    direction: "vertical",
    loop: true,
    loopFillGroupWithBlank: true,
    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
    },
    pagination: {
      el: ".pg2",
      clickable: true,
    },
  });
function autoType(elementClass, typingSpeed) {
    var thhis = $(elementClass);
    thhis = thhis.find(".text-js");

    var text = thhis.text().trim().split('');
    var amntOfChars = text.length;
    var newString = "";
    // setTimeout(function(){
    for (var i = 0; i < amntOfChars; i++) {
        (function(i, char) {
            setTimeout(function() {
                newString += char;
                thhis.text(newString);
            }, i * typingSpeed);
        })(i + 1, text[i]);
    }
    // },1500);
}

$(document).ready(function() {
    autoType(".type-js", 150);
});

