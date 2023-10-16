document.addEventListener("DOMContentLoaded", function () {
  AOS.init();

  var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 30,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    breakpoints: {
      // when window width is >= 320px
      430: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      // when window width is >= 480px
      600: {
        slidesPerView: 2,
        spaceBetween: 30,
      },

      // when window width is >= 640px
      800: {
        slidesPerView: 3,
        spaceBetween: 30,
      },

      1200: {
        slidesPerView: 5,
        spaceBetween: 30,
      },

      1500: {
        slidesPerView: 6,
        spaceBetween: 30,
      },

      1700: {
        slidesPerView: 7,
        spaceBetween: 30,
      },
    },
  });
});
