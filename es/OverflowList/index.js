import _OverflowList from "./index.vue.js";
const OverflowList = Object.assign(_OverflowList, {
  install: (app) => {
    app.component("Yc" + _OverflowList.name, _OverflowList);
  }
});
export {
  OverflowList as default
};
