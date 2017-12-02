var slideCount;


if ($(window).width() <= 570) {
    slideCount = 1;
} else if ($(window).width() >= 1000) {
    slideCount = 3;
} else {
    slideCount = 2;
}

var swiper = new Swiper(".swiper-container", {
    slidesPerView: slideCount,
    spaceBetween: 30,
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

window.onresize = function(event) {
    if ($(window).width() <= 570) {
        slideCount = 1;
    } else if ($(window).width() >= 1000) {
        slideCount = 3;
    } else {
        slideCount = 2;
    }

    var swiper = new Swiper(".swiper-container", {
        slidesPerView: slideCount,
        spaceBetween: 30,
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
}
