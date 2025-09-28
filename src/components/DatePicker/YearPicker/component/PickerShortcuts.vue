<template>
  <div
    :class="['yc-picker-shortcuts', `yc-picker-shortcuts-${shortcutsPosition}`]"
  >
    <yc-button
      v-for="(v, i) in shortcuts"
      :key="i"
      size="mini"
      @click="$emit('click', v)"
    >
      <component :is="getSlotFunction(v.label)" />
    </yc-button>
  </div>
</template>

<script lang="ts" setup>
import { ShortcutType, ShortcutsPosition } from '../../type';
import { getSlotFunction } from '@shared/utils';
import YcButton from '@/components/Button';
defineProps<{
  shortcuts: ShortcutType[];
  shortcutsPosition: ShortcutsPosition;
}>();
defineEmits<{
  (e: 'click', shortcut: ShortcutType): void;
}>();
</script>

<style lang="less" scoped>
@import '@/components/DatePicker/style/picker-shortcuts.less';
</style>
