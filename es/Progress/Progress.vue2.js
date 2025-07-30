import { defineComponent, toRefs, computed, openBlock, createElementBlock, normalizeClass, unref, createBlock, createSlots, withCtx, renderSlot, normalizeProps, guardReactiveProps } from "vue";
import "../node_modules/tinycolor2/esm/tinycolor.js";
import "../_shared/utils/dom.js";
import "../_shared/utils/time.js";
import { getGlobalConfig } from "../_shared/utils/global-config.js";
import ProgressLine from "./ProgressLine.vue.js";
import _sfc_main$1 from "./ProgressSteps.vue.js";
import "./ProgressSteps.vue2.js";
import ProgressCircle from "./ProgressCircle.vue.js";
const _sfc_main = /* @__PURE__ */ defineComponent({
  ...{
    name: "Progress"
  },
  __name: "Progress",
  props: {
    type: { default: "line" },
    size: { default: void 0 },
    percent: { default: 0 },
    steps: { default: 0 },
    animation: { type: Boolean, default: false },
    strokeWidth: {},
    width: {},
    color: {},
    trackColor: {},
    showText: { type: Boolean, default: true },
    status: { default: "normal" }
  },
  setup(__props) {
    const props = __props;
    const {
      steps,
      percent,
      width: _width,
      type: _type,
      status: _status,
      strokeWidth: _strokeWidth
    } = toRefs(props);
    const { size } = getGlobalConfig(props);
    const type = computed(() => steps.value > 0 ? "steps" : _type.value);
    const status = computed(() => {
      return _status.value || (percent.value >= 1 ? "success" : "normal");
    });
    const text = computed(() => `${(percent.value * 100).toFixed(0)}%`);
    const width = computed(() => {
      if (type.value == "steps" || type.value == "line" && size.value != "mini") {
        return _width.value;
      }
      const map = {
        mini: 16,
        small: 48,
        medium: 64,
        large: 80
      };
      return _width.value ?? map[size.value];
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", {
        class: normalizeClass([
          "yc-progress",
          `yc-progress-type-${type.value}`,
          `yc-progress-size-${unref(size)}`,
          `yc-progress-status-${status.value}`
        ])
      }, [
        unref(steps) > 0 ? (openBlock(), createBlock(_sfc_main$1, {
          key: 0,
          percent: unref(percent),
          size: unref(size),
          width: width.value,
          "stroke-width": _ctx.strokeWidth,
          text: text.value,
          "show-text": _ctx.showText,
          color: _ctx.color,
          "track-color": _ctx.trackColor,
          steps: unref(steps)
        }, createSlots({ _: 2 }, [
          _ctx.$slots.text ? {
            name: "text",
            fn: withCtx((scope) => [
              renderSlot(_ctx.$slots, "text", normalizeProps(guardReactiveProps(scope)), void 0, true)
            ]),
            key: "0"
          } : void 0
        ]), 1032, ["percent", "size", "width", "stroke-width", "text", "show-text", "color", "track-color", "steps"])) : type.value === "line" && unref(size) !== "mini" ? (openBlock(), createBlock(ProgressLine, {
          key: 1,
          width: width.value,
          size: unref(size),
          "stroke-width": _ctx.strokeWidth,
          color: _ctx.color,
          "track-color": _ctx.trackColor,
          text: text.value,
          "show-text": _ctx.showText,
          percent: unref(percent),
          status: status.value
        }, createSlots({ _: 2 }, [
          _ctx.$slots.text ? {
            name: "text",
            fn: withCtx((scope) => [
              renderSlot(_ctx.$slots, "text", normalizeProps(guardReactiveProps(scope)), void 0, true)
            ]),
            key: "0"
          } : void 0
        ]), 1032, ["width", "size", "stroke-width", "color", "track-color", "text", "show-text", "percent", "status"])) : (openBlock(), createBlock(ProgressCircle, {
          key: 2,
          type: type.value,
          percent: unref(percent),
          width: width.value,
          "stroke-width": type.value === "line" ? _ctx.strokeWidth || 4 : _ctx.strokeWidth,
          "path-stroke-width": type.value === "line" ? _ctx.strokeWidth || 4 : _ctx.strokeWidth,
          size: unref(size),
          "show-text": _ctx.showText,
          text: text.value,
          color: _ctx.color,
          "track-color": _ctx.trackColor,
          status: status.value
        }, createSlots({ _: 2 }, [
          _ctx.$slots.text ? {
            name: "text",
            fn: withCtx((scope) => [
              renderSlot(_ctx.$slots, "text", normalizeProps(guardReactiveProps(scope)), void 0, true)
            ]),
            key: "0"
          } : void 0
        ]), 1032, ["type", "percent", "width", "stroke-width", "path-stroke-width", "size", "show-text", "text", "color", "track-color", "status"]))
      ], 2);
    };
  }
});
export {
  _sfc_main as default
};
