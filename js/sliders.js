// start partners section
let partners = new Swiper(".partners", {
    slidesPerView: 4,
      spaceBetween: 25,
      loop: true,
      autoplay: true,

      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },

      breakpoints: {
        1080: {
            slidesPerView: 4
        },

        1024: {
            slidesPerView: 3
        },

        768: {
            slidesPerView: 2
        },

        425: {
            slidesPerView: 1,
            spaceBetween: 10
        },

        300: {
            slidesPerView: 1
        }
      }
})