import { App } from 'vue';
import _Input from './Input.vue';
import _InputSearch from './InputSearch.vue';
import _InputPassword from './InputPassword.vue';
import _InputGroup from './InputGroup.vue';

export type InputInstance = InstanceType<typeof _Input>;
export type InputPasswordInstance = InstanceType<typeof _InputPassword>;
export type InputSearchInstance = InstanceType<typeof _InputSearch>;
export type InputGroupInstance = InstanceType<typeof _InputGroup>;
export * from './type';

const Input = Object.assign(_Input, {
  group: _InputGroup,
  password: _InputPassword,
  search: _InputSearch,
  install: (app: App) => {
    app.component('Yc' + _Input.name, _Input);
    app.component('Yc' + _InputSearch.name, _InputSearch);
    app.component('Yc' + _InputPassword.name, _InputPassword);
    app.component('Yc' + _InputGroup.name, _InputGroup);
  },
});

export {
  _InputGroup as InputGroup,
  _InputPassword as InputPassword,
  _InputSearch as InputSearch,
};

export default Input;
