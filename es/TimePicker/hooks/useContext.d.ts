import { Ref } from 'vue';
import { TimePickerEmits, TimePickerType, TimePickerValue, TimeUnit, DisabledHours, DisabledMinutes, DisabledSeconds } from '../type';
import { Props } from '../../_shared/type';
type TimePickerContext = {
    type: Ref<TimePickerType>;
    format: Ref<string>;
    computedValue: Ref<TimePickerValue>;
    computedVisible: Ref<boolean>;
    curIndex: Ref<number>;
    curValue: Ref<number[]>;
    timeColumn: Ref<TimeUnit[]>;
    timeColumnCells: Ref<{
        unit: TimeUnit;
        cells: TimePickerCell[];
    }[]>;
    inputRefs: Ref<HTMLInputElement[]>;
    disableConfirm: Ref<boolean>;
    hideDisabledOptions: Ref<boolean>;
    disabledHours: DisabledHours;
    disabledMinutes: DisabledMinutes;
    disabledSeconds: DisabledSeconds;
};
type TimePickerCell = {
    label: string;
    value: number;
};
declare const _default: () => {
    provide: (props: Props, emits: TimePickerEmits) => {
        computedValue: import('vue').WritableComputedRef<any, TimePickerValue>;
        computedVisible: import('vue').WritableComputedRef<any, boolean>;
        showClearBtn: import('vue').ComputedRef<any>;
        curValue: Ref<number[], number[]>;
        readonly: Ref<boolean, boolean>;
        disabled: Ref<boolean, boolean>;
        type: Ref<TimePickerType, TimePickerType>;
        curIndex: Ref<number, number>;
        inputRefs: Ref<HTMLInputElement[], HTMLInputElement[]>;
        format: Ref<string, string>;
    };
    inject: () => TimePickerContext;
};
export default _default;
