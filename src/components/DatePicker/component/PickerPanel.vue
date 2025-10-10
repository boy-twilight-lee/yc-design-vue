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
      <div v-if="showFooter" class="yc-picker-footer">
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
          <reuse-shortcuts
            v-show="
              !showNow || (shortcutsPosition == 'bottom' && shortcuts?.length)
            "
          />
          <!-- now -->
          <yc-button
            v-if="!shortcuts?.length && showNow"
            size="mini"
            @click="$emit('now-click')"
          >
            {{ locale?.['datePicker.now'] || t('datePicker.now') }}
          </yc-button>
          <!-- 确定 -->
          <yc-button
            v-if="showConfirmBtn"
            :disabled="confirmBtnDisabled"
            type="primary"
            size="mini"
            @click="$emit('confirm', $event)"
          >
            {{ locale?.['datePicker.ok'] || t('datePicker.ok') }}
          </yc-button>
        </div>
        <div
          v-if="showNow && !showConfirmBtn"
          class="yc-picker-footer-now-wrapper"
        >
          <yc-link @click="$emit('now-click')">
            {{ locale?.['datePicker.today'] || t('datePicker.today') }}
          </yc-link>
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
import YcLink from '@/components/Link';
const props = withDefaults(
  defineProps<{
    locale: Record<string, any>;
    shortcutsPosition: ShortcutsPosition;
    shortcuts: ShortcutType[];
    previewShortcut: boolean;
    confirmBtnDisabled: boolean;
    showConfirmBtn: boolean;
    showNow?: boolean;
    showFooter?: boolean;
  }>(),
  {
    showNow: false,
    showFooter: true,
  }
);
defineEmits<{
  (e: 'confirm', ev: MouseEvent): void;
  (e: 'now-click'): void;
  (e: 'shortcut-select', shortcut: ShortcutType, hover: boolean): void;
}>();
// 定制重用模板
const { define: DefineShortcuts, reuse: ReuseShortcuts } =
  createReusableTemplate();
//  国际化
const { t } = useI18n();
// now
const getNowText = () => {
  const key = 'datePicker.now';
  return props.locale?.[key] || t(key);
};
</script>

<style lang="less">
@import '../style/picker-panel.less';
</style>
