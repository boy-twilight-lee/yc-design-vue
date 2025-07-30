import { defineComponent, openBlock, createBlock, mergeProps, createSlots, withCtx, renderSlot, normalizeProps, guardReactiveProps } from "vue";
import TypographyBase from "./TypographyBase.vue.js";
const _sfc_main = /* @__PURE__ */ defineComponent({
  ...{
    name: "TypographyParagraph"
  },
  __name: "TypographyParagraph",
  props: {
    blockquote: { type: Boolean, default: false },
    spacing: { default: "default" }
  },
  setup(__props) {
    return (_ctx, _cache) => {
      return openBlock(), createBlock(TypographyBase, mergeProps(_ctx.$attrs, {
        tag: _ctx.blockquote ? "blockquote" : "div",
        class: [`yc-typography-spacing-${_ctx.spacing}`]
      }), createSlots({
        default: withCtx(() => [
          renderSlot(_ctx.$slots, "default", {}, void 0, true)
        ]),
        _: 2
      }, [
        _ctx.$slots["copy-icon"] ? {
          name: "copy-icon",
          fn: withCtx((scope) => [
            renderSlot(_ctx.$slots, "copy-icon", normalizeProps(guardReactiveProps(scope)), void 0, true)
          ]),
          key: "0"
        } : void 0,
        _ctx.$slots["copy-tooltip"] ? {
          name: "copy-tooltip",
          fn: withCtx((scope) => [
            renderSlot(_ctx.$slots, "copy-tooltip", normalizeProps(guardReactiveProps(scope)), void 0, true)
          ]),
          key: "1"
        } : void 0,
        _ctx.$slots["expand-node"] ? {
          name: "expand-node",
          fn: withCtx((scope) => [
            renderSlot(_ctx.$slots, "expand-node", normalizeProps(guardReactiveProps(scope)), void 0, true)
          ]),
          key: "2"
        } : void 0
      ]), 1040, ["tag", "class"]);
    };
  }
});
export {
  _sfc_main as default
};
