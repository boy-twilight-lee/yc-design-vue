import { App } from 'vue';
import _Breadcrumb from './Breadcrumb.vue';
import _BreadcrumbItem from './BreadcrumbItem.vue';

export type BreadcrumbInstance = InstanceType<typeof _Breadcrumb>;
export type BreadcrumbItemInstance = InstanceType<typeof _BreadcrumbItem>;
export * from './type';

const Breadcrumb = Object.assign(_Breadcrumb, {
  item: _BreadcrumbItem,
  install: (app: App) => {
    app.component('Yc' + _Breadcrumb.name, _Breadcrumb);
    app.component('Yc' + _BreadcrumbItem.name, _BreadcrumbItem);
  },
});

export { _BreadcrumbItem as BreadcrumbItem };

export default Breadcrumb;
