import _ResizeBox from "./index.vue.js";
const ResizeBox = Object.assign(_ResizeBox, {
  install: (app) => {
    app.component("Yc" + _ResizeBox.name, _ResizeBox);
  }
});
export {
  ResizeBox as default
};
