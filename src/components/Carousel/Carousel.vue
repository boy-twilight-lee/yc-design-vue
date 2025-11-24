<template>
  <div
    :class="[
      'yc-carousel',
      `yc-carousel-animation-${animationName}`,
      {
        'yc-carousel-indicator-outer': indicatorPosition == 'outer',
      },
    ]"
  >
    <div
      :class="['yc-carousel-slide', `yc-carousel-direction-${direction}`]"
      @mouseenter="
        isObject(autoPlay) && autoPlay?.hoverToPause && stopAutoPlay()
      "
      @mouseleave="
        isObject(autoPlay) && autoPlay?.hoverToPause && setAutoPlay()
      "
    >
      <component
        v-for="(node, i) in carouselItems"
        :key="i"
        :is="node"
        :index="i + 1"
      />
    </div>
    <div v-if="indicatorType != 'never'" class="yc-carousel-indicator-wrapper">
      <carousel-indicator
        :indicator-class="indicatorClass"
        :trigger="trigger"
        :indicator-position="indicatorPosition"
        :indicator-type="indicatorType"
        @change="handleChange"
      />
    </div>
    <div v-if="showArrow != 'never'" class="yc-carousel-arrow-wrapper">
      <carousel-arrow type="pre" @change="handleChange" />
      <carousel-arrow type="next" @change="handleChange" />
    </div>
  </div>
</template>

<script lang="ts" setup>
import { watch, onBeforeUnmount, ref } from 'vue';
import { isObject } from '@shared/utils';
import { CarouselProps, CarouselEmits, CarouselSlots } from './type';
import useContext from './hooks/useContext';
import CarouselArrow from './CarouselArrow.vue';
import CarouselIndicator from './CarouselIndicator.vue';
defineOptions({
  name: 'Carousel',
});
defineSlots<CarouselSlots>();
const props = withDefaults(defineProps<CarouselProps>(), {
  current: undefined,
  defaultCurrent: 1,
  autoPlay: false,
  moveSpeed: 500,
  animationName: 'slide',
  trigger: 'click',
  direction: 'horizontal',
  showArrow: 'always',
  arrowClass: '',
  indicatorType: 'dot',
  indicatorPosition: 'bottom',
  indicatorClass: '',
  transitionTimingFunction: 'cubic-bezier(0.34, 0.69, 0.1, 1)',
});
const emits = defineEmits<CarouselEmits>();
// 注入
const { slideTo, computedCurrent, autoPlay, carouselItems, direction } =
  useContext().provide(props, emits);
// 自动播放的timer
const autoPlayTimer = ref<number>(0);
// 处理停止自动播放
const stopAutoPlay = () => {
  if (!autoPlayTimer.value) return;
  clearInterval(autoPlayTimer.value);
  autoPlayTimer.value = 0;
};
const setAutoPlay = () => {
  if (!autoPlay.value) return;
  stopAutoPlay();
  autoPlayTimer.value = window.setInterval(
    () => {
      slideTo(computedCurrent.value + 1);
    },
    (autoPlay.value as Record<string, any>)?.interval ?? 3000
  );
};
// [修改] handleChange 的逻辑现在是正确的
const handleChange = async (index: number) => {
  stopAutoPlay();
  await slideTo(index);
  setAutoPlay();
};
watch(
  () => autoPlay.value,
  () => {
    stopAutoPlay();
    setAutoPlay();
  },
  {
    immediate: true,
  }
);
onBeforeUnmount(() => {
  stopAutoPlay();
});
</script>

<style lang="less">
@import './style/carousel.less';
</style>
