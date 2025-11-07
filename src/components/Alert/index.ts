import { App } from 'vue';
import _Alert from './index.vue';

export type AlertInstance = InstanceType<typeof _Alert>;
export * from './type';

const Alert = Object.assign(_Alert, {
  install: (app: App) => {
    app.component('Yc' + _Alert.name, _Alert);
  },
});

export default Alert;
