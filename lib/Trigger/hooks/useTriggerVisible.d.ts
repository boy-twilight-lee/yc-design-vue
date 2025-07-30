import { Ref } from 'vue';
import { TriggerEmits } from '../type';
import { Props } from '../../_shared/type';
declare const _default: (params: {
    props: Props;
    emits: TriggerEmits;
    popupRef: Ref<HTMLDivElement | undefined>;
    triggerRef: Ref<HTMLElement | undefined>;
}) => {
    mouseX: Ref<number, number>;
    mouseY: Ref<number, number>;
    computedVisible: import('vue').WritableComputedRef<any, boolean>;
    handleClickEvent: (e: MouseEvent, type: "click" | "contextMenu") => void;
    handleMouseenter: () => void;
    handleMouseleave: (e: MouseEvent) => void;
    handleFocus: () => void;
    handleBlur: () => void;
};
export default _default;
