// =============== OFFERS ===============

// Swiper thumbs

const swiperThumbs = new Swiper(".swiper-thumbs", {
    initialSlide: 1,
    slidesPerView: 3,
    spaceBetween: 10,
});

// Swiper

const swiper = new Swiper(".swiper", {
    initialSlide: 1,
    slidesPerView: 1,
    spaceBetween: 0,
    grabCursor: true,
    thumbs: {
        swiper: swiperThumbs,
    },
});