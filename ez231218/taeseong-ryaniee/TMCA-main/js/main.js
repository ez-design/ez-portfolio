$(document).ready(function () {
  $(".open_btn_wrap .menu_btn").on("click", function () {
    $(".body_wrap").addClass("open");
$("html, body").css({overflow : "hidden", height : $(window).height()}).bind("scroll touchmove usewheel", function(e){e.preventDefault();e.stopPropagation();return false;},function(){passive:false});
  });
  $(".close_btn_wrap .close_btn").on("click", function () {
    $(".body_wrap").removeClass("open");
$("html, body").css({overflow : "visible", height : "auto"}).unbind('scroll touchmove mousewheel');
  });

});