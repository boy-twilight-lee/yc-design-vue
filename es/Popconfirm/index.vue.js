import { defineComponent, toRefs, ref, openBlock, createBlock, unref, mergeProps, isRef, withCtx, createElementVNode, renderSlot, resolveDynamicComponent, createTextVNode, toDisplayString, createVNode } from "vue";
import { TYPE_ICON_MAP } from "../_shared/constants/index.js";
import "../node_modules/tinycolor2/esm/tinycolor.js";
import "../_shared/utils/dom.js";
import "../_shared/utils/time.js";
import "../Empty/index.js";
import "../_shared/icons/_Icon.vue.js";
import useControlValue from "../_shared/utils/control.js";
import useOnBeforeClose from "../Modal/hooks/useOnBeforeClose.js";
import Trigger from "../Trigger/index.js";
import Button from "../Button/index.js";
const _hoisted_1 = { class: "yc-popconfirm-body" };
const _hoisted_2 = { class: "yc-popconfirm-icon" };
const _hoisted_3 = { class: "yc-popconfirm-content" };
const _hoisted_4 = { class: "yc-popconfirm-footer" };
const _sfc_main = /* @__PURE__ */ defineComponent({
  ...{
    name: "Popconfirm"
  },
  __name: "index",
  props: {
    content: { default: "" },
    position: { default: "top" },
    popupVisible: { type: Boolean, default: void 0 },
    defaultPopupVisible: { type: Boolean, default: false },
    type: { default: "info" },
    okText: { default: "确定" },
    cancelText: { default: "取消" },
    okLoading: { type: Boolean, default: false },
    okButtonProps: { default: () => {
      return {};
    } },
    cancelButtonProps: { default: () => {
      return {};
    } },
    contentClass: { default: "" },
    contentStyle: { default: () => {
      return {};
    } },
    arrowClass: { default: "" },
    arrowStyle: { default: () => {
      return {};
    } },
    popupContainer: { default: void 0 },
    onBeforeOk: { type: Function, default: () => true },
    onBeforeCancel: { type: Function, default: () => true },
    triggerProps: { default: () => {
      return {};
    } }
  },
  emits: ["update:popupVisible", "popup-visible-change", "ok", "cancel"],
  setup(__props, { expose: __expose, emit: __emit }) {
    const props = __props;
    const emits = __emit;
    const { popupVisible, defaultPopupVisible, type } = toRefs(props);
    const { onBeforeOk, onBeforeCancel } = props;
    const asyncLoading = ref(false);
    const triggerRef = ref();
    const computedVisible = useControlValue(
      popupVisible,
      defaultPopupVisible.value,
      (val) => {
        emits("update:popupVisible", val);
        emits("popup-visible-change", val);
      }
    );
    const handleOk = () => {
      var _a;
      const isClose = useOnBeforeClose(
        "confirmBtn",
        asyncLoading,
        onBeforeOk,
        onBeforeCancel
      );
      if (!isClose)
        return;
      emits("ok");
      (_a = triggerRef.value) == null ? void 0 : _a.hide();
    };
    const handleCancel = () => {
      var _a;
      const isClose = useOnBeforeClose(
        "cancelBtn",
        asyncLoading,
        onBeforeOk,
        onBeforeCancel
      );
      if (!isClose)
        return;
      emits("cancel");
      (_a = triggerRef.value) == null ? void 0 : _a.hide();
    };
    __expose({
      show() {
        computedVisible.value = true;
      },
      hide() {
        computedVisible.value = false;
      }
    });
    return (_ctx, _cache) => {
      return openBlock(), createBlock(unref(Trigger), mergeProps({
        "popup-visible": unref(computedVisible),
        "onUpdate:popupVisible": _cache[0] || (_cache[0] = ($event) => isRef(computedVisible) ? computedVisible.value = $event : null),
        position: _ctx.position,
        "popup-container": _ctx.popupContainer,
        "arrow-class": [" yc-popconfirm-popup-arrow", _ctx.arrowClass],
        "arrow-style": _ctx.arrowStyle,
        "content-class": ["yc-popconfirm-popup-content", _ctx.contentClass],
        "content-style": _ctx.contentStyle,
        "popup-offset": 10,
        class: ["yc-popconfirm", `yc-popconfirm-${unref(type)}`, _ctx.$attrs.class],
        style: _ctx.$attrs.style,
        trigger: "click",
        "animation-name": "zoom-in-fade-out",
        "need-transform-origin": "",
        "show-arrow": "",
        ref_key: "triggerRef",
        ref: triggerRef
      }, _ctx.triggerProps), {
        content: withCtx(() => [
          createElementVNode("div", _hoisted_1, [
            createElementVNode("div", _hoisted_2, [
              renderSlot(_ctx.$slots, "icon", {}, () => [
                (openBlock(), createBlock(resolveDynamicComponent(unref(TYPE_ICON_MAP)[unref(type)])))
              ])
            ]),
            createElementVNode("div", _hoisted_3, [
              renderSlot(_ctx.$slots, "content", {}, () => [
                createTextVNode(toDisplayString(_ctx.content), 1)
              ])
            ])
          ]),
          createElementVNode("div", _hoisted_4, [
            createVNode(unref(Button), mergeProps({ size: "mini" }, _ctx.cancelButtonProps, { onClick: handleCancel }), {
              default: withCtx(() => [
                createTextVNode(toDisplayString(_ctx.cancelText), 1)
              ]),
              _: 1
            }, 16),
            createVNode(unref(Button), mergeProps({
              size: "mini",
              type: "primary",
              loading: _ctx.okLoading || asyncLoading.value
            }, _ctx.okButtonProps, { onClick: handleOk }), {
              default: withCtx(() => [
                createTextVNode(toDisplayString(_ctx.okText), 1)
              ]),
              _: 1
            }, 16, ["loading"])
          ])
        ]),
        default: withCtx(() => [
          renderSlot(_ctx.$slots, "default")
        ]),
        _: 3
      }, 16, ["popup-visible", "position", "popup-container", "arrow-class", "arrow-style", "content-class", "content-style", "class", "style"]);
    };
  }
});
export {
  _sfc_main as default
};
