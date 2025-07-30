import _Result from "./index.vue.js";
const Result = Object.assign(_Result, {
  install: (app) => {
    app.component("Yc" + _Result.name, _Result);
  }
});
export {
  Result as default
};
