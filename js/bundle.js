!function(e){var t={};function n(o){if(t[o])return t[o].exports;var s=t[o]={i:o,l:!1,exports:{}};return e[o].call(s.exports,s,s.exports,n),s.l=!0,s.exports}n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var s in e)n.d(o,s,function(t){return e[t]}.bind(null,s));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){e.exports=n(1)},function(e,t,n){"use strict";n.r(t);n(2),n(3),n(4),n(5),n(6)},function(e,t,n){},function(e,t){window.matchMedia("(max-width: 767px)").matches&&(document.addEventListener("DOMContentLoaded",(function(){new Swiper(".swiper-brands",{loop:!0,slidesPerView:"auto",spaceBetween:1,pagination:{el:" .swiper-pagination__brands",clickable:!0},breakpoints:{769:{toggle:!1,loop:!1,spaceBetween:"auto",centeredSlides:!1}}})})),document.addEventListener("DOMContentLoaded",(function(){new Swiper(".swiper-devices",{loop:!0,slidesPerView:"auto",spaceBetween:1,pagination:{el:".swiper-pagination__devices",clickable:!0},breakpoints:{769:{toggle:!1,loop:!1,spaceBetween:"auto",centeredSlides:!1}}})})),document.addEventListener("DOMContentLoaded",(function(){new Swiper(".swiper-prices",{loop:!0,slidesPerView:"auto",spaceBetween:1,pagination:{el:".swiper-pagination__prices",clickable:!0},breakpoints:{769:{toggle:!1,loop:!1,spaceBetween:"auto",centeredSlides:!1}}})}))),document.addEventListener("DOMContentLoaded",(function(){var e=document.getElementById("showButtonBrands"),t=document.querySelector(".brands"),n=!1;e.addEventListener("click",(function(){(n=!n)?(t.classList.replace("brands","brands--big"),e.textContent="Скрыть",e.classList.remove("main__buttons--show-all"),e.classList.add("main__buttons--hidden")):(t.classList.replace("brands--big","brands"),e.textContent="Показать все",e.classList.remove("main__buttons--hidden"),e.classList.add("main__buttons--show-all"))}))})),document.addEventListener("DOMContentLoaded",(function(){var e=document.getElementById("showButtonDevices"),t=document.querySelector(".devices__list"),n=!1;e.addEventListener("click",(function(){(n=!n)?(t.classList.add("devices__list--big"),e.textContent="Скрыть",e.classList.remove("main__buttons--show-all"),e.classList.add("main__buttons--hidden")):(t.classList.replace("devices__list--big","devices__list"),e.textContent="Показать все",e.classList.remove("main__buttons--hidden"),e.classList.add("main__buttons--show-all"))}))})),document.addEventListener("DOMContentLoaded",(function(){var e=document.getElementById("mainTextButton"),t=document.querySelector(".main__text-4"),n=!1;e.addEventListener("click",(function(){(n=!n)?(t.classList.add("main__text-4--show"),e.textContent="Скрыть",e.classList.remove("main__buttons--show-all"),e.classList.add("main__buttons--hidden")):(t.classList.remove("main__text-4--show"),e.textContent="Читать далее",e.classList.remove("main__buttons--hidden"),e.classList.add("main__buttons--show-all"))}))}))},function(e,t){var n=document.querySelector(".feedback"),o=document.querySelector(".transparent-back-FB"),s=document.querySelector(".button__chat"),l=document.querySelector(".button-contact__chat"),c=document.querySelector(".feedback__connection--close"),i=document.querySelector(".body");l.addEventListener("click",(function(){n.style.display="block",o.style.display="block",o.classList.add("menu-back__open"),n.classList.add("open-menu"),i.style.overflow="hidden"})),s.addEventListener("click",(function(){n.style.display="block",o.style.display="block",o.classList.add("menu-back__open"),n.classList.add("open-menu"),i.style.overflow="hidden"})),c.addEventListener("click",(function(){n.style.display="none",o.style.display="none",i.style.overflow="scroll"})),o.addEventListener("click",(function(){n.style.display="none",o.style.display="none",i.style.overflow="scroll"}))},function(e,t){var n=document.querySelector(".feedback-call"),o=document.querySelector(".transparent-back-FB"),s=document.querySelector(".button__call"),l=document.querySelector(".button-contact__call"),c=document.querySelector(".feedback-call__close"),i=document.querySelector(".body");s.addEventListener("click",(function(){n.style.display="block",o.style.display="block",o.classList.add("menu-back__open"),n.classList.add("open-menu"),i.style.overflow="hidden"})),l.addEventListener("click",(function(){n.style.display="block",o.style.display="block",o.classList.add("menu-back__open"),n.classList.add("open-menu"),i.style.overflow="hidden"})),c.addEventListener("click",(function(){n.style.display="none",o.style.display="none",i.style.overflow="scroll"})),o.addEventListener("click",(function(){n.style.display="none",o.style.display="none",i.style.overflow="scroll"}))},function(e,t){var n=document.getElementById("burgerMenu"),o=document.querySelector(".transparent-back-BM"),s=document.getElementById("openMenubar"),l=document.getElementById("closeMenubar"),c=document.querySelector(".body");s.addEventListener("click",(function(){n.style.display="block",o.style.display="block",n.classList.add("open-menu"),o.classList.add("menu-back__open"),c.style.overflow="hidden"})),l.addEventListener("click",(function(){n.style.display="none",o.style.display="none"})),o.addEventListener("click",(function(){n.style.display="none",o.style.display="none",c.style.overflow="scroll",c.style.overflow="scroll"}))}]);
//# sourceMappingURL=bundle.js.map