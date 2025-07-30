import { h, render } from "vue";
import _Modal from "./Modal.vue.js";
import _sfc_main from "./ModalService.vue.js";
import "./ModalService.vue2.js";
let container;
const open = (props) => {
  if (!container) {
    container = document.createElement("div");
    container.className = "yc-overlay yc-overlay-modal";
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
const modalMethod = {
  open,
  ...Object.fromEntries(
    ["info", "warning", "error", "success", "confirm"].map((type) => {
      return [
        type,
        (props) => {
          return open({
            ...props,
            type,
            simple: true,
            hideCancel: type != "confirm",
            width: 400
          });
        }
      ];
    })
  )
};
const Modal = Object.assign(_Modal, {
  install: (app) => {
    app.component("Yc" + _Modal.name, _Modal);
    app.config.globalProperties.$modal = Object.assign(Modal, modalMethod);
  },
  ...modalMethod
});
export {
  Modal as default
};
