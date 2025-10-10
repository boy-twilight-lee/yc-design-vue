import { VNode } from 'vue';
import { PopupContainer, Size } from '@shared/type';
import { TriggerProps } from '@/components/Trigger';

export interface TimePickerProps {
  type?: TimePickerType;
  modelValue?: TimePickerValue;
  defaultValue?: TimePickerValue;
  disabled?: boolean;
  allowClear?: boolean;
  readonly?: boolean;
  error?: boolean;
  format?: string;
  placeholder?: string | string[];
  size?: Size;
  popupContainer?: PopupContainer;
  // use12Hours?: boolean;
  step?: { hour?: number; minute?: number; second?: number };
  disabledHours?: DisabledHours;
  disabledMinutes?: DisabledMinutes;
  disabledSeconds?: DisabledSeconds;
  hideDisabledOptions?: boolean;
  disableConfirm?: boolean;
  position?: TimePickerPosition;
  popupVisible?: boolean;
  defaultPopupVisible?: boolean;
  triggerProps?: TriggerProps;
  unmountOnClose?: boolean;
  // 是否隐藏trigger
  hideTrigger?: boolean;
  scrollbar?: boolean;
  scrollOffset?: number;
}

export interface TimePickerEmits {
  (e: 'update:modelValue', value: TimePickerValue): void;
  (e: 'update:popupVisible', value: boolean): void;
  (
    e: 'change',
    timeString: string | Array<string | undefined> | undefined,
    time: Date | Array<Date | undefined> | undefined
  ): void;
  (
    e: 'select',
    timeString: string | Array<string | undefined> | undefined,
    time: Date | Array<Date | undefined> | undefined
  ): void;
  (e: 'clear'): void;
  (e: 'popup-visible-change', value: boolean): void;
}

export interface TimePickerSlots {
  prefix?: () => VNode[];
  'suffix-icon'?: () => VNode[];
  extra?: () => VNode[];
}

export type TimePickerValue =
  | string
  | number
  | Date
  | (string | number | Date)[];

export type TimeUnit = 'hour' | 'minute' | 'second';

export type TimePickerType = 'time' | 'time-range';

export type TimePickerPosition = 'top' | 'tl' | 'tr' | 'bottom' | 'bl' | 'br';

export type DisabledHours = () => number[];

export type DisabledMinutes = (selectedHour?: number) => number[];

export type DisabledSeconds = (
  selectedHour?: number,
  selectedMinute?: number
) => number[];
