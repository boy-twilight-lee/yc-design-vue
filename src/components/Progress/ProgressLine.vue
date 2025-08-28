<template>
  <div
    role="progressbar"
    aria-valuemin="0"
    aria-valuemax="100"
    :aria-valuenow="percent"
    class="yc-progress-line-wrapper"
  >
    <div class="yc-progress-line" :style="style">
      <div class="yc-progress-line-bar" :style="barStyle" />
    </div>
    <div v-if="showText" class="yc-progress-line-text">
      <slot name="text" :percent="percent">
        <span>{{ text }}</span>
        <component
          v-if="status === 'danger'"
          :is="TYPE_ICON_MAP.warning"
          :color="TYPE_ICON_COLOR_MAP.error"
        />
      </slot>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { toRefs, computed } from 'vue';
import { ProgressColor, ProgressStatus } from './type';
import { Size } from '@shared/type';
import { TYPE_ICON_MAP, TYPE_ICON_COLOR_MAP } from '@shared/constants';
import { isObject, valueToPx } from '@shared/utils';
const props = defineProps<{
  size: Size;
  percent: number;
  status?: ProgressStatus;
  showText: boolean;
  text: string;
  width?: number;
  strokeWidth?: number;
  color?: ProgressColor;
  trackColor?: string;
}>();
const {
  width,
  trackColor,
  color,
  percent,
  size,
  strokeWidth: _strokeWidth,
} = toRefs(props);
// strokeWidth
const strokeWidth = computed(() => {
  const map: Record<string, number> = {
    small: 3,
    medium: 4,
    large: 8,
  };
  return _strokeWidth.value ?? map[size.value];
});
// style
const style = computed(() => ({
  width: valueToPx(width.value),
  height: valueToPx(strokeWidth.value),
  backgroundColor: trackColor.value,
}));
// barStyle
const barStyle = computed(() => {
  return {
    width: `${percent.value * 100}%`,
    ...getBackground(color.value),
  };
});
// 获取背景色
const getBackground = (color?: string | Record<string, string>) => {
  if (isObject(color)) {
    const val = Object.keys(color)
      .map((key) => `${color[key]} ${key}`)
      .join(',');
    return {
      backgroundImage: `linear-gradient(to right, ${val})`,
    };
  }
  return {
    backgroundColor: color,
  };
};
</script>

<style scoped lang="less">
@import './style/progress.less';
</style>
