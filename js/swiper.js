var slideCount;

/*function adjustSlideCount() {
    if ($(window).width() <= 570) {
        slideCount = 1;
    } else if ($(window).width() >= 1000) {
        slideCount = 3;
    } else {
        slideCount = 2;
    }
};

adjustSlideCount();*/

var swiper = new Swiper(".swiper-container", {
    slidesPerView: 3,
    spaceBetween: 30,
    breakpoints: {
        // when window width is <= 320px
        570: {
          slidesPerView: 1
        },
        // when window width is <= 480px
        1000: {
          slidesPerView: 2
        },
        // when window width is <= 640px
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
