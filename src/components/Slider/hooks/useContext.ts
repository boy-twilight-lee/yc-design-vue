import {
  ref,
  Ref,
  toRefs,
  computed,
  inject as _inject,
  provide as _provide,
} from 'vue';
import {
  FormatTooltip,
  SliderEmits,
  SliderValue,
  SliderProps as _SliderProps,
} from '../type';
import { Direction, Props, RequiredDeep } from '@shared/type';
import { useControlValue, isArray } from '@shared/utils';

const SLIDER_CONTEXT_KEY = 'slider-context';
type SliderContext = {
  startValue: Ref<number>;
  endValue: Ref<number>;
  tempStartValue: Ref<number>;
  tempEndValue: Ref<number>;
  range: Ref<boolean>;
  min: Ref<number>;
  max: Ref<number>;
  step: Ref<number>;
  direction: Ref<Direction>;
  showTooltip: Ref<boolean>;
  disabled: Ref<boolean>;
  trackRef: Ref<HTMLDivElement | undefined>;
  formatTooltip?: FormatTooltip;
  normalizeValue: (value: number) => number;
  denormalizeValue: (value: number) => number;
};
type SliderProp = RequiredDeep<_SliderProps>;

export default () => {
  const provide = (
    props: Props,
    emits: SliderEmits,
    trackRef: Ref<HTMLDivElement | undefined>
  ) => {
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
      marks: _marks,
    } = toRefs(props as SliderProp);
    const { formatTooltip } = props as SliderProp;
    // 控制值
    const computedValue = useControlValue<SliderValue>(
      modelValue,
      range.value && !isArray(defaultValue.value) ? [0, 0] : defaultValue.value,
      (val) => {
        emits('update:modelValue', val);
        emits('change', val);
      }
    );
    // 开始值
    const startValue = computed({
      get() {
        const value =
          range.value && isArray(computedValue.value)
            ? computedValue.value[0]
            : computedValue.value;
        return value as number;
      },
      set(val) {
        if (range.value && isArray(computedValue.value)) {
          computedValue.value[0] = val;
        } else {
          computedValue.value = val;
        }
        tempStartValue.value = val as number;
      },
    });
    // 中间开始值
    const tempStartValue = ref<number>(startValue.value);
    // 结束值
    const endValue = computed({
      get() {
        const value =
          range.value && isArray(computedValue.value)
            ? computedValue.value[1]
            : computedValue.value;
        return value as number;
      },
      set(val) {
        if (range.value && isArray(computedValue.value)) {
          computedValue.value[1] = val;
        } else {
          computedValue.value = val;
        }
        tempEndValue.value = val as number;
      },
    });
    // 中间结束值
    const tempEndValue = ref<number>(endValue.value);
    // 刻度线
    const ticks = computed(() => {
      const digit = getDecimalPlaces(step.value);
      const result = [];
      for (let i = 1; i < Math.floor(max.value / step.value); i++) {
        const value = +(i * step.value).toFixed(digit);
        result.push({
          label: value,
          value: value,
        });
      }
      return result;
    });
    // 标注
    const marks = computed(() => {
      return Object.entries(_marks.value).map(([key, value]) => {
        return {
          value: +key,
          label: value,
        };
      });
    });
    // 获取小数点位数
    function getDecimalPlaces(num: number): number {
      const str = num.toString();
      const decimalIndex = str.indexOf('.');
      return decimalIndex === -1 ? 0 : str.length - decimalIndex - 1;
    }
    // 标准化结果
    function normalizeValue(value: number): number {
      if (max.value - min.value === 0) return 0;
      const normalized = ((value - min.value) / (max.value - min.value)) * 100;
      return normalized;
    }
    // 转化原始结果
    function denormalizeValue(percent: number): number {
      const estimatedValue =
        min.value + (percent / 100) * (max.value - min.value);
      const steps = (estimatedValue - min.value) / step.value;
      const closestStep = Math.round(steps);
      const finalValue = min.value + closestStep * step.value;
      const digit = getDecimalPlaces(step.value);
      const clampedValue = Math.max(min.value, Math.min(finalValue, max.value));
      return +clampedValue.toFixed(digit);
    }
    _provide<SliderContext>(SLIDER_CONTEXT_KEY, {
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
      denormalizeValue,
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
      normalizeValue,
    };
  };
  const inject = () => {
    return _inject<SliderContext>(SLIDER_CONTEXT_KEY, {
      startValue: ref(0),
      endValue: ref(0),
      tempEndValue: ref(0),
      tempStartValue: ref(0),
      range: ref(false),
      min: ref(0),
      max: ref(0),
      step: ref(0),
      direction: ref('horizontal'),
      disabled: ref(false),
      showTooltip: ref(true),
      trackRef: ref(),
      normalizeValue: (value: number) => {
        return value;
      },
      denormalizeValue: (value: number) => {
        return value;
      },
    });
  };
  return {
    inject,
    provide,
  };
};
