import { defineComponent, toRefs, computed, openBlock, createBlock, mergeProps, createSlots, withCtx, renderSlot, normalizeProps, guardReactiveProps } from "vue";
import TypographyBase from "./TypographyBase.vue.js";
const _sfc_main = /* @__PURE__ */ defineComponent({
  ...{
    name: "TypographyTitle"
  },
  __name: "TypographyTitle",
  props: {
    heading: { default: 1 }
  },
  setup(__props) {
    const props = __props;
    const { heading } = toRefs(props);
    const tag = computed(() => {
      return [1, 2, 3, 4, 5, 6].includes(heading.value) ? `h${heading.value}` : "h1";
    });
    return (_ctx, _cache) => {
      return openBlock(), createBlock(TypographyBase, mergeProps({ tag: tag.value }, _ctx.$attrs), createSlots({
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
      ]), 1040, ["tag"]);
    };
  }
});
export {
  _sfc_main as default
};
