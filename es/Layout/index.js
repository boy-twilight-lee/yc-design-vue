import _Layout from "./Layout.vue.js";
import LayoutHeader from "./LayoutHeader.vue.js";
import LayoutFooter from "./LayoutFooter.vue.js";
import LayoutContent from "./LayoutContent.vue.js";
import LayoutSider from "./LayoutSider.vue.js";
const Layout = Object.assign(_Layout, {
  content: LayoutContent,
  header: LayoutHeader,
  footer: LayoutFooter,
  sider: LayoutSider,
  install: (app) => {
    app.component("Yc" + _Layout.name, _Layout);
    app.component("Yc" + LayoutHeader.name, LayoutHeader);
    app.component("Yc" + LayoutFooter.name, LayoutFooter);
    app.component("Yc" + LayoutContent.name, LayoutContent);
    app.component("Yc" + LayoutSider.name, LayoutSider);
  }
});
export {
  LayoutContent,
  LayoutFooter,
  LayoutHeader,
  LayoutSider,
  Layout as default
};
