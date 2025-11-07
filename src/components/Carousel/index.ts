import { App } from 'vue';
import _Carousel from './Carousel.vue';
import _CarouselItem from './CarouselItem.vue';

export type CarouselInstance = InstanceType<typeof _Carousel>;
export type CarouselItemInstance = InstanceType<typeof _CarouselItem>;
export * from './type';

const Carousel = Object.assign(_Carousel, {
  item: _CarouselItem,
  install: (app: App) => {
    app.component('Yc' + _Carousel.name, _Carousel);
    app.component('Yc' + _CarouselItem.name, _CarouselItem);
  },
});

export { _CarouselItem as CarouselItem };

declare module 'vue' {
  interface GlobalComponents {
    YcCarousel: typeof Carousel;
    YcCarouselItem: typeof _CarouselItem;
  }
}

export default Carousel;
