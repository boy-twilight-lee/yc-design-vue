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
          <slot name="header" :year="curYear" :month="curMonth">
            {{ formatValue }}
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
          {{ t('calendar.today') }}
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
        :cur-year="curYear"
        :cur-month="curMonth"
        @cell-click="(v) => (computedValue = v)"
      >
        <template v-if="$slots.default" #default="scope">
          <slot v-bind="scope" />
        </template>
      </month-calendar>
      <year-calendar
        v-else
        :computed-value="computedValue"
        :cur-year="curYear"
        @cell-click="(v) => (computedValue = v)"
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
import {
  CalendarProps,
  CalendarEmits,
  CalendarSlots,
  CalendarMode,
} from './type';
import { RecordType } from '@shared/type';
import { useI18n, useControlValue, dayjs } from '@shared/utils';
import { IconArrowRight } from '@shared/icons';
import { IconButton } from '@shared/components';
import YcButton from '@/components/Button';
import { RadioGroup as YcRadioGroup, RadioOption } from '@/components/Radio';
import MonthCalendar from './CalendarMonth.vue';
import YearCalendar from './CalendarYear.vue';
defineOptions({
  name: 'Calendar',
});
const $slots = defineSlots<CalendarSlots>();
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
// 国际化
const { t } = useI18n();
// 受控的值
const computedValue = useControlValue<Date>(
  modelValue,
  defaultValue.value,
  (val) => {
    emits('update:modelValue', val);
    emits('change', val);
  }
);
// 当前的year
const curYear = ref<number>(0);
// 当前的month
const curMonth = ref<number>(0);
// 格式化的
const formatValue = computed(() => {
  return dayjs()
    .set('year', curYear.value)
    .set('month', curMonth.value)
    .format(t('calendar.formatMonth'));
});
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
  return _modes.value.map((v) => {
    return {
      label: t(`calendar.view.${v}`),
      value: v,
    };
  }) as RecordType[] as RadioOption[];
});
// 处理日期改变
const handleDateChange = (type: string) => {
  if (type == 'today') {
    computedValue.value = new Date();
    return;
  }
  let date = dayjs().set('year', curYear.value).set('month', curMonth.value);
  date = type == 'next' ? date.add(1, 'month') : date.subtract(1, 'month');
  curYear.value = date.year();
  curMonth.value = date.month();
};
// 检测value的改变
watch(
  () => computedValue.value,
  () => {
    const date = dayjs(computedValue.value ? computedValue.value : new Date());
    curYear.value = date.year();
    curMonth.value = date.month();
  },
  {
    immediate: true,
  }
);
</script>

<style lang="less">
@import './style/calendar.less';
</style>
