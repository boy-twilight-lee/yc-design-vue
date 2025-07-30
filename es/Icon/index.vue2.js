import { defineComponent, toRefs, computed, openBlock, createElementBlock, normalizeStyle, renderSlot } from "vue";
import "../node_modules/tinycolor2/esm/tinycolor.js";
import "../_shared/utils/dom.js";
import { valueToPx } from "../_shared/utils/fn.js";
import { isUndefined } from "../_shared/utils/is.js";
import "../_shared/utils/time.js";
import "../Empty/index.js";
import "../_shared/icons/_Icon.vue.js";
const _hoisted_1 = ["xlinkHref"];
const _sfc_main = /* @__PURE__ */ defineComponent({
  ...{
    name: "Icon"
  },
  __name: "index",
  props: {
    type: {},
    size: {},
    rotate: {},
    spin: { type: Boolean, default: false }
  },
  setup(__props) {
    const props = __props;
    const { size, rotate, spin } = toRefs(props);
    const calcSize = (type) => {
      if (isUndefined(size.value)) {
        return "1em";
      } else if (Array.isArray(size.value)) {
        return valueToPx(size.value[type == "height" ? 1 : 0]);
      } else {
        return valueToPx(size.value);
      }
    };
    const style = computed(() => {
      return {
        width: calcSize("width"),
        height: calcSize("height"),
        transform: isUndefined(rotate.value) ? "" : `rotate(${rotate.value}deg)`,
        animation: spin.value ? "animation: spin 1s infinite cubic-bezier(0, 0, 1, 1)" : ""
      };
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("svg", {
        style: normalizeStyle(style.value),
        class: "yc-icon"
      }, [
        _ctx.type ? (openBlock(), createElementBlock("use", {
          key: 0,
          xlinkHref: `#${_ctx.type}`
        }, null, 8, _hoisted_1)) : renderSlot(_ctx.$slots, "default", { key: 1 }, void 0, true)
      ], 4);
    };
  }
});
export {
  _sfc_main as default
};
