<template>
  <div
    :class="[
      'yc-carousel-item',
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
      animationName: animation,
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
const index = computed(() => attrs.index as number);
// 动态计算className
const animation = computed(() => {
  const isReverse = moveType.value == 'negative';
  const moveDirection = isReverse ? '-reverse' : '';
  if (
    animationName.value == 'slide' &&
    computedCurrent.value != preIndex.value &&
    (preIndex.value == index.value || computedCurrent.value == index.value)
  ) {
    const slideDirection = direction.value == 'horizontal' ? '-x' : '-y';
    const slideType = preIndex.value == index.value ? '-out' : '-in';
    return `carousel-slide${slideDirection}${slideType}${moveDirection}`;
  }
  if (animationName.value == 'card') {
    const map = {
      [`${computedCurrent.value}`]: `carousel-card-middle-to-top${moveDirection}`,
      [`${getValidIndex(computedCurrent.value - 1)}`]: isReverse
        ? `carousel-card-bottom-to-middle${moveDirection}`
        : 'carousel-card-top-to-middle',
      [`${getValidIndex(computedCurrent.value + 1)}`]: isReverse
        ? `carousel-card-top-to-middle${moveDirection}`
        : 'carousel-card-bottom-to-middle',
    };
    return `${map[index.value] ?? 'carousel-card-middle-to-bottom'}${moveDirection}`;
  }
  return '';
});
</script>

<style lang="less">
@import './style/carousel.less';
</style>
