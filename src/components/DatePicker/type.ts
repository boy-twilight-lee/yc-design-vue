import { VNode } from 'vue';
import { PopupContainer, Position, Size } from '@shared/type';
import { TriggerProps } from '@/components/Trigger';

export interface BasePickerProps {
  locale?: Record<string, any>;
  hideTrigger?: boolean;
  allowClear?: boolean;
  readonly?: boolean;
  error?: boolean;
  size?: Size;
  shortcuts?: ShortcutType[];
  shortcutsPosition?: Position;
  position?: 'top' | 'tl' | 'tr' | 'bottom' | 'bl' | 'br';
  popupVisible?: boolean;
  defaultPopupVisible?: boolean;
  triggerProps?: TriggerProps;
  unmountOnClose?: boolean;
  placeholder?: string;
  disabled?: boolean;
  disabledDate?: (current?: Date) => boolean;
  disabledTime?: (current: Date) => {
    disabledHours?: () => number[];
    disabledMinutes?: () => number[];
    disabledSeconds?: () => number[];
  };
  pickerValue?: DatePickerValue;
  defaultPickerValue?: DatePickerValue;
  popupContainer?: PopupContainer;
  valueFormat?: 'timestamp' | 'Date' | string;
  previewShortcut?: boolean;
  showConfirmBtn?: boolean;
  disabledInput?: boolean;
  abbreviation?: boolean;
}

export interface BasePickerEmits {
  (e: 'update:popupVisible', value: boolean): void;
  (e: 'update:pickerValue', value: DatePickerValue): void;
  (
    e: 'change',
    value: DatePickerValue | undefined,
    date: Date | undefined,
    dateString: string | undefined
  ): void;
  (e: 'select', value: DatePickerValue, date: Date, dateString: string): void;
  (e: 'popup-visible-change', visible: boolean): void;
  (e: 'ok', value: DatePickerValue, date: Date, dateString: string): void;
  (e: 'clear'): void;
  (e: 'select-shortcut', shortcut: ShortcutType): void;
  (
    e: 'picker-value-change',
    value: DatePickerValue,
    date: Date,
    dateString: string
  ): void;
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
}

export interface YearPickerProps extends BasePickerProps {
  modelValue?: DatePickerValue;
  defaultValue?: DatePickerValue;
  format?: string;
}

export interface YearPickerEmits extends BasePickerEmits {
  (e: 'update:modelValue', value: DatePickerValue): void;
}

export interface MonthPickerProps extends BasePickerProps {
  modelValue?: DatePickerValue;
  defaultValue?: DatePickerValue;
  format?: string;
}

export interface WeekPickerProps extends BasePickerProps {
  modelValue?: DatePickerValue;
  defaultValue?: DatePickerValue;
  format?: string;
  valueFormat?: string;
  dayStartOfWeek?: 0 | 1 | 2 | 3 | 4 | 5 | 6;
}

export type DatePickerValue = Date | string | number;

export type ShortcutType = {
  label: string | number | (() => VNode);
  value:
    | DatePickerValue
    | DatePickerValue[]
    | (() => DatePickerValue | DatePickerValue[]);
  format: string;
};
