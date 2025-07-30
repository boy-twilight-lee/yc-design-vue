import { PositionData } from './hooks/useSliderDraggable';
type __VLS_Props = {
    type: 'start' | 'end';
    position: PositionData;
};
declare const _default: import('vue').DefineComponent<__VLS_Props, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {} & {
    "update:position": (value: PositionData) => any;
}, string, import('vue').PublicProps, Readonly<__VLS_Props> & Readonly<{
    "onUpdate:position"?: ((value: PositionData) => any) | undefined;
}>, {}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {
    triggerRef: HTMLDivElement;
}, any>;
export default _default;
