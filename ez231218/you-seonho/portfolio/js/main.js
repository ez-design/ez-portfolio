/* 파일명 : main.js
   작성자 : 유선호
   작성일 : 2024.03.20
   속  성 : 메인페이지에서 사용된 jqeury (header 빼고) */

$(document).ready(function(){
	const col_swiper = new Swiper('.swiperV', { /* 팝업을 감싼는 요소의 class명 */
		direction: "vertical",
		slidesPerView: 1,
		spaceBetween: 0,
		mousewheel: true,
		allowTouchMove: false,
		keyboard: true,
		ally: true,
		on: {
			slideChange: function(){
				if((this.realIndex == 1) || (this.realIndex == 2)) {
					$('header').addClass('black')
				}else{
					$('header').removeClass('black')
				}

				if(this.realIndex == 0){
					$('header .gnb ul li, .page ul li').removeClass('on')
					$('header .gnb ul li:nth-child(1), .page ul li:nth-child(1)').addClass('on')
				}else if(this.realIndex == 1){
					$('header .gnb ul li, .page ul li').removeClass('on')
					$('header .gnb ul li:nth-child(2), .page ul li:nth-child(2)').addClass('on')
				}else if(this.realIndex == 2){
					$('header .gnb ul li, .page ul li').removeClass('on')
					if(this.previousIndex == 1){//위에서 아래로 내려왔을때
						$('header .gnb ul li:nth-child(3), .page ul li:nth-child(3)').addClass('on')
					}else{//아래에서 위로 올라왔을때
						$('header .gnb ul li:nth-last-child(2), .page ul li:nth-last-child(2)').addClass('on')
					}
				}else if(this.realIndex == 3){
					$('header .gnb ul li, .page ul li').removeClass('on')
					$('header .gnb ul li:last-child, .page ul li:last-child').addClass('on')
				}
			}
		},
	});

	const row_swiper = new Swiper('.swiperH', { /* 팝업을 감싸는 요소의 class명 */
		direction: "horizontal",
		slidesPerView: 1,
		spaceBetween: 0,
		mousewheel: true,
		allowTouchMove: false,
		keyboard: true,
		ally: true,
		nested: true,
		on: {
			slideChange: function(){
				if(this.realIndex == 0){
					$('header .gnb ul li, .page ul li').removeClass('on')
					$('header .gnb ul li:nth-child(3), .page ul li:nth-child(3)').addClass('on') //세번째 li
				}else if(this.realIndex == 1){
					$('header .gnb ul li, .page ul li').removeClass('on')
					$('header .gnb ul li:nth-child(4), .page ul li:nth-child(4)').addClass('on') //네번째 li
				}else if(this.realIndex == 2){
					$('header .gnb ul li, .page ul li').removeClass('on')
					$('header .gnb ul li:nth-child(5), .page ul li:nth-child(5)').addClass('on')
				}
			}
		}
	});

	$('.gnb li a[data-href="home"], .page a[data-href="home"]').on('click', function(){
		col_swiper.slideTo(0, 500);
	});
	$('.gnb li a[data-href="about"], .page a[data-href="about"]').on('click', function(){
		col_swiper.slideTo(1, 500);
	});
	$('.gnb li a[data-href="portfolio1"], .page a[data-href="portfolio1"]').on('click', function(){
		col_swiper.slideTo(2, 500);
		row_swiper.slideTo(0, 500);
	});
	$('.gnb li a[data-href="portfolio2"], .page a[data-href="portfolio2"]').on('click', function(){
		col_swiper.slideTo(2, 500);
		row_swiper.slideTo(1, 500);
	});
	$('.gnb li a[data-href="portfolio3"], .page a[data-href="portfolio3"]').on('click', function(){
		col_swiper.slideTo(2, 500);
		row_swiper.slideTo(2, 500);
	});
	$('.gnb li a[data-href="contact"], .page a[data-href="contact"]').on('click', function(){
		col_swiper.slideTo(4, 500);
	});
})