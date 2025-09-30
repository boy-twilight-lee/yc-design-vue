<template>
  <div
    :class="[
      'yc-calendar-month',
      {
        'yc-calendar-month-small': small,
      },
    ]"
  >
    <div class="yc-calendar-week-list">
      <div
        class="yc-calendar-week-list-item"
        v-for="item in weekHeaders"
        :key="item"
      >
        {{ item }}
      </div>
    </div>
    <div class="yc-calendar-month-cell-body">
      <div v-for="(row, i) in calendar" :key="i" class="yc-calendar-month-row">
        <div
          v-for="(v, i1) in row"
          :key="i1"
          :class="[
            'yc-calendar-cell',
            {
              'yc-calendar-cell-today': isToday(v.value),
              'yc-calendar-cell-selected': isSelected(v.value),
              'yc-calendar-cell-in-view': isCellInView(v.value),
            },
          ]"
          @click="$emit('cell-click', v.value)"
        >
          <slot
            :year="v.value.getFullYear()"
            :month="v.value.getMonth()"
            :day="v.value.getDate()"
          >
            <div class="yc-calendar-date">
              <div class="yc-calendar-date-value">
                <div class="yc-calendar-date-circle">
                  {{ v.label }}
                </div>
              </div>
            </div>
          </slot>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref, computed, toRefs, watch } from 'vue';
import { dayjs, useI18n } from '@shared/utils';
import useCalendar, { CalendarCellData } from './hooks/useCalendar';
const props = withDefaults(
  defineProps<{
    computedValue: Date;
    curYear: number;
    curMonth: number;
    small?: boolean;
  }>(),
  {
    small: false,
    calendar: undefined,
  }
);
defineEmits<{
  (e: 'cell-click', col: Date): void;
}>();
// 结构属性
const { small, curYear, curMonth, computedValue } = toRefs(props);
// dayofMonth
const { getDayOfMonth } = useCalendar();
// 国际化
const { t } = useI18n();
// 周日列表
const weekHeaders = computed(() => {
  return [
    'sunday',
    'monday',
    'tuesday',
    'wednesday',
    'thursday',
    'friday',
    'saturday',
  ].map((v) => t(`calendar.week.${small.value ? 'short' : 'long'}.${v}`));
});
// 日历数组
const calendar = ref<CalendarCellData[][]>([]);
// 是否今天
const isToday = (date: Date) => {
  const curDate = dayjs();
  return (
    date.getFullYear() == curDate.year() &&
    date.getMonth() == curDate.month() &&
    date.getDate() == curDate.date()
  );
};
// 是否再view
const isCellInView = (date: Date) => {
  return (
    date.getFullYear() == curYear.value && date.getMonth() == curMonth.value
  );
};
// 是否选中
const isSelected = (date: Date) => {
  if (!computedValue.value) return false;
  return (
    computedValue.value.getFullYear() == date.getFullYear() &&
    computedValue.value.getMonth() == date.getMonth() &&
    computedValue.value.getDate() == date.getDate()
  );
};
// watch
watch(
  () => [curYear.value, curMonth.value],
  () => {
    calendar.value = getDayOfMonth(curYear.value, curMonth.value);
  },
  {
    immediate: true,
  }
);
</script>

<style lang="less">
@import './style/calendar.less';
</style>
