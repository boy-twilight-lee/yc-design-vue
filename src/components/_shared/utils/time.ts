import {
  dayjs,
  isSameOrAfter,
  isSameOrBefore,
  toObject,
  duration,
} from './dependencies';
import 'dayjs/locale/en'; // 引入本地化配置
dayjs.extend(isSameOrAfter);
dayjs.extend(isSameOrBefore);
dayjs.extend(toObject);
dayjs.extend(duration);

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

//生成月份日历数组
export interface CalendarCellData {
  day: number;
  month: number;
  year: number;
  isCurrentMonth: boolean;
  fullDate: string;
}
export const generateMonthCalendar = (year: number, month: number) => {
  // 创建当前月份的第一天
  const firstDayOfMonth = dayjs(`${year}-${month}-01`);
  // 获取当前月份的第一天是星期几 (0-6, 0表示周日)
  const firstDayOfWeek = firstDayOfMonth.day();
  // 获取上个月需要显示的天数
  const daysFromPrevMonth = firstDayOfWeek;
  // 计算日历总天数 (6周 x 7天 = 42天)
  const totalCalendarDays = 42;
  // 生成日历数组
  const calendar: CalendarCellData[][] = [];
  // 当前这一行的数据
  const row: CalendarCellData[] = [];
  // 遍历
  for (let i = 0; i < totalCalendarDays; i++) {
    // 计算当前日期
    const dayOffset = i - daysFromPrevMonth;
    const date = firstDayOfMonth.add(dayOffset, 'day');
    // 判断是否属于当前月份
    const isCurrentMonth = date.month() + 1 === month;
    // 添加到当前行
    row.push({
      day: date.date(),
      month: date.month(),
      year: date.year(),
      fullDate: date.format('{ 0 }/MM/DD'),
      isCurrentMonth,
    });
    // 每7天换一行
    if (row.length === 7) {
      calendar.push([...row]);
      row.splice(0);
    }
  }
  return calendar;
};

export const formatSeconds = (
  time: number,
  format: string,
  type: dayjs.UnitType = 'milliseconds'
) => {
  return dayjs.duration(time, type as any).format(format);
};

export const formatDate = (value: string | number | Date, format: string) => {
  return dayjs(value).format(format);
};
