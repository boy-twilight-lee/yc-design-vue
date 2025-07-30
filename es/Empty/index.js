import _Empty from "./index.vue.js";
const Empty = Object.assign(_Empty, {
  install: (app) => {
    app.component("Yc" + _Empty.name, _Empty);
  }
});
export {
  Empty as default
};
