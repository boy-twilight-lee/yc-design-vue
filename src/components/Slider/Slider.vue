<template>
  <div
    :class="[
      'yc-slider',
      `yc-slider-direction-${direction}`,
      {
        'yc-slider-disabled': disabled,
      },
    ]"
  >
    <div class="yc-slider-track" ref="trackRef">
      <!-- ticks -->
      <slider-ticks v-if="showTicks" type="ticks" :data="ticks" />
      <slider-ticks v-if="marks.length" type="dots" :data="marks" />
      <slider-ticks v-if="marks.length" type="marks" :data="marks" />
      <!-- bar -->
      <div
        class="yc-slider-bar"
        role="slider"
        tabindex="0"
        :aria-disabled="disabled"
        :style="position"
      ></div>
      <!-- start -->
      <slider-btn v-model:position="startPosition" type="start" />
      <!-- end  -->
      <slider-btn v-if="range" v-model:position="endPosition" type="end" />
    </div>
    <!-- input -->
    <div v-if="showInput" class="yc-slider-input">
      <slider-input type="start" />
      <div v-if="range" class="yc-slider-input-divider"></div>
      <slider-input v-if="range" type="end" />
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref, computed } from 'vue';
import { SliderProps, SliderEmits } from './type';
import { PositionData } from './hooks/useSliderDraggable';
import useContext from './hooks/useContext';
import SliderTicks from './SliderTicks.vue';
import SliderBtn from './SliderBtn.vue';
import SliderInput from './SliderInput.vue';
defineOptions({
  name: 'Slider',
});
const props = withDefaults(defineProps<SliderProps>(), {
  modelValue: undefined,
  defaultValue: 0,
  step: 1,
  min: 0,
  marks: () => {
    return {};
  },
  max: 100,
  direction: 'horizontal',
  disabled: false,
  showTicks: false,
  showInput: false,
  range: false,
  showTooltip: true,
  formatTooltip: (val: number) => {
    return val + '';
  },
});
const emits = defineEmits<SliderEmits>();
// trackRef
const trackRef = ref<HTMLDivElement>();
// 注入
const { ticks, marks, range, direction, min, normalizeValue } =
  useContext().provide(props, emits, trackRef);
// 开始按钮的位置
const startPosition = ref<PositionData>({
  bottom: 0,
  left: 0,
  top: 0,
  right: 0,
});
// 结束按钮的位置
const endPosition = ref<PositionData>({
  bottom: 0,
  left: 0,
  top: 0,
  right: 0,
});
// 综合计算position
const position = computed(() => {
  const { left, right, top, bottom } = startPosition.value;
  if (!range.value) {
    return direction.value == 'vertical'
      ? {
          top: top + '%',
          bottom: normalizeValue(min.value) + '%',
        }
      : {
          left: normalizeValue(min.value) + '%',
          right: right + '%',
        };
  }
  const {
    left: left1,
    right: right1,
    top: top1,
    bottom: bottom1,
  } = endPosition.value;
  return direction.value == 'vertical'
    ? {
        top: `${top < top1 ? top : top1}%`,
        bottom: `${bottom < bottom1 ? bottom : bottom1}%`,
      }
    : {
        left: `${left < left1 ? left : left1}%`,
        right: `${right < right1 ? right : right1}%`,
      };
});
</script>

<style lang="less" scoped>
@import './style/slider.less';
</style>
