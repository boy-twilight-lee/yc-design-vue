import _Tag from "./index.vue.js";
const Tag = Object.assign(_Tag, {
  install: (app) => {
    app.component("Yc" + _Tag.name, _Tag);
  }
});
export {
  Tag as default
};
