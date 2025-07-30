import _Switch from "./index.vue.js";
const Switch = Object.assign(_Switch, {
  install: (app) => {
    app.component("Yc" + _Switch.name, _Switch);
  }
});
export {
  Switch as default
};
