import _Comment from "./index.vue.js";
const Comment = Object.assign(_Comment, {
  install: (app) => {
    app.component("Yc" + _Comment.name, _Comment);
  }
});
export {
  Comment as default
};
