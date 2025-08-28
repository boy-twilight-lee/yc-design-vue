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
        v-for="item in weekList"
        :key="item"
      >
        {{ item }}
      </div>
    </div>
    <div class="yc-calendar-month-cell-body">
      <div v-for="(row, i) in calendar" :key="i" class="yc-calendar-month-row">
        <div
          v-for="(col, i1) in row"
          :key="i1"
          :class="[
            'yc-calendar-cell',
            {
              'yc-calendar-cell-today': isToday(col),
              'yc-calendar-cell-selected': isSelected(col),
              'yc-calendar-cell-in-view': col.isCurrentMonth,
            },
          ]"
          @click="$emit('cell-click', col)"
        >
          <slot :year="col.year" :month="col.month" :day="col.day">
            <div class="yc-calendar-date">
              <div class="yc-calendar-date-value">
                <div class="yc-calendar-date-circle">
                  {{ col.day }}
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
import { computed, toRefs, watch } from 'vue';
import dayjs from 'dayjs';
import { generateMonthCalendar, CalendarCellData } from '@shared/utils';
import { useControlValue } from '@shared/utils';
const props = withDefaults(
  defineProps<{
    computedValue: Date;
    recordDate: Record<string, number>;
    calendar?: CalendarCellData[][];
    small?: boolean;
  }>(),
  {
    small: false,
    calendar: undefined,
  }
);
defineEmits<{
  (e: 'cell-click', col: CalendarCellData): void;
}>();
// 结构属性
const { computedValue, calendar: _calendar, small, recordDate } = toRefs(props);
// 周日列表
const weekList = computed(() => {
  return small.value
    ? ['日', '一', '二', '三', '四', '五', '六']
    : ['周日', '周一', '周二', '周三', '周四', '周五', '周六'];
});
// 日历数组
const calendar = useControlValue<CalendarCellData[][]>(_calendar, []);
// 处理日期
watch(
  () => recordDate.value.month,
  () => {
    if (_calendar.value) return;
    const { year, month } = recordDate.value;
    calendar.value = generateMonthCalendar(year, month);
  },
  {
    immediate: true,
  }
);
// 是否今天
const isToday = (col: CalendarCellData) => {
  const { day, year, month } = col;
  const cur = dayjs();
  const _day = cur.date();
  const _month = cur.month();
  const _year = cur.year();
  return day == _day && month == _month && year == _year;
};
// 是否选中
const isSelected = (col: CalendarCellData) => {
  const year = computedValue.value.getFullYear();
  const month = computedValue.value.getMonth();
  const day = computedValue.value.getDate();
  const { day: _day, year: _year, month: _month, isCurrentMonth } = col;
  const isSameDate = day == _day && month == _month && year == _year;
  return small.value ? isSameDate && isCurrentMonth : isSameDate;
};
</script>

<style lang="less" scoped>
@import './style/calendar.less';
</style>
