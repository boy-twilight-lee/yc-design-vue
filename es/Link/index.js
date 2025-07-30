import _Link from "./index.vue.js";
const Link = Object.assign(_Link, {
  install: (app) => {
    app.component("Yc" + _Link.name, _Link);
  }
});
export {
  Link as default
};
