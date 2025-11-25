<template>
  <div class="yc-calendar-year">
    <div v-for="(row, i) in months" :key="i" class="yc-calendar-year-row">
      <div v-for="(month, i1) in row" :key="i1" class="yc-calendar-year-cell">
        <div class="yc-calendar-year-cell-title">
          {{ monthHeaders[i * 4 + i1] }}
        </div>
        <month-calendar
          :cur-year="curYear"
          :cur-month="month - 1"
          :computed-value="computedValue"
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
import { ref, computed } from 'vue';
import { useI18n } from '@shared/utils';
import MonthCalendar from './CalendarMonth.vue';
defineProps<{
  computedValue: Date;
  curYear: number;
}>();
defineEmits<{
  (e: 'cell-click', col: Date): void;
}>();
// 国际化
const { t } = useI18n();
// month数组
const months = ref([
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
  [10, 11, 12],
]);
// 中文月
const monthHeaders = computed(() => {
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
</script>

<style lang="less">
@import './style/calendar.less';
</style>
