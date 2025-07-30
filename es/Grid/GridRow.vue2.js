import { defineComponent, toRefs, openBlock, createElementBlock, normalizeClass, unref, normalizeStyle, renderSlot } from "vue";
import "../node_modules/tinycolor2/esm/tinycolor.js";
import { mediaQueryHandler } from "../_shared/utils/dom.js";
import { valueToPx } from "../_shared/utils/fn.js";
import "../_shared/utils/time.js";
import "../Empty/index.js";
import "../_shared/icons/_Icon.vue.js";
import useContext from "./hooks/useContext.js";
const _sfc_main = /* @__PURE__ */ defineComponent({
  ...{
    name: "Row"
  },
  __name: "GridRow",
  props: {
    gutter: { default: 0 },
    justify: { default: "start" },
    align: { default: "start" },
    div: { type: Boolean, default: false },
    wrap: { type: Boolean, default: true }
  },
  setup(__props) {
    const props = __props;
    const { div, wrap, justify, align } = toRefs(props);
    const { breakpoint, gutter } = useContext().provide(props);
    mediaQueryHandler((name) => {
      breakpoint.value = name;
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", {
        class: normalizeClass([
          {
            "yc-row": !unref(div),
            "yc-row-wrap": unref(wrap) && !unref(div),
            [`yc-row-align-${unref(align)}`]: !unref(div),
            [`yc-row-justify-${unref(justify)}`]: !unref(div)
          }
        ]),
        style: normalizeStyle({
          margin: `0 ${unref(valueToPx)(-unref(gutter)[0] / 2)}`
        })
      }, [
        renderSlot(_ctx.$slots, "default", {}, void 0, true)
      ], 6);
    };
  }
});
export {
  _sfc_main as default
};
