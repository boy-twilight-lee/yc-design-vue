<template>
  <div class="yc-picker-header">
    <div class="yc-picker-header-icon" @click="$emit('prev-double-click')">
      <slot name="icon-prev-double">
        <icon-double-left />
      </slot>
    </div>
    <div
      v-if="['week', 'date'].includes(type)"
      class="yc-picker-header-icon"
      @click="$emit('prev-click')"
    >
      <slot name="icon-prev">
        <icon-arrow-right :rotate="180" />
      </slot>
    </div>
    <div class="yc-picker-header-title">
      <slot>
        <span class="yc-picker-header-label" @click="$emit('year-click')">
          {{ year }}
        </span>
        <template v-if="!isUndefined(month)">
          <span>-</span>
          <span class="yc-picker-header-label" @click="$emit('month-click')">
            {{ month < 9 ? `0${month + 1}` : month + 1 }}
          </span>
        </template>
      </slot>
    </div>
    <div
      v-if="['week', 'date'].includes(type)"
      class="yc-picker-header-icon"
      @click="$emit('next-click')"
    >
      <slot name="icon-next">
        <icon-arrow-right />
      </slot>
    </div>
    <div class="yc-picker-header-icon" @click="$emit('next-double-click')">
      <slot name="icon-next-double">
        <icon-double-right />
      </slot>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { IconDoubleLeft, IconDoubleRight, IconArrowRight } from '@shared/icons';
import { isUndefined } from '@shared/utils';
defineProps<{
  type: 'year' | 'month' | 'week' | 'date';
  year?: number;
  month?: number;
}>();
defineEmits<{
  (e: 'prev-double-click'): void;
  (e: 'prev-click'): void;
  (e: 'next-double-click'): void;
  (e: 'next-click'): void;
  (e: 'year-click'): void;
  (e: 'month-click'): void;
}>();
</script>

<style lang="less">
@import '../style/picker.less';
</style>
