import { App } from 'vue';
import _Radio from './Radio.vue';
import _RadioGroup from './RadioGroup.vue';

export type RadioInstance = InstanceType<typeof _Radio>;
export type RadioGroupInstance = InstanceType<typeof _RadioGroup>;
export * from './type';

const Radio = Object.assign(_Radio, {
  group: _RadioGroup,
  install: (app: App) => {
    app.component('Yc' + _Radio.name, _Radio);
    app.component('Yc' + _RadioGroup.name, _RadioGroup);
  },
});

export { _RadioGroup as RadioGroup };

export default Radio;
