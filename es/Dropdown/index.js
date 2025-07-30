import _sfc_main from "./Dropdown.vue.js";
import "./Dropdown.vue2.js";
import Doption from "./Doption.vue.js";
import Dgroup from "./Dgroup.vue.js";
import _sfc_main$1 from "./DropdownButton.vue.js";
import Dsubmenu from "./Dsubmenu.vue.js";
const Dropdown = Object.assign(_sfc_main, {
  option: Doption,
  group: Dgroup,
  button: _sfc_main$1,
  submenu: Dsubmenu,
  install: (app) => {
    app.component("Yc" + _sfc_main.name, _sfc_main);
    app.component("Yc" + Doption.name, Doption);
    app.component("Yc" + Dgroup.name, Dgroup);
    app.component("Yc" + _sfc_main$1.name, _sfc_main$1);
    app.component("Yc" + Dsubmenu.name, Dsubmenu);
  }
});
export {
  Dgroup,
  Doption,
  _sfc_main$1 as DropdownButton,
  Dsubmenu,
  Dropdown as default
};
