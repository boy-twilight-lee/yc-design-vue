import _Transfer from "./Transfer.vue.js";
const Transfer = Object.assign(_Transfer, {
  install: (app) => {
    app.component("Yc" + _Transfer.name, _Transfer);
  }
});
export {
  Transfer as default
};
