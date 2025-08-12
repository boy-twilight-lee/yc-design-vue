<template>
  <svg
    aria-hidden="true"
    focusable="false"
    viewBox="0 0 48 48"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    stroke="currentColor"
    :class="[
      'yc-icon',
      {
        'yc-icon-spin': spin,
      },
    ]"
    v-bind="attrs"
  >
    <slot></slot>
  </svg>
</template>

<script lang="ts" setup>
import { toRefs, computed, CSSProperties, useAttrs } from 'vue';
import { valueToPx } from '@shared/utils';
type IconProps = {
  strokeWidth?: number;
  strokeLinecap?: 'butt' | 'round' | 'square';
  strokeLinejoin?: 'bevel' | 'miter' | 'round' | 'inherit';
  rotate?: number;
  spin?: boolean;
  size?: number | number[];
  color?: string;
};
const props = withDefaults(defineProps<IconProps>(), {
  strokeWidth: 4,
  strokeLinecap: 'butt',
  strokeLinejoin: 'miter',
  spin: false,
});
const {
  size,
  spin,
  rotate,
  color,
  strokeLinecap,
  strokeLinejoin,
  strokeWidth,
} = toRefs(props);
const $attrs = useAttrs();
// 计算style
const style = computed(() => {
  let width = '';
  let height = '';
  if (Array.isArray(size.value)) {
    width = valueToPx(size.value[0]);
    height = valueToPx(size.value[1]);
  } else {
    width = size.value ? valueToPx(size.value) : '1em';
    height = size.value ? valueToPx(size.value) : '1em';
  }
  return {
    width,
    height,
    color: color.value ? color.value : 'inherit',
    transform: rotate ? `rotate(${rotate.value}deg)` : 'unset',
  } as CSSProperties;
});
// 计算attrs
const attrs = computed(() => {
  return {
    style: style.value,
    'stroke-width': strokeWidth.value,
    'stroke-linecap': strokeLinecap.value,
    'stroke-linejoin': strokeLinejoin.value,
    ...($attrs || {}),
  };
});
</script>

<style lang="less" scoped>
// 旋转
@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
// icon
.yc-icon {
  display: inline-block;
  overflow: hidden;
  width: 1em;
  height: 1em;
  color: inherit;
}
.yc-icon-spin {
  animation: spin 1s infinite cubic-bezier(0, 0, 1, 1);
}
</style>
