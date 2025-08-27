<template>
  <prevent-focus class="yc-input-suffix">
    <!-- word-limit -->
    <div v-if="showWordLimit" class="yc-input-word-limit">
      {{ curLength }}/{{ maxLength }}
    </div>
    <!-- password -->
    <icon-button
      v-if="isPassword && invisibleButton"
      :size="14"
      @click="$emit('visibilityChange', !computedVisibility)"
    >
      <icon-eye-open v-if="computedVisibility" />
      <icon-eye-close v-else />
    </icon-button>
    <!-- suffix -->
    <slot v-if="$slots.suffix" name="suffix" />
  </prevent-focus>
</template>

<script lang="ts" setup>
import { IconEyeOpen, IconEyeClose } from '@shared/icons';
import { PreventFocus, IconButton } from '@shared/components';
defineProps<{
  curLength: number;
  maxLength?: number;
  showWordLimit: boolean;
  computedVisibility: boolean;
  isPassword: boolean;
  invisibleButton: boolean;
}>();
defineEmits<{
  (e: 'clear', ev: MouseEvent): void;
  (e: 'visibilityChange', value: boolean): void;
}>();
</script>

<style lang="less" scoped>
@import './style/input.less';
@import './style/dark.less';
</style>
