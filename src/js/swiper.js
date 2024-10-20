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
        clickable: true,
      },
      breakpoints: {
        769: {
          toggle: false,
          loop: false,
          spaceBetween: 'auto',
          centeredSlides: false,
        },
      },
    });
  });
  document.addEventListener('DOMContentLoaded', () => {
    const swiper = new Swiper('.swiper-devices', {
    // Optional parameters
      loop: true,
      slidesPerView: 'auto',
      spaceBetween: 1,
      // If we need pagination
      pagination: {
        el: '.swiper-pagination__devices',
        clickable: true,
      },
      breakpoints: {
        769: {
          toggle: false,
          loop: false,
          spaceBetween: 'auto',
          centeredSlides: false,
        },
      },
    });
  });
  document.addEventListener('DOMContentLoaded', () => {
    const swiper = new Swiper('.swiper-prices', {
    // Optional parameters
      loop: true,
      slidesPerView: 'auto',
      spaceBetween: 1,
      // If we need pagination
      pagination: {
        el: '.swiper-pagination__prices',
        clickable: true,
      },
      breakpoints: {
        769: {
          toggle: false,
          loop: false,
          spaceBetween: 'auto',
          centeredSlides: false,
        },
      },
    });
  });
}

document.addEventListener('DOMContentLoaded', () => {
  const showButton = document.getElementById('showButtonBrands');
  const brandsContainer = document.querySelector('.brands');

  let isHidden = false;

  showButton.addEventListener('click', () => {
    isHidden = !isHidden;

    if (isHidden) {
      // Показываем бренды
      brandsContainer.classList.replace('brands', 'brands--big');
      showButton.textContent = 'Скрыть';
      showButton.classList.remove('main__buttons--show-all');
      showButton.classList.add('main__buttons--hidden');
    } else {
      // Скрываем бренды

      brandsContainer.classList.replace('brands--big', 'brands');
      showButton.textContent = 'Показать все';
      showButton.classList.remove('main__buttons--hidden');
      showButton.classList.add('main__buttons--show-all');
    }
  });
});

document.addEventListener('DOMContentLoaded', () => {
  const showButton = document.getElementById('showButtonDevices');
  const devicesContainer = document.querySelector('.devices__list');

  let isHidden = false;

  showButton.addEventListener('click', () => {
    isHidden = !isHidden;

    if (isHidden) {
      // Показываем бренды
      devicesContainer.classList.add('devices__list--big');
      showButton.textContent = 'Скрыть';
      showButton.classList.remove('main__buttons--show-all');
      showButton.classList.add('main__buttons--hidden');
    } else {
      // Скрываем бренды

      devicesContainer.classList.replace('devices__list--big', 'devices__list');
      showButton.textContent = 'Показать все';
      showButton.classList.remove('main__buttons--hidden');
      showButton.classList.add('main__buttons--show-all');
    }
  });
});