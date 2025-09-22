<template>
  <div
    role="progressbar"
    aria-valuemin="0"
    aria-valuemax="100"
    :aria-valuenow="percent"
    class="yc-progress-steps-wrapper"
  >
    <div class="yc-progress-steps" :style="{ height: valueToPx(strokeWidth) }">
      <div
        v-for="(active, i) of stepList"
        :key="i"
        :class="[
          'yc-progress-steps-item',
          {
            'yc-progress-steps-item-active': active,
          },
        ]"
        :style="{
          backgroundColor: active ? (color as string) : trackColor,
        }"
      />
    </div>
    <div v-if="showText" class="yc-progress-steps-text">
      <slot name="text" :percent="percent">
        {{ text }}
        <component
          v-if="status === 'danger'"
          :is="TYPE_ICON_MAP.danger"
          :color="TYPE_ICON_COLOR_MAP.danger"
        />
      </slot>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { computed, toRefs } from 'vue';
import { ProgressColor } from './type';
import { Size } from '@shared/type';
import { TYPE_ICON_MAP, TYPE_ICON_COLOR_MAP } from '@shared/constants';
import { valueToPx } from '@shared/utils';
const props = defineProps<{
  steps: number;
  percent: number;
  size: Size;
  text: string;
  showText: boolean;
  color?: ProgressColor;
  trackColor?: string;
  strokeWidth?: number;
  status?: string;
}>();
const { steps, percent, size, strokeWidth: _strokeWidth } = toRefs(props);
// strokewidth
const strokeWidth = computed(() => {
  return _strokeWidth.value ?? (size.value == 'small' ? 8 : 4);
});
// stepList
const stepList = computed(() => {
  return Array(steps.value)
    .fill(0)
    .map((_, i) => {
      {
        return percent.value > 0 && percent.value > (1 / steps.value) * i;
      }
    });
});
</script>

<style lang="less">
@import './style/progress.less';
</style>
