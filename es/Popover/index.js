import _sfc_main from "./index.vue.js";
import "./index.vue2.js";
const Popover = Object.assign(_sfc_main, {
  install: (app) => {
    app.component("Yc" + _sfc_main.name, _sfc_main);
  }
});
export {
  Popover as default
};
