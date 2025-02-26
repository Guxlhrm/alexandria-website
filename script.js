var swiper = new Swiper(".home-slider", {
    autoplay:{
        delay: 7500,
        disableOnInteraction: false,
    },
    grabCursor: true,
    loop: true,
    centeredSlides: true,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});

window.addEventListener("DOMContentLoaded", function () {
    if (window.innerWidth <= 767) {
        let slides = document.querySelectorAll(".swiper-slide.slide");

        slides.forEach(slide => {
            if (slide.style.background.includes("slider-3.jpg")) {
                slide.remove();
            }
        });

        // Atualiza o Swiper para evitar o bug nos botões
        if (window.swiper) {
            window.swiper.update();
        }
    }
});
