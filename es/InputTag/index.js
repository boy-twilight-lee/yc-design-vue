import _InputTag from "./index.vue.js";
const InputTag = Object.assign(_InputTag, {
  install: (app) => {
    app.component("Yc" + _InputTag.name, _InputTag);
  }
});
export {
  InputTag as default
};
