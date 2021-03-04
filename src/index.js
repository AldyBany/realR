const swiper = new Swiper("#property-slider .swiper-container", {
  // Optional parameters
  loop: true,
  slidesPerView: 1,
  spaceBetween: 30,
  centeredSlides: true,
  breakpoints: {
    640: { slidesPerView: 1, spaceBetween: 10 },
    768: { slidesPerView: 2, spaceBetween: 20 },
    1024: { slidesPerView: 4, spaceBetween: 50 }
  }
});

const swipe = new Swiper("#testimonial-slider .swiper-container", {
  // Optional parameters
  loop: true
});
