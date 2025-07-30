import { StepsProps, StepsSlots } from './type';
declare function __VLS_template(): {
    attrs: Partial<{}>;
    slots: Readonly<StepsSlots> & StepsSlots;
    refs: {};
    rootEl: HTMLDivElement;
};
type __VLS_TemplateResult = ReturnType<typeof __VLS_template>;
declare const __VLS_component: import('vue').DefineComponent<StepsProps, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {} & {
    change: (step: number, ev: Event) => any;
    "update:current": (step: number) => any;
}, string, import('vue').PublicProps, Readonly<StepsProps> & Readonly<{
    onChange?: ((step: number, ev: Event) => any) | undefined;
    "onUpdate:current"?: ((step: number) => any) | undefined;
}>, {
    small: boolean;
    type: import('./type').StepType;
    direction: import('..').Direction;
    lineLess: boolean;
    status: import('./type').StepStatus;
    current: number;
    defaultCurrent: number;
    labelPlacement: import('..').Direction;
    changeable: boolean;
}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {}, HTMLDivElement>;
declare const _default: __VLS_WithTemplateSlots<typeof __VLS_component, __VLS_TemplateResult["slots"]>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
