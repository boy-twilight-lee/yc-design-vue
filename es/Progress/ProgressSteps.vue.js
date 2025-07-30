import { defineComponent, toRefs, computed, openBlock, createElementBlock, unref, createElementVNode, normalizeStyle, Fragment, renderList, normalizeClass, renderSlot, createTextVNode, toDisplayString, createBlock, resolveDynamicComponent, createCommentVNode } from "vue";
import { TYPE_ICON_MAP, TYPE_ICON_COLOR_MAP } from "../_shared/constants/index.js";
import "../node_modules/tinycolor2/esm/tinycolor.js";
import "../_shared/utils/dom.js";
import { valueToPx } from "../_shared/utils/fn.js";
import "../_shared/utils/time.js";
import "../Empty/index.js";
import "../_shared/icons/_Icon.vue.js";
const _hoisted_1 = ["aria-valuenow"];
const _hoisted_2 = {
  key: 0,
  class: "yc-progress-steps-text"
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "ProgressSteps",
  props: {
    steps: {},
    percent: {},
    size: {},
    text: {},
    showText: { type: Boolean },
    color: {},
    trackColor: {},
    strokeWidth: {},
    status: {}
  },
  setup(__props) {
    const props = __props;
    const { steps, percent, size, strokeWidth: _strokeWidth } = toRefs(props);
    const strokeWidth = computed(() => {
      return _strokeWidth.value ?? (size.value == "small" ? 8 : 4);
    });
    const stepList = computed(() => {
      return Array(steps.value).fill(0).map((_, i) => {
        {
          return percent.value > 0 && percent.value > 1 / steps.value * i;
        }
      });
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", {
        role: "progressbar",
        "aria-valuemin": "0",
        "aria-valuemax": "100",
        "aria-valuenow": unref(percent),
        class: "yc-progress-steps-wrapper"
      }, [
        createElementVNode("div", {
          class: "yc-progress-steps",
          style: normalizeStyle({ height: unref(valueToPx)(strokeWidth.value) })
        }, [
          (openBlock(true), createElementBlock(Fragment, null, renderList(stepList.value, (active, i) => {
            return openBlock(), createElementBlock("div", {
              key: i,
              class: normalizeClass([
                "yc-progress-steps-item",
                {
                  "yc-progress-steps-item-active": active
                }
              ]),
              style: normalizeStyle({
                backgroundColor: active ? _ctx.color : _ctx.trackColor
              })
            }, null, 6);
          }), 128))
        ], 4),
        _ctx.showText ? (openBlock(), createElementBlock("div", _hoisted_2, [
          renderSlot(_ctx.$slots, "text", { percent: unref(percent) }, () => [
            createTextVNode(toDisplayString(_ctx.text) + " ", 1),
            _ctx.status === "danger" ? (openBlock(), createBlock(resolveDynamicComponent(unref(TYPE_ICON_MAP).danger), {
              key: 0,
              color: unref(TYPE_ICON_COLOR_MAP).danger
            }, null, 8, ["color"])) : createCommentVNode("", true)
          ])
        ])) : createCommentVNode("", true)
      ], 8, _hoisted_1);
    };
  }
});
export {
  _sfc_main as default
};
