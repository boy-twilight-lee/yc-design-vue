import dayjs from "../../node_modules/dayjs/dayjs.min.js";
import "../../node_modules/dayjs/locale/en.js";
import duration from "../../node_modules/dayjs/plugin/duration.js";
import toObject from "../../node_modules/dayjs/plugin/toObject.js";
import isSameOrAfter from "../../node_modules/dayjs/plugin/isSameOrAfter.js";
import isSameOrBefore from "../../node_modules/dayjs/plugin/isSameOrBefore.js";
dayjs.extend(isSameOrAfter);
dayjs.extend(isSameOrBefore);
dayjs.extend(toObject);
dayjs.extend(duration);
const isValidTimeRange = (beginDate, endDate, format) => {
  const begin = dayjs(beginDate, format).locale("en", { weekStart: 1 });
  const end = dayjs(endDate, format).locale("en", { weekStart: 1 });
  return begin.isBefore(end);
};
function generateMonthCalendar(year, month) {
  const firstDayOfMonth = dayjs(`${year}-${month}-01`);
  const firstDayOfWeek = firstDayOfMonth.day();
  const daysFromPrevMonth = firstDayOfWeek;
  const totalCalendarDays = 42;
  const calendar = [];
  const row = [];
  for (let i = 0; i < totalCalendarDays; i++) {
    const dayOffset = i - daysFromPrevMonth;
    const date = firstDayOfMonth.add(dayOffset, "day");
    const isCurrentMonth = date.month() + 1 === month;
    row.push({
      day: date.date(),
      month: date.month(),
      year: date.year(),
      fullDate: date.format("YYYY/MM/DD"),
      isCurrentMonth
    });
    if (row.length === 7) {
      calendar.push([...row]);
      row.splice(0);
    }
  }
  return calendar;
}
const formatSeconds = (time, format, type = "milliseconds") => {
  return dayjs.duration(time, type).format(format);
};
const formatDate = (value, format) => {
  return dayjs(value).format(format);
};
export {
  formatDate,
  formatSeconds,
  generateMonthCalendar,
  isValidTimeRange
};
