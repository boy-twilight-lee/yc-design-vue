import { CSSProperties, Ref } from 'vue';
import { TriggerPostion } from '../type';
import { Props } from '../../_shared/type';
declare const _default: (params: {
    props: Props;
    popupRef: Ref<HTMLDivElement | undefined>;
    triggerRef: Ref<HTMLElement | undefined>;
    arrowRef: Ref<HTMLElement | undefined>;
    computedVisible: Ref<boolean>;
    mouseX: Ref<number>;
    mouseY: Ref<number>;
}) => {
    position: Ref<TriggerPostion, TriggerPostion>;
    left: Ref<number, number>;
    top: Ref<number, number>;
    bottom: Ref<number, number>;
    right: Ref<number, number>;
    popupWidth: Ref<number, number>;
    popupHeight: Ref<number, number>;
    triggerWidth: Ref<number, number>;
    triggerHeight: Ref<number, number>;
    arrowWidth: Ref<number, number>;
    arrowHeight: Ref<number, number>;
    popupStyle: import('vue').ComputedRef<{
        top: string;
        left: string;
        zIndex: number;
    }>;
    contentStyle: import('vue').ComputedRef<CSSProperties>;
    arrowStyle: import('vue').ComputedRef<CSSProperties>;
};
export default _default;
