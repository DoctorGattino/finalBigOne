document.addEventListener('DOMContentLoaded', () => {
  const showButton = document.getElementById('showButtonBrands')
  const brandsContainer = document.querySelector('.brands')

  let isHidden = false

  showButton.addEventListener('click', () => {
    isHidden = !isHidden

    if (isHidden) {
      // Показываем бренды
      brandsContainer.classList.replace('brands', 'brands--big')
      showButton.textContent = 'Скрыть'
      showButton.classList.remove('main__buttons--show-all')
      showButton.classList.add('main__buttons--hidden')
    } else {
      // Скрываем бренды

      brandsContainer.classList.replace('brands--big', 'brands')
      showButton.textContent = 'Показать все'
      showButton.classList.remove('main__buttons--hidden')
      showButton.classList.add('main__buttons--show-all')
    }
  })
})

document.addEventListener('DOMContentLoaded', () => {
  const showButton = document.getElementById('showButtonDevices')
  const devicesContainer = document.querySelector('.devices__list')

  let isHidden = false

  showButton.addEventListener('click', () => {
    isHidden = !isHidden

    if (isHidden) {
      // Показываем бренды
      devicesContainer.classList.add('devices__list--big')
      showButton.textContent = 'Скрыть'
      showButton.classList.remove('main__buttons--show-all')
      showButton.classList.add('main__buttons--hidden')
    } else {
      // Скрываем бренды

      devicesContainer.classList.replace('devices__list--big', 'devices__list')
      showButton.textContent = 'Показать все'
      showButton.classList.remove('main__buttons--hidden')
      showButton.classList.add('main__buttons--show-all')
    }
  })
})

document.addEventListener('DOMContentLoaded', () => {
  const showButton = document.getElementById('mainTextButton')
  const textContainer = document.querySelector('.main__text-4')

  let isHidden = false

  showButton.addEventListener('click', () => {
    isHidden = !isHidden

    if (isHidden) {
      // показываем текст
      textContainer.classList.add('main__text-4--show')
      showButton.textContent = 'Скрыть'
      showButton.classList.remove('main__buttons--show-all')
      showButton.classList.add('main__buttons--hidden')
    } else {
      // Скрываем текст

      textContainer.classList.remove('main__text-4--show')
      showButton.textContent = 'Читать далее'
      showButton.classList.remove('main__buttons--hidden')
      showButton.classList.add('main__buttons--show-all')
    }
  })
})
