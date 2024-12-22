import Swiper from "swiper";
import { Navigation} from "swiper/modules";

const productsSliderContainers = document.querySelectorAll('.js-products-slider-container');

if(productsSliderContainers.length > 0) {
  productsSliderContainers.forEach((slider) => {
    const productsSlider = slider.querySelector('.js-products-slider');
    const productsSliderPrev = slider.querySelector('.js-products-slider-prev');
    const productsSliderNext = slider.querySelector('.js-products-slider-next');

    new Swiper(productsSlider, {
      modules: [Navigation],
      slidesPerView: 2.1,
      spaceBetween: 7,
      navigation: {
        prevEl: productsSliderPrev,
        nextEl: productsSliderNext,
      },
      breakpoints: {
        768: {
          slidesPerView: 3,
          spaceBetween: 18,
        },
        1280: {
          slidesPerView: 4,
          spaceBetween: 18,
        },
        1440: {
          slidesPerView: 5,
          spaceBetween: 18,
        },
      },
    });
  })
}

if(document.querySelector('.js-products-slider')) {


}

if(document.querySelector('.js-partners-slider')) {

  const productsSlider = new Swiper('.js-partners-slider', {
    modules: [Navigation],
    slidesPerView: 2,
    spaceBetween: 10,
    navigation: {
      prevEl: '.js-partners-slider-prev',
      nextEl: '.js-partners-slider-next',
    },
    breakpoints: {
      768: {
        slidesPerView: 3,
        spaceBetween: 16,
      },
      1024: {
        slidesPerView: 4,
        spaceBetween: 20,
      },
      1440: {
        slidesPerView: 6,
        spaceBetween: 20,
      },
    },
  });
}

$('.js-tabs').each(function () {
  const tabsControls = $('.js-tabs-controls > *');
  const tabsPanel = $('.js-tabs-panel > *');
  console.log(tabsControls)

  tabsControls.on('click', function () {
    
    const tabsId = $(this).data('control');
    tabsControls.removeClass('is-active');
    tabsPanel.removeClass('is-open');

    $(this).addClass('is-active');
    $(`.js-tabs-panel [data-content="${tabsId}"]`).addClass('is-open');
  })
})


$('.js-header-burger').on('click', () => {
  $('.js-header-menu').addClass('is-open')
})

$('.js-header-menu-close').on('click', () => {
  $('.js-header-menu').removeClass('is-open')
})

$('.js-header-cabinet-btn').on('click', () => {
  $('.js-header-cabinet-dropdown').toggleClass('is-open')
})

$(document).on('click', (e) => {
  if(!$(e.target).closest('.js-header-cabinet-btn').length) {
    $('.js-header-cabinet-dropdown').removeClass('is-open')
  }
})