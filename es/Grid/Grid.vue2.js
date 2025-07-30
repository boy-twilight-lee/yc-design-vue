import { defineComponent, openBlock, createElementBlock, normalizeStyle, unref, renderSlot } from "vue";
import "../node_modules/tinycolor2/esm/tinycolor.js";
import { mediaQueryHandler } from "../_shared/utils/dom.js";
import { valueToPx } from "../_shared/utils/fn.js";
import "../_shared/utils/time.js";
import "../Empty/index.js";
import "../_shared/icons/_Icon.vue.js";
import useContext from "./hooks/useContext.js";
const _sfc_main = /* @__PURE__ */ defineComponent({
  ...{
    name: "Grid"
  },
  __name: "Grid",
  props: {
    cols: { default: 24 },
    rowGap: { default: 0 },
    colGap: { default: 0 },
    collapsed: { type: Boolean, default: false },
    collapsedRows: { default: 1 }
  },
  setup(__props) {
    const props = __props;
    const { breakpoint, cols, rowGap, colGap } = useContext().provide(props);
    mediaQueryHandler((name) => {
      breakpoint.value = name;
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", {
        class: "yc-grid",
        style: normalizeStyle({
          gap: `${unref(valueToPx)(unref(rowGap))} ${unref(valueToPx)(unref(rowGap))}`,
          gridTemplateColumns: `repeat(${unref(cols)}, minmax(0px, 1fr))`
        })
      }, [
        renderSlot(_ctx.$slots, "default", {}, void 0, true)
      ], 4);
    };
  }
});
export {
  _sfc_main as default
};
