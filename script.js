var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 10,
    loop: true, // Enable continuous loop mode
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    breakpoints: {
      640: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      768: {
        slidesPerView: 4,
        spaceBetween: 40,
      },
      1024: {
        slidesPerView: 5,
        spaceBetween: 50,
      },
    },
    autoplay: {
      delay: 0, // No delay between slides
      disableOnInteraction: false, // Keep autoplay enabled after user interactions
    },
    speed: 3000, // Smooth transition duration in milliseconds (3 seconds)
  });
  