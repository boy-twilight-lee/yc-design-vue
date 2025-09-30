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

export const formatSeconds = (
  time: number,
  format: string,
  type: dayjs.UnitType = 'milliseconds'
) => {
  return dayjs.duration(time, type as any).format(format);
};
