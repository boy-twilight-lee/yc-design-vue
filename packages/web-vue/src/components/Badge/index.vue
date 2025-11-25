<template>
  <div :class="['yc-badge', { 'yc-badge-no-children': !$slots.default }]">
    <slot />
    <!-- status -->
    <div v-if="className == 'yc-badge-status'" class="yc-badge-stauts-wrapper">
      <div
        :class="[
          'yc-badge-stauts-dot',
          {
            [`yc-badge-color-${color}`]: color,
            [`yc-badge-status-${status}`]: status,
          },
        ]"
        :style="{
          backgroundColor: !TAG_PRESET_COLORS.includes(color) ? color : '',
          ...dotStyle,
        }"
      ></div>
      <div v-if="badgeText" class="yc-badge-status-text">
        {{ badgeText }}
      </div>
    </div>
    <!-- number -->
    <div
      v-else-if="className != 'yc-badge-number' || count > 0"
      :class="[className]"
      :style="style"
    >
      <slot name="content">
        {{ badgeText }}
      </slot>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { computed, toRefs } from 'vue';
import { BadgeProps, BadgeSlots } from './type';
import { TAG_PRESET_COLORS } from '@shared/constants';
import { valueToPx } from '@shared/utils';
defineOptions({
  name: 'Badge',
});
const $slots = defineSlots<BadgeSlots>();
const props = withDefaults(defineProps<BadgeProps>(), {
  text: '',
  dot: false,
  dotStyle: () => {
    return {};
  },
  maxCount: 99,
  offset: () => {
    return [0, 0];
  },
  color: undefined,
  status: undefined,
  count: undefined,
});
const { text, dot, count, maxCount, offset, dotStyle, status, color } =
  toRefs(props);
// style
const style = computed(() => {
  return {
    margin: `${valueToPx(offset.value[1])} ${valueToPx(-offset.value[0])} 0 0`,
    ...dotStyle.value,
  };
});
// 动态计算className
const className = computed(() => {
  if ($slots.content) return 'yc-badge-custom-dot';
  if (color.value || status.value) return 'yc-badge-status';
  if (text.value) return 'yc-badge-text';
  if (dot.value) return 'yc-badge-dot';
  else return 'yc-badge-number';
});
// 获取text
const badgeText = computed(() => {
  if (color.value || status.value || text.value || dot.value) return text.value;
  else
    return count.value! >= maxCount.value ? `${maxCount.value}+` : count.value;
});
</script>

<style lang="less">
@import './style/badge.less';
</style>
