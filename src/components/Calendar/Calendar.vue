<template>
  <div :class="['yc-calendar', `yc-calendar-mode-${computedMode}`]">
    <div class="yc-calendar-header">
      <div class="yc-calendar-header-left">
        <icon-button
          class="yc-calendar-header-icon"
          role="button"
          tabindex="0"
          :size="28"
          :hover-size="28"
          @click="handleDateChange('pre')"
        >
          <icon-arrow-right :rotate="180" />
        </icon-button>

        <div class="yc-calendar-header-value">
          <slot name="header" :year="recordDate.year" :month="recordDate.month">
            {{ recordDate.year }} 年 {{ recordDate.month }} 月
          </slot>
        </div>
        <icon-button
          role="button"
          tabindex="0"
          class="yc-calendar-header-icon"
          :size="28"
          :hover-size="28"
          @click="handleDateChange('next')"
        >
          <icon-arrow-right />
        </icon-button>
        <yc-button @click="handleDateChange('today')" size="small">
          今天
        </yc-button>
      </div>
      <div class="yc-calendar-header-right">
        <yc-radio-group
          v-model="computedMode"
          :options="modes"
          type="button"
          size="small"
        />
      </div>
    </div>
    <div class="yc-calendar-body">
      <month-calendar
        v-if="computedMode == 'month'"
        :computed-value="computedValue"
        :recordDate="recordDate"
        @cell-click="handleClick"
      >
        <template v-if="$slots.default" #default="scope">
          <slot v-bind="scope" />
        </template>
      </month-calendar>
      <year-calendar
        v-else
        :computed-value="computedValue"
        :record-date="recordDate"
        @cell-click="handleClick"
      >
        <template v-if="$slots.default" #default="scope">
          <slot v-bind="scope" />
        </template>
      </year-calendar>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { computed, toRefs, ref, watch } from 'vue';
import dayjs from 'dayjs';
import {
  CalendarProps,
  CalendarEmits,
  CalendarSlots,
  CalendarMode,
} from './type';
import { ObjectData } from '@shared/type';
import { useControlValue } from '@shared/utils';
import { IconArrowRight } from '@shared/icons';
import { IconButton } from '@shared/components';
import { CalendarCellData } from '@shared/utils';
import YcButton from '@/components/Button';
import { RadioGroup as YcRadioGroup, RadioOption } from '@/components/Radio';
import MonthCalendar from './CalendarMonth.vue';
import YearCalendar from './CalendarYear.vue';
defineOptions({
  name: 'Calendar',
});
defineSlots<CalendarSlots>();
const props = withDefaults(defineProps<CalendarProps>(), {
  modelValue: undefined,
  defaultValue: () => new Date(),
  mode: undefined,
  defaultMode: 'month',
  modes: () => ['month', 'year'],
});
const emits = defineEmits<CalendarEmits>();
const {
  modelValue,
  defaultValue,
  mode,
  defaultMode,
  modes: _modes,
} = toRefs(props);
// 受控的值
const computedValue = useControlValue<Date>(
  modelValue,
  defaultValue.value,
  (val) => {
    emits('update:modelValue', val);
    emits('change', val);
  }
);
// 记录的date
const recordDate = ref<Record<string, number>>({});
watch(
  () => computedValue.value,
  (val) => {
    const date = val ? dayjs(val) : dayjs();
    recordDate.value = {
      year: date.year(),
      month: date.month() + 1,
      day: date.date(),
    };
  },
  {
    immediate: true,
  }
);
// mode
const computedMode = useControlValue<CalendarMode>(
  mode,
  defaultMode.value,
  (val) => {
    emits('update:mode', val);
    emits('panel-change', computedValue.value);
  }
);
// 数组
const modes = computed(() => {
  const map = {
    month: '月',
    year: '年',
  };
  return _modes.value.map((item) => {
    return {
      label: map[item],
      value: item,
    };
  }) as ObjectData[] as RadioOption[];
});
// 处理点击
const handleClick = (col: CalendarCellData) => {
  computedValue.value = new Date(col.fullDate);
};
// 处理日期改变
const handleDateChange = (type: string) => {
  if (type == 'today') {
    computedValue.value = new Date();
    return;
  }
  const { year, month } = recordDate.value;
  if (type == 'next') {
    const tempMonth = month + 1 > 12 ? 1 : month + 1;
    const tempYear = month + 1 > 12 || computedMode.value == 'year' ? 1 : 0;
    recordDate.value.year = year + tempYear;
    if (computedMode.value == 'year') return;
    recordDate.value.month = tempMonth;
  } else {
    const tempMonth = month - 1 < 1 ? 12 : month - 1;
    const tempYear = month - 1 < 1 || computedMode.value == 'year' ? -1 : 0;
    recordDate.value.year = year + tempYear;
    if (computedMode.value == 'year') return;
    recordDate.value.month = tempMonth;
  }
};
</script>

<style lang="less" scoped>
@import './style/calendar.less';
</style>
