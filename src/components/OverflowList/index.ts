import { App } from 'vue';
import _OverflowList from './index.vue';

export type OverflowListInstance = InstanceType<typeof _OverflowList>;
export * from './type';

const OverflowList = Object.assign(_OverflowList, {
  install: (app: App) => {
    app.component('Yc' + _OverflowList.name, _OverflowList);
  },
});

declare module 'vue' {
  interface GlobalComponents {
    YcOverflowList: typeof OverflowList;
  }
}

export default OverflowList;
