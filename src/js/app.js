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
    slidesPerView: 2,
    spaceBetween: 10,
    navigation: {
      nextEl: '.js-partners-slider-prev',
      prevEl: '.js-partners-slider-next',
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