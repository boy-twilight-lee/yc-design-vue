import { defineComponent, toRefs, ref, watch, openBlock, createElementBlock, normalizeStyle, unref, createElementVNode } from "vue";
import { useDraggable } from "../node_modules/@vueuse/core/index.js";
import { parseColor, GradientColorCalculator } from "../_shared/utils/color.js";
import "../_shared/utils/dom.js";
import { sleep, valueToPx } from "../_shared/utils/fn.js";
import "../_shared/utils/time.js";
import "../Empty/index.js";
import "../_shared/icons/_Icon.vue.js";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "ColorControl",
  props: {
    color: {},
    baseColor: {},
    popupVisible: { type: Boolean },
    disabled: { type: Boolean },
    hideTrigger: { type: Boolean },
    mode: {}
  },
  emits: ["update:color", "update:alpha", "update:baseColor", "change"],
  setup(__props, { expose: __expose, emit: __emit }) {
    const props = __props;
    const emits = __emit;
    const { color, mode, popupVisible, disabled, hideTrigger } = toRefs(props);
    const btnRef = ref();
    const barRef = ref();
    const range = ref({
      min: 0,
      max: 0
    });
    const calculator = new GradientColorCalculator();
    const { x } = useDraggable(btnRef, {
      disabled,
      onMove() {
        setColor();
      }
    });
    const setPosition = (color2) => {
      const { max, min } = range.value;
      if (mode.value == "alpha") {
        const alpha = parseColor(color2).getAlpha() * 100;
        x.value = min + alpha / 100 * (max - min);
        emits("update:alpha", alpha);
      } else {
        x.value = calculator.getPositionForColor(color2, max - min) + min;
      }
    };
    const setColor = () => {
      const { min, max } = range.value;
      x.value = x.value < min ? min : x.value;
      x.value = x.value > max ? max : x.value;
      let tempColor = "";
      if (mode.value == "alpha") {
        const a = +((x.value - min) / (max - min)).toFixed(2);
        tempColor = parseColor(color.value).setAlpha(a).toRgbString();
        emits("update:alpha", a);
      } else {
        tempColor = calculator.getColorAtPosition(x.value - min, max - min);
        emits("update:baseColor", tempColor);
        emits("change", tempColor);
      }
      emits("update:color", tempColor);
    };
    const handleClick = (e) => {
      if (disabled.value)
        return;
      x.value = e.pageX;
      setColor();
    };
    watch(
      () => popupVisible.value,
      async (val) => {
        if (val || hideTrigger.value) {
          await sleep(0);
          const { left, right } = barRef.value.getBoundingClientRect();
          range.value = {
            min: left,
            max: right
          };
          setPosition(color.value);
        }
      },
      {
        immediate: true
      }
    );
    __expose({
      setPosition
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", {
        class: "yc-color-picker-control-bar",
        style: normalizeStyle({
          background: unref(mode) == "alpha" ? `linear-gradient(to right, rgba(0, 0, 0, 0), ${_ctx.baseColor})` : ""
        }),
        ref_key: "barRef",
        ref: barRef,
        onClick: handleClick
      }, [
        createElementVNode("div", {
          class: "yc-color-picker-control-bar-handler",
          style: normalizeStyle({
            color: unref(color),
            transform: `translate(calc(${unref(valueToPx)(unref(x) - range.value.min)} - 50%),-50%)`
          }),
          ref_key: "btnRef",
          ref: btnRef
        }, null, 4)
      ], 4);
    };
  }
});
export {
  _sfc_main as default
};
