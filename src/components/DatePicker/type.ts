import { VNode } from 'vue';
import { PopupContainer, Position, Size } from '@shared/type';
import { TriggerProps } from '@/components/Trigger';
import {
  DisabledHours,
  DisabledMinutes,
  DisabledSeconds,
  TimePickerProps,
} from '@/components/TimePicker';

export interface BasePickerProps {
  locale?: Record<string, any>;
  hideTrigger?: boolean;
  allowClear?: boolean;
  readonly?: boolean;
  error?: boolean;
  size?: Size;
  shortcuts?: ShortcutType[];
  shortcutsPosition?: ShortcutsPosition;
  position?: DatePickerPosition;
  popupVisible?: boolean;
  defaultPopupVisible?: boolean;
  triggerProps?: TriggerProps;
  unmountOnClose?: boolean;
  placeholder?: string;
  disabled?: boolean;
  disabledDate?: DisabledDate;
  disabledTime?: DisabledTime;
  pickerValue?: DatePickerValue;
  defaultPickerValue?: DatePickerValue;
  popupContainer?: PopupContainer;
  valueFormat?: ValueFormat;
  format?: string;
  previewShortcut?: boolean;
  showConfirmBtn?: boolean;
  disabledInput?: boolean;
  abbreviation?: boolean;
}

export interface BasePickerEmits {
  (e: 'update:popupVisible', value: boolean): void;
  (e: 'update:pickerValue', value: DatePickerValue): void;
  (e: 'change', value: DatePickerValue, date: Date, dateString: string): void;
  (e: 'select', value: DatePickerValue, date: Date, dateString: string): void;
  (e: 'ok', value: DatePickerValue, date: Date, dateString: string): void;
  (
    e: 'picker-value-change',
    value: DatePickerValue,
    date: Date,
    dateString: string
  ): void;
  (e: 'popup-visible-change', visible: boolean): void;
  (e: 'clear'): void;
  (e: 'select-shortcut', shortcut: ShortcutType): void;
}

export interface BasePickerSlots {
  prefix?: () => VNode[];
  'suffix-icon'?: () => VNode[];
  'icon-next-double'?: () => VNode[];
  'icon-prev-double'?: () => VNode[];
  'icon-next'?: () => VNode[];
  'icon-prev'?: () => VNode[];
  cell?: (scope: { date: Date }) => VNode[];
  extra?: () => VNode[];
  default?: () => VNode[];
}

export interface YearPickerProps extends BasePickerProps {
  modelValue?: DatePickerValue;
  defaultValue?: DatePickerValue;
}

export interface YearPickerEmits extends BasePickerEmits {
  (e: 'update:modelValue', value: DatePickerValue): void;
}

export interface MonthPickerProps extends BasePickerProps {
  modelValue?: DatePickerValue;
  defaultValue?: DatePickerValue;
}

export interface MonthPickerEmits extends BasePickerEmits {
  (e: 'update:modelValue', value: DatePickerValue): void;
}

export interface WeekPickerProps extends BasePickerProps {
  modelValue?: DatePickerValue;
  defaultValue?: DatePickerValue;
  dayStartOfWeek?: DayStartOfWeek;
}

export interface WeekPickerEmits extends BasePickerEmits {
  (e: 'update:modelValue', value: DatePickerValue): void;
}

export interface DatePickerProps extends BasePickerProps {
  modelValue?: DatePickerValue;
  defaultValue?: DatePickerValue;
  dayStartOfWeek?: DayStartOfWeek;
  showTime?: boolean;
  timePickerProps?: TimePickerProps;
  showNowBtn?: boolean;
}

export interface DatePickerEmits extends BasePickerEmits {
  (e: 'update:modelValue', value: DatePickerValue): void;
}

export type DatePickerValue = Date | string | number;

export type DatePickerPosition = 'top' | 'tl' | 'tr' | 'bottom' | 'bl' | 'br';

export type DayStartOfWeek = 0 | 1 | 2 | 3 | 4 | 5 | 6;

export type ValueFormat = 'timestamp' | 'Date' | string;

export type ShortcutsPosition = Exclude<Position, 'top'>;

export type DisabledDate = (current: Date) => boolean;

export type DisabledTime = (current: Date | string) => {
  disabledHours?: DisabledHours;
  disabledMinutes?: DisabledMinutes;
  disabledSeconds?: DisabledSeconds;
};

export type ShortcutType = {
  label: string | number | (() => VNode);
  value: Date | Date[] | (() => Date | Date[]);
  format: string;
};
