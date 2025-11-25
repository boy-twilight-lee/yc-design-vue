import { App } from 'vue';
import _Result from './index.vue';

export type ResultInstance = InstanceType<typeof _Result>;
export * from './type';

const Result = Object.assign(_Result, {
  install: (app: App) => {
    app.component('Yc' + _Result.name, _Result);
  },
});

export default Result;
