import _Watermark from "./index.vue.js";
const Watermark = Object.assign(_Watermark, {
  install: (app) => {
    app.component("Yc" + _Watermark.name, _Watermark);
  }
});
export {
  Watermark as default
};
