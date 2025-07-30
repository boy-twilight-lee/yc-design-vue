import { defineComponent, toRefs, computed, openBlock, createElementBlock, normalizeClass, normalizeStyle, unref, createBlock, createElementVNode, Fragment, renderList, createCommentVNode, renderSlot, createTextVNode, toDisplayString } from "vue";
import "../node_modules/tinycolor2/esm/tinycolor.js";
import "../_shared/utils/dom.js";
import { valueToPx } from "../_shared/utils/fn.js";
import { isObject } from "../_shared/utils/is.js";
import "../_shared/utils/time.js";
import "../Empty/index.js";
import "../_shared/icons/_Icon.vue.js";
import _sfc_main$1 from "../_shared/icons/IconCheck.vue.js";
import _sfc_main$2 from "../_shared/icons/IconExclamation.vue2.js";
import { TYPE_ICON_COLOR_MAP } from "../_shared/constants/index.js";
const _hoisted_1 = ["aria-valuenow"];
const _hoisted_2 = ["viewBox"];
const _hoisted_3 = { key: 0 };
const _hoisted_4 = ["id"];
const _hoisted_5 = ["offset", "stop-color"];
const _hoisted_6 = ["cx", "cy", "r", "stroke-width"];
const _hoisted_7 = ["cx", "cy", "r", "stroke-width"];
const _hoisted_8 = {
  key: 2,
  class: /* @__PURE__ */ normalizeClass(`yc-progress-circle-text`)
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "ProgressCircle",
  props: {
    type: {},
    percent: {},
    status: {},
    size: {},
    text: {},
    showText: { type: Boolean },
    width: {},
    strokeWidth: {},
    pathStrokeWidth: {},
    color: {},
    trackColor: {}
  },
  setup(__props) {
    const props = __props;
    const {
      size,
      width,
      color,
      strokeWidth: _strokeWidth,
      pathStrokeWidth: _pathStrokeWidth
    } = toRefs(props);
    let __YC_PROGRESS_SEED = 0;
    const isLinearGradient = computed(() => isObject(color.value));
    const strokeWidth = computed(() => {
      const map = {
        mini: 4,
        small: 3,
        medium: 4,
        large: 4
      };
      return _strokeWidth.value ?? (size.value === "mini" ? width.value / 2 : map[size.value]);
    });
    const pathStrokeWidth = computed(() => {
      if (_pathStrokeWidth.value)
        return _pathStrokeWidth.value;
      return size.value === "mini" ? strokeWidth.value : Math.max(2, strokeWidth.value - 2);
    });
    const radius = computed(() => (width.value - strokeWidth.value) / 2);
    const perimeter = computed(() => Math.PI * 2 * radius.value);
    const center = computed(() => width.value / 2);
    const linearGradientId = computed(() => {
      __YC_PROGRESS_SEED += 1;
      return `yc-progress-circle-linear-gradient-${__YC_PROGRESS_SEED}`;
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", {
        role: "progressbar",
        "aria-valuemin": "0",
        "aria-valuemax": "100",
        "aria-valuenow": _ctx.percent,
        class: normalizeClass(`yc-progress-circle-wrapper`),
        style: normalizeStyle({ width: unref(valueToPx)(unref(width)), height: unref(valueToPx)(unref(width)) })
      }, [
        _ctx.type === "circle" && unref(size) === "mini" && _ctx.status === "success" ? (openBlock(), createBlock(unref(_sfc_main$1), {
          key: 0,
          style: normalizeStyle({
            fontSize: unref(width) - 2,
            color: unref(color) ?? unref(TYPE_ICON_COLOR_MAP).success
          })
        }, null, 8, ["style"])) : (openBlock(), createElementBlock("svg", {
          key: 1,
          viewBox: `0 0 ${unref(width)} ${unref(width)}`,
          class: normalizeClass(`yc-progress-circle-svg`)
        }, [
          unref(isObject)(unref(color)) ? (openBlock(), createElementBlock("defs", _hoisted_3, [
            createElementVNode("linearGradient", {
              id: linearGradientId.value,
              x1: "0",
              y1: "1",
              x2: "0",
              y2: "0"
            }, [
              (openBlock(true), createElementBlock(Fragment, null, renderList(Object.keys(unref(color)), (key) => {
                return openBlock(), createElementBlock("stop", {
                  key,
                  offset: key,
                  "stop-color": unref(color)[key]
                }, null, 8, _hoisted_5);
              }), 128))
            ], 8, _hoisted_4)
          ])) : createCommentVNode("", true),
          createElementVNode("circle", {
            class: normalizeClass(`yc-progress-circle-bg`),
            fill: "none",
            cx: center.value,
            cy: center.value,
            r: radius.value,
            "stroke-width": pathStrokeWidth.value,
            style: normalizeStyle({
              stroke: _ctx.trackColor
            })
          }, null, 12, _hoisted_6),
          createElementVNode("circle", {
            class: normalizeClass(`yc-progress-circle-bar`),
            fill: "none",
            cx: center.value,
            cy: center.value,
            r: radius.value,
            "stroke-width": strokeWidth.value,
            style: normalizeStyle({
              stroke: isLinearGradient.value ? `url(#${linearGradientId.value})` : unref(color),
              strokeDasharray: perimeter.value,
              strokeDashoffset: (_ctx.percent >= 1 ? 0 : 1 - _ctx.percent) * perimeter.value
            })
          }, null, 12, _hoisted_7)
        ], 8, _hoisted_2)),
        _ctx.showText && unref(size) !== "mini" ? (openBlock(), createElementBlock("div", _hoisted_8, [
          renderSlot(_ctx.$slots, "text", { percent: _ctx.percent }, () => [
            _ctx.status === "danger" ? (openBlock(), createBlock(unref(_sfc_main$2), {
              key: 0,
              color: unref(TYPE_ICON_COLOR_MAP).error
            }, null, 8, ["color"])) : _ctx.status === "success" ? (openBlock(), createBlock(unref(_sfc_main$1), {
              key: 1,
              color: unref(TYPE_ICON_COLOR_MAP).success
            }, null, 8, ["color"])) : (openBlock(), createElementBlock(Fragment, { key: 2 }, [
              createTextVNode(toDisplayString(_ctx.text), 1)
            ], 64))
          ], true)
        ])) : createCommentVNode("", true)
      ], 12, _hoisted_1);
    };
  }
});
export {
  _sfc_main as default
};
