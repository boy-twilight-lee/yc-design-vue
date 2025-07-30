import _VerificationCode from "./index.vue.js";
const VerificationCode = Object.assign(_VerificationCode, {
  install: (app) => {
    app.component("Yc" + _VerificationCode.name, _VerificationCode);
  }
});
export {
  VerificationCode as default
};
