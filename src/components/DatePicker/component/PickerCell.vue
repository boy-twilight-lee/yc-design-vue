<template>
  <div
    :class="[
      'yc-picker-cell',
      {
        'yc-picker-cell-in-view': cellInView,
        'yc-picker-cell-today': isToday,
        'yc-picker-cell-selected': isSelected,
        'yc-picker-cell-disabled': disabled,
        'yc-picker-cell-hoverable': hoverable,
      },
    ]"
    @click="!disabled && $emit('click', $event)"
  >
    <slot name="cell">
      <div class="yc-picker-date">
        <div class="yc-picker-date-value">
          {{ value }}
        </div>
      </div>
    </slot>
  </div>
</template>

<script lang="ts" setup>
withDefaults(
  defineProps<{
    cellInView?: boolean;
    isToday?: boolean;
    isSelected?: boolean;
    disabled?: boolean;
    value?: number | string;
    hoverable?: boolean;
  }>(),
  {
    cellInView: false,
    isToday: false,
    isSelected: false,
    disabled: false,
    value: '',
    hoverable: true,
  }
);
defineEmits<{
  (e: 'click', ev: MouseEvent): void;
}>();
</script>

<style lang="less">
@import '../style/picker-panel.less';
</style>
