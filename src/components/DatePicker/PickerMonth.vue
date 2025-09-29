<template>
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
      <div class="yc-panel-month">
        <div class="yc-picker-header">
          <div class="yc-picker-header-icon" @click="curYear--">
            <slot name="icon-prev-double">
              <icon-double-left />
            </slot>
          </div>
          <div class="yc-picker-header-title">
            <div class="yc-picker-header-label">
              {{ curYear }}
            </div>
          </div>
          <div class="yc-picker-header-icon" @click="curYear++">
            <slot name="icon-next-double">
              <icon-double-right />
            </slot>
          </div>
        </div>
        <div class="yc-picker-body">
          <div v-for="(row, i) in monthRange" :key="i" class="yc-picker-row">
            <!--  -->
            <!-- -->
            <picker-cell
              v-for="({ value: date, label }, k) in row"
              :key="k"
              :is-selected="isSelected(date)"
              :is-today="
                date.getMonth() == dayjs().month() &&
                date.getFullYear() == dayjs().year()
              "
              :disabled="disabledDate?.(date)"
              :value="label"
              cell-in-view
              @click="handleSelect(date)"
            >
              <template v-if="$slots.cell" #cell>
                <slot name="cell" :date="date" />
              </template>
            </picker-cell>
          </div>
        </div>
      </div>
      <template v-if="$slots.extra" #extra>
        <slot name="extra" />
      </template>
    </picker-panel>
  </define-panel>
  <picker-input v-if="!hideTrigger" :class="$attrs.class" :style="$attrs.style">
    <template #content>
      <reuse-panel />
    </template>
  </picker-input>
  <reuse-panel v-else />
</template>

<script lang="ts" setup>
import { watch, computed } from 'vue';
import {
  MonthPickerProps,
  MonthPickerEmits,
  BasePickerSlots,
  ShortcutType,
} from './type';
import useMonthPicker from './hooks/useMonthPicker';
import userPickerInputContext from './hooks/userPickerInputContext';
import {
  dayjs,
  sleep,
  createReusableTemplate,
  isUndefined,
} from '@shared/utils';
import { IconDoubleLeft, IconDoubleRight } from '@shared/icons';
import PickerCell from './component/PickerCell.vue';
import PickerPanel from './component/PickerPanel.vue';
import PickerInput from './component/PickerInput.vue';
defineOptions({
  name: 'MonthPicker',
  inheritAttrs: false,
});
const $slots = defineSlots<BasePickerSlots>();
const props = withDefaults(defineProps<MonthPickerProps>(), {
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
  placeholder: '请选择月份',
  disabled: false,
  disabledDate: undefined,
  // pickerValue: undefined,
  // defaultPickerValue: '',
  popupContainer: undefined,
  valueFormat: 'YYYY-MM',
  previewShortcut: true,
  showConfirmBtn: false,
  // disabledInput: false,
  modelValue: undefined,
  defaultValue: '',
  format: 'YYYY-MM',
});
const emits = defineEmits<MonthPickerEmits>();
// 定义重用模板
const { define: DefinePanel, reuse: ReusePanel } = createReusableTemplate();
// 格式化时间
const {
  computedValue,
  computedVisible,
  formatValue,
  showConfirmBtn,
  curYear,
  getDateFromFormat,
} = useMonthPicker(props, emits);
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
// 区间范围
const monthRange = computed(() => {
  const months = [
    ['一月', '二月', '三月'],
    ['四月', '五月', '六月'],
    ['七月', '八月', '九月'],
    ['十月', '十一月', '十二月'],
  ];
  let month = 0;
  return months.map((row) => {
    return row.map((name) => {
      return {
        label: name,
        value: new Date(curYear.value, month++, 1),
      };
    });
  });
});
// 旧值
let oldDate: Date | string;
// 选择的date
let selectDate: Date;
// 是否确认过
let isConfirm = false;
// 是否选中
const isSelected = (val: Date) => {
  const date = getDateFromFormat(computedValue.value) as Date;
  if (!date) return false;
  return (
    date.getFullYear() == val.getFullYear() && date.getMonth() == val.getMonth()
  );
};
// 处理shortcut
const handleShortcut = (shortcut: ShortcutType, hover: boolean) => {
  if (!hover) {
    emits('select-shortcut', shortcut);
  }
  if (shortcut.value) {
    computedValue.value = shortcut.value as Date;
  }
  if (hover) return;
  isConfirm = true;
  computedVisible.value = false;
};
// 处理选中
const handleSelect = (date: Date) => {
  computedValue.value = date;
  const dateString = dayjs(date).format('YYYY-MM');
  computedValue.value = dateString;
  emits('select', computedValue.value, date, dateString);
  if (showConfirmBtn.value) return;
  emits('change', computedValue.value, date, dateString);
};
// 处理确认
const handleConfirm = async () => {
  isConfirm = true;
  const dateString = dayjs(selectDate).format('YYYY-MM');
  emits('change', computedValue.value, selectDate, dateString);
  emits('ok', computedValue.value, selectDate, dateString);
  await sleep(0);
  computedVisible.value = false;
};
// 处理初始化值
watch(
  () => computedValue.value,
  (val) => {
    const date = val ? (getDateFromFormat(val) as Date) : new Date();
    curYear.value = date.getFullYear();
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
      oldDate = computedValue.value
        ? getDateFromFormat(computedValue.value)
        : '';
    } else {
      if (!showConfirmBtn.value || isConfirm || isUndefined(oldDate)) return;
      computedValue.value = oldDate;
    }
  },
  {
    immediate: true,
  }
);
</script>

<style lang="less">
@import './style/year-picker.less';
</style>
