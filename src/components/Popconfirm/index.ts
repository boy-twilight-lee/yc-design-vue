import { App } from 'vue';
import _Popconfirm from './index.vue';

export type PopconfirmInstance = InstanceType<typeof _Popconfirm>;
export * from './type';

const Popconfirm = Object.assign(_Popconfirm, {
  install: (app: App) => {
    app.component('Yc' + _Popconfirm.name, _Popconfirm);
  },
});

declare module 'vue' {
  interface GlobalComponents {
    YcPopconfirm: typeof Popconfirm;
  }
}

export default Popconfirm;
