import _Cascader from "./Cascader.vue.js";
const Cascader = Object.assign(_Cascader, {
  install: (app) => {
    app.component("Yc" + _Cascader.name, _Cascader);
  }
});
export {
  Cascader as default
};
