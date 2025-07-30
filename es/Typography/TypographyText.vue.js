import { defineComponent, openBlock, createBlock, normalizeProps, guardReactiveProps, createSlots, withCtx, renderSlot } from "vue";
import TypographyBase from "./TypographyBase.vue.js";
const _sfc_main = /* @__PURE__ */ defineComponent({
  ...{
    name: "TypographyText"
  },
  __name: "TypographyText",
  setup(__props) {
    return (_ctx, _cache) => {
      return openBlock(), createBlock(TypographyBase, normalizeProps(guardReactiveProps(_ctx.$attrs)), createSlots({
        default: withCtx(() => [
          renderSlot(_ctx.$slots, "default")
        ]),
        _: 2
      }, [
        _ctx.$slots["copy-icon"] ? {
          name: "copy-icon",
          fn: withCtx((scope) => [
            renderSlot(_ctx.$slots, "copy-icon", normalizeProps(guardReactiveProps(scope)))
          ]),
          key: "0"
        } : void 0,
        _ctx.$slots["copy-tooltip"] ? {
          name: "copy-tooltip",
          fn: withCtx((scope) => [
            renderSlot(_ctx.$slots, "copy-tooltip", normalizeProps(guardReactiveProps(scope)))
          ]),
          key: "1"
        } : void 0,
        _ctx.$slots["expand-node"] ? {
          name: "expand-node",
          fn: withCtx((scope) => [
            renderSlot(_ctx.$slots, "expand-node", normalizeProps(guardReactiveProps(scope)))
          ]),
          key: "2"
        } : void 0
      ]), 1040);
    };
  }
});
export {
  _sfc_main as default
};
