<template>
  <yc-trigger
    v-if="!hideTrigger"
    v-model:popup-visible="popupVisible"
    :popup-offset="4"
    :disabled="disabled"
    need-transform-origin
    animation-name="slide-dynamic-origin"
    trigger="click"
    position="bl"
    v-bind="triggerProps"
    @popupVisibleChange="
      (v: boolean) => $emit('popup-visible-change', v, computedColor)
    "
  >
    <slot>
      <div
        :class="[
          'yc-color-picker',
          `yc-color-picker-size-${size}`,
          {
            'yc-color-picker-disabled': disabled,
          },
          $attrs.class,
        ]"
        :style="<StyleValue>$attrs.style"
      >
        <div
          class="yc-color-picker-preview"
          :style="{
            backgroundColor: computedColor,
          }"
        ></div>
        <span v-if="showText" class="yc-color-picker-value">
          {{ computedColor }}
        </span>
      </div>
    </slot>
    <template #content>
      <color-panel />
    </template>
  </yc-trigger>
  <color-panel v-else />
</template>

<script lang="ts" setup>
import { StyleValue } from 'vue';
import { COLOR_PICKER_PRESET_COLORS } from '@shared/constants';
import { ColorPickerProps, ColorPickerEmits } from './type';
import useContext from './hooks/useContext';
import ColorPanel from './ColorPanel.vue';
import YcTrigger from '@/components/Trigger';
defineOptions({
  name: 'ColorPicker',
});
const props = withDefaults(defineProps<ColorPickerProps>(), {
  modelValue: undefined,
  defaultValue: '#FF0000',
  format: 'hex',
  size: undefined,
  showText: false,
  showHistory: false,
  showPreset: false,
  disabled: false,
  disabledAlpha: false,
  hideTrigger: false,
  triggerProps: () => {
    return {};
  },
  historyColors: () => [],
  presetColors: () => COLOR_PICKER_PRESET_COLORS,
});
const emits = defineEmits<ColorPickerEmits>();
// 注入
const { popupVisible, computedColor, size } = useContext().provide(
  props,
  emits
);
</script>

<style lang="less">
@import './style/color-picker.less';
</style>
