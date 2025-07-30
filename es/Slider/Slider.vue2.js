import { defineComponent, ref, computed, openBlock, createElementBlock, normalizeClass, unref, createElementVNode, createBlock, createCommentVNode, normalizeStyle, createVNode } from "vue";
import useContext from "./hooks/useContext.js";
import SliderTicks from "./SliderTicks.vue.js";
import SliderBtn from "./SliderBtn.vue.js";
import SliderInput from "./SliderInput.vue.js";
const _hoisted_1 = ["aria-disabled"];
const _hoisted_2 = {
  key: 0,
  class: "yc-slider-input"
};
const _hoisted_3 = {
  key: 0,
  class: "yc-slider-input-divider"
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  ...{
    name: "Slider"
  },
  __name: "Slider",
  props: {
    modelValue: { default: void 0 },
    defaultValue: { default: 0 },
    step: { default: 1 },
    min: { default: 0 },
    marks: { default: () => {
      return {};
    } },
    max: { default: 100 },
    direction: { default: "horizontal" },
    disabled: { type: Boolean, default: false },
    showTicks: { type: Boolean, default: false },
    showInput: { type: Boolean, default: false },
    range: { type: Boolean, default: false },
    showTooltip: { type: Boolean, default: true },
    formatTooltip: { type: Function, default: (val) => {
      return val + "";
    } }
  },
  emits: ["update:modelValue", "change"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emits = __emit;
    const trackRef = ref();
    const { ticks, marks, range, direction, min, normalizeValue } = useContext().provide(props, emits, trackRef);
    const startPosition = ref({
      bottom: 0,
      left: 0,
      top: 0,
      right: 0
    });
    const endPosition = ref({
      bottom: 0,
      left: 0,
      top: 0,
      right: 0
    });
    const position = computed(() => {
      const { left, right, top, bottom } = startPosition.value;
      if (!range.value) {
        return direction.value == "vertical" ? {
          top: top + "%",
          bottom: normalizeValue(min.value) + "%"
        } : {
          left: normalizeValue(min.value) + "%",
          right: right + "%"
        };
      }
      const {
        left: left1,
        right: right1,
        top: top1,
        bottom: bottom1
      } = endPosition.value;
      return direction.value == "vertical" ? {
        top: `${top < top1 ? top : top1}%`,
        bottom: `${bottom < bottom1 ? bottom : bottom1}%`
      } : {
        left: `${left < left1 ? left : left1}%`,
        right: `${right < right1 ? right : right1}%`
      };
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", {
        class: normalizeClass([
          "yc-slider",
          `yc-slider-direction-${unref(direction)}`,
          {
            "yc-slider-disabled": _ctx.disabled
          }
        ])
      }, [
        createElementVNode("div", {
          class: "yc-slider-track",
          ref_key: "trackRef",
          ref: trackRef
        }, [
          _ctx.showTicks ? (openBlock(), createBlock(SliderTicks, {
            key: 0,
            type: "ticks",
            data: unref(ticks)
          }, null, 8, ["data"])) : createCommentVNode("", true),
          unref(marks).length ? (openBlock(), createBlock(SliderTicks, {
            key: 1,
            type: "dots",
            data: unref(marks)
          }, null, 8, ["data"])) : createCommentVNode("", true),
          unref(marks).length ? (openBlock(), createBlock(SliderTicks, {
            key: 2,
            type: "marks",
            data: unref(marks)
          }, null, 8, ["data"])) : createCommentVNode("", true),
          createElementVNode("div", {
            class: "yc-slider-bar",
            role: "slider",
            tabindex: "0",
            "aria-disabled": _ctx.disabled,
            style: normalizeStyle(position.value)
          }, null, 12, _hoisted_1),
          createVNode(SliderBtn, {
            position: startPosition.value,
            "onUpdate:position": _cache[0] || (_cache[0] = ($event) => startPosition.value = $event),
            type: "start"
          }, null, 8, ["position"]),
          unref(range) ? (openBlock(), createBlock(SliderBtn, {
            key: 3,
            position: endPosition.value,
            "onUpdate:position": _cache[1] || (_cache[1] = ($event) => endPosition.value = $event),
            type: "end"
          }, null, 8, ["position"])) : createCommentVNode("", true)
        ], 512),
        _ctx.showInput ? (openBlock(), createElementBlock("div", _hoisted_2, [
          createVNode(SliderInput, { type: "start" }),
          unref(range) ? (openBlock(), createElementBlock("div", _hoisted_3)) : createCommentVNode("", true),
          unref(range) ? (openBlock(), createBlock(SliderInput, {
            key: 1,
            type: "end"
          })) : createCommentVNode("", true)
        ])) : createCommentVNode("", true)
      ], 2);
    };
  }
});
export {
  _sfc_main as default
};
