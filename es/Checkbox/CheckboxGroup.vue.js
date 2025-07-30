import { defineComponent, openBlock, createElementBlock, normalizeClass, renderSlot, Fragment, renderList, unref, createBlock, createSlots, withCtx, createTextVNode, toDisplayString, mergeProps } from "vue";
import useContext from "./hooks/useContext.js";
import _Checkbox from "./Checkbox.vue.js";
const _sfc_main = /* @__PURE__ */ defineComponent({
  ...{
    name: "CheckboxGroup"
  },
  __name: "CheckboxGroup",
  props: {
    modelValue: { default: void 0 },
    defaultValue: { default: () => [] },
    max: { default: void 0 },
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
        class: normalizeClass(["yc-checkbox-group", `yc-checkbox-group-direction-${_ctx.direction}`])
      }, [
        renderSlot(_ctx.$slots, "default"),
        (openBlock(true), createElementBlock(Fragment, null, renderList(unref(options), (item, i) => {
          return openBlock(), createBlock(_Checkbox, {
            key: i,
            value: item.value,
            disabled: item.disabled,
            indeterminate: item.indeterminate
          }, createSlots({
            default: withCtx(() => [
              renderSlot(_ctx.$slots, "label", { data: item }, () => [
                createTextVNode(toDisplayString(item.label), 1)
              ])
            ]),
            _: 2
          }, [
            _ctx.$slots.checkbox ? {
              name: "checkbox",
              fn: withCtx((scope) => [
                renderSlot(_ctx.$slots, "checkbox", mergeProps({ ref_for: true }, scope))
              ]),
              key: "0"
            } : void 0
          ]), 1032, ["value", "disabled", "indeterminate"]);
        }), 128))
      ], 2);
    };
  }
});
export {
  _sfc_main as default
};
