import { defineComponent, openBlock, createElementBlock, normalizeClass, renderSlot, Fragment, renderList, unref, createBlock, createSlots, withCtx, createTextVNode, toDisplayString, mergeProps } from "vue";
import useContext from "./hooks/useContext.js";
import _Radio from "./Radio.vue.js";
const _sfc_main = /* @__PURE__ */ defineComponent({
  ...{
    name: "RadioGroup"
  },
  __name: "RadioGroup",
  props: {
    modelValue: { type: [String, Number, Boolean], default: void 0 },
    defaultValue: { type: [String, Number, Boolean], default: "" },
    size: { default: void 0 },
    type: { default: "radio" },
    options: { default: () => [] },
    direction: { default: "horizontal" },
    disabled: { type: Boolean, default: false }
  },
  emits: ["update:modelValue", "change"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emits = __emit;
    const { options } = useContext().provide(props, emits);
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", {
        class: normalizeClass([
          _ctx.type == "radio" ? "yc-radio-group" : "yc-radio-button-group",
          _ctx.type == "radio" ? `yc-radio-group-direction-${_ctx.direction}` : `yc-radio-button-group-size-${_ctx.size}`
        ])
      }, [
        renderSlot(_ctx.$slots, "default"),
        (openBlock(true), createElementBlock(Fragment, null, renderList(unref(options), (item, index) => {
          return openBlock(), createBlock(_Radio, {
            key: index,
            value: item.value,
            disabled: item.disabled
          }, createSlots({
            default: withCtx(() => [
              renderSlot(_ctx.$slots, "label", { data: item }, () => [
                createTextVNode(toDisplayString(item.label), 1)
              ])
            ]),
            _: 2
          }, [
            _ctx.$slots.radio ? {
              name: "radio",
              fn: withCtx((scope) => [
                renderSlot(_ctx.$slots, "radio", mergeProps({ ref_for: true }, scope))
              ]),
              key: "0"
            } : void 0
          ]), 1032, ["value", "disabled"]);
        }), 128))
      ], 2);
    };
  }
});
export {
  _sfc_main as default
};
