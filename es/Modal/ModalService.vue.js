import { defineComponent, ref, onMounted, openBlock, createBlock, mergeProps, withCtx, createElementBlock, resolveDynamicComponent, unref, createCommentVNode, createElementVNode } from "vue";
import "../node_modules/tinycolor2/esm/tinycolor.js";
import "../_shared/utils/dom.js";
import "../_shared/utils/time.js";
import { getSlotFunction } from "../_shared/utils/vue-utils.js";
import "../Empty/index.js";
import "../_shared/icons/_Icon.vue.js";
import { TYPE_ICON_MAP } from "../_shared/constants/index.js";
import _Modal from "./Modal.vue.js";
const _hoisted_1 = {
  key: 0,
  class: "yc-modal-title-icon"
};
const _hoisted_2 = { class: "yc-modal-title-content text-ellipsis" };
const _hoisted_3 = { class: "yc-modal-body-content text-ellipsis" };
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "ModalService",
  props: {
    width: { default: 520 },
    top: { default: 100 },
    mask: { type: Boolean, default: true },
    title: { type: [String, Array, Function], default: "" },
    titleAlign: { default: "center" },
    alignCenter: { type: Boolean, default: true },
    unmountOnClose: { type: Boolean, default: false },
    maskClosable: { type: Boolean, default: true },
    hideCancel: { type: Boolean, default: false },
    closable: { type: Boolean, default: true },
    okText: { default: "确认" },
    cancelText: { default: "取消" },
    okLoading: { type: Boolean, default: false },
    okButtonProps: { default: () => {
      return {};
    } },
    cancelButtonProps: { default: () => {
      return {};
    } },
    footer: { type: Boolean, default: true },
    renderToBody: { type: Boolean, default: true },
    popupContainer: { default: ".yc-overlay-modal" },
    maskStyle: { default: () => {
      return {};
    } },
    modalClass: { default: "" },
    modalStyle: { default: () => {
      return {};
    } },
    escToClose: { type: Boolean, default: true },
    draggable: { type: Boolean, default: false },
    fullscreen: { type: Boolean, default: false },
    maskAnimationName: { default: "fade" },
    modalAnimationName: { default: "zoom-modal" },
    bodyClass: { default: "" },
    bodyStyle: { default: () => {
      return {};
    } },
    hideTitle: { type: Boolean, default: false },
    simple: { type: Boolean, default: false },
    onBeforeCancel: { type: Function, default: () => {
      return true;
    } },
    onBeforeOk: { type: Function, default: () => {
      return true;
    } },
    content: { type: [String, Array, Function], default: "" },
    type: {},
    onOk: {},
    onCancel: {},
    onOpen: {},
    onClose: {},
    onBeforeOpen: {},
    onBeforeClose: {},
    serviceClose: {}
  },
  setup(__props) {
    const props = __props;
    const { onClose, serviceClose } = props;
    const visible = ref(false);
    const handleClose = () => {
      serviceClose == null ? void 0 : serviceClose();
      onClose == null ? void 0 : onClose();
    };
    onMounted(() => {
      visible.value = true;
    });
    return (_ctx, _cache) => {
      return openBlock(), createBlock(_Modal, mergeProps(props, {
        visible: visible.value,
        "onUpdate:visible": _cache[0] || (_cache[0] = ($event) => visible.value = $event),
        "modal-class": [
          "yc-service-modal",
          {
            [`yc-service-modal-${_ctx.type}`]: !!_ctx.type
          }
        ],
        onOk: _cache[1] || (_cache[1] = ($event) => {
          var _a;
          return (_a = _ctx.onOk) == null ? void 0 : _a.call(_ctx);
        }),
        onCancel: _cache[2] || (_cache[2] = ($event) => {
          var _a;
          return (_a = _ctx.onCancel) == null ? void 0 : _a.call(_ctx);
        }),
        onBeforeOpen: _cache[3] || (_cache[3] = ($event) => {
          var _a;
          return (_a = _ctx.onBeforeOpen) == null ? void 0 : _a.call(_ctx);
        }),
        onBeforeClose: _cache[4] || (_cache[4] = ($event) => {
          var _a;
          return (_a = _ctx.onBeforeClose) == null ? void 0 : _a.call(_ctx);
        }),
        onOpen: _cache[5] || (_cache[5] = ($event) => {
          var _a;
          return (_a = _ctx.onOpen) == null ? void 0 : _a.call(_ctx);
        }),
        onClose: handleClose
      }), {
        title: withCtx(() => [
          _ctx.type ? (openBlock(), createElementBlock("span", _hoisted_1, [
            (openBlock(), createBlock(resolveDynamicComponent(unref(TYPE_ICON_MAP)[_ctx.type])))
          ])) : createCommentVNode("", true),
          createElementVNode("span", _hoisted_2, [
            (openBlock(), createBlock(resolveDynamicComponent(unref(getSlotFunction)(_ctx.title))))
          ])
        ]),
        default: withCtx(() => [
          createElementVNode("div", _hoisted_3, [
            (openBlock(), createBlock(resolveDynamicComponent(unref(getSlotFunction)(_ctx.content))))
          ])
        ]),
        _: 1
      }, 16, ["visible", "modal-class"]);
    };
  }
});
export {
  _sfc_main as default
};
