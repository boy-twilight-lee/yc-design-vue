import { Direction } from '../_shared/type';
type __VLS_Props = {
    direction?: Direction;
};
declare const _default: import('vue').DefineComponent<__VLS_Props, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {} & {
    drag: (isVertical: boolean, value: number) => any;
    resize: (val: number) => any;
}, string, import('vue').PublicProps, Readonly<__VLS_Props> & Readonly<{
    onDrag?: ((isVertical: boolean, value: number) => any) | undefined;
    onResize?: ((val: number) => any) | undefined;
}>, {
    direction: Direction;
}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {
    trackRef: HTMLDivElement;
    dragRef: HTMLDivElement;
}, HTMLDivElement>;
export default _default;
