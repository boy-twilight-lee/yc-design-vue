import { App } from 'vue';
import _Layout from './Layout.vue';
import _LayoutHeader from './LayoutHeader.vue';
import _LayoutFooter from './LayoutFooter.vue';
import _LayoutContent from './LayoutContent.vue';
import _LayoutSider from './LayoutSider.vue';

export type LayoutInstance = InstanceType<typeof _Layout>;
export type LayoutHeaderInstance = InstanceType<typeof _LayoutHeader>;
export type LayoutFooterInstance = InstanceType<typeof _LayoutFooter>;
export type LayoutContentInstance = InstanceType<typeof _LayoutContent>;
export type LayoutSiderInstance = InstanceType<typeof _LayoutSider>;
export * from './type';

const Layout = Object.assign(_Layout, {
  content: _LayoutContent,
  header: _LayoutHeader,
  footer: _LayoutFooter,
  sider: _LayoutSider,
  install: (app: App) => {
    app.component('Yc' + _Layout.name, _Layout);
    app.component('Yc' + _LayoutHeader.name, _LayoutHeader);
    app.component('Yc' + _LayoutFooter.name, _LayoutFooter);
    app.component('Yc' + _LayoutContent.name, _LayoutContent);
    app.component('Yc' + _LayoutSider.name, _LayoutSider);
  },
});

export {
  _LayoutHeader as LayoutHeader,
  _LayoutSider as LayoutSider,
  _LayoutFooter as LayoutFooter,
  _LayoutContent as LayoutContent,
};

export default Layout;
