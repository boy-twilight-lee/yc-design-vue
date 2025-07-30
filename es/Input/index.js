import _Input from "./Input.vue.js";
const Input = Object.assign(_Input, {
  install: (app) => {
    app.component("Yc" + _Input.name, _Input);
  }
});
export {
  Input as default
};
