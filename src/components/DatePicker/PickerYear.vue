<template>
  <picker-input v-if="!hideTrigger" :class="$attrs.class" :style="$attrs.style">
    <template #content>
      <reuse-panel />
    </template>
  </picker-input>
  <reuse-panel v-else />
  <define-panel>
    <picker-panel
      :preview-shortcut="previewShortcut"
      :shortcuts="shortcuts"
      :shortcuts-position="shortcutsPosition"
      :confirm-btn-disabled="!computedValue"
      :show-confirm-btn="showConfirmBtn"
      @confirm="handleConfirm"
      @shortcut-select="handleShortcut"
    >
      <div class="yc-panel-year">
        <div class="yc-panel-year-inner">
          <div class="yc-picker-header">
            <div class="yc-picker-header-icon" @click="handleYearChange('pre')">
              <slot name="icon-prev-double">
                <icon-double-left />
              </slot>
            </div>
            <div class="yc-picker-header-title">
              {{ startYear }}-{{ startYear + 10 }}
            </div>
            <div
              class="yc-picker-header-icon"
              @click="handleYearChange('NEXT')"
            >
              <slot name="icon-next-double">
                <icon-double-right />
              </slot>
            </div>
          </div>
          <div class="yc-picker-body">
            <div v-for="(row, i) in yearRange" :key="i" class="yc-picker-row">
              <picker-cell
                v-for="(year, k) in row"
                :key="year"
                :cell-in-view="!!(i || k)"
                :is-today="year == dayjs().year()"
                :is-selected="getValueFromFormat(computedValue) == year"
                :disabled="disabledDate?.(getDateFromYear(year))"
                :value="year"
                @click="handleSelect(year)"
              >
                <template v-if="$slots.cell" #cell>
                  <slot name="cell" :date="getDateFromYear(year)" />
                </template>
              </picker-cell>
            </div>
          </div>
        </div>
      </div>
      <template v-if="$slots.extra" #extra>
        <slot name="extra" />
      </template>
    </picker-panel>
  </define-panel>
</template>

<script lang="ts" setup>
import { ref, watch } from 'vue';
import {
  YearPickerProps,
  YearPickerEmits,
  BasePickerSlots,
  DatePickerValue,
  ShortcutType,
} from './type';
import useYearPickerContext from './hooks/useYearPicker';
import userPickerInputContext from './hooks/userPickerInputContext';
import {
  getDecadeRange,
  dayjs,
  sleep,
  createReusableTemplate,
} from '@shared/utils';
import { IconDoubleLeft, IconDoubleRight } from '@shared/icons';
import PickerCell from './component/PickerCell.vue';
import PickerPanel from './component/PickerPanel.vue';
import PickerInput from './component/PickerInput.vue';
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
// 定义重用模板
const { define: DefinePanel, reuse: ReusePanel } = createReusableTemplate();
// 格式化时间
const {
  computedValue,
  computedVisible,
  showConfirmBtn,
  shortcuts,
  shortcutsPosition,
  previewShortcut,
  getDateFromYear,
  getFormatFromValue,
  getValueFromFormat,
  disabledDate,
  formatValue,
} = useYearPickerContext(props, emits);
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
// 开始的year
const startYear = ref<number>(0);
// 区间范围
const yearRange = ref<number[][]>([]);
// 旧值
let oldValue: DatePickerValue;
// 是否确认过
let isConfirm = false;
// 处理改变
const handleYearChange = (type: string) => {
  startYear.value = type == 'pre' ? startYear.value - 10 : startYear.value + 10;
  yearRange.value = getDecadeRange(startYear.value);
};
// 处理shortcut
const handleShortcut = (shortcut: ShortcutType, hover: boolean) => {
  if (!hover) {
    emits('select-shortcut', shortcut);
  }
  if (shortcut.value) {
    computedValue.value = getFormatFromValue(
      (shortcut.value as Date).getFullYear()
    );
  }
  if (hover) return;
  isConfirm = true;
  computedVisible.value = false;
};
// 处理选中
const handleSelect = (year: number) => {
  const value = getFormatFromValue(year);
  const date = getDateFromYear(year);
  const dateString = `${year}`;
  computedValue.value = dateString;
  emits('select', value, date, dateString);
  if (showConfirmBtn.value) return;
  emits('change', value, date, dateString);
};
// 处理确认
const handleConfirm = async () => {
  isConfirm = true;
  const date = getDateFromYear(getValueFromFormat(computedValue.value));
  const year = date.getFullYear();
  const value = getFormatFromValue(year);
  emits('change', value, date, `${year}`);
  emits('ok', value, date, `${year}`);
  await sleep(0);
  computedVisible.value = false;
};
// 处理初始化值
watch(
  () => computedValue.value,
  (val) => {
    const rangeData = getDecadeRange(
      val ? getValueFromFormat(val) : new Date().getFullYear()
    );
    startYear.value = rangeData[0][1];
    yearRange.value = rangeData;
  },
  {
    immediate: true,
  }
);
// 处理visible发生改变
watch(
  () => computedVisible.value,
  (val) => {
    if (val) {
      isConfirm = false;
      oldValue = getValueFromFormat(computedValue.value);
      return;
    }
    if (!showConfirmBtn.value || isConfirm) return;
    computedValue.value = oldValue ?? computedValue.value;
  },
  {
    immediate: true,
  }
);
</script>

<style lang="less">
@import './style/year-picker.less';
</style>
