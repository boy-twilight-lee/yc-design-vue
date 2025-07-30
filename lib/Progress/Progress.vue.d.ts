import { ProgressProps } from './type';
declare function __VLS_template(): {
    attrs: Partial<{}>;
    slots: {
        text?(_: {
            percent: number;
        }): any;
        text?(_: {
            percent: number;
        }): any;
        text?(_: {
            percent: number;
        }): any;
    };
    refs: {};
    rootEl: HTMLDivElement;
};
type __VLS_TemplateResult = ReturnType<typeof __VLS_template>;
declare const __VLS_component: import('vue').DefineComponent<ProgressProps, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, string, import('vue').PublicProps, Readonly<ProgressProps> & Readonly<{}>, {
    size: import('..').Size;
    type: import('./type').ProgressType;
    animation: boolean;
    status: import('./type').ProgressStatus;
    showText: boolean;
    percent: number;
    steps: number;
}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {}, HTMLDivElement>;
declare const _default: __VLS_WithTemplateSlots<typeof __VLS_component, __VLS_TemplateResult["slots"]>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
