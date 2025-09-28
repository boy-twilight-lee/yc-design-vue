<template>
  <picker-input v-if="!hideTrigger" :class="$attrs.class" :style="$attrs.style">
    <template #content>
      <year-picker-panel />
    </template>
  </picker-input>
  <year-picker-panel v-else />
</template>

<script lang="ts" setup>
import { YearPickerProps, YearPickerEmits, BasePickerSlots } from './type';
import useYearPickerContext from './hooks/useYearPickerContext';
import userPickerInputContext from './hooks/userPickerInputContext';
import YearPickerPanel from './PickerYearPanel.vue';
import PickerInput from './PickerInput.vue';
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
  // pickerValue: undefined,
  // defaultPickerValue: '',
  popupContainer: undefined,
  valueFormat: 'YYYY',
  previewShortcut: true,
  showConfirmBtn: false,
  // disabledInput: false,
  modelValue: undefined,
  defaultValue: '',
  format: 'YYYY',
});
const emits = defineEmits<YearPickerEmits>();
// 格式化时间
const { computedValue, computedVisible, formatValue } =
  useYearPickerContext().provide(props, emits);
// 展示clearbtn
userPickerInputContext().provide(
  {
    computedValue,
    computedVisible,
    formatValue,
    emits,
  },
  props
);
</script>

<style lang="less">
@import './style/year-picker.less';
</style>
