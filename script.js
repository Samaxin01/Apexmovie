// main.js
const swiper = new Swiper('.swiper-wrapper', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    autoplay: {
        delay: 3000, // Delay in milliseconds
        disableOnInteraction: false, // Continue autoplay after interactions
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});

// swiper
var Swiper = new Swiper(".coming-container", {
    spaceBetween: 20,
    loop:true,
    autoplay: {
        delay: 55000,
        disableOnInteraction: false,
    },
    centeredSlides: true,
    breakpoints: {
        0: {
            slidesPerView: 2,
        },
        568: {
            slidesPerView: 2,
        },
        768: {
            slidesPerView: 2,
        },
        968: {
            slidesPerView: 2,
        },
    },
});

// Wait for 8 seconds before showing the main content and hiding the loading screen
setTimeout(function() {
    // Hide the loading screen
    document.getElementById('loading-screen').style.display = 'none';
    // Show the main content
    document.getElementById('main-content').style.display = 'block';
}, 3000); // 8000ms = 8 seconds
