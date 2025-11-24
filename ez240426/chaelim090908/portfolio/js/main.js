$(document).ready(function(){
	const swiperV = new Swiper('.swiperV', {
		direction: "vertical",
		slidesPerView: 1,
		spaceBetween: 0,
		mousewheel: true,
		allowTouchMove: false,
		keyboard: true,
		ally: true,
		on: {
			slideChange: function(){
				// console.log(this.realIndex)
				if(this.realIndex == 0){
					$('.page ul li').removeClass('on')
					$('.page ul li:nth-child(1)').addClass('on')
				}else if(this.realIndex == 1){
					$('.page ul li').removeClass('on')
					$('.page ul li:nth-child(2)').addClass('on')
				}else if(this.realIndex == 2){
					$('.page ul li').removeClass('on')
					$('.page ul li:nth-child(7)').addClass('on')
				if(this.previousIndex == 1){//위에서 아래로 내려왔을때
					$('.page ul li').removeClass('on')
					$('.page ul li:nth-child(3)').addClass('on')
				}else{//아래에서 위로 올라왔을때
					$('.page ul li').removeClass('on')
					$('.page ul li:nth-last-child(2)').addClass('on')
					}
				}
			}
		},
	});
	const swiperH = new Swiper('.swiperH', {
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
				// console.log(this.realIndex)
				if(this.realIndex == 0){
					$('.page ul li').removeClass('on')
					$('.page ul li:nth-child(3)').addClass('on') //세번째 li
				}else if(this.realIndex == 1){
					$('.page ul li').removeClass('on')
					$('.page ul li:nth-child(4)').addClass('on') //네번째 li
				}else if(this.realIndex == 2){
					$('.page ul li').removeClass('on')
					$('.page ul li:nth-child(5)').addClass('on')
				}else if(this.realIndex == 3){
					$('.page ul li').removeClass('on')
					$('.page ul li:nth-child(6)').addClass('on')
				}
			}
		},
	});
	$('.page ul li a.portfolio').ready(
		$('.page ul li:nth-child(1)').addClass('on')
	)
    $('.page ul li a.portfolio').on('click', function(){
		swiperV.slideTo(0, 500);
		$('.page ul li:nth-child(1)').addClass('on')
	});
	$('.page ul li a.profile').on('click', function(){
		swiperV.slideTo(1, 500);
		$('.page ul li:nth-child(2)').addClass('on')
	});
	$('.page ul li a.first').on('click', function(){
		swiperV.slideTo(2, 500);
		swiperH.slideTo(0, 500);
		$('.page ul li:nth-child(3)').addClass('on')
	});
	$('.page ul li a.second').on('click', function(){
		swiperV.slideTo(2, 500);
		swiperH.slideTo(1, 500);
		$('.page ul li:nth-child(4)').addClass('on')
	});
	$('.page ul li a.third').on('click', function(){
		swiperV.slideTo(2, 500);
		swiperH.slideTo(2, 500);
		$('.page ul li:nth-child(5)').addClass('on')
	});
	$('.page ul li a.prepare').on('click', function(){
		swiperV.slideTo(2, 500);
		swiperH.slideTo(3, 500);
		$('.page ul li:nth-child(6)').addClass('on')
	});
	$('.page ul li a.end').on('click', function(){
		swiperV.slideTo(3, 500);
		$('.page ul li').removeClass('on')
		$('.page ul li:nth-child(7)').addClass('on')
	});
})