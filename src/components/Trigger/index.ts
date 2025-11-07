import { App } from 'vue';
import _Trigger from './index.vue';

export type TriggerInstance = InstanceType<typeof _Trigger>;
export * from './type';

const Trigger = Object.assign(_Trigger, {
  install: (app: App) => {
    app.component('Yc' + _Trigger.name, _Trigger);
  },
});

declare module 'vue' {
  interface GlobalComponents {
    YcTrigger: typeof Trigger;
  }
}

export default Trigger;
