import { defineComponent, toRefs, useAttrs, computed, openBlock, createElementBlock, mergeProps, unref, renderSlot } from "vue";
import "../../node_modules/tinycolor2/esm/tinycolor.js";
import "../utils/dom.js";
import { valueToPx } from "../utils/fn.js";
import "../utils/time.js";
import "../../Empty/index.js";
import "./_Icon.vue.js";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "_Icon",
  props: {
    strokeWidth: { default: 4 },
    strokeLinecap: { default: "butt" },
    strokeLinejoin: { default: "miter" },
    rotate: {},
    spin: { type: Boolean, default: false },
    size: {},
    color: {}
  },
  setup(__props) {
    const props = __props;
    const {
      size,
      spin,
      rotate,
      color,
      strokeLinecap,
      strokeLinejoin,
      strokeWidth
    } = toRefs(props);
    const $attrs = useAttrs();
    const style = computed(() => {
      let width = "";
      let height = "";
      if (Array.isArray(size.value)) {
        width = valueToPx(size.value[0]);
        height = valueToPx(size.value[1]);
      } else {
        width = size.value ? valueToPx(size.value) : "1em";
        height = size.value ? valueToPx(size.value) : "1em";
      }
      return {
        width,
        height,
        color: color.value ? color.value : "inherit",
        transform: rotate ? `rotate(${rotate.value}deg)` : "unset"
      };
    });
    const attrs = computed(() => {
      return {
        style: style.value,
        "stroke-width": strokeWidth.value,
        "stroke-linecap": strokeLinecap.value,
        "stroke-linejoin": strokeLinejoin.value,
        ...$attrs || {}
      };
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("svg", mergeProps({
        "aria-hidden": "true",
        focusable: "false",
        viewBox: "0 0 48 48",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        stroke: "currentColor",
        class: [
          "yc-icon",
          {
            "yc-icon-spin": unref(spin)
          }
        ]
      }, attrs.value), [
        renderSlot(_ctx.$slots, "default", {}, void 0, true)
      ], 16);
    };
  }
});
export {
  _sfc_main as default
};
