<template>
  <div
    :class="[
      'yc-icon-button',
      {
        'yc-icon-button-disabled': disabled,
        'yc-icon-button-hoverable': hoverable,
      },
    ]"
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
@import './index.less';
.yc-icon-button {
  &::before {
    width: v-bind(hoverSize);
    height: v-bind(hoverSize);
  }
}
</style>
