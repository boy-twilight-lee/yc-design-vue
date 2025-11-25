import { App } from 'vue';
import _Tabs from './Tabs.vue';
import _TabPane from './TabPane.vue';

export type TabsInstance = InstanceType<typeof _Tabs>;
export type TabPaneInstance = InstanceType<typeof _TabPane>;
export * from './type';

const Tabs = Object.assign(_Tabs, {
  install: (app: App) => {
    app.component('Yc' + _Tabs.name, _Tabs);
    app.component('Yc' + _TabPane.name, _TabPane);
  },
});

export { _TabPane as TabPane };

export default Tabs;
