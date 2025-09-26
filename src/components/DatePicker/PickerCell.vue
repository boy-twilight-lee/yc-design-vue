<template>
  <div
    :class="[
      'yc-picker-cell',
      {
        'yc-picker-cell-in-view': cellInView,
        'yc-picker-cell-today': isToday,
        'yc-picker-cell-selected': isSelected,
      },
    ]"
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
    value?: number | string;
  }>(),
  {
    cellInView: false,
    isToday: false,
    isSelected: false,
    value: '',
  }
);
</script>

<style lang="less" scoped>
.yc-picker-cell {
  flex: 1;
  .yc-picker-date {
    cursor: pointer;
    width: 100%;
    height: 100%;
    padding: 4px;
    display: flex;
    justify-content: center;
    .yc-picker-date-value {
      cursor: pointer;
      height: 24px;
      width: 100%;
      border-radius: 24px;
      color: var(--color-text-4);
      font-size: 14px;
      line-height: 24px;
      text-align: center;
    }
  }
  &.yc-picker-cell-in-view {
    .yc-picker-date {
      .yc-picker-date-value {
        color: var(--color-text-1);
        font-weight: 500;
        &:hover {
          color: var(--color-text-1);
          background-color: var(--color-fill-3);
        }
      }
    }
  }
  &.yc-picker-cell-today {
    position: relative;
    &:after {
      position: absolute;
      bottom: -2px;
      left: 50%;
      display: block;
      width: 4px;
      height: 4px;
      margin-left: -2px;
      background-color: rgb(var(--primary-6));
      border-radius: 50%;
      content: '';
    }
  }
  &.yc-picker-cell-selected {
    .yc-picker-date {
      .yc-picker-date-value {
        color: var(--color-white);
        background-color: rgb(var(--primary-6));
        transition: background-color 0.1s cubic-bezier(0, 0, 1, 1);
        &:hover {
          color: var(--color-white);
          background-color: rgb(var(--primary-6));
        }
      }
    }
  }
}
</style>
