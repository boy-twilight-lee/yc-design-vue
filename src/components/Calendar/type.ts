import { VNode } from 'vue';

export interface CalendarProps {
  modelValue?: Date;
  defaultValue?: Date;
  mode?: CalendarMode;
  defaultMode?: CalendarMode;
  modes?: CalendarMode[];
}

export interface CalendarEmits {
  (e: 'update:modelValue', value: Date): void;
  (e: 'update:mode', mode: CalendarMode): void;
  (e: 'change', value: Date): void;
  (e: 'panel-change', value: Date): void;
}

export interface CalendarSlots {
  header: (scope: { year: number; month: number }) => VNode[];
  default: (scope: { year: number; month: number; day: number }) => VNode[];
}

export type CalendarMode = 'month' | 'year';
