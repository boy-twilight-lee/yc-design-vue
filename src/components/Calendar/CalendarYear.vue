<template>
  <div class="yc-calendar-year">
    <div v-for="(row, i) in calendar" :key="i" class="yc-calendar-year-row">
      <div v-for="(col, i1) in row" :key="i1" class="yc-calendar-year-cell">
        <div class="yc-calendar-year-cell-title">
          {{ monthList[i * 4 + i1] }}
        </div>
        <month-calendar
          :computed-value="computedValue"
          :calendar="col"
          :record-date="recordDate"
          small
          class="yc-calendar-year-cell-body"
          @cell-click="(v) => $emit('cell-click', v)"
        >
          <template v-if="$slots.default" #default="{ year, month, day }">
            <slot :year="year" :month="month" :day="day" />
          </template>
        </month-calendar>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref, watch, toRefs, computed } from 'vue';
import { useI18n } from '@shared/utils/locale';
import { generateMonthCalendar, CalendarCellData } from '@shared/utils/time';
import MonthCalendar from './CalendarMonth.vue';
const props = defineProps<{
  computedValue: Date;
  recordDate: Record<string, number>;
}>();
defineEmits<{
  (e: 'cell-click', col: CalendarCellData): void;
}>();
// 结构属性
const { computedValue, recordDate } = toRefs(props);
// 国际化
const { t } = useI18n();
// 日历数组
const calendar = ref<CalendarCellData[][][][]>([]);
// 中文月
const monthList = computed(() => {
  return [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ].map((v) => t(`calendar.month.short.${v}`));
});
// 处理日期
watch(
  () => recordDate.value.year,
  () => {
    const { year } = recordDate.value;
    calendar.value = [];
    const row: CalendarCellData[][][] = [];
    for (let i = 1; i <= 12; i++) {
      row.push(generateMonthCalendar(year, i));
      if (row.length == 4) {
        calendar.value.push([...row]);
        row.splice(0);
      }
    }
  },
  {
    immediate: true,
  }
);
</script>

<style lang="less">
@import './style/calendar.less';
</style>
