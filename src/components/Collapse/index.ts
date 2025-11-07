import { App } from 'vue';
import _Collapse from './Collapse.vue';
import _CollapseItem from './CollapseItem.vue';

export type CollapseInstance = InstanceType<typeof _Collapse>;
export type CollapseItemInstance = InstanceType<typeof _CollapseItem>;
export * from './type';

const Collapse = Object.assign(_Collapse, {
  item: _CollapseItem,
  install: (app: App) => {
    app.component('Yc' + _Collapse.name, _Collapse);
    app.component('Yc' + _CollapseItem.name, _CollapseItem);
  },
});

export { _CollapseItem as CollapseItem };

export default Collapse;
