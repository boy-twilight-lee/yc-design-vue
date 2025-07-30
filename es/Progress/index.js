import _Progress from "./Progress.vue.js";
const Progress = Object.assign(_Progress, {
  install: (app) => {
    app.component("Yc" + _Progress.name, _Progress);
  }
});
export {
  Progress as default
};
