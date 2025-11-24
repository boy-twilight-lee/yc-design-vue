import { dayjs } from './dependencies';
import duration from 'dayjs/plugin/duration';
import toObject from 'dayjs/plugin/toObject';
import isSameOrAfter from 'dayjs/plugin/isSameOrAfter';
import isSameOrBefore from 'dayjs/plugin/isSameOrBefore';
import isoWeek from 'dayjs/plugin/isoWeek';
import 'dayjs/locale/en';
import { DayStartOfWeek } from '@/components/DatePicker';
dayjs.extend(isoWeek);
dayjs.extend(isSameOrAfter);
dayjs.extend(isSameOrBefore);
dayjs.extend(toObject);
dayjs.extend(duration);

export type YearData = {
  label: string;
  value: Date;
};

export interface DayData {
  label: string | number;
  value: Date;
}

export interface WeekData {
  label: number;
  value: Date;
  time: DayData[];
}

// 时间是否合法
export const isValidTimeRange = (
  beginDate: string,
  endDate: string,
  format: string
): boolean => {
  const begin = dayjs(beginDate, format).locale('en', { weekStart: 1 });
  const end = dayjs(endDate, format).locale('en', { weekStart: 1 });
  return begin.isBefore(end);
};

// 得到范围区间
export const getRangeOfYear = (curYear: number) => {
  const decadeStartYear = Math.floor(curYear / 10) * 10;
  const startYear = decadeStartYear - 1;
  const flatYearArray = Array.from({ length: 12 }, (_, i): YearData => {
    const year = startYear + i;
    return {
      label: year.toString(),
      value: dayjs().year(year).startOf('year').toDate(),
    };
  });
  const grid: YearData[][] = [];
  const columns = 3;
  for (let i = 0; i < flatYearArray.length; i += columns) {
    const chunk = flatYearArray.slice(i, i + columns);
    grid.push(chunk);
  }
  return {
    range: grid,
    startYear: decadeStartYear,
  };
};

//  获取一个月中的周
export const getWeeksOfMonth = (
  year: number,
  month: number,
  startOfWeek: DayStartOfWeek = 0
) => {
  const firstDayOfMonth = dayjs(new Date(year, month, 1));
  const weekData: WeekData[] = [];
  const dayOfWeekOfFirst = firstDayOfMonth.toDate().getDay();
  const offset = (dayOfWeekOfFirst - startOfWeek + 7) % 7;
  let currentDay = firstDayOfMonth.subtract(offset, 'day');
  for (let i = 0; i < 6; i++) {
    const daysOfWeek: DayData[] = [];
    const weekRowStartDate = currentDay;
    for (let j = 0; j < 7; j++) {
      daysOfWeek.push({
        label: String(currentDay.date()),
        value: currentDay.toDate(),
      });
      currentDay = currentDay.add(1, 'day');
    }
    const representativeDayOfWeek = weekRowStartDate.add(3, 'day');
    const correctIsoWeek = representativeDayOfWeek.isoWeek();
    const mondayOfCorrectIsoWeek = representativeDayOfWeek
      .startOf('isoWeek')
      .toDate();
    weekData.push({
      label: correctIsoWeek,
      value: mondayOfCorrectIsoWeek,
      time: daysOfWeek,
    });
  }
  return weekData;
};

// 获取一年中一个月的某一天
export const getDaysOfMonth = (
  year: number,
  month: number,
  dayStartOfWeek = 0
): DayData[][] => {
  // 创建当前月份的第一天
  const firstDayOfMonth = dayjs(new Date(year, month, 1));
  // 获取当前月份的第一天是星期几 (0-6, 0表示周日)
  const firstDayOfWeek = firstDayOfMonth.day();
  // (firstDayOfWeek - dayStartOfWeek + 7) % 7 确保结果始终为正数
  const daysFromPrevMonth = (firstDayOfWeek - dayStartOfWeek + 7) % 7;
  // 计算日历总天数 (6周 x 7天 = 42天)
  const totalCalendarDays = 42;
  // 生成日历数组
  const calendar: DayData[][] = [];
  // 遍历生成 42 天的数据
  for (let i = 0; i < totalCalendarDays; i++) {
    const dayOffset = i - daysFromPrevMonth;
    const date = firstDayOfMonth.add(dayOffset, 'day');
    const rowIndex = Math.floor(i / 7);
    const colIndex = i % 7;
    if (colIndex === 0) {
      calendar[rowIndex] = [];
    }
    calendar[rowIndex][colIndex] = {
      label: date.date(),
      value: date.toDate(),
    };
  }
  return calendar;
};

// 格式化分
export const formatSeconds = (
  time: number,
  format: string,
  type: dayjs.UnitType = 'milliseconds'
) => {
  return dayjs.duration(time, type as any).format(format);
};
