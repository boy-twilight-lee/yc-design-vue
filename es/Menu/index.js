import _Menu from "./Menu.vue.js";
import MenuItem from "./MenuItem.vue.js";
import SubMenu from "./SubMenu.vue.js";
import MenuItemGroup from "./MenuItemGroup.vue.js";
const Menu = Object.assign(_Menu, {
  item: MenuItem,
  submenu: SubMenu,
  group: MenuItemGroup,
  install: (app) => {
    app.component("Yc" + _Menu.name, _Menu);
    app.component("Yc" + MenuItem.name, MenuItem);
    app.component("Yc" + SubMenu.name, SubMenu);
    app.component("Yc" + MenuItemGroup.name, MenuItemGroup);
  }
});
export {
  MenuItem,
  MenuItemGroup,
  SubMenu,
  Menu as default
};
