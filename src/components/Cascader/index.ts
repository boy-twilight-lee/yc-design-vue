import { App } from 'vue';
import _Cascader from './Cascader.vue';
import _CascaderPanel from './CascaderDataPanel.vue';

export type CascaderInstance = InstanceType<typeof _Cascader>;
export * from './type';

const Cascader = Object.assign(_Cascader, {
  install: (app: App) => {
    app.component('Yc' + _Cascader.name, _Cascader);
    app.component('Yc' + _CascaderPanel.name, _CascaderPanel);
  },
});

export { _CascaderPanel as CascaderPanel };

export default Cascader;
