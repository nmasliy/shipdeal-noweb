import Swiper, { Pagination, Navigation } from 'swiper';

Swiper.use([Navigation, Pagination]);

function initMobileSlider(parent, wrapper, items, breakpoint = 1024) {
  if (window.innerWidth <= breakpoint) {
    const $parent = document.querySelector(parent);
    const $wrapper = $parent.querySelector(wrapper);
    const $items = $wrapper.querySelectorAll(items);

    $parent.classList.add('swiper');
    $wrapper.className = 'swiper-wrapper';
    $items.forEach((slide) => slide.classList.add('swiper-slide'));

    const swiper = new Swiper(parent, {
      slidesPerView: 'auto',
      spaceBetween: 16,
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
    });
  }
}

const reviews = new Swiper('.reviews__slider', {
  slidesPerView: 3,
  spaceBetween: 20,
  navigation: {
    nextEl: '.reviews__next',
    prevEl: '.reviews__prev',
  },
  pagination: {
    el: '.reviews__pagination',
    clickable: true
  },
  breakpoints: {
    // when window width is >= 320px
    320: {
      slidesPerView: 'auto',
      spaceBetween: 8,
    },
    // when window width is >= 768px
    768: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    // when window width is >= 1280px
    1280: {
      slidesPerView: 3,
      spaceBetween: 20,
    },
  },
});

const ship = new Swiper('.ship__slider', {
  slidesPerView: 3,
  spaceBetween: 0,
  watchSlidesProgress: true,
  navigation: {
    nextEl: '.ship__next',
    prevEl: '.ship__prev',
  },
  pagination: {
    el: '.ship__pagination',
    clickable: true,
  },
  breakpoints: {
    // when window width is >= 320px
    320: {
      spaceBetween: 10,
      slidesPerView: 'auto',
    },
    // when window width is >= 768px
    768: {
      spaceBetween: 0,
      slidesPerView: 2,
    },
    // when window width is >= 1280px
    1024: {
      slidesPerView: 3,
    },
  },
});


initMobileSlider('.why__content', '.why__list', '.why__item');
