<template>
  <div
    role="progressbar"
    aria-valuemin="0"
    aria-valuemax="100"
    :aria-valuenow="percent"
    :class="`yc-progress-circle-wrapper`"
    :style="{ width: valueToPx(width), height: valueToPx(width) }"
  >
    <icon-check
      v-if="type === 'circle' && size === 'mini' && status === 'success'"
      :style="{
        fontSize: width - 2,
        color: color ?? TYPE_ICON_COLOR_MAP.success,
      }"
    />
    <svg
      v-else
      :viewBox="`0 0 ${width} ${width}`"
      :class="`yc-progress-circle-svg`"
    >
      <defs v-if="isObject(color)">
        <linearGradient :id="linearGradientId" x1="0" y1="1" x2="0" y2="0">
          <stop
            v-for="key of Object.keys(color)"
            :key="key"
            :offset="key"
            :stop-color="color[key]"
          />
        </linearGradient>
      </defs>
      <circle
        :class="`yc-progress-circle-bg`"
        fill="none"
        :cx="center"
        :cy="center"
        :r="radius"
        :stroke-width="pathStrokeWidth"
        :style="{
          stroke: trackColor,
        }"
      />
      <circle
        :class="`yc-progress-circle-bar`"
        fill="none"
        :cx="center"
        :cy="center"
        :r="radius"
        :stroke-width="strokeWidth"
        :style="{
          stroke: isLinearGradient
            ? `url(#${linearGradientId})`
            : (color as string),
          strokeDasharray: perimeter,
          strokeDashoffset: (percent >= 1 ? 0 : 1 - percent) * perimeter,
        }"
      />
    </svg>
    <div v-if="showText && size !== 'mini'" :class="`yc-progress-circle-text`">
      <slot name="text" :percent="percent">
        <icon-exclamation
          v-if="status === 'danger'"
          :color="TYPE_ICON_COLOR_MAP.error"
        />
        <icon-check
          v-else-if="status === 'success'"
          :color="TYPE_ICON_COLOR_MAP.success"
        />
        <template v-else>
          {{ text }}
        </template>
      </slot>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { toRefs, computed } from 'vue';
import { ProgressColor, ProgressStatus } from './type';
import { isObject, valueToPx } from '@shared/utils';
import { Size } from '@shared/type';
import { IconCheck, IconExclamation } from '@shared/icons';
import { TYPE_ICON_COLOR_MAP } from '@shared/constants';
const props = defineProps<{
  type: string;
  percent: number;
  status?: ProgressStatus;
  size: Size;
  text: string;
  showText: boolean;
  width: number;
  strokeWidth?: number;
  pathStrokeWidth?: number;
  color?: ProgressColor;
  trackColor?: string;
}>();

const {
  size,
  width,
  color,
  strokeWidth: _strokeWidth,
  pathStrokeWidth: _pathStrokeWidth,
} = toRefs(props);
let __YC_PROGRESS_SEED = 0;
// 是否是渐变
const isLinearGradient = computed(() => isObject(color.value));
// strokeWidth;
const strokeWidth = computed(() => {
  const map = {
    mini: 4,
    small: 3,
    medium: 4,
    large: 4,
  };
  return (
    _strokeWidth.value ??
    (size.value === 'mini' ? width.value / 2 : map[size.value])
  );
});
// pathStrokeWidth
const pathStrokeWidth = computed(() => {
  if (_pathStrokeWidth.value) return _pathStrokeWidth.value;
  return size.value === 'mini'
    ? strokeWidth.value
    : Math.max(2, strokeWidth.value - 2);
});
// 计算radius
const radius = computed(() => (width.value - strokeWidth.value) / 2);
// 周长
const perimeter = computed(() => Math.PI * 2 * radius.value);
// 中心
const center = computed(() => width.value / 2);
// 渐变id
const linearGradientId = computed(() => {
  __YC_PROGRESS_SEED += 1;
  return `yc-progress-circle-linear-gradient-${__YC_PROGRESS_SEED}`;
});
</script>

<style lang="less" scoped>
@import './style/progress.less';
</style>
