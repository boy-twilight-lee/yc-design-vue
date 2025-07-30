import { defineComponent, toRefs, openBlock, createElementBlock, normalizeClass, unref, renderSlot, createCommentVNode, createElementVNode } from "vue";
import useContext from "./hooks/useContext.js";
const _hoisted_1 = {
  key: 0,
  class: "yc-dropdown-option-icon"
};
const _hoisted_2 = { class: "yc-dropdown-option-content text-ellipsis" };
const _hoisted_3 = {
  key: 1,
  class: "yc-dropdown-option-suffix"
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  ...{
    name: "Doption"
  },
  __name: "Doption",
  props: {
    value: { type: [String, Number, Boolean, Object] },
    disabled: { type: Boolean, default: false },
    isSubmenu: { type: Boolean, default: false },
    isActive: { type: Boolean, default: false }
  },
  emits: ["click"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emits = __emit;
    const { value: optionValue, disabled, isSubmenu } = toRefs(props);
    const { select, theme } = useContext().inject();
    const handleClick = (ev) => {
      if (disabled.value)
        return;
      emits("click", ev);
      if (isSubmenu.value)
        return;
      select(optionValue.value, ev);
    };
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", {
        class: normalizeClass([
          "yc-dropdown-option",
          `yc-dropdown-option-theme-${unref(theme)}`,
          {
            "yc-dropdown-option-active": _ctx.isActive,
            "yc-dropdown-option-disabled": unref(disabled),
            "yc-dropdown-option-has-suffix": _ctx.$slots.suffix
          }
        ]),
        onClick: handleClick
      }, [
        _ctx.$slots.icon ? (openBlock(), createElementBlock("div", _hoisted_1, [
          renderSlot(_ctx.$slots, "icon", {}, void 0, true)
        ])) : createCommentVNode("", true),
        createElementVNode("div", _hoisted_2, [
          renderSlot(_ctx.$slots, "default", {}, void 0, true)
        ]),
        _ctx.$slots.suffix ? (openBlock(), createElementBlock("div", _hoisted_3, [
          renderSlot(_ctx.$slots, "suffix", {}, void 0, true)
        ])) : createCommentVNode("", true)
      ], 2);
    };
  }
});
export {
  _sfc_main as default
};
