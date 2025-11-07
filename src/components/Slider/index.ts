import { App } from 'vue';
import _Slider from './Slider.vue';

export type SliderInstance = InstanceType<typeof _Slider>;
export * from './type';

const Slider = Object.assign(_Slider, {
  install: (app: App) => {
    app.component('Yc' + _Slider.name, _Slider);
  },
});

export default Slider;
