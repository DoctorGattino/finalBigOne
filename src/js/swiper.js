if (window.matchMedia('(max-width: 767px)').matches) {
  document.addEventListener('DOMContentLoaded', () => {
    const swiper = new Swiper('.swiper-brands', {
      // Optional parameters
      loop: true,
      slidesPerView: 'auto',
      spaceBetween: 1,
      // If we need pagination
      pagination: {
        el: ' .swiper-pagination__brands',
        clickable: true
      },
      breakpoints: {
        769: {
          toggle: false,
          loop: false,
          spaceBetween: 'auto',
          centeredSlides: false
        }
      }
    })
  })
  document.addEventListener('DOMContentLoaded', () => {
    const swiper = new Swiper('.swiper-devices', {
      // Optional parameters
      loop: true,
      slidesPerView: 'auto',
      spaceBetween: 1,
      // If we need pagination
      pagination: {
        el: '.swiper-pagination__devices',
        clickable: true
      },
      breakpoints: {
        769: {
          toggle: false,
          loop: false,
          spaceBetween: 'auto',
          centeredSlides: false
        }
      }
    })
  })
  document.addEventListener('DOMContentLoaded', () => {
    const swiper = new Swiper('.swiper-prices', {
      // Optional parameters
      loop: true,
      slidesPerView: 'auto',
      spaceBetween: 1,
      // If we need pagination
      pagination: {
        el: '.swiper-pagination__prices',
        clickable: true
      },
      breakpoints: {
        769: {
          toggle: false,
          loop: false,
          spaceBetween: 'auto',
          centeredSlides: false
        }
      }
    })
  })
}
