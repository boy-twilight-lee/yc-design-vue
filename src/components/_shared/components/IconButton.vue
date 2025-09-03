<template>
  <div
    :class="[
      'yc-icon-button',
      {
        'yc-icon-button-disabled': disabled,
        'yc-icon-button-hoverable': hoverable,
      },
    ]"
    :style="{
      '--icon-btn-size': hoverSize,
    }"
    @mousedown="(e) => preventFocus && e.preventDefault()"
  >
    <slot>
      <icon-close :size="size" />
    </slot>
  </div>
</template>

<script lang="ts" setup>
import { toRefs, computed } from 'vue';
import { IconClose } from '@shared/icons';
import { valueToPx } from '@shared/utils';
const props = withDefaults(
  defineProps<{
    size?: number;
    hoverSize?: number;
    disabled?: boolean;
    hoverable?: boolean;
    preventFocus?: boolean;
  }>(),
  {
    size: 12,
    hoverSize: 20,
    disabled: false,
    hoverable: true,
    preventFocus: true,
  }
);
const { hoverSize: _hoverSize } = toRefs(props);
const hoverSize = computed(() => valueToPx(_hoverSize.value));
</script>

<style lang="less" scoped>
.yc-icon-button {
  user-select: none;
  cursor: pointer;
  position: relative;
  color: var(--color-text-1);
  display: flex;
  justify-content: center;
  align-items: center;
  &::before {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: var(--icon-btn-size);
    height: var(--icon-btn-size);
    border-radius: 50%;
    background: transparent;
    transition: background-color 0.1s cubic-bezier(0, 0, 1, 1);
  }
  &:deep(.yc-icon) {
    position: relative;
    z-index: 1;
  }
}
// hoverable
.yc-icon-button-hoverable {
  &:not(.yc-icon-button-disabled):hover::before {
    background-color: var(--color-fill-2);
  }
}
// disabled
.yc-icon-button-disabled {
  color: var(--color-text-3);
}
</style>
