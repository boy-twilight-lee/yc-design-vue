<template>
  <yc-trigger
    v-if="!hideTrigger"
    v-model:popup-visible="computedVisible"
    :popup-offset="4"
    :popup-container="popupContainer"
    :unmount-on-close="unmountOnClose"
    :disabled="disabled || readonly"
    :position="position"
    trigger="click"
    animation-name="slide-dynamic-origin"
    need-transform-origin
    v-bind="triggerProps"
  >
    <yc-input
      :model-value="formatValue"
      :placeholder="placeholder"
      :disabled="disabled"
      :error="error"
      :size="size"
      :readonly="readonly || disabledInput"
      :style="$attrs.style"
      :class="[
        'yc-year-picker',
        $attrs.class,
        {
          'yc-year-picker-allow-clear': showClearBtn,
        },
      ]"
    >
      <template v-if="$slots.prefix" #prefix>
        <slot name="prefix" />
      </template>
      <template #suffix>
        <div class="yc-picker-suffix-icon">
          <slot name="suffix-icon">
            <icon-calendar />
          </slot>
        </div>
        <icon-button v-if="showClearBtn" @click.stop="handleClear" />
      </template>
    </yc-input>
    <template #content>
      <picker-panel />
    </template>
  </yc-trigger>
  <picker-panel v-else />
</template>

<script lang="ts" setup>
import { computed } from 'vue';
import { YearPickerProps, YearPickerEmits, BasePickerSlots } from '../type';
import useYearPickerContext from '../hooks/useYearPickerContext';
import { IconCalendar } from '@shared/icons';
import { IconButton } from '@shared/components';
import PickerPanel from './component/PickerPanel.vue';
import YcInput from '@/components/Input';
import YcTrigger from '@/components/Trigger';
defineOptions({
  name: 'YearPicker',
  inheritAttrs: false,
});
const $slots = defineSlots<BasePickerSlots>();
const props = withDefaults(defineProps<YearPickerProps>(), {
  // locale: undefined,
  hideTrigger: false,
  allowClear: false,
  readonly: false,
  error: false,
  size: undefined,
  shortcuts: () => [],
  shortcutsPosition: 'bottom',
  position: 'bl',
  popupVisible: undefined,
  defaultPopupVisible: false,
  triggerProps: () => ({}),
  unmountOnClose: false,
  placeholder: '请选择年份',
  disabled: false,
  disabledDate: undefined,
  pickerValue: undefined,
  defaultPickerValue: '',
  popupContainer: undefined,
  valueFormat: 'YYYY',
  // previewShortcut: true,
  showConfirmBtn: false,
  disabledInput: true,
  // abbreviation: true,
  modelValue: undefined,
  defaultValue: '',
  format: 'YYYY',
});
const emits = defineEmits<YearPickerEmits>();
// 格式化时间
const { computedValue, computedVisible, formatValue, allowClear, disabled } =
  useYearPickerContext().provide(props, emits);
// 展示clearbtn
const showClearBtn = computed(() => {
  return computedValue.value && allowClear.value && !disabled.value;
});
// 处理清除
const handleClear = () => {
  computedValue.value = '';
  emits('clear');
};
</script>

<style lang="less">
@import '../style/year-picker.less';
</style>
