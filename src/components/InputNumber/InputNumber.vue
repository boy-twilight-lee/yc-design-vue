<template>
  <yc-input
    :model-value="<string>computedValue"
    :allow-clear="allowClear"
    :disabled="disabled"
    :readonly="readonly"
    :error="error"
    :size="size"
    :placeholder="placeholder"
    :input-attrs="inputAttrs"
    class="yc-input-number"
    ref="inputRef"
    @input="handleInput"
    @change="
      async (v, ev) => {
        await sleep(0);
        $emit('change', +v, ev);
      }
    "
    @clear="handleClear"
    @focus="(ev) => $emit('focus', ev)"
    @blur="(ev) => handleUpdateValue('blur', ev)"
    @keydown="(ev) => $emit('keydown', ev)"
    @press-enter="(ev) => handleUpdateValue('pressEnter', ev)"
  >
    <!-- prefix -->
    <template v-if="$slots.prefix" #prefix>
      <slot name="prefix" />
    </template>
    <!-- suffix -->
    <template v-if="$slots.suffix || (!hideButton && mode == 'embed')" #suffix>
      <slot name="suffix">
        <div class="yc-input-number-step">
          <opera-btn
            type="plus"
            :mode="mode"
            :computed-value="computedValue"
            :disabled="disabled"
            :min="min"
            :max="max"
            :size="size"
            @click="handleStep"
          >
            <template v-if="$slots.minus" #icon>
              <slot name="plus" />
            </template>
          </opera-btn>
          <opera-btn
            type="minus"
            :mode="mode"
            :computed-value="computedValue"
            :disabled="disabled"
            :min="min"
            :max="max"
            :size="size"
            @click="handleStep"
          >
            <template v-if="$slots.plus" #icon>
              <slot name="minus" />
            </template>
          </opera-btn>
        </div>
      </slot>
    </template>
    <!-- prepend -->
    <template
      v-if="$slots.prepend || (!hideButton && mode == 'button')"
      #prepend
    >
      <slot name="prepend">
        <opera-btn
          type="minus"
          :mode="mode"
          :computed-value="computedValue"
          :disabled="disabled"
          :min="min"
          :max="max"
          :size="size"
          @click="handleStep"
        >
          <template v-if="$slots.minus" #icon>
            <slot name="minus" />
          </template>
        </opera-btn>
      </slot>
    </template>
    <!-- append -->
    <template v-if="$slots.append || (!hideButton && mode == 'button')" #append>
      <slot name="append">
        <opera-btn
          type="plus"
          :mode="mode"
          :computed-value="computedValue"
          :disabled="disabled"
          :max="max"
          :min="min"
          :size="size"
          @click="handleStep"
        >
          <template v-if="$slots.plus" #icon>
            <slot name="plus" />
          </template>
        </opera-btn>
      </slot>
    </template>
  </yc-input>
</template>

<script lang="ts" setup>
import { ref, toRefs, computed } from 'vue';
import {
  InputNumberProps,
  InputNumberEmits,
  InputNumberSlots,
  InputNumberExpose,
  InputNumberValue,
} from './type';
import {
  isNumber,
  isString,
  isFunction,
  useControlValue,
  sleep,
} from '@shared/utils';
import OperaBtn from './InputOperaBtn.vue';
import { default as YcInput, InputInstance } from '@/components/Input';
defineOptions({
  name: 'InputNumber',
});
defineSlots<InputNumberSlots>();
const props = withDefaults(defineProps<InputNumberProps>(), {
  modelValue: undefined,
  defaultValue: '',
  mode: 'embed',
  precision: 0,
  step: 1,
  disabled: false,
  error: false,
  max: Infinity,
  min: -Infinity,
  placeholder: '',
  hideButton: false,
  size: undefined,
  allowClear: false,
  modelEvent: 'change',
  readonly: false,
  inputAttrs: () => {
    return {};
  },
});
const emits = defineEmits<InputNumberEmits>();
const {
  modelValue,
  defaultValue,
  step,
  min,
  max,
  disabled,
  hideButton,
  mode,
  modelEvent,
  precision: _precision,
} = toRefs(props);
const { formatter, parser } = props;
// 实例
const inputRef = ref<InputInstance>();
// 控制的值
const computedValue = useControlValue<InputNumberValue>(
  modelValue,
  defaultValue.value,
  (val) => {
    emits(
      'update:modelValue',
      modelEvent.value == 'change' ? val : handlePrecision(val, 'number')
    );
  },
  (val) => {
    const value = isString(val) ? val : handlePrecision(val, 'string');
    return formatter && isFunction(formatter)
      ? formatter(value as string)
      : value;
  }
);
// 精度
const precision = computed(() => {
  const stepPrecision = String(step.value).match(/\.(\d+)/)?.[1]?.length ?? 0;
  return Math.max(...[stepPrecision, _precision.value]);
});
// 解析值的方法
const parserValue = (v: string) => {
  return parser && isFunction(parser) ? parser(v) : v;
};
// 处理精度问题
function handlePrecision(value: InputNumberValue, type: 'number' | 'string') {
  // 处理过后的值
  const handleValue = isNumber(value) ? value : +value;
  // 处理的值
  const numberValue = precision.value
    ? handleValue.toFixed(precision.value)
    : handleValue.toFixed(0);
  return type == 'number' ? +numberValue : numberValue;
}
// 处理点击
const handleStep = (type: 'minus' | 'plus') => {
  const handleValue = +parserValue(computedValue.value as string);
  let value =
    type == 'minus' ? handleValue - step.value : handleValue + step.value;
  value = value < min.value ? min.value : value;
  value = value > max.value ? max.value : value;
  // 处理精度
  computedValue.value = handlePrecision(value, 'number');
  inputRef.value?.focus();
};
// 处理失焦越界
const handleUpdateValue = (
  type: 'blur' | 'pressEnter',
  e: FocusEvent | KeyboardEvent
) => {
  if (type == 'blur') {
    emits('blur', e as FocusEvent);
  } else {
    emits('pressEnter', e as KeyboardEvent);
  }
  if (!computedValue.value) return;
  let value = +parserValue(computedValue.value as string);
  value = value < min.value ? min.value : value;
  value = value > max.value ? max.value : value;
  // 处理精度
  computedValue.value = handlePrecision(value, 'number');
};
// 处理输入
const handleInput = (v: string, e: Event) => {
  if (!v) {
    computedValue.value = v;
    return;
  }
  const handleValue = parserValue(v);
  // 只能输入数字、.、-
  const isInValidNumber = !/^-?\d*\.?\d*$/.test(handleValue);
  // 处理小数点只能一个
  const isInValidPoint = (handleValue.match(/\./g)?.length ?? 0) > 1;
  // 处理－号只能一个,且位置正确
  const isInValidNegative = handleValue.includes('-') && handleValue[0] != '-';
  // 处理逻辑
  if (isInValidNumber || isInValidPoint || isInValidNegative) {
    return;
  }
  computedValue.value = handleValue;
  emits('input', handleValue, e);
};
// 处理清除
const handleClear = (ev: MouseEvent) => {
  computedValue.value = '';
  emits('clear', ev);
};
// 暴漏方法
defineExpose<InputNumberExpose>({
  focus() {
    inputRef.value?.focus();
  },
  blur() {
    inputRef.value?.focus();
  },
});
</script>

<style lang="less">
@import './style/input-number.less';
</style>
