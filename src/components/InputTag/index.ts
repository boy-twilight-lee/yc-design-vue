import { App } from 'vue';
import _InputTag from './index.vue';

export type InputTagInstance = InstanceType<typeof _InputTag>;
export * from './type';

const InputTag = Object.assign(_InputTag, {
  install: (app: App) => {
    app.component('Yc' + _InputTag.name, _InputTag);
  },
});

export default InputTag;
