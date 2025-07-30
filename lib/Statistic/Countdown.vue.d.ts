import { CountdownProps, CountdownSlots } from './type';
declare function __VLS_template(): {
    attrs: Partial<{}>;
    slots: Readonly<CountdownSlots> & CountdownSlots;
    refs: {};
    rootEl: HTMLDivElement;
};
type __VLS_TemplateResult = ReturnType<typeof __VLS_template>;
declare const __VLS_component: import('vue').DefineComponent<CountdownProps, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {} & {
    finish: () => any;
}, string, import('vue').PublicProps, Readonly<CountdownProps> & Readonly<{
    onFinish?: (() => any) | undefined;
}>, {
    value: number;
    start: boolean;
    title: string;
    format: string;
    easeing: string;
    valueStyle: import('vue').CSSProperties;
    now: number;
}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {}, HTMLDivElement>;
declare const _default: __VLS_WithTemplateSlots<typeof __VLS_component, __VLS_TemplateResult["slots"]>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
