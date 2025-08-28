<template>
  <div
    :class="[
      'yc-carousel-arrow',
      positionClass,
      arrowClass,
      {
        'yc-carousel-arrow-show-hover': showArrow == 'hover',
      },
    ]"
    @click="
      $emit(
        'change',
        type == 'next' ? computedCurrent + 1 : computedCurrent - 1
      )
    "
  >
    <icon-arrow-right :rotate="rotate" />
  </div>
</template>

<script lang="ts" setup>
import { toRefs, computed } from 'vue';
import { IconArrowRight } from '@shared/icons';
import useContext from './hooks/useContext';
const props = defineProps<{
  type: 'pre' | 'next';
}>();
defineEmits<{
  (e: 'change', index: number): void;
}>();
const { type } = toRefs(props);
// 接收注入
const { showArrow, direction, arrowClass, computedCurrent } =
  useContext().inject();
// 旋转角度
const rotate = computed(() => {
  if (type.value == 'next') {
    return direction.value == 'horizontal' ? 0 : 90;
  } else {
    return direction.value == 'horizontal' ? 180 : -90;
  }
});
// position信息
const positionClass = computed(() => {
  if (type.value == 'next') {
    return direction.value == 'horizontal'
      ? 'yc-carousel-arrow-right'
      : 'yc-carousel-arrow-bottom';
  } else {
    return direction.value == 'horizontal'
      ? 'yc-carousel-arrow-left'
      : 'yc-carousel-arrow-top';
  }
});
</script>

<style lang="less" scoped>
@import './style/carousel.less';
</style>
