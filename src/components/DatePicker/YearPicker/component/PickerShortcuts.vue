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
.yc-picker-shortcuts {
  overflow-y: auto;
  padding: 10px 8px;
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 5px;
}
.yc-picker-shortcuts-left {
  border-right: 1px solid var(--color-neutral-3);
}
.yc-picker-shortcuts-right {
  border-left: 1px solid var(--color-neutral-3);
}
.yc-picker-shortcuts-bottom {
  padding: 0;
  overflow: hidden;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 5px 10px;
}
</style>
