import { App } from 'vue';
import _Spin from './index.vue';

export type SpinInstance = InstanceType<typeof _Spin>;
export * from './type';

const Spin = Object.assign(_Spin, {
  install: (app: App) => {
    app.component('Yc' + _Spin.name, _Spin);
  },
});

export default Spin;
