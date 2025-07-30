import _Anchor from "./Anchor.vue.js";
import AnchorLink from "./AnchorLink.vue.js";
const Anchor = Object.assign(_Anchor, {
  link: AnchorLink,
  install: (app) => {
    app.component("Yc" + _Anchor.name, _Anchor);
    app.component("Yc" + AnchorLink.name, AnchorLink);
  }
});
export {
  AnchorLink,
  Anchor as default
};
