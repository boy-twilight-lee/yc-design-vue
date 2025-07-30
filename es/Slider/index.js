import _Slider from "./Slider.vue.js";
const Slider = Object.assign(_Slider, {
  install: (app) => {
    app.component("Yc" + _Slider.name, _Slider);
  }
});
export {
  Slider as default
};
