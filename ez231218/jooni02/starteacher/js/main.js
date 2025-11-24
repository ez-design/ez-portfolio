$(document).ready(function(){
    const teacher_swiper = new Swiper('.teacher .swiper', {
    
        slidesPerView: "auto",
        spaceBetween: 18,
        breakpoints: {
		768: {
			slidesPerView: 4,
			spaceBetween: 16,
		},
		1024: {
			slidesPerView: 5,
			spaceBetween: 22,
		},
		1280: {
			slidesPerView: 5,
			spaceBetween: 24,
		},
	    },

        centeredSlides: true,

        loop: true,

        speed: 5000,
        autoplay: {
            delay: 0,
            disableOnInteraction: true,
	    },
        
    });

    const review_swiper = new Swiper('.review .swiper', {
    
        slidesPerView: "auto",
        spaceBetween: 16,
        breakpoints: {
        325: { 
            slidesPerView: 3,
            spaceBetween: 20,
        },  
        1028: {
            slidesPerView: 4,
            spaceBetween: 28,
        },
        },

        loop: true,

        navigation: {
			nextEl: '.next',
			prevEl: '.prev',
		},
        pagination: {
		el: '.swiper-pagination',
		clickable: true, 
	},
    
    });
}) //document.ready
