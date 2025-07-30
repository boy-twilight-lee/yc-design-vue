import { Ref, Slots } from 'vue';
import { SelectValue, SelectOptionData, SelectEmits } from '../type';
import { InputInstance } from '../../Input';
import { ObjectData, Props } from '../../_shared/type';
type SelectContext = {
    computedValue: Ref<SelectValue | SelectValue[] | undefined>;
    computedInputValue: Ref<string>;
    multiple: Ref<boolean>;
    limit: Ref<number>;
    curIndex: Ref<number>;
    options: Ref<SelectOptionData[]>;
    renderOptions: Ref<ObjectData[]>;
    fieldKey: Ref<Record<string, string>>;
    isEmpty: Ref<boolean>;
    slots: Slots;
    blur: () => void;
    filterOption: (option: SelectOptionData) => boolean;
    getValue: (value: SelectValue | ObjectData) => SelectValue;
    collectOption: (props: Props, optionLabel: Ref<string>) => void;
    emits: SelectEmits;
};
declare const _default: () => {
    provide: (props: Props, emits: SelectEmits, inputRef: Ref<InputInstance | undefined>) => {
        computedVisible: import('vue').WritableComputedRef<any, boolean>;
        computedValue: import('vue').WritableComputedRef<any, SelectValue>;
        computedInputValue: import('vue').WritableComputedRef<any, string>;
        selectOptions: import('vue').ComputedRef<{
            id: string;
            label: SelectValue | undefined;
            render?: import('../../_shared/type').RenderContent;
            value?: SelectValue;
            disabled?: boolean;
            tagProps?: import('../..').TagProps;
            isFallbackOption?: boolean;
        }[]>;
        createOptions: Ref<{
            render?: string | import('vue').RenderFunction | ObjectData[] | undefined;
            label?: string | undefined;
            value?: string | number | boolean | ObjectData | (string | number | boolean | ObjectData)[] | undefined;
            disabled?: boolean | undefined;
            tagProps?: {
                color?: string | undefined;
                size?: import('../..').TagSize | undefined;
                bordered?: boolean | undefined;
                visible?: boolean | undefined;
                defaultVisible?: boolean | undefined;
                loading?: boolean | undefined;
                closable?: boolean | undefined;
                checkable?: boolean | undefined;
                checked?: boolean | undefined;
                defaultChecked?: boolean | undefined;
                nowrap?: boolean | undefined;
            } | undefined;
            id?: string | undefined;
            isFallbackOption?: boolean | undefined;
        }[], SelectOptionData[] | {
            render?: string | import('vue').RenderFunction | ObjectData[] | undefined;
            label?: string | undefined;
            value?: string | number | boolean | ObjectData | (string | number | boolean | ObjectData)[] | undefined;
            disabled?: boolean | undefined;
            tagProps?: {
                color?: string | undefined;
                size?: import('../..').TagSize | undefined;
                bordered?: boolean | undefined;
                visible?: boolean | undefined;
                defaultVisible?: boolean | undefined;
                loading?: boolean | undefined;
                closable?: boolean | undefined;
                checkable?: boolean | undefined;
                checked?: boolean | undefined;
                defaultChecked?: boolean | undefined;
                nowrap?: boolean | undefined;
            } | undefined;
            id?: string | undefined;
            isFallbackOption?: boolean | undefined;
        }[]>;
        options: import('vue').ComputedRef<ObjectData[]>;
    };
    inject: () => SelectContext;
};
export default _default;
