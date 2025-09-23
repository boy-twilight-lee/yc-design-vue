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
import { ref, toRefs, reactive, watch, nextTick } from 'vue';
import { ResizeBoxProps, ResizeBoxEmits, ResizeBoxSlots } from './type';
import { Position } from '@shared/type';
import { IconDragDot } from '@shared/icons';
import {
  useControlValue,
  valueToPx,
  useResizeObserver,
  useEventListener,
} from '@shared/utils';
defineOptions({
  name: 'ResizeBox',
});
defineSlots<ResizeBoxSlots>();
const props = withDefaults(defineProps<ResizeBoxProps>(), {
  width: undefined,
  height: undefined,
  component: 'div',
  directions: () => ['right'],
});
const emits = defineEmits<ResizeBoxEmits>();
const { width: _width, height: _height } = toRefs(props);
// 计算的宽度
const computedWidth = useControlValue<number>(_width, 0, (val) => {
  emits('update:width', val);
});
// 计算的宽度
const computedHeight = useControlValue<number>(_height, 0, (val) => {
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
const dragDirection = ref<Position | null>(null);
// 初始位置和尺寸
let x = 0;
let y = 0;
// 记录拖拽之前body的光标
let cursor: string;
// 处理拖拽开始
const handleMovingStart = async (dir: Position, e: MouseEvent) => {
  // 防止文本选中等副作用
  e.preventDefault();
  dragDirection.value = dir;
  const { width, height } = boxRef.value!.getBoundingClientRect();
  computedWidth.value = width;
  computedHeight.value = height;
  const { clientX, clientY } = e;
  x = clientX;
  y = clientY;
  cursor = getComputedStyle(document.body).cursor;
  document.body.style.cursor = ['left', 'right'].includes(dir)
    ? 'col-resize'
    : 'row-resize';
  emits('moving-start', e);
};
// 处理拖拽中
const handleMoving = (e: MouseEvent) => {
  if (!dragDirection.value || !boxRef.value) {
    return;
  }
  const { clientX, clientY } = e;
  // 计算鼠标偏移量
  const movementX = dragDirection.value == 'left' ? x - clientX : clientX - x;
  const movementY = dragDirection.value == 'top' ? y - clientY : clientY - y;
  const minWidth = triggerSize.left + triggerSize.right;
  const minHeight = triggerSize.bottom + triggerSize.top;
  // 赋值
  x = clientX;
  y = clientY;
  // 计算宽高
  if (['left', 'right'].includes(dragDirection.value)) {
    computedWidth.value += movementX;
    boxRef.value.style.width = `${valueToPx(computedWidth.value <= minWidth ? minWidth : computedWidth.value)}`;
  } else {
    computedHeight.value += movementY;
    boxRef.value.style.height = `${valueToPx(computedHeight.value <= minHeight ? minHeight : computedHeight.value)}`;
  }
  // 重新验证宽度
  const { width, height } = boxRef.value!.getBoundingClientRect();
  if (width != computedWidth.value) {
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
      const direction = item.target.getAttribute('dir') as Position;
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
watch(
  [computedWidth, computedHeight],
  async () => {
    if (dragDirection.value) return;
    console.log('函数触发了');
    await nextTick();
    boxRef.value!.style.width = computedWidth.value
      ? `${valueToPx(computedWidth.value)}`
      : '';
    boxRef.value!.style.height = computedHeight.value
      ? `${valueToPx(computedHeight.value)}`
      : '';
  },
  {
    immediate: true,
  }
);
</script>

<style lang="less">
@import './style/resize-box.less';
</style>
