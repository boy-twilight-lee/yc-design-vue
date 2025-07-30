import _Textarea from "./index.vue.js";
const Textarea = Object.assign(_Textarea, {
  install: (app) => {
    app.component("Yc" + _Textarea.name, _Textarea);
  }
});
export {
  Textarea as default
};
