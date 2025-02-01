import Swiper from "swiper";
import { Navigation, Pagination, Thumbs} from "swiper/modules";

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

// Код для скрытия показа текста

$('.js-why-us-toggle').on('click', function() {
    $('.js-why-us-desc').toggleClass('_is-show');
});

$('.accordion-item').on('click', function() {
  $(this).parent().toggleClass('_is-open');
  $(this).next('.accordion-content').slideToggle();
});

// Смена вида списка товаров

$('.js-catalog-views-btn').on('click', function() {

  if($(this).data('views') === 'grid') {
    $('.catalog-list').removeClass('_is-list');
  } else {
    $('.catalog-list').addClass('_is-list');
  }
  $('.js-catalog-views-btn').removeClass('_is-active');
  $(this).addClass('_is-active');
});

//Слайдер для карточки товара в каталоге
const catalogCardGallerySliders = document.querySelectorAll('.js-catalog-card-gallery');

if(catalogCardGallerySliders.length > 0) {

  catalogCardGallerySliders.forEach((slider) => {
    const catalogCardGallerySlider = new Swiper(slider, {
      modules: [Pagination],
      slidesPerView: 1,
      spaceBetween: 6,
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      on: {
        init: function () {
          let sliderBullets = slider.querySelectorAll(
            '.swiper-pagination-bullet'
          );

          sliderBullets.forEach(function (k) {
            k.addEventListener('mouseover', function () {
              k.click();
            });
          });
        },
      },
    })
  })
}

const productSliderBlock = document.querySelector('.js-product-slider');
const productThumbsBlock = document.querySelector('.js-product-thumbs-slider');

if(productSliderBlock && productThumbsBlock) {

  const productSliderThumbs = new Swiper(productThumbsBlock, {
    slidesPerView: 4,
    spaceBetween: 4,
    freeMode: true,
    watchSlidesProgress: true,
    breakpoints: {
      768: {
        slidesPerView: 5,
        spaceBetween: 8,
      }
    },
  });

  const productSlider = new Swiper(productSliderBlock, {
    modules: [Thumbs],
    slidesPerView: 1,
    spaceBetween: 16,
    thumbs: {
      swiper: productSliderThumbs
    }
  });
}


$('.js-tab-control').on('click', function() {
  const tabControl = $(this).data('control');
  $('.js-tab-control').removeClass('_is-active');
  $(this).addClass('_is-active');
  $('.js-tab-section').removeClass('_is-active');
  $(`.js-tab-section[data-tab="${tabControl}"]`).addClass('_is-active');
})

$('input[type="range"]').on("input", function() {
  const gradientValue = `linear-gradient(to right, #E44900 0%, #E44900  ${$(this).val()}%, #E2E2E2  ${$(this).val()}%, #E2E2E2 100%)`;
  $(this).css('background', gradientValue);
});