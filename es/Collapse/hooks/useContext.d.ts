import { Ref, Slots } from 'vue';
import { CollapseItemProps as _CollapseItemProps, CollapseProps as _CollapseProps, CollapseEmits, CollapseValue, ExpandIconPosition } from '../type';
import { Props, RequiredDeep } from '../../_shared/type';
export declare const COLLAPSE_CONTEXT_KEY = "collapse-context";
export type CollapseContext = {
    computedActiveKey: Ref<CollapseValue[]>;
    accordion: Ref<boolean>;
    expandIconPosition: Ref<ExpandIconPosition>;
    showExpandIcon: Ref<boolean>;
    destroyOnHide: Ref<boolean>;
    slots: Slots;
};
export type CollapseProps = RequiredDeep<_CollapseProps>;
export type CollapseItemProps = RequiredDeep<_CollapseItemProps>;
declare const _default: () => {
    provide: (props: Props, emits: CollapseEmits) => void;
    inject: (props: Props) => {
        showExpandIcon: import('vue').ComputedRef<boolean>;
        destroyOnHide: import('vue').ComputedRef<boolean>;
        computedActiveKey: Ref<CollapseValue[]>;
        accordion: Ref<boolean>;
        expandIconPosition: Ref<ExpandIconPosition>;
        slots: Slots;
    };
};
export default _default;
