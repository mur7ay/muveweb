var slideCount;

var swiper = new Swiper(".swiper-container", {
    slidesPerView: 3,
    spaceBetween: 30,
    breakpoints: {
        // when window width is <= 570px
        570: {
          slidesPerView: 1
        },
        // when window width is <= 992px
        992: {
          slidesPerView: 2
        },
        // when window width is <= 5000px
        5000: {
          slidesPerView: 3
        }
      },
    loop: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev"
    }
});

window.onresize = function() {
    mySwiper.update();
};
