if(document.documentElement.clientWidth < 767) {


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

} else {
  let buttonOpen = document.querySelector('.footer__open');
  let buttonClose = document.querySelector('.footer__close');
  let swiper = document.querySelector('.swiper-wrapper');

  buttonOpen.addEventListener('click', function() {
      swiper.classList.remove('swiper-wrapper--height');
      buttonOpen.classList.add('hide');
      buttonClose.classList.remove('hide');
  })

  buttonClose.addEventListener('click', function() {
      swiper.classList.add('swiper-wrapper--height');
      buttonOpen.classList.remove('hide');
      buttonClose.classList.add('hide');
  })
}

