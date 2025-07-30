import _Badge from "./index.vue.js";
const Badge = Object.assign(_Badge, {
  install: (app) => {
    app.component("Yc" + _Badge.name, _Badge);
  }
});
export {
  Badge as default
};
