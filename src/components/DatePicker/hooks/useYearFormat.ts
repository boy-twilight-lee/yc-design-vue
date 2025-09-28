import { Ref } from 'vue';
import { DatePickerValue, ValueFormat } from '../type';
import { dayjs } from '@shared/utils';

export default function useYearFormat(valueFormat: Ref<ValueFormat>) {
  // 从格式化的值中提取
  const getValueFromFormat = (val: DatePickerValue) => {
    if (!val) return val as number;
    if (valueFormat.value == 'timestamp') {
      return new Date(val).getFullYear();
    } else if (valueFormat.value == 'Date') {
      return (val as Date).getFullYear();
    } else {
      return dayjs(val, valueFormat.value).year();
    }
  };
  // format
  const getFormatFromValue = (val: DatePickerValue) => {
    if (!val) return '';
    const date: DatePickerValue = getDateFromYear(val as number);
    if (valueFormat.value == 'timestamp') {
      return date.getTime();
    }
    if (valueFormat.value != 'Date') {
      return dayjs(date).format(valueFormat.value);
    }
    return date;
  };
  // year转date
  const getDateFromYear = (year: number) => {
    return new Date(year, 1, 1, 0, 0, 0);
  };
  return {
    getDateFromYear,
    getFormatFromValue,
    getValueFromFormat,
  };
}
