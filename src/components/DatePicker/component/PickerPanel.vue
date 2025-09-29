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
    <!-- left.right -->
    <reuse-shortcuts
      v-if="['left', 'right'].includes(shortcutsPosition) && shortcuts?.length"
    />
    <div class="yc-picker-panel-wrapper">
      <slot />
      <div class="yc-picker-footer">
        <div v-if="$slots.extra" class="yc-picker-footer-extra-wrapper">
          <slot name="extra" />
        </div>
        <div
          v-if="
            showConfirmBtn ||
            (shortcutsPosition == 'bottom' && shortcuts?.length)
          "
          class="yc-picker-footer-btn-wrapper"
        >
          <!--bottom -->
          <reuse-shortcuts v-if="shortcutsPosition == 'bottom'" />
          <yc-button
            v-if="showConfirmBtn"
            :disabled="confirmBtnDisabled"
            type="primary"
            size="mini"
            @click="$emit('confirm', $event)"
          >
            {{ getOkText() }}
          </yc-button>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ShortcutsPosition, ShortcutType } from '../type';
import {
  getSlotFunction,
  createReusableTemplate,
  useI18n,
} from '@shared/utils';
import YcButton from '@/components/Button';
const props = defineProps<{
  locale: Record<string, any>;
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
// 定制重用模板
const { define: DefineShortcuts, reuse: ReuseShortcuts } =
  createReusableTemplate();
//  国际化
const { t } = useI18n();
// 获取oktext
const getOkText = () => {
  const key = 'datePicker.ok';
  return props.locale?.[key] || t(key);
};
</script>

<style lang="less">
@import '../style/picker-panel.less';
</style>
