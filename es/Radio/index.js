import _Radio from "./Radio.vue.js";
import _sfc_main from "./RadioGroup.vue.js";
import "./RadioGroup.vue2.js";
const Radio = Object.assign(_Radio, {
  group: _sfc_main,
  install: (app) => {
    app.component("Yc" + _Radio.name, _Radio);
    app.component("Yc" + _sfc_main.name, _sfc_main);
  }
});
export {
  _sfc_main as RadioGroup,
  Radio as default
};
