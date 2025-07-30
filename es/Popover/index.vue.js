import { defineComponent, toRefs, openBlock, createBlock, unref, mergeProps, isRef, withCtx, createElementBlock, renderSlot, createTextVNode, toDisplayString, createCommentVNode, createElementVNode } from "vue";
import "../node_modules/tinycolor2/esm/tinycolor.js";
import "../_shared/utils/dom.js";
import "../_shared/utils/time.js";
import "../Empty/index.js";
import "../_shared/icons/_Icon.vue.js";
import useControlValue from "../_shared/utils/control.js";
import Trigger from "../Trigger/index.js";
const _hoisted_1 = {
  key: 0,
  class: "yc-popover-title"
};
const _hoisted_2 = { class: "yc-popover-content" };
const _sfc_main = /* @__PURE__ */ defineComponent({
  ...{
    name: "Popover"
  },
  __name: "index",
  props: {
    popupVisible: { type: Boolean, default: void 0 },
    defaultPopupVisible: { type: Boolean, default: false },
    title: { default: "" },
    content: { default: "" },
    trigger: { default: "hover" },
    position: { default: "bottom" },
    contentClass: { default: "" },
    contentStyle: { default: () => {
      return {};
    } },
    arrowClass: { default: "" },
    arrowStyle: { default: () => {
      return {};
    } },
    popupContainer: { default: void 0 },
    triggerProps: { default: () => {
      return {};
    } }
  },
  emits: ["update:popupVisible", "popup-visible-change"],
  setup(__props, { expose: __expose, emit: __emit }) {
    const props = __props;
    const emits = __emit;
    const { popupVisible, defaultPopupVisible } = toRefs(props);
    const computedVisible = useControlValue(
      popupVisible,
      defaultPopupVisible.value,
      (val) => {
        emits("update:popupVisible", val);
        emits("popup-visible-change", val);
      }
    );
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
        trigger: _ctx.trigger,
        position: _ctx.position,
        "popup-container": _ctx.popupContainer,
        "arrow-class": ["yc-popover-popup-arrow ", _ctx.arrowClass],
        "arrow-style": _ctx.arrowStyle,
        "content-class": ["yc-popover-popup-content", _ctx.contentClass],
        "content-style": _ctx.contentStyle,
        "popup-offset": 10,
        class: ["yc-popover", _ctx.$attrs.class],
        style: _ctx.$attrs.style,
        "animation-name": "zoom-in-fade-out",
        "need-transform-origin": "",
        "show-arrow": ""
      }, _ctx.triggerProps), {
        content: withCtx(() => [
          _ctx.$slots.title || _ctx.title ? (openBlock(), createElementBlock("div", _hoisted_1, [
            renderSlot(_ctx.$slots, "title", {}, () => [
              createTextVNode(toDisplayString(_ctx.title), 1)
            ])
          ])) : createCommentVNode("", true),
          createElementVNode("div", _hoisted_2, [
            renderSlot(_ctx.$slots, "content", {}, () => [
              createTextVNode(toDisplayString(_ctx.content), 1)
            ])
          ])
        ]),
        default: withCtx(() => [
          renderSlot(_ctx.$slots, "default")
        ]),
        _: 3
      }, 16, ["popup-visible", "trigger", "position", "popup-container", "arrow-class", "arrow-style", "content-class", "content-style", "class", "style"]);
    };
  }
});
export {
  _sfc_main as default
};
