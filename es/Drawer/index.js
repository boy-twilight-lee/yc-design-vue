import { h, render } from "vue";
import _Drawer from "./Drawer.vue.js";
import _sfc_main from "./DrawerService.vue.js";
let container;
const open = (props) => {
  if (!container) {
    container = document.createElement("div");
    container.className = "yc-overlay yc-overlay-drawer";
    document.body.append(container);
  }
  const close = () => {
    render(null, container);
  };
  const update = (updateProps) => {
    console.log("函数执行了", updateProps);
  };
  const vnode = h(_sfc_main, {
    ...props,
    serviceClose: close
  });
  render(vnode, container);
  return {
    close,
    update
  };
};
const Drawer = Object.assign(_Drawer, {
  install: (app) => {
    app.component("Yc" + _Drawer.name, _Drawer);
    app.config.globalProperties.$drawer = Object.assign(_Drawer, {
      open
    });
  }
});
export {
  Drawer as default
};
