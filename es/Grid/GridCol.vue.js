import { defineComponent, toRefs, computed, openBlock, createElementBlock, normalizeClass, unref, normalizeStyle, renderSlot } from "vue";
import "../node_modules/tinycolor2/esm/tinycolor.js";
import { getBreakpointValue } from "../_shared/utils/dom.js";
import { valueToPx } from "../_shared/utils/fn.js";
import "../_shared/utils/time.js";
import "../Empty/index.js";
import "../_shared/icons/_Icon.vue.js";
import useContext from "./hooks/useContext.js";
const _sfc_main = /* @__PURE__ */ defineComponent({
  ...{
    name: "Col"
  },
  __name: "GridCol",
  props: {
    span: { default: 24 },
    offset: { default: 0 },
    order: {},
    flex: {}
  },
  setup(__props) {
    const props = __props;
    const { span, order, offset, flex } = toRefs(props);
    const { gutter, div, breakpoint } = useContext().inject();
    const style = computed(() => {
      return {
        width: `calc((100% / 24) * ${getBreakpointValue(breakpoint.value, span.value, 24)})`,
        padding: `${valueToPx(gutter.value[1] / 2)} ${valueToPx(gutter.value[0] / 2)}`,
        marginLeft: offset.value ? `calc((100% / 24) * ${getBreakpointValue(breakpoint.value, offset.value, 0)})` : "",
        order: getBreakpointValue(breakpoint.value, order.value),
        flex: getBreakpointValue(breakpoint.value, flex.value)
      };
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", {
        class: normalizeClass([
          {
            "yc-col": !unref(div)
          }
        ]),
        style: normalizeStyle(style.value)
      }, [
        renderSlot(_ctx.$slots, "default")
      ], 6);
    };
  }
});
export {
  _sfc_main as default
};
