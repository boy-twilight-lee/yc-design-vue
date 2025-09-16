<template>
  <div class="yc-statistic yc-statistic-countdown">
    <div v-if="$slots.title || title" class="yc-statistic-title">
      <slot name="title">
        {{ title }}
      </slot>
    </div>
    <div class="yc-statistic-content">
      <div class="yc-statistic-value" :style="valueStyle">
        <span v-if="$slots.prefix" class="yc-statistic-prefix">
          <slot name="prefix" />
        </span>
        <span class="yc-statistic-value-integer" ref="valueRef">
          <slot name="value">
            {{ showValue }}
          </slot>
        </span>
        <span v-if="$slots.suffix" class="yc-statistic-suffix">
          <slot name="suffix" />
        </span>
      </div>
      <div v-if="$slots.extra || extra" class="yc-statistic-extra">
        <slot name="extra">
          {{ extra }}
        </slot>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref, toRefs, computed, watch } from 'vue';
import { StatisticProps, StatisticEmits, StatisticSlots } from './type';
import { RecordType } from '@shared/type';
import {
  isNumber,
  formatSeconds,
  isUndefined,
  formatDate,
} from '@shared/utils';
import Btween from 'b-tween';
defineOptions({
  name: 'Statistic',
});
defineSlots<StatisticSlots>();
const props = withDefaults(defineProps<StatisticProps>(), {
  title: '',
  value: 0,
  format: 'HH:mm:ss',
  extra: '',
  start: true,
  precision: 0,
  separator: '',
  showGroupSeparator: false,
  animation: false,
  animationDuration: 2000,
  valueFrom: undefined,
  placeholder: '',
  easeing: 'quadOut',
  valueStyle: () => {
    return {};
  },
  isCountdown: false,
});
const emits = defineEmits<StatisticEmits>();
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
  isCountdown,
  showGroupSeparator,
} = toRefs(props);
// valueRef
const valueRef = ref<HTMLDivElement>();
// 整数部分
const showValue = computed(() => {
  return isUndefined(value.value)
    ? placeholder.value
    : getFormatValue(value.value);
});
watch(
  [start, animation, valueFrom, value],
  () => {
    if (
      !start.value ||
      !animation.value ||
      isUndefined(valueFrom.value) ||
      !isNumber(value.value) ||
      valueFrom.value - value.value == 0
    ) {
      return;
    }
    const between = new Btween({
      from: {
        textContent: valueFrom.value,
      },
      to: {
        textContent: value.value,
      },
      duration: animationDuration.value,
      easeing: easeing.value,
      onUpdate: (current: RecordType) => {
        valueRef.value!.textContent = getFormatValue(current.textContent);
      },
      onFinish() {
        emits('finish');
      },
    });
    between.start();
  },
  {
    immediate: true,
  }
);
// 取千分位
const formatNumber = (num: string) => {
  let parts = num.toString().split('.');
  parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  return parts.join('.');
};
// 获取格式化的value
function getFormatValue(value: number | Date) {
  if (isNumber(value) && !isCountdown.value) {
    const fixedValue = value.toFixed(precision.value);
    return showGroupSeparator.value ? formatNumber(fixedValue) : fixedValue;
  }
  if (isCountdown.value) {
    return formatSeconds(value as number, format.value);
  }
  return formatDate(value, format.value);
}
</script>

<style lang="less">
@import './style/statistic.less';
</style>
