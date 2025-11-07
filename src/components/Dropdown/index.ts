import { App } from 'vue';
import _Dropdown from './Dropdown.vue';
import _Doption from './Doption.vue';
import _Dgroup from './Dgroup.vue';
import _DropdownButton from './DropdownButton.vue';
import _Dsubmenu from './Dsubmenu.vue';

export type DropdownInstance = InstanceType<typeof _Dropdown>;
export type DoptionInstance = InstanceType<typeof _Doption>;
export type DgroupInstance = InstanceType<typeof _Dgroup>;
export type DropdownButtonInstance = InstanceType<typeof _Dropdown>;
export type DsubmenuInstance = InstanceType<typeof _Dsubmenu>;
export * from './type';

const Dropdown = Object.assign(_Dropdown, {
  option: _Doption,
  group: _Dgroup,
  button: _DropdownButton,
  submenu: _Dsubmenu,
  install: (app: App) => {
    app.component('Yc' + _Dropdown.name, _Dropdown);
    app.component('Yc' + _Doption.name, _Doption);
    app.component('Yc' + _Dgroup.name, _Dgroup);
    app.component('Yc' + _DropdownButton.name, _DropdownButton);
    app.component('Yc' + _Dsubmenu.name, _Dsubmenu);
  },
});

export {
  _Doption as Doption,
  _Dgroup as Dgroup,
  _DropdownButton as DropdownButton,
  _Dsubmenu as Dsubmenu,
};

export default Dropdown;
