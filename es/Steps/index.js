import Step from "./Step.vue.js";
import _Steps from "./Steps.vue.js";
const Steps = Object.assign(_Steps, {
  step: Step,
  install: (app) => {
    app.component("Yc" + Step.name, Step);
    app.component("Yc" + _Steps.name, _Steps);
  }
});
export {
  Step,
  Steps as default
};
