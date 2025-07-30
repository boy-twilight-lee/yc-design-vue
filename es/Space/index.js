import _Space from "./index.vue.js";
const Space = Object.assign(_Space, {
  install: (app) => {
    app.component("Yc" + _Space.name, _Space);
  }
});
export {
  Space as default
};
