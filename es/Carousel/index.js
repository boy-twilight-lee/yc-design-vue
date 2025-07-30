import _Carousel from "./Carousel.vue.js";
import CarouselItem from "./CarouselItem.vue.js";
const Carousel = Object.assign(_Carousel, {
  item: CarouselItem,
  install: (app) => {
    app.component("Yc" + _Carousel.name, _Carousel);
    app.component("Yc" + CarouselItem.name, CarouselItem);
  }
});
export {
  CarouselItem,
  Carousel as default
};
