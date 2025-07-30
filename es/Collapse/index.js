import _Collapse from "./Collapse.vue.js";
import CollapseItem from "./CollapseItem.vue.js";
const Collapse = Object.assign(_Collapse, {
  item: CollapseItem,
  install: (app) => {
    app.component("Yc" + _Collapse.name, _Collapse);
    app.component("Yc" + CollapseItem.name, CollapseItem);
  }
});
export {
  CollapseItem,
  Collapse as default
};
