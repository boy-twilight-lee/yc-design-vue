import { SplitProps, SplitSlots } from './type';
declare function __VLS_template(): {
    attrs: Partial<{}>;
    slots: Readonly<SplitSlots> & SplitSlots;
    refs: {
        splitRef: unknown;
        triggerRef: HTMLDivElement;
    };
    rootEl: any;
};
type __VLS_TemplateResult = ReturnType<typeof __VLS_template>;
declare const __VLS_component: import('vue').DefineComponent<SplitProps, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {} & {
    "moving-start": () => any;
    moving: () => any;
    "moving-end": () => any;
    "update:size": (value: number) => any;
}, string, import('vue').PublicProps, Readonly<SplitProps> & Readonly<{
    "onMoving-start"?: (() => any) | undefined;
    onMoving?: (() => any) | undefined;
    "onMoving-end"?: (() => any) | undefined;
    "onUpdate:size"?: ((value: number) => any) | undefined;
}>, {
    size: number | string;
    disabled: boolean;
    component: string;
    direction: import('..').Direction;
    max: number;
    min: number;
    defaultSize: number | string;
}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {
    splitRef: unknown;
    triggerRef: HTMLDivElement;
}, any>;
declare const _default: __VLS_WithTemplateSlots<typeof __VLS_component, __VLS_TemplateResult["slots"]>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
