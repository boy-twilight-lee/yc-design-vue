import { default as dayjs } from 'dayjs';
type options = {
    value: string;
    disabled: boolean;
}[];
export declare function generateTimeOptions(config: {
    format: string;
    disabledHours?: () => number[];
    disabledMinutes?: (selectedHour?: number) => number[];
    disabledSeconds?: (selectedHour?: number, selectedMinute?: number) => number[];
    hideDisabledOptions?: boolean;
    step?: {
        hour?: number;
        minute?: number;
        second?: number;
    };
    selectedHour?: string;
    selectedMinute?: string;
}): {
    hours: options;
    minutes: options;
    seconds: options;
    meridiems: options;
};
export declare function parseTimeStrByFormat(timeStr: string, format: string): {
    hours: string;
    minutes: string;
    seconds: string;
    meridiems: string | undefined;
};
export declare function timeObjToStr(timeObj: {
    hours?: string;
    minutes?: string;
    seconds?: string;
    meridiems?: string | undefined;
}, format: string): string;
export declare const isValidTimeRange: (beginDate: string, endDate: string, format: string) => boolean;
export interface CalendarCellData {
    day: number;
    month: number;
    year: number;
    isCurrentMonth: boolean;
    fullDate: string;
}
export declare function generateMonthCalendar(year: number, month: number): CalendarCellData[][];
export declare const formatSeconds: (time: number, format: string, type?: dayjs.UnitType) => string;
export declare const formatDate: (value: string | number | Date, format: string) => string;
export {};
