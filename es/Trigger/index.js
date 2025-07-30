import _Trigger from "./index.vue.js";
const Trigger = Object.assign(_Trigger, {
  install: (app) => {
    app.component("Yc" + _Trigger.name, _Trigger);
  }
});
export {
  Trigger as default
};
