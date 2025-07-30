import { Ref, CSSProperties } from 'vue';
declare const _default: (params: {
    draggable: Ref<boolean>;
    fullscreen: Ref<boolean>;
    alignCenter: Ref<boolean>;
    top: Ref<number>;
    visible: Ref<boolean>;
    triggerRef: Ref<HTMLDivElement | undefined>;
    modalRef: Ref<HTMLDivElement | undefined>;
}) => {
    dragStyle: import('vue').ComputedRef<CSSProperties>;
    isDraggable: import('vue').ComputedRef<boolean>;
};
export default _default;
