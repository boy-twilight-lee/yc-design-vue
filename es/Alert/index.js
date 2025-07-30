import _Alert from "./index.vue.js";
const Alert = Object.assign(_Alert, {
  install: (app) => {
    app.component("Yc" + _Alert.name, _Alert);
  }
});
export {
  Alert as default
};
