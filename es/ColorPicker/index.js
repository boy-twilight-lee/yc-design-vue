import _ColorPicker from "./ColorPicker.vue.js";
const ColorPicker = Object.assign(_ColorPicker, {
  install: (app) => {
    app.component("Yc" + _ColorPicker.name, _ColorPicker);
  }
});
export {
  ColorPicker as default
};
