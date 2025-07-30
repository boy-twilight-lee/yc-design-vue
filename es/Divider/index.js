import _Divider from "./index.vue.js";
const Divider = Object.assign(_Divider, {
  install: (app) => {
    app.component("Yc" + _Divider.name, _Divider);
  }
});
export {
  Divider as default
};
