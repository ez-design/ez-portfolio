$('document').ready(function(){
	const visual_swiper = new Swiper('.visual .swiper', { /* 팝업을 감싼는 요소의 class명 */

		effect: "fade",

		autoplay: {  /* 팝업 자동 실행 */
			delay: 4500,
			disableOnInteraction: true,
		},

		loop: true,  /* 마지막 팝업에서 첫번째 팝업으로 자연스럽게 넘기기 */

		pagination: {
			el: '.visual .swiper .paging',
			clickable: true,
		},
	});

})//document.ready