// var swiper = new Swiper(".swiper-container", {
//   navigation: {
//       nextEl: ".swiper-button-next",
//       prevEl: ".swiper-button-prev",
//   },
// });


      var swiper = new Swiper(".swiper-container", {
        slidesPerView: 1,
        spaceBetween: 10,
        // pagination: {
        //   el: ".swiper-pagination",
        //   clickable: true,
        // },


        loop : true, 
	      pagination : { 
		    el : '.swiper-pagination',
		    clickable : true, 
    	},
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
      },
        breakpoints: {
          320: {
            slidesPerView: 1,
            spaceBetween: 0,
          },
          640: {
            slidesPerView: 3,
            spaceBetween: 0,
          },
          1920: {
            slidesPerView: 3,
            spaceBetween: 0
          },
        },
      });


      
    $(document).ready(function() {
      //리사이징 할때마다 새로고침
      var lastWidth = $(window).width();
      $(window).resize(function() {
          if ($(window).width() != lastWidth) {
              location.reload();
              lastWidth = $(window).width();
              return false;
          }
      });
      
      $(".MheadR").click(function() {
          $("ul.Mgnb").addClass("on");
      });
      $("li.bt").click(function() {
          $("ul.Mgnb").removeClass("on");
      });
  

      // 2차 메뉴 열기
      $(".Mgnb a.M").click(function() {
          $(this).addClass("on");
          $(".Mgnb a.M").not(this).removeClass("on");
          // on일때 폰트컬러 주황으로 변경

          $(this).next().slideToggle(300);
          //this 다음 요소를 슬라이드토글
          $(".Mgnb a.M").not(this).next().slideUp(300);
          // $(".Mgnb a.M").not(this).next().removeClass("on");
          //this가 아니라면 다음 요소는 슬라이드업
          return false;
      });
  });



  $(".headL ul li.sub").click(function(){
    $("div.nav").toggleClass("on");
   });
   



//플레이어 숫자
function numberCounter(target_frame, target_number) {
  this.count = 0; this.diff = 0;
  this.target_count = parseInt(target_number);
  this.target_frame = document.getElementById(target_frame);
  this.timer = null;
  this.counter();
};
 
 
  numberCounter.prototype.counter = function() {
      var self = this;
      this.diff = this.target_count - this.count;
 
      if(this.diff > 0) {
          self.count += Math.ceil(this.diff / 10);
      }
 
      this.target_frame.innerHTML = this.count.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
 
      if(this.count < this.target_count) {
          this.timer = setTimeout(function() { self.counter(); }, 30);
      } else {
          clearTimeout(this.timer);
      }
  };
 
$(document).ready(function(){ 
$(window).bind("scroll", function(){
if($(window).scrollTop() > 900){
  new numberCounter("counter1", 14);
  new numberCounter("counter2", 14);
  new numberCounter("counter3", 9);
  new numberCounter("counter4", 135);

  $(this).unbind();
}
})
});











