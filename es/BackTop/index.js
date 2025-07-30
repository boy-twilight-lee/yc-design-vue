import _BackTop from "./index.vue.js";
const BackTop = Object.assign(_BackTop, {
  install: (app) => {
    app.component("Yc" + _BackTop.name, _BackTop);
  }
});
export {
  BackTop as default
};
