const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    spaceBetween: 16,
    slidesPerView: 1.3,
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    //   type: 'bullets',
    },

    keyboard: {
        enabled: true,
        onlyInViewport: false,
      },

    mousewheel: {
    invert: true,
    },

    
  

  

  });