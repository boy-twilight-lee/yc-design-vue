import { defineComponent, useCssVars, toRefs, computed, openBlock, createElementBlock, normalizeClass, renderSlot, createVNode, unref } from "vue";
import "../../node_modules/tinycolor2/esm/tinycolor.js";
import "../utils/dom.js";
import { valueToPx } from "../utils/fn.js";
import "../utils/time.js";
import "../../Empty/index.js";
import "../icons/_Icon.vue.js";
import _sfc_main$1 from "../icons/IconClose.vue.js";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "IconButton",
  props: {
    size: { default: 12 },
    hoverColor: { default: "rgb(242, 243, 245)" },
    hoverSize: { default: 20 },
    disabled: { type: Boolean, default: false },
    preventFocus: { type: Boolean, default: true }
  },
  setup(__props) {
    useCssVars((_ctx) => ({
      "d42bb172": _ctx.hoverColor,
      "ccfb48c6": hoverSize.value
    }));
    const props = __props;
    const { hoverSize: _hoverSize } = toRefs(props);
    const hoverSize = computed(() => valueToPx(_hoverSize.value));
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", {
        class: normalizeClass([
          "yc-icon-button",
          {
            "yc-icon-button-disabled": _ctx.disabled
          }
        ]),
        onMousedown: _cache[0] || (_cache[0] = (e) => _ctx.preventFocus && e.preventDefault())
      }, [
        renderSlot(_ctx.$slots, "default", {}, () => [
          createVNode(unref(_sfc_main$1), { size: _ctx.size }, null, 8, ["size"])
        ], true)
      ], 34);
    };
  }
});
export {
  _sfc_main as default
};
