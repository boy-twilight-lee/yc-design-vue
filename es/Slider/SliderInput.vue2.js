import { defineComponent, toRefs, computed, openBlock, createBlock, unref } from "vue";
import useContext from "./hooks/useContext.js";
import InputNumber from "../InputNumber/index.js";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "SliderInput",
  props: {
    type: {}
  },
  setup(__props) {
    const props = __props;
    const { type } = toRefs(props);
    const {
      min,
      max,
      disabled,
      startValue,
      endValue,
      tempStartValue,
      tempEndValue
    } = useContext().inject();
    const computedValue = computed({
      get() {
        return type.value == "start" ? tempStartValue.value : tempEndValue.value;
      },
      set(val) {
        if (type.value == "start") {
          tempStartValue.value = val;
        } else {
          tempEndValue.value = val;
        }
      }
    });
    const handleSet = () => {
      if (type.value == "start") {
        startValue.value = computedValue.value;
      } else {
        endValue.value = computedValue.value;
      }
    };
    return (_ctx, _cache) => {
      return openBlock(), createBlock(unref(InputNumber), {
        modelValue: computedValue.value,
        "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => computedValue.value = $event),
        min: unref(min),
        max: unref(max),
        disabled: unref(disabled),
        "hide-button": "",
        onBlur: handleSet,
        onPressEnter: handleSet
      }, null, 8, ["modelValue", "min", "max", "disabled"]);
    };
  }
});
export {
  _sfc_main as default
};
