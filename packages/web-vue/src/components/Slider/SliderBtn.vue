<template>
  <yc-tooltip
    v-model:popup-visible="computedVisible"
    :disabled="!showTooltip"
    :position="direction == 'vertical' ? 'right' : 'bottom'"
    :content="
      formatTooltip ? formatTooltip(computedValue) : String(computedValue)
    "
  >
    <div
      class="yc-slider-btn"
      ref="triggerRef"
      :style="{
        transform: position.transform,
      }"
    ></div>
  </yc-tooltip>
</template>

<script lang="ts" setup>
import { ref, computed, watch, toRefs } from 'vue';
import { useControlValue } from '@shared/utils';
import useContext from './hooks/useContext';
import useSliderDraggable, { PositionData } from './hooks/useSliderDraggable';
import YcTooltip from '@/components/Tooltip';
const props = defineProps<{
  type: 'start' | 'end';
  position: PositionData;
}>();
const emits = defineEmits<{
  (e: 'update:position', value: PositionData): void;
}>();
const { type } = toRefs(props);
// 触发dom
const triggerRef = ref<HTMLDivElement>();
// 解构父级属性通用
const {
  trackRef,
  min,
  max,
  direction,
  disabled,
  step,
  showTooltip,
  startValue,
  endValue,
  formatTooltip,
  normalizeValue,
  denormalizeValue,
} = useContext().inject();
// 计算值
const computedValue = computed({
  get() {
    return type.value == 'start' ? startValue.value : endValue.value;
  },
  set(val) {
    if (type.value == 'start') {
      startValue.value = val;
    } else {
      endValue.value = val;
    }
  },
});
// 拖动hook
const { position, isDragging } = useSliderDraggable({
  trackRef,
  triggerRef,
  computedValue,
  direction,
  step,
  min,
  max,
  disabled,
  denormalizeValue,
  normalizeValue,
});
// 可见性
const computedVisible = useControlValue(
  ref(),
  false,
  () => {},
  (val) => {
    return isDragging.value || val;
  }
);
// 检测位置改变传递
watch(position, () => {
  emits('update:position', position);
});
</script>

<style lang="less">
@import './style/slider.less';
</style>
