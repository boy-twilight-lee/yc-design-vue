<template>
  <div :class="[`yc-slider-${type}`]">
    <span
      v-for="{ label, value } in data"
      :key="value"
      :style="{
        left: direction == 'horizontal' ? getPosition(value) : '',
        bottom: direction == 'vertical' ? getPosition(value) : '',
      }"
      :class="[
        `yc-slider-${type.replace('s', '')}`,
        {
          'yc-slider-dot-active': type == 'dots' && isInRange(value),
          'yc-slider-tick-active': type == 'ticks' && isInRange(value),
        },
      ]"
      @click="$emit('labelClick', value)"
    >
      {{ type == 'marks' ? label : '' }}
    </span>
  </div>
</template>

<script lang="ts" setup>
import { toRefs } from 'vue';
import { ObjectData } from '@shared/type';
import useContext from './hooks/useContext';
const props = defineProps<{
  type: 'dots' | 'marks' | 'ticks';
  data: ObjectData[];
}>();
defineEmits<{
  (e: 'labelClick', value: number): void;
}>();
const { type } = toRefs(props);
// 接收注入
const { min, max, startValue, endValue, range, direction, normalizeValue } =
  useContext().inject();
// 计算position
const getPosition = (value: number) => {
  const curValue = normalizeValue(value);
  if (type.value == 'ticks') {
    return `calc(${curValue}% - 0.5px)`;
  } else if (type.value == 'dots') {
    return `calc(${curValue}% - 4px)`;
  } else {
    return `calc(${curValue}% - 7px)`;
  }
};
// 是否在区间之内
const isInRange = (value: number) => {
  const curValue = normalizeValue(value);
  const start = normalizeValue(startValue.value);
  const end = normalizeValue(endValue.value);
  const rangeMin = normalizeValue(min.value);
  const rangeMax = normalizeValue(max.value);
  if (!range.value) {
    return start >= curValue && curValue >= rangeMin && curValue <= rangeMax;
  } else {
    const minVal = Math.min(start, end);
    const maxVal = Math.max(start, end);
    return curValue >= minVal && curValue <= maxVal;
  }
};
</script>

<style lang="less" scoped>
@import './style/slider.less';
</style>
