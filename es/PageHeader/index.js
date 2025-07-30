import _PageHeader from "./index.vue.js";
const PageHeader = Object.assign(_PageHeader, {
  install: (app) => {
    app.component("Yc" + _PageHeader.name, _PageHeader);
  }
});
export {
  PageHeader as default
};
