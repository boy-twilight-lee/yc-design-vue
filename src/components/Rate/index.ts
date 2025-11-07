import { App } from 'vue';
import _Rate from './index.vue';

export type RateInstance = InstanceType<typeof _Rate>;
export * from './type';

const Rate = Object.assign(_Rate, {
  install: (app: App) => {
    app.component('Yc' + _Rate.name, _Rate);
  },
});

declare module 'vue' {
  interface GlobalComponents {
    YcRate: typeof Rate;
  }
}

export default Rate;
