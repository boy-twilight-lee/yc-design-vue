<template>
  <div
    :class="[
      'yc-progress',
      `yc-progress-type-${type}`,
      `yc-progress-size-${size}`,
      `yc-progress-status-${status}`,
    ]"
  >
    <progress-steps
      v-if="steps > 0"
      :percent="percent"
      :size="size"
      :width="width"
      :stroke-width="strokeWidth"
      :text="text"
      :show-text="showText"
      :color="color"
      :track-color="trackColor"
      :steps="steps"
    >
      <template v-if="$slots.text" #text="scope">
        <slot name="text" v-bind="scope"></slot>
      </template>
    </progress-steps>
    <progress-line
      v-else-if="type === 'line' && size !== 'mini'"
      :width="width"
      :size="size"
      :stroke-width="strokeWidth"
      :color="color"
      :track-color="trackColor"
      :text="text"
      :show-text="showText"
      :percent="percent"
      :status="status"
    >
      <template v-if="$slots.text" #text="scope">
        <slot name="text" v-bind="scope"></slot>
      </template>
    </progress-line>
    <!-- circle -->
    <progress-circle
      v-else
      :type="type"
      :percent="percent"
      :width="width"
      :stroke-width="type === 'line' ? strokeWidth || 4 : strokeWidth"
      :path-stroke-width="type === 'line' ? strokeWidth || 4 : strokeWidth"
      :size="size"
      :show-text="showText"
      :text="text"
      :color="color"
      :track-color="trackColor"
      :status="status"
    >
      <template v-if="$slots.text" #text="scope">
        <slot name="text" v-bind="scope"></slot>
      </template>
    </progress-circle>
  </div>
</template>

<script lang="ts" setup>
import { computed, toRefs } from 'vue';
import { ProgressProps } from './type';
import { getGlobalConfig } from '@shared/utils';
import ProgressLine from './ProgressLine.vue';
import ProgressSteps from './ProgressSteps.vue';
import ProgressCircle from './ProgressCircle.vue';
defineOptions({
  name: 'Progress',
});
const props = withDefaults(defineProps<ProgressProps>(), {
  type: 'line',
  size: undefined,
  percent: 0,
  steps: 0,
  animation: false,
  showText: true,
  status: 'normal',
});
const {
  steps,
  percent,
  width: _width,
  type: _type,
  status: _status,
  strokeWidth: _strokeWidth,
} = toRefs(props);
// 获取size
const { size } = getGlobalConfig(props);
// type
const type = computed(() => (steps.value > 0 ? 'steps' : _type.value));
// status
const status = computed(() => {
  return _status.value || (percent.value >= 1 ? 'success' : 'normal');
});
// 显示的text
const text = computed(() => `${(percent.value * 100).toFixed(0)}%`);
// width
const width = computed(() => {
  if (type.value == 'steps' || (type.value == 'line' && size.value != 'mini')) {
    return _width.value as number;
  }
  const map: Record<string, number> = {
    mini: 16,
    small: 48,
    medium: 64,
    large: 80,
  };
  return _width.value ?? map[size.value as string];
});
</script>

<style lang="less" scoped>
@import './style/progress.less';
@import './style/dark.less';
</style>
