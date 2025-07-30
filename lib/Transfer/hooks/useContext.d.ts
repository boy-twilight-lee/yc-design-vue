import { Ref, Slots } from 'vue';
import { TransferEmits, TransferItem, TransferItemValue } from '../type';
import { InputProps } from '../../Input';
import { Props } from '../../_shared/type';
type TransferContext = {
    computedValue: Ref<TransferItemValue[]>;
    computedSelected: Ref<TransferItemValue[]>;
    targetChecked: Ref<TransferItemValue[]>;
    sourceChecked: Ref<TransferItemValue[]>;
    sourceOptions: Ref<TransferItem[]>;
    targetOptions: Ref<TransferItem[]>;
    showSelectAll: Ref<boolean>;
    disabled: Ref<boolean>;
    title: Ref<string[]>;
    sourceInputSearchProps: Ref<InputProps>;
    targetInputSearchProps: Ref<InputProps>;
    showSearch: Ref<boolean>;
    oneWay: Ref<boolean>;
    simple: Ref<boolean>;
    slots: Slots;
    emits: TransferEmits;
};
declare const _default: () => {
    provide: (props: Props, emits: TransferEmits) => {
        computedValue: import('vue').WritableComputedRef<any, TransferItemValue[]>;
        targetChecked: import('vue').ComputedRef<any>;
        computedSelected: import('vue').WritableComputedRef<any, TransferItemValue[]>;
        sourceChecked: import('vue').ComputedRef<any>;
    };
    inject: () => TransferContext;
};
export default _default;
