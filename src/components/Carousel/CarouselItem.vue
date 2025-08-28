<template>
  <div
    :class="[
      'yc-carousel-item',
      slideClass,
      {
        'yc-carousel-item-current': index == getValidIndex(computedCurrent),
        'yc-carousel-item-prev': index == getValidIndex(computedCurrent - 1),
        'yc-carousel-item-next': index == getValidIndex(computedCurrent + 1),
      },
    ]"
    :style="{
      transitionTimingFunction,
      animationTimingFunction: transitionTimingFunction,
      transitionDuration: moveSpeed + 'ms',
      animationDuration: moveSpeed + 'ms',
    }"
  >
    <slot />
  </div>
</template>

<script lang="ts" setup>
import { computed, useAttrs } from 'vue';
import { CarouselItemSlots } from './type';
import useContext from './hooks/useContext';
defineOptions({
  name: 'CarouselItem',
});
defineSlots<CarouselItemSlots>();
// 接收注入
const {
  moveType,
  preIndex,
  computedCurrent,
  direction,
  moveSpeed,
  animationName,
  transitionTimingFunction,
  getValidIndex,
} = useContext().inject();
const attrs = useAttrs();
const index = computed(() => attrs.index);
// 动态计算className
const slideClass = computed(() => {
  if (
    animationName.value != 'slide' ||
    computedCurrent.value == preIndex.value ||
    (preIndex.value != index.value && computedCurrent.value != index.value)
  ) {
    return;
  }
  const slideDirection = direction.value == 'horizontal' ? '-x' : '-y';
  const slideType = preIndex.value == index.value ? '-out' : '-in';
  const siideMoveType = moveType.value == 'positive' ? '' : '-reverse';
  return `yc-carousel-slide${slideDirection}${slideType}${siideMoveType}`;
});
</script>

<style lang="less" scoped>
@import './style/carousel.less';
</style>
