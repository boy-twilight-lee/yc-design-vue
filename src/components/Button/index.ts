import { App } from 'vue';
import _Button from './Button.vue';
import _ButtonGroup from './ButtonGroup.vue';

export type ButonInstance = InstanceType<typeof _Button>;
export type ButonGroupInstance = InstanceType<typeof _ButtonGroup>;
export * from './type';

const Button = Object.assign(_Button, {
  group: _ButtonGroup,
  install: (app: App) => {
    app.component('Yc' + _Button.name, _Button);
    app.component('Yc' + _ButtonGroup.name, _ButtonGroup);
  },
});

export { _ButtonGroup as ButtonGroup };

declare module 'vue' {
  interface GlobalComponents {
    YcButton: typeof Button;
    YcButtonGroup: typeof _ButtonGroup;
  }
}

export default Button;
