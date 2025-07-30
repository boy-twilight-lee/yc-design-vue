import _Breadcrumb from "./Breadcrumb.vue.js";
import BreadcrumbItem from "./BreadcrumbItem.vue.js";
const Breadcrumb = Object.assign(_Breadcrumb, {
  item: BreadcrumbItem,
  install: (app) => {
    app.component("Yc" + _Breadcrumb.name, _Breadcrumb);
    app.component("Yc" + BreadcrumbItem.name, BreadcrumbItem);
  }
});
export {
  BreadcrumbItem,
  Breadcrumb as default
};
