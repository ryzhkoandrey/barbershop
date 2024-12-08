// =============== MOBILE-MENU ===============

const mobileMenu = document.querySelector('.mobile-menu');
const mobileMenuOpen = document.querySelector('.header__burger');
const mobileMenuClose = document.querySelector('.mobile-menu__close');

mobileMenuOpen.onclick = toggleMobileMenu;
mobileMenuClose.onclick = toggleMobileMenu;

function toggleMobileMenu() {
    mobileMenu.classList.toggle('mobile-menu--active');
    document.body.classList.toggle('no-scroll');
};

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