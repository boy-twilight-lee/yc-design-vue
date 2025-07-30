import { defineComponent, toRefs, computed, withDirectives, openBlock, createElementBlock, normalizeStyle, renderSlot, vShow } from "vue";
import "../node_modules/tinycolor2/esm/tinycolor.js";
import { getBreakpointValue } from "../_shared/utils/dom.js";
import { valueToPx } from "../_shared/utils/fn.js";
import "../_shared/utils/time.js";
import "../Empty/index.js";
import "../_shared/icons/_Icon.vue.js";
import useContext from "./hooks/useContext.js";
const _sfc_main = /* @__PURE__ */ defineComponent({
  ...{
    name: "GridItem"
  },
  __name: "GridItem",
  props: {
    span: { default: 1 },
    offset: { default: 0 },
    suffix: { type: Boolean, default: false }
  },
  setup(__props) {
    const props = __props;
    const { span: _span, offset: _offset, suffix } = toRefs(props);
    const {
      cols,
      colGap,
      collapsed,
      collapsedRows,
      spanMap,
      breakpoint,
      collectSpan
    } = useContext().inject();
    const offset = computed(() => {
      return getBreakpointValue(breakpoint.value, _offset.value);
    });
    const span = computed(() => {
      const result = getBreakpointValue(breakpoint.value, _span.value) + offset.value;
      return result >= cols.value ? cols.value : result;
    });
    const style = computed(() => {
      const start = suffix.value ? cols.value - span.value + 1 : `span ${span.value}`;
      return {
        gridColumn: `${start} / span ${span.value}`,
        marginLeft: offset.value ? `calc(${100 / span.value * offset.value}% + ${valueToPx(offset.value * colGap.value)})` : ""
      };
    });
    const { id } = collectSpan(span, suffix);
    const isOverflow = computed(() => {
      if (!collapsed.value)
        return false;
      const values = [...spanMap.values()];
      const totalSpan = cols.value * collapsedRows.value;
      const calcSpan = values.filter(({ suffix: suffix2 }) => !suffix2).reduce((pre, cur) => pre + cur.span, 0);
      return calcSpan > totalSpan;
    });
    const isCollapsed = computed(() => {
      if (!collapsed.value || suffix.value)
        return false;
      const values = [...spanMap.values()];
      const suffixSpan = values.filter(({ suffix: suffix2 }) => suffix2).reduce((pre, { span: span2 }) => pre + span2, 0);
      const totalSpan = cols.value * collapsedRows.value;
      const calcSpan = values.filter(({ suffix: suffix2 }) => !suffix2);
      let curSpan = 0;
      for (let { id: _id, span: span2 } of calcSpan) {
        curSpan += span2;
        if (_id == id)
          break;
      }
      return curSpan > totalSpan - suffixSpan;
    });
    return (_ctx, _cache) => {
      return withDirectives((openBlock(), createElementBlock("div", {
        class: "yc-grid-item",
        style: normalizeStyle(style.value)
      }, [
        renderSlot(_ctx.$slots, "default", { overflow: isOverflow.value })
      ], 4)), [
        [vShow, !isCollapsed.value]
      ]);
    };
  }
});
export {
  _sfc_main as default
};
