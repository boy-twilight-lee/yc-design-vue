import { App } from 'vue';
import _Menu from './Menu.vue';
import _MenuItem from './MenuItem.vue';
import _SubMenu from './SubMenu.vue';
import _MenuItemGroup from './MenuItemGroup.vue';

export type MenuInstance = InstanceType<typeof _Menu>;
export type MenuItemInstance = InstanceType<typeof _MenuItem>;
export type SubMenuInstance = InstanceType<typeof _SubMenu>;
export type MenuItemGroupInstance = InstanceType<typeof _MenuItemGroup>;
export * from './type';

const Menu = Object.assign(_Menu, {
  item: _MenuItem,
  submenu: _SubMenu,
  group: _MenuItemGroup,
  install: (app: App) => {
    app.component('Yc' + _Menu.name, _Menu);
    app.component('Yc' + _MenuItem.name, _MenuItem);
    app.component('Yc' + _SubMenu.name, _SubMenu);
    app.component('Yc' + _MenuItemGroup.name, _MenuItemGroup);
  },
});

export {
  _MenuItem as MenuItem,
  _MenuItemGroup as MenuItemGroup,
  _SubMenu as SubMenu,
};

declare module 'vue' {
  interface GlobalComponents {
    YcMenu: typeof Menu;
    YcSubMenu: typeof _SubMenu;
    YcMenuItem: typeof _MenuItem;
    YcMenuItemGroup: typeof _MenuItemGroup;
  }
}

export default Menu;
