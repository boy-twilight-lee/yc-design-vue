import { App } from 'vue';
import _DatePicker from './PickerDate.vue';
import _RangePicker from './PickerRange.vue';
import _YearPicker from './PickerYear.vue';
import _QuarterPicker from './PickeQuarter.vue';
import _MonthPicker from './PickerMonth.vue';
import _WeekPicker from './PickerWeek.vue';

export type DatePickerInstance = InstanceType<typeof _DatePicker>;
export type RangePickerInstance = InstanceType<typeof _RangePicker>;
export type QuarterPickerInstance = InstanceType<typeof _QuarterPicker>;
export type YearPickerInstance = InstanceType<typeof _YearPicker>;
export type MonthPickerInstance = InstanceType<typeof _MonthPicker>;
export type WeekPickerInstance = InstanceType<typeof _WeekPicker>;
export * from './type';

const DatePicker = Object.assign(_DatePicker, {
  install: (app: App) => {
    app.component('Yc' + _DatePicker.name, _DatePicker);
    app.component('Yc' + _RangePicker.name, _RangePicker);
    app.component('Yc' + _QuarterPicker.name, _QuarterPicker);
    app.component('Yc' + _YearPicker.name, _YearPicker);
    app.component('Yc' + _MonthPicker.name, _MonthPicker);
    app.component('Yc' + _WeekPicker.name, _WeekPicker);
  },
});

export {
  _RangePicker as RangePicker,
  _QuarterPicker as QuarterPicker,
  _YearPicker as YearPicker,
  _MonthPicker as MonthPicker,
  _WeekPicker as WeekPicker,
};

declare module 'vue' {
  export interface GlobalComponents {
    YcDatePicker: typeof DatePicker;
    YcRangePicker: typeof _RangePicker;
    YcQuarterPicker: typeof _QuarterPicker;
    YcYearPicker: typeof _YearPicker;
    YcMonthPicker: typeof _MonthPicker;
    YcWeekPickerr: typeof _WeekPicker;
  }
}

export default DatePicker;
