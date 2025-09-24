import { App } from 'vue';
import _Input from './Input.vue';
import _InputGroup from './InputGroup.vue';

export type InputInstance = InstanceType<typeof _Input>;
export * from './type';

const Input = Object.assign(_Input, {
  group: _InputGroup,
  install: (app: App) => {
    app.component('Yc' + _Input.name, _Input);
    app.component('Yc' + _InputGroup.name, _InputGroup);
  },
});

export { _InputGroup as InputGroup };

declare module 'vue' {
  export interface GlobalComponents {
    YcInput: typeof Input;
    YcInputGroup: typeof _InputGroup;
  }
}

export default Input;
