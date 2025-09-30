import { dayjs } from '@shared/utils';

//生成月份日历数组
export interface CalendarCellData {
  label: string | number;
  value: Date;
}

export default function useCalendar() {
  const getDayOfMonth = (
    year: number,
    month: number,
    dayStartOfWeek = 0
  ): CalendarCellData[][] => {
    // 创建当前月份的第一天
    const firstDayOfMonth = dayjs(new Date(year, month, 1));
    // 获取当前月份的第一天是星期几 (0-6, 0表示周日)
    const firstDayOfWeek = firstDayOfMonth.day();
    // (firstDayOfWeek - dayStartOfWeek + 7) % 7 确保结果始终为正数
    const daysFromPrevMonth = (firstDayOfWeek - dayStartOfWeek + 7) % 7;
    // 计算日历总天数 (6周 x 7天 = 42天)
    const totalCalendarDays = 42;
    // 生成日历数组
    const calendar: CalendarCellData[][] = [];
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

  return {
    getDayOfMonth,
  };
}
