import { Ref } from 'vue';
import { ObjectData, Props } from '../../_shared/type';
import { SelectValue, SelectOptions, FallbackOption, FormatLabel, SelectOptionData } from '../index';
declare const _default: (params: {
    multiple: Ref<boolean>;
    computedValue: Ref<SelectValue>;
    provideOptions: Ref<SelectOptions>;
    showExtraOptions: Ref<boolean>;
    getValue: (value: string | ObjectData) => SelectValue;
    fallbackOption?: FallbackOption;
    formatLabel?: FormatLabel;
}) => {
    options: import('vue').ComputedRef<ObjectData[]>;
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
    renderOptions: import('vue').ComputedRef<SelectOptions>;
    selectOptions: import('vue').ComputedRef<{
        id: string;
        label: SelectValue | undefined;
        render?: import('../../_shared/type').RenderContent;
        value?: SelectValue;
        disabled?: boolean;
        tagProps?: import('../..').TagProps;
        isFallbackOption?: boolean;
    }[]>;
    collectOption: (props: Props, optionLabel: Ref<string>) => void;
};
export default _default;
