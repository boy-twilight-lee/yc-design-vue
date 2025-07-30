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
    header(scope: {
        year: number;
        month: number;
    }): void;
    default(scope: {
        year: number;
        month: number;
        day: number;
    }): void;
}
export type CalendarMode = 'month' | 'year';
