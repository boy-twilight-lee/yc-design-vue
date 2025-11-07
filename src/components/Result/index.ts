import { App } from 'vue';
import _Result from './index.vue';

export type ResultInstance = InstanceType<typeof _Result>;
export * from './type';

const Result = Object.assign(_Result, {
  install: (app: App) => {
    app.component('Yc' + _Result.name, _Result);
  },
});

declare module 'vue' {
  interface GlobalComponents {
    YcResult: typeof Result;
  }
}

export default Result;
