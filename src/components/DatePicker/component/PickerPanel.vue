<template>
  <div
    :class="[
      'yc-picker-container',
      `yc-picker-container-shortcuts-${shortcutsPosition}`,
    ]"
  >
    <!-- 定义shortcuts -->
    <define-shortcuts>
      <div
        :class="[
          'yc-picker-shortcuts',
          `yc-picker-shortcuts-${shortcutsPosition}`,
        ]"
      >
        <yc-button
          v-for="(v, i) in shortcuts"
          :key="i"
          size="mini"
          @click="$emit('shortcut-select', v, false)"
          @mouseenter="previewShortcut && $emit('shortcut-select', v, true)"
        >
          <component :is="getSlotFunction(v.label)" />
        </yc-button>
      </div>
    </define-shortcuts>
    <reuse-shortcuts v-if="['left', 'right'].includes(shortcutsPosition)" />
    <div class="yc-picker-panel-wrapper">
      <slot />
      <div class="yc-picker-footer">
        <div v-if="$slots.extra" class="yc-picker-footer-extra-wrapper">
          <slot name="extra" />
        </div>
        <div
          v-if="showConfirmBtn || shortcutsPosition == 'bottom'"
          class="yc-picker-footer-btn-wrapper"
        >
          <reuse-shortcuts v-if="shortcutsPosition == 'bottom'" />
          <yc-button
            :disabled="confirmBtnDisabled"
            type="primary"
            size="mini"
            @click="$emit('confirm', $event)"
          >
            确定
          </yc-button>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ShortcutsPosition, ShortcutType } from '../type';
import { getSlotFunction, createReusableTemplate } from '@shared/utils';
import YcButton from '@/components/Button';
defineProps<{
  shortcutsPosition: ShortcutsPosition;
  shortcuts: ShortcutType[];
  previewShortcut: boolean;
  confirmBtnDisabled: boolean;
  showConfirmBtn: boolean;
}>();
defineEmits<{
  (e: 'confirm', ev: MouseEvent): void;
  (e: 'shortcut-select', shortcut: ShortcutType, hover: boolean): void;
}>();

const { define: DefineShortcuts, reuse: ReuseShortcuts } =
  createReusableTemplate();
</script>

<style lang="less">
@import '../style/picker-panel.less';
</style>
