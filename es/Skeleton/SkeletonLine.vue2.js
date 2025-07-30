import { defineComponent, toRefs, computed, openBlock, createElementBlock, normalizeStyle, Fragment, renderList, unref } from "vue";
import "../node_modules/tinycolor2/esm/tinycolor.js";
import "../_shared/utils/dom.js";
import { valueToPx } from "../_shared/utils/fn.js";
import "../_shared/utils/time.js";
import "../Empty/index.js";
import "../_shared/icons/_Icon.vue.js";
const _sfc_main = /* @__PURE__ */ defineComponent({
  ...{
    name: "SkeletonLine"
  },
  __name: "SkeletonLine",
  props: {
    rows: { default: 1 },
    widths: { default: () => [] },
    lineHeight: { default: 20 },
    lineSpacing: { default: 15 }
  },
  setup(__props) {
    const props = __props;
    const { lineSpacing } = toRefs(props);
    const gap = computed(() => valueToPx(lineSpacing.value));
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", {
        class: "yc-skeleton-line",
        style: normalizeStyle({
          gap: gap.value
        })
      }, [
        (openBlock(true), createElementBlock(Fragment, null, renderList(_ctx.rows, (i) => {
          return openBlock(), createElementBlock("div", {
            class: "yc-skeleton-line-row",
            key: i,
            style: normalizeStyle({
              height: unref(valueToPx)(_ctx.lineHeight),
              width: _ctx.widths[i] ? unref(valueToPx)(_ctx.widths[i]) : "100%"
            })
          }, null, 4);
        }), 128))
      ], 4);
    };
  }
});
export {
  _sfc_main as default
};
