import _Split from "./index.vue.js";
const Split = Object.assign(_Split, {
  install: (app) => {
    app.component("Yc" + _Split.name, _Split);
  }
});
export {
  Split as default
};
