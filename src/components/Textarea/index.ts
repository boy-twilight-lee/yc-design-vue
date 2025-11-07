import { App } from 'vue';
import _Textarea from './index.vue';

export type TextareaInstance = InstanceType<typeof _Textarea>;
export * from './type';

const Textarea = Object.assign(_Textarea, {
  install: (app: App) => {
    app.component('Yc' + _Textarea.name, _Textarea);
  },
});

declare module 'vue' {
  interface GlobalComponents {
    YcTextarea: typeof Textarea;
  }
}

export default Textarea;
