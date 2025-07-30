import { defineComponent, ref, onMounted, openBlock, createBlock, mergeProps, withCtx, resolveDynamicComponent, unref, createElementVNode } from "vue";
import "../node_modules/tinycolor2/esm/tinycolor.js";
import "../_shared/utils/dom.js";
import "../_shared/utils/time.js";
import { getSlotFunction } from "../_shared/utils/vue-utils.js";
import "../Empty/index.js";
import "../_shared/icons/_Icon.vue.js";
import _Drawer from "./Drawer.vue.js";
const _hoisted_1 = { class: "yc-drawer-body-content" };
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "DrawerService",
  props: {
    placement: { default: "right" },
    title: { type: [String, Array, Function], default: "" },
    mask: { type: Boolean, default: true },
    maskClosable: { type: Boolean, default: true },
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
    unmountOnClose: { type: Boolean, default: false },
    width: { default: 250 },
    height: { default: 250 },
    popupContainer: { default: "yc-overlay-drawer" },
    drawerStyle: { default: () => {
      return {};
    } },
    escToClose: { type: Boolean, default: true },
    renderToBody: { type: Boolean, default: false },
    header: { type: Boolean, default: true },
    footer: { type: Boolean, default: true },
    hideCancel: { type: Boolean, default: false },
    onBeforeCancel: { type: Function, default: () => {
      return true;
    } },
    onBeforeOk: { type: Function, default: () => {
      return true;
    } },
    content: {},
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
      return openBlock(), createBlock(_Drawer, mergeProps(props, {
        visible: visible.value,
        "onUpdate:visible": _cache[0] || (_cache[0] = ($event) => visible.value = $event),
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
          (openBlock(), createBlock(resolveDynamicComponent(unref(getSlotFunction)(_ctx.title))))
        ]),
        default: withCtx(() => [
          createElementVNode("div", _hoisted_1, [
            (openBlock(), createBlock(resolveDynamicComponent(unref(getSlotFunction)(_ctx.content))))
          ])
        ]),
        _: 1
      }, 16, ["visible"]);
    };
  }
});
export {
  _sfc_main as default
};
