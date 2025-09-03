<template>
  <component :is="component" class="yc-resizebox" ref="boxRef">
    <slot />
    <div
      v-for="(dir, i) in directions"
      :key="dir"
      :class="[
        'yc-resizebox-trigger',
        `yc-resizebox-direction-${dir}`,
        `yc-resizebox-trigger-${['left', 'right'].includes(dir) ? 'vertical' : 'horizontal'}`,
      ]"
      :dir="dir"
      :ref="(el) => (triggeDoms[i] = el as HTMLDivElement)"
      @mousedown="handleMovingStart(dir, $event)"
    >
      <slot name="resize-trigger" :direction="dir">
        <div class="yc-resizebox-trigger-icon-wrapper">
          <slot name="resize-trigger-icon" :direction="dir">
            <icon-drag-dot :rotate="['left', 'right'].includes(dir) ? 90 : 0" />
          </slot>
        </div>
      </slot>
    </div>
  </component>
</template>

<script lang="ts" setup>
import { ref, toRefs, reactive } from 'vue';
import { useResizeObserver, useEventListener } from '@vueuse/core';
import {
  ResizeBoxProps,
  ResizeBoxEmits,
  ResizeBoxSlots,
  ResizeBoxDirection,
} from './type';
import { IconDragDot } from '@shared/icons';
import { useControlValue, valueToPx, sleep } from '@shared/utils';
defineOptions({
  name: 'ResizeBox',
});
const slots = defineSlots<ResizeBoxSlots>();
const props = withDefaults(defineProps<ResizeBoxProps>(), {
  width: undefined,
  height: undefined,
  component: 'div',
  directions: () => ['right'],
});
const emits = defineEmits<ResizeBoxEmits>();
const { width, height } = toRefs(props);
// 计算的宽度
const computedWidth = useControlValue<number>(width, 0, (val) => {
  emits('update:width', val);
});
// 计算的宽度
const computedHeight = useControlValue<number>(height, 0, (val) => {
  emits('update:height', val);
});
// triggerMap
const triggeDoms = reactive<HTMLDivElement[]>([]);
// boxPadding
const triggerSize = reactive({
  left: 0,
  right: 0,
  bottom: 0,
  top: 0,
});
// boxRef
const boxRef = ref<HTMLDivElement>();
// 拖拽方向
const dragDirection = ref<ResizeBoxDirection | null>(null);
// 初始位置和尺寸
const x = ref<number>(0);
const y = ref<number>(0);
// 记录拖拽之前body的光标
let cursor: string;
let tempW = 0;
// 处理拖拽开始
const handleMovingStart = (dir: ResizeBoxDirection, e: MouseEvent) => {
  // 防止文本选中等副作用
  e.preventDefault();
  dragDirection.value = dir;
  const { width, height } = boxRef.value!.getBoundingClientRect();
  const { clientX, clientY } = e;
  computedWidth.value = width;
  computedHeight.value = height;
  tempW = width;
  x.value = clientX;
  y.value = clientY;
  cursor = getComputedStyle(document.body).cursor;
  document.body.style.cursor = ['left', 'right'].includes(dir)
    ? 'col-resize'
    : 'row-resize';
  emits('moving-start', e);
};
// 处理拖拽中
const handleMoving = async (e: MouseEvent) => {
  if (!dragDirection.value || !boxRef.value) {
    return;
  }
  const { clientX, clientY } = e;
  // 计算鼠标偏移量
  const movementX =
    dragDirection.value == 'left' ? x.value - clientX : clientX - x.value;
  const movementY =
    dragDirection.value == 'top' ? y.value - clientY : clientY - y.value;
  // 计算临界最小宽高
  const minWidth = triggerSize.left + triggerSize.right;
  const minHeight = triggerSize.top + triggerSize.bottom;
  // 赋值
  x.value = clientX;
  y.value = clientY;
  // 计算宽高
  if (['left', 'right'].includes(dragDirection.value)) {
    computedWidth.value += movementX;
    computedWidth.value <= minWidth && (computedWidth.value = minWidth);
    boxRef.value.style.width = valueToPx(computedWidth.value);
  } else {
    computedHeight.value += movementY;
    computedHeight.value <= minHeight && (computedHeight.value = minHeight);
    boxRef.value.style.height = valueToPx(computedHeight.value);
  }
  const { width, height } = boxRef.value!.getBoundingClientRect();
  if (computedWidth.value != width) {
    computedWidth.value = width;
  }
  if (height != computedHeight.value) {
    computedHeight.value = height;
  }
  emits(
    'moving',
    {
      width,
      height,
    },
    e
  );
};
// 处理拖拽结束
const handleMovingEnd = (e: MouseEvent) => {
  if (!dragDirection.value) return;
  dragDirection.value = null;
  document.body.style.cursor = cursor;
  emits('moving-end', e);
};
// 处理鼠标移动
useEventListener('mousemove', handleMoving);
// 处理鼠标抬起
useEventListener('mouseup', handleMovingEnd);
// 监听各个trigger的宽高
useResizeObserver(
  () => {
    return triggeDoms;
  },
  (entries) => {
    entries.forEach((item) => {
      const direction = item.target.getAttribute('dir') as ResizeBoxDirection;
      const {
        contentRect: { width, height },
      } = item;
      triggerSize[direction] = ['right', 'left'].includes(direction)
        ? width
        : height;
    });
  },
  {
    box: 'border-box',
  }
);
</script>

<style lang="less">
@import './style/resize-box.less';
</style>
