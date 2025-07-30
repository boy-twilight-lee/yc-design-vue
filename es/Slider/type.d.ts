import { Direction } from '../_shared/type';
export interface SliderProps {
    modelValue?: SliderValue;
    defaultValue?: SliderValue;
    step?: number;
    min?: number;
    marks?: Record<number, string>;
    max?: number;
    direction?: Direction;
    disabled?: boolean;
    showTicks?: boolean;
    showInput?: boolean;
    range?: boolean;
    showTooltip?: boolean;
    formatTooltip?: FormatTooltip;
}
export interface SliderEmits {
    (e: 'update:modelValue', value: number): void;
    (e: 'change', value: number): void;
}
export type SliderValue = number | number[];
export type FormatTooltip = (value: number) => string;
