const swiper = new Swiper(".mySwiper", {
    // Optional parameters
    direction: "horizontal",
    slidesPerView: 2,
    spaceBetween: 30,
    loop: false,
    breakpoints: {
        768: {
          slidesPerView: 5,
          spaceBetween: 30,
        },
        360:{
        slidesPerView: 2,
        spaceBetween: 30,  
        }
      },

    // If we need pagination
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  })
  