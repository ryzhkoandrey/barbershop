// =============== OFFERS ===============

// Swiper thumbs

const swiperThumbs = new Swiper(".swiper-thumbs", {
    slidesPerView: 3,
    spaceBetween: 10,
    watchSlidesProgress: true,
});

// Swiper

const swiper = new Swiper(".swiper", {
    slidesPerView: 1,
    spaceBetween: 0,
    loop: true,
    thumbs: {
        swiper: swiperThumbs,
    },
});