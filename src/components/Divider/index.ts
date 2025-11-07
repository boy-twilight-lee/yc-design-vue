import { App } from 'vue';
import _Divider from './index.vue';

export type DividerInstance = InstanceType<typeof _Divider>;
export * from './type';

const Divider = Object.assign(_Divider, {
  install: (app: App) => {
    app.component('Yc' + _Divider.name, _Divider);
  },
});

declare module 'vue' {
  interface GlobalComponents {
    YcDivider: typeof Divider;
  }
}

export default Divider;
