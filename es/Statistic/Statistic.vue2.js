import { defineComponent, toRefs, ref, computed, watch, openBlock, createElementBlock, renderSlot, createTextVNode, toDisplayString, createCommentVNode, createElementVNode, normalizeStyle } from "vue";
import "../node_modules/tinycolor2/esm/tinycolor.js";
import "../_shared/utils/dom.js";
import { isUndefined, isNumber } from "../_shared/utils/is.js";
import { formatSeconds, formatDate } from "../_shared/utils/time.js";
import "../Empty/index.js";
import "../_shared/icons/_Icon.vue.js";
import Tween from "../node_modules/b-tween/dist/b-tween.es.js";
const _hoisted_1 = { class: "yc-statistic yc-statistic-countdown" };
const _hoisted_2 = {
  key: 0,
  class: "yc-statistic-title"
};
const _hoisted_3 = { class: "yc-statistic-content" };
const _hoisted_4 = {
  key: 0,
  class: "yc-statistic-prefix"
};
const _hoisted_5 = {
  key: 1,
  class: "yc-statistic-suffix"
};
const _hoisted_6 = {
  key: 0,
  class: "yc-statistic-extra"
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  ...{
    name: "Statistic"
  },
  __name: "Statistic",
  props: {
    title: { default: "" },
    value: { default: 0 },
    format: { default: "HH:mm:ss" },
    extra: { default: "" },
    start: { type: Boolean, default: true },
    easeing: { default: "quadOut" },
    precision: { default: 0 },
    separator: { default: "" },
    showGroupSeparator: { type: Boolean, default: false },
    animation: { type: Boolean, default: false },
    animationDuration: { default: 2e3 },
    valueFrom: { default: void 0 },
    placeholder: { default: "" },
    valueStyle: { default: () => {
      return {};
    } },
    isCountdown: { type: Boolean, default: false }
  },
  emits: ["finish"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emits = __emit;
    const {
      value,
      precision,
      format,
      start,
      valueFrom,
      placeholder,
      animation,
      animationDuration,
      easeing,
      isCountdown
    } = toRefs(props);
    const valueRef = ref();
    const showValue = computed(() => {
      return isUndefined(value.value) ? placeholder.value : getFormatValue(value.value);
    });
    watch(
      [start, animation, valueFrom, value],
      () => {
        if (!start.value || !animation.value || isUndefined(valueFrom.value) || !isNumber(value.value) || valueFrom.value - value.value == 0) {
          return;
        }
        const between = new Tween({
          from: {
            textContent: valueFrom.value
          },
          to: {
            textContent: value.value
          },
          duration: animationDuration.value,
          easeing: easeing.value,
          onUpdate: (current) => {
            valueRef.value.textContent = getFormatValue(current.textContent);
          },
          onFinish() {
            emits("finish");
          }
        });
        between.start();
      },
      {
        immediate: true
      }
    );
    function getFormatValue(value2) {
      if (isNumber(value2) && !isCountdown.value) {
        return value2.toFixed(precision.value);
      }
      if (isCountdown.value) {
        return formatSeconds(value2, format.value);
      }
      return formatDate(value2, format.value);
    }
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1, [
        _ctx.$slots.title || _ctx.title ? (openBlock(), createElementBlock("div", _hoisted_2, [
          renderSlot(_ctx.$slots, "title", {}, () => [
            createTextVNode(toDisplayString(_ctx.title), 1)
          ], true)
        ])) : createCommentVNode("", true),
        createElementVNode("div", _hoisted_3, [
          createElementVNode("div", {
            class: "yc-statistic-value",
            style: normalizeStyle(_ctx.valueStyle)
          }, [
            _ctx.$slots.prefix ? (openBlock(), createElementBlock("span", _hoisted_4, [
              renderSlot(_ctx.$slots, "prefix", {}, void 0, true)
            ])) : createCommentVNode("", true),
            createElementVNode("span", {
              class: "yc-statistic-value-integer",
              ref_key: "valueRef",
              ref: valueRef
            }, [
              renderSlot(_ctx.$slots, "value", {}, () => [
                createTextVNode(toDisplayString(showValue.value), 1)
              ], true)
            ], 512),
            _ctx.$slots.suffix ? (openBlock(), createElementBlock("span", _hoisted_5, [
              renderSlot(_ctx.$slots, "suffix", {}, void 0, true)
            ])) : createCommentVNode("", true)
          ], 4),
          _ctx.$slots.extra || _ctx.extra ? (openBlock(), createElementBlock("div", _hoisted_6, [
            renderSlot(_ctx.$slots, "extra", {}, () => [
              createTextVNode(toDisplayString(_ctx.extra), 1)
            ], true)
          ])) : createCommentVNode("", true)
        ])
      ]);
    };
  }
});
export {
  _sfc_main as default
};
