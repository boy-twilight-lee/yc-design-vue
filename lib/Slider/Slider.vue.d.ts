import { SliderProps } from './type';
declare const _default: import('vue').DefineComponent<SliderProps, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {} & {
    change: (value: number) => any;
    "update:modelValue": (value: number) => any;
}, string, import('vue').PublicProps, Readonly<SliderProps> & Readonly<{
    onChange?: ((value: number) => any) | undefined;
    "onUpdate:modelValue"?: ((value: number) => any) | undefined;
}>, {
    disabled: boolean;
    range: boolean;
    showTooltip: boolean;
    step: number;
    direction: import('..').Direction;
    modelValue: import('./type').SliderValue;
    defaultValue: import('./type').SliderValue;
    showInput: boolean;
    max: number;
    min: number;
    marks: Record<number, string>;
    showTicks: boolean;
    formatTooltip: import('./type').FormatTooltip;
}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {
    trackRef: HTMLDivElement;
}, HTMLDivElement>;
export default _default;
