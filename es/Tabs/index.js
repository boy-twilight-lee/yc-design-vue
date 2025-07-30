import _Tabs from "./Tabs.vue.js";
import _sfc_main from "./TabPane.vue.js";
import "./TabPane.vue2.js";
const Tabs = Object.assign(_Tabs, {
  install: (app) => {
    app.component("Yc" + _Tabs.name, _Tabs);
    app.component("Yc" + _sfc_main.name, _sfc_main);
  }
});
export {
  _sfc_main as TabPane,
  Tabs as default
};
