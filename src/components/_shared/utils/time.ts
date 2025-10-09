import { dayjs } from './dependencies';
import duration from 'dayjs/plugin/duration';
import toObject from 'dayjs/plugin/toObject';
import isSameOrAfter from 'dayjs/plugin/isSameOrAfter';
import isSameOrBefore from 'dayjs/plugin/isSameOrBefore';
import 'dayjs/locale/en';
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

// 格式化分
export const formatSeconds = (
  time: number,
  format: string,
  type: dayjs.UnitType = 'milliseconds'
) => {
  return dayjs.duration(time, type as any).format(format);
};
