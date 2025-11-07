import { App } from 'vue';
import _InputNumber from './InputNumber.vue';

export type InputNumberInstance = InstanceType<typeof _InputNumber>;
export * from './type';

const InputNumber = Object.assign(_InputNumber, {
  install: (app: App) => {
    app.component('Yc' + _InputNumber.name, _InputNumber);
  },
});

declare module 'vue' {
  interface GlobalComponents {
    YcInputNumber: typeof InputNumber;
  }
}

export default InputNumber;
