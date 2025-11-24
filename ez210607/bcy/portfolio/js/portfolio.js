var swiper = new Swiper(".scroll_v", {
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
});