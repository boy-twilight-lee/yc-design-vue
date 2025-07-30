import { defineComponent, toRefs, computed, openBlock, createElementBlock, normalizeClass, unref, normalizeStyle, renderSlot, createCommentVNode } from "vue";
import "../node_modules/tinycolor2/esm/tinycolor.js";
import "../_shared/utils/dom.js";
import { valueToPx } from "../_shared/utils/fn.js";
import { isUndefined } from "../_shared/utils/is.js";
import "../_shared/utils/time.js";
import "../Empty/index.js";
import "../_shared/icons/_Icon.vue.js";
const _sfc_main = /* @__PURE__ */ defineComponent({
  ...{
    name: "Divider"
  },
  __name: "index",
  props: {
    direction: { default: "horizontal" },
    orientation: { default: "center" },
    type: { default: "solid" },
    size: { default: 1 },
    margin: { default: void 0 }
  },
  setup(__props) {
    const props = __props;
    const { size, margin: _margin, direction, type } = toRefs(props);
    const margin = computed(() => {
      if (isUndefined(_margin.value)) {
        return direction.value == "horizontal" ? "20px 0" : "0 12px";
      }
      return direction.value == "horizontal" ? `${valueToPx(_margin.value)} 0` : `0 ${valueToPx(_margin.value)}`;
    });
    const border = computed(
      () => `${valueToPx(size.value)} ${type.value} rgb(229, 230, 235)`
    );
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", {
        role: "separator",
        class: normalizeClass(["yc-divider", `yc-divider-direction-${unref(direction)}`]),
        style: normalizeStyle({
          margin: margin.value,
          borderLeft: unref(direction) == "vertical" ? border.value : "",
          borderBottom: unref(direction) == "horizontal" ? border.value : ""
        })
      }, [
        _ctx.$slots.default && unref(direction) != "vertical" ? (openBlock(), createElementBlock("div", {
          key: 0,
          class: normalizeClass(["yc-divider-text", `yc-divider-text-${_ctx.orientation}`])
        }, [
          renderSlot(_ctx.$slots, "default", {}, void 0, true)
        ], 2)) : createCommentVNode("", true)
      ], 6);
    };
  }
});
export {
  _sfc_main as default
};
