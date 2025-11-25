import { App } from 'vue';
import _Switch from './index.vue';

export type SwitchInstance = InstanceType<typeof _Switch>;
export * from './type';

const Switch = Object.assign(_Switch, {
  install: (app: App) => {
    app.component('Yc' + _Switch.name, _Switch);
  },
});

export default Switch;
