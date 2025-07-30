import _Spin from "./index.vue.js";
const Spin = Object.assign(_Spin, {
  install: (app) => {
    app.component("Yc" + _Spin.name, _Spin);
  }
});
export {
  Spin as default
};
