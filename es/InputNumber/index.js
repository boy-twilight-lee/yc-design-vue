import _InputNumber from "./InputNumber.vue.js";
const InputNumber = Object.assign(_InputNumber, {
  install: (app) => {
    app.component("Yc" + _InputNumber.name, _InputNumber);
  }
});
export {
  InputNumber as default
};
