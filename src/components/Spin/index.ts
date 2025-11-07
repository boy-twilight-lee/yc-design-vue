import { App } from 'vue';
import _Spin from './index.vue';

export type SpinInstance = InstanceType<typeof _Spin>;
export * from './type';

const Spin = Object.assign(_Spin, {
  install: (app: App) => {
    app.component('Yc' + _Spin.name, _Spin);
  },
});

declare module 'vue' {
  interface GlobalComponents {
    YcSpin: typeof Spin;
  }
}

export default Spin;
