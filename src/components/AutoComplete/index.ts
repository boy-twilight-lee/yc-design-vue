import { App } from 'vue';
import _AutoComplete from './index.vue';

export type AutoCompleteInstance = InstanceType<typeof _AutoComplete>;
export * from './type';

const AutoComplete = Object.assign(_AutoComplete, {
  install: (app: App) => {
    app.component('Yc' + _AutoComplete.name, _AutoComplete);
  },
});

declare module 'vue' {
  interface GlobalComponents {
    YcAutoComplete: typeof AutoComplete;
  }
}

export default AutoComplete;
