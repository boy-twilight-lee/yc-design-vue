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
import { valueToPx } from '@shared/utils/dom';
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

<style lang="less">
@import './style/icon-button.less';
</style>
