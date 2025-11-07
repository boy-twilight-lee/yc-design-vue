import { App } from 'vue';
import _Split from './index.vue';

export type SplitInstance = InstanceType<typeof _Split>;
export * from './type';

const Split = Object.assign(_Split, {
  install: (app: App) => {
    app.component('Yc' + _Split.name, _Split);
  },
});

declare module 'vue' {
  interface GlobalComponents {
    YcSplit: typeof Split;
  }
}
export default Split;
