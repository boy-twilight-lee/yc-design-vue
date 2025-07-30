import { Ref, CSSProperties, Slots } from 'vue';
import { DescriptionsAlign, DescData } from '../type';
import { Props, Size } from '../../_shared/type';
type DescriptionsContext = {
    labelStyle: Ref<CSSProperties>;
    valueStyle: Ref<CSSProperties>;
    align: Ref<DescriptionsAlign>;
    bordered: Ref<boolean>;
    size: Ref<Size>;
    slots: Slots;
};
declare const _default: () => {
    provide: (props: Props) => {
        data: import('vue').ComputedRef<DescData[]>;
        size: Ref<any, any>;
        column: import('vue').ComputedRef<number>;
        layout: Ref<import('..').DescriptionsLayout, import('..').DescriptionsLayout>;
    };
    inject: () => DescriptionsContext;
};
export default _default;
