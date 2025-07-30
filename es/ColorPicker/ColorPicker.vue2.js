import { defineComponent, openBlock, createBlock, unref, mergeProps, isRef, withCtx, createVNode, renderSlot, createElementVNode, normalizeClass, normalizeStyle, createElementBlock, toDisplayString, createCommentVNode } from "vue";
import { COLOR_PICKER_PRESET_COLORS } from "../_shared/constants/index.js";
import useContext from "./hooks/useContext.js";
import ColorPanel from "./ColorPanel.vue.js";
import Trigger from "../Trigger/index.js";
const _hoisted_1 = {
  key: 0,
  class: "yc-color-picker-value"
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  ...{
    name: "ColorPicker"
  },
  __name: "ColorPicker",
  props: {
    modelValue: { default: void 0 },
    defaultValue: { default: "#FF0000" },
    format: { default: "hex" },
    size: { default: void 0 },
    showText: { type: Boolean, default: false },
    showHistory: { type: Boolean, default: false },
    showPreset: { type: Boolean, default: false },
    disabled: { type: Boolean, default: false },
    disabledAlpha: { type: Boolean, default: false },
    hideTrigger: { type: Boolean, default: false },
    triggerProps: { default: () => {
      return {};
    } },
    historyColors: { default: () => [] },
    presetColors: { default: () => COLOR_PICKER_PRESET_COLORS }
  },
  emits: ["update:modelValue", "change", "popup-visible-change"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emits = __emit;
    const { popupVisible, computedColor, size } = useContext().provide(
      props,
      emits
    );
    return (_ctx, _cache) => {
      return !_ctx.hideTrigger ? (openBlock(), createBlock(unref(Trigger), mergeProps({
        key: 0,
        "popup-visible": unref(popupVisible),
        "onUpdate:popupVisible": _cache[0] || (_cache[0] = ($event) => isRef(popupVisible) ? popupVisible.value = $event : null),
        "popup-offset": 4,
        disabled: _ctx.disabled,
        "need-transform-origin": "",
        "animation-name": "slide-dynamic-origin",
        trigger: "click",
        position: "bl"
      }, _ctx.triggerProps, {
        onPopupVisibleChange: _cache[1] || (_cache[1] = (v) => _ctx.$emit("popup-visible-change", v, unref(computedColor)))
      }), {
        content: withCtx(() => [
          createVNode(ColorPanel)
        ]),
        default: withCtx(() => [
          renderSlot(_ctx.$slots, "default", {}, () => [
            createElementVNode("div", {
              class: normalizeClass([
                "yc-color-picker",
                `yc-color-picker-size-${unref(size)}`,
                {
                  "yc-color-picker-disabled": _ctx.disabled
                },
                _ctx.$attrs.class
              ]),
              style: normalizeStyle(_ctx.$attrs.style)
            }, [
              createElementVNode("div", {
                class: "yc-color-picker-preview",
                style: normalizeStyle({
                  backgroundColor: unref(computedColor)
                })
              }, null, 4),
              _ctx.showText ? (openBlock(), createElementBlock("span", _hoisted_1, toDisplayString(unref(computedColor)), 1)) : createCommentVNode("", true)
            ], 6)
          ], true)
        ]),
        _: 3
      }, 16, ["popup-visible", "disabled"])) : (openBlock(), createBlock(ColorPanel, { key: 1 }));
    };
  }
});
export {
  _sfc_main as default
};
