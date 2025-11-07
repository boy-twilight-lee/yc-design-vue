import { App } from 'vue';
import _Checkbox from './Checkbox.vue';
import _CheckboxGroup from './CheckboxGroup.vue';

export type CheckboxInstance = InstanceType<typeof _Checkbox>;
export type CheckboxGroupInstance = InstanceType<typeof _CheckboxGroup>;
export * from './type';

const Checkbox = Object.assign(_Checkbox, {
  group: _CheckboxGroup,
  install: (app: App) => {
    app.component('Yc' + _Checkbox.name, _Checkbox);
    app.component('Yc' + _CheckboxGroup.name, _CheckboxGroup);
  },
});

export { _CheckboxGroup as CheckboxGroup };

declare module 'vue' {
  interface GlobalComponents {
    YcCheckbox: typeof Checkbox;
    YcCheckboxGroup: typeof _CheckboxGroup;
  }
}

export default Checkbox;
