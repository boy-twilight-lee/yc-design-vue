import _Scrollbar from "./Scrollbar.vue.js";
const Scrollbar = Object.assign(_Scrollbar, {
  install: (app) => {
    app.component("Yc" + _Scrollbar.name, _Scrollbar);
  }
});
export {
  Scrollbar as default
};
