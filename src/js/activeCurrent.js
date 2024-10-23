const currentLang = document.querySelectorAll('.language__button')
const activeNavLink = document.querySelectorAll('.aside-navigation__href')
const activeMainNavLink = document.querySelectorAll('.main__navigation--href')

function addCurrentLang() {
  currentLang.forEach((el) => el.classList.remove('current-lang'))
  this.classList.add('current-lang')
}

currentLang.forEach((item) => {
  item.addEventListener('click', addCurrentLang)
})

function addActiveNavLink() {
  activeNavLink.forEach((el) => el.classList.remove('active-aside'))
  this.classList.add('active-aside')
}

activeNavLink.forEach((item) => {
  item.addEventListener('click', addActiveNavLink)
})

function addActiveMainNavLink() {
  activeMainNavLink.forEach((el) => el.classList.remove('active-main__navigation'))
  this.classList.add('active-main__navigation')
}

activeMainNavLink.forEach((item) => {
  item.addEventListener('click', addActiveMainNavLink)
})