import { defineComponent, toRefs, computed, openBlock, createElementBlock, unref, createElementVNode, normalizeStyle, renderSlot, toDisplayString, createBlock, resolveDynamicComponent, createCommentVNode } from "vue";
import { TYPE_ICON_MAP, TYPE_ICON_COLOR_MAP } from "../_shared/constants/index.js";
import "../node_modules/tinycolor2/esm/tinycolor.js";
import "../_shared/utils/dom.js";
import { valueToPx } from "../_shared/utils/fn.js";
import { isObject } from "../_shared/utils/is.js";
import "../_shared/utils/time.js";
import "../Empty/index.js";
import "../_shared/icons/_Icon.vue.js";
const _hoisted_1 = ["aria-valuenow"];
const _hoisted_2 = {
  key: 0,
  class: "yc-progress-line-text"
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "ProgressLine",
  props: {
    size: {},
    percent: {},
    status: {},
    showText: { type: Boolean },
    text: {},
    width: {},
    strokeWidth: {},
    color: {},
    trackColor: {}
  },
  setup(__props) {
    const props = __props;
    const {
      width,
      trackColor,
      color,
      percent,
      size,
      strokeWidth: _strokeWidth
    } = toRefs(props);
    const strokeWidth = computed(() => {
      const map = {
        small: 3,
        medium: 4,
        large: 8
      };
      return _strokeWidth.value ?? map[size.value];
    });
    const style = computed(() => ({
      width: valueToPx(width.value),
      height: valueToPx(strokeWidth.value),
      backgroundColor: trackColor.value
    }));
    const barStyle = computed(() => {
      return {
        width: `${percent.value * 100}%`,
        ...getBackground(color.value)
      };
    });
    const getBackground = (color2) => {
      if (isObject(color2)) {
        const val = Object.keys(color2).map((key) => `${color2[key]} ${key}`).join(",");
        return {
          backgroundImage: `linear-gradient(to right, ${val})`
        };
      }
      return {
        backgroundColor: color2
      };
    };
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", {
        role: "progressbar",
        "aria-valuemin": "0",
        "aria-valuemax": "100",
        "aria-valuenow": unref(percent),
        class: "yc-progress-line-wrapper"
      }, [
        createElementVNode("div", {
          class: "yc-progress-line",
          style: normalizeStyle(style.value)
        }, [
          createElementVNode("div", {
            class: "yc-progress-line-bar",
            style: normalizeStyle(barStyle.value)
          }, null, 4)
        ], 4),
        _ctx.showText ? (openBlock(), createElementBlock("div", _hoisted_2, [
          renderSlot(_ctx.$slots, "text", { percent: unref(percent) }, () => [
            createElementVNode("span", null, toDisplayString(_ctx.text), 1),
            _ctx.status === "danger" ? (openBlock(), createBlock(resolveDynamicComponent(unref(TYPE_ICON_MAP).warning), {
              key: 0,
              color: unref(TYPE_ICON_COLOR_MAP).error
            }, null, 8, ["color"])) : createCommentVNode("", true)
          ], true)
        ])) : createCommentVNode("", true)
      ], 8, _hoisted_1);
    };
  }
});
export {
  _sfc_main as default
};
