import { App } from 'vue';
import _Affix from './index.vue';

export type AffixInstance = InstanceType<typeof _Affix>;
export * from './type';

const Affix = Object.assign(_Affix, {
  install: (app: App) => {
    app.component('Yc' + _Affix.name, _Affix);
  },
});

export default Affix;
