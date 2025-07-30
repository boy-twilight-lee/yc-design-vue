import _Button from "./Button.vue.js";
import _sfc_main from "./ButtonGroup.vue.js";
import "./ButtonGroup.vue2.js";
const Button = Object.assign(_Button, {
  group: _sfc_main,
  install: (app) => {
    app.component("Yc" + _Button.name, _Button);
    app.component("Yc" + _sfc_main.name, _sfc_main);
  }
});
export {
  _sfc_main as ButtonGroup,
  Button as default
};
