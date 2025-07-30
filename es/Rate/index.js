import _Rate from "./index.vue.js";
const Rate = Object.assign(_Rate, {
  install: (app) => {
    app.component("Yc" + _Rate.name, _Rate);
  }
});
export {
  Rate as default
};
