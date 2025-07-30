import { toRefs, computed, ref, provide, inject } from "vue";
import "../../node_modules/tinycolor2/esm/tinycolor.js";
import "../../_shared/utils/dom.js";
import { isArray } from "../../_shared/utils/is.js";
import "../../_shared/utils/time.js";
import "../../Empty/index.js";
import "../../_shared/icons/_Icon.vue.js";
import useControlValue from "../../_shared/utils/control.js";
const SLIDER_CONTEXT_KEY = "slider-context";
const useContext = () => {
  const provide$1 = (props, emits, trackRef) => {
    const {
      modelValue,
      defaultValue,
      step,
      min,
      max,
      direction,
      disabled,
      range,
      showTooltip,
      marks: _marks
    } = toRefs(props);
    const { formatTooltip } = props;
    const computedValue = useControlValue(
      modelValue,
      range.value && !isArray(defaultValue.value) ? [0, 0] : defaultValue.value,
      (val) => {
        emits("update:modelValue", val);
        emits("change", val);
      }
    );
    const startValue = computed({
      get() {
        return range.value ? computedValue.value[0] : computedValue.value;
      },
      set(val) {
        if (range.value) {
          computedValue.value[0] = val;
        } else {
          computedValue.value = val;
        }
        tempStartValue.value = val;
      }
    });
    const tempStartValue = ref(startValue.value);
    const endValue = computed({
      get() {
        return range.value ? computedValue.value[1] : computedValue.value;
      },
      set(val) {
        if (range.value) {
          computedValue.value[1] = val;
        } else {
          computedValue.value = val;
        }
        tempEndValue.value = val;
      }
    });
    const tempEndValue = ref(endValue.value);
    const ticks = computed(() => {
      const digit = getDecimalPlaces(step.value);
      const result = [];
      for (let i = 1; i < Math.floor(max.value / step.value); i++) {
        const value = +(i * step.value).toFixed(digit);
        result.push({
          label: value,
          value
        });
      }
      return result;
    });
    const marks = computed(() => {
      return Object.entries(_marks.value).map(([key, value]) => {
        return {
          value: +key,
          label: value
        };
      });
    });
    function getDecimalPlaces(num) {
      const str = num.toString();
      const decimalIndex = str.indexOf(".");
      return decimalIndex === -1 ? 0 : str.length - decimalIndex - 1;
    }
    function normalizeValue(value) {
      const totalSteps = (max.value - min.value) / step.value;
      const currentStep = (value - min.value) / step.value;
      const normalized = currentStep / totalSteps * 100;
      return Math.round(normalized);
    }
    function denormalizeValue(value) {
      const totalSteps = (max.value - min.value) / step.value;
      const stepPosition = value / 100 * totalSteps;
      const exactValue = min.value + stepPosition * step.value;
      const digit = getDecimalPlaces(step.value);
      return +(Math.round(exactValue / step.value) * step.value).toFixed(digit);
    }
    provide(SLIDER_CONTEXT_KEY, {
      startValue,
      endValue,
      tempStartValue,
      tempEndValue,
      range,
      min,
      max,
      step,
      showTooltip,
      disabled,
      direction,
      trackRef,
      formatTooltip,
      normalizeValue,
      denormalizeValue
    });
    return {
      range,
      direction,
      startValue,
      endValue,
      tempStartValue,
      tempEndValue,
      computedValue,
      ticks,
      marks,
      min,
      max,
      normalizeValue
    };
  };
  const inject$1 = () => {
    return inject(SLIDER_CONTEXT_KEY, {
      startValue: ref(0),
      endValue: ref(0),
      tempEndValue: ref(0),
      tempStartValue: ref(0),
      range: ref(false),
      min: ref(0),
      max: ref(0),
      step: ref(0),
      direction: ref("horizontal"),
      disabled: ref(false),
      showTooltip: ref(true),
      trackRef: ref(),
      normalizeValue: (value) => {
        return value;
      },
      denormalizeValue: (value) => {
        return value;
      }
    });
  };
  return {
    inject: inject$1,
    provide: provide$1
  };
};
export {
  useContext as default
};
