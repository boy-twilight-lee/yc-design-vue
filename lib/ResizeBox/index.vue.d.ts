import { ResizeBoxProps, ResizeBoxSlots, ResizeBoxDirection } from './type';
declare function __VLS_template(): {
    attrs: Partial<{}>;
    slots: Readonly<ResizeBoxSlots> & ResizeBoxSlots;
    refs: {
        boxRef: unknown;
    };
    rootEl: any;
};
type __VLS_TemplateResult = ReturnType<typeof __VLS_template>;
declare const __VLS_component: import('vue').DefineComponent<ResizeBoxProps, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {} & {
    "update:width": (value: number) => any;
    "update:height": (value: number) => any;
    "moving-start": (ev: MouseEvent) => any;
    moving: (size: {
        width: number;
        height: number;
    }, ev: MouseEvent) => any;
    "moving-end": (ev: MouseEvent) => any;
}, string, import('vue').PublicProps, Readonly<ResizeBoxProps> & Readonly<{
    "onUpdate:width"?: ((value: number) => any) | undefined;
    "onUpdate:height"?: ((value: number) => any) | undefined;
    "onMoving-start"?: ((ev: MouseEvent) => any) | undefined;
    onMoving?: ((size: {
        width: number;
        height: number;
    }, ev: MouseEvent) => any) | undefined;
    "onMoving-end"?: ((ev: MouseEvent) => any) | undefined;
}>, {
    width: number;
    height: number;
    component: string;
    directions: ResizeBoxDirection[];
}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {
    boxRef: unknown;
}, any>;
declare const _default: __VLS_WithTemplateSlots<typeof __VLS_component, __VLS_TemplateResult["slots"]>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
