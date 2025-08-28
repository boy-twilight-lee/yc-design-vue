<template>
  <div
    :class="[
      'yc-carousel-indicator',
      `yc-carousel-indicator-shape-${indicatorType}`,
      `yc-carousel-indicator-position-${indicatorPosition}`,
      indicatorClass,
    ]"
  >
    <div
      v-for="i in length"
      :key="i"
      :class="[
        'yc-carousel-indicator-item',
        {
          'yc-carousel-indicator-item-active': computedCurrent == i,
        },
      ]"
      @mouseenter="
        trigger == 'hover' && computedCurrent != i && $emit('change', i)
      "
      @click="trigger == 'click' && computedCurrent != i && $emit('change', i)"
    ></div>
    <div
      v-if="indicatorType == 'slider'"
      class="yc-carousel-indicator-item-slider"
      :style="{
        width: ['top', 'bottom', 'outer'].includes(indicatorPosition)
          ? valueToPx(48 / length)
          : '',
        height: ['left', 'right'].includes(indicatorPosition)
          ? valueToPx(48 / length)
          : '',
        transform: ['top', 'bottom', 'outer'].includes(indicatorPosition)
          ? `translateX(calc(${valueToPx((48 / length) * computedCurrent)} - 100%))`
          : `translateY(calc(${valueToPx((48 / length) * computedCurrent)} - 100%))`,
      }"
    ></div>
  </div>
</template>

<script lang="ts" setup>
import { IndicatorTrigger, IndicatorType, IndicatorPosition } from './type';
import { ClassName } from '@shared/type';
import { valueToPx } from '@shared/utils';
import useContext from './hooks/useContext';
defineProps<{
  trigger: IndicatorTrigger;
  indicatorType: IndicatorType;
  indicatorPosition: IndicatorPosition;
  indicatorClass: ClassName;
}>();
defineEmits<{
  (e: 'change', index: number): void;
}>();
// 接收注入
const { length, computedCurrent } = useContext().inject();
</script>

<style lang="less" scoped>
@import './style/carousel.less';
</style>
