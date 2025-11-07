import { App } from 'vue';
import _Select from './Select.vue';
import _Option from './Option.vue';
import _Optgroup from './Optgroup.vue';

export type SelectInstance = InstanceType<typeof _Select>;
export type OptionInstance = InstanceType<typeof _Option>;
export type OptgroupInstance = InstanceType<typeof _Optgroup>;
export * from './type';

const Select = Object.assign(_Select, {
  option: _Option,
  group: _Optgroup,
  install: (app: App) => {
    app.component('Yc' + _Select.name, _Select);
    app.component('Yc' + _Option.name, _Option);
    app.component('Yc' + _Optgroup.name, _Optgroup);
  },
});

export { _Option as Option, _Optgroup as Optgroup };

declare module 'vue' {
  interface GlobalComponents {
    YcSelect: typeof Select;
    YcOption: typeof _Option;
    YcOptgroup: typeof _Optgroup;
  }
}

export default Select;
