import _Select from "./Select.vue.js";
import Option from "./Option.vue.js";
import Optgroup from "./Optgroup.vue.js";
const Select = Object.assign(_Select, {
  option: Option,
  group: Optgroup,
  install: (app) => {
    app.component("Yc" + _Select.name, _Select);
    app.component("Yc" + Option.name, Option);
    app.component("Yc" + Optgroup.name, Optgroup);
  }
});
export {
  Optgroup,
  Option,
  Select as default
};
