import { StatisticProps, StatisticSlots } from './type';
declare function __VLS_template(): {
    attrs: Partial<{}>;
    slots: Readonly<StatisticSlots> & StatisticSlots;
    refs: {
        valueRef: HTMLSpanElement;
    };
    rootEl: HTMLDivElement;
};
type __VLS_TemplateResult = ReturnType<typeof __VLS_template>;
declare const __VLS_component: import('vue').DefineComponent<StatisticProps, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {} & {
    finish: () => any;
}, string, import('vue').PublicProps, Readonly<StatisticProps> & Readonly<{
    onFinish?: (() => any) | undefined;
}>, {
    value: import('./type').StatisticValue;
    start: boolean;
    separator: string;
    title: string;
    animation: boolean;
    format: string;
    animationDuration: number;
    placeholder: string;
    easeing: string;
    extra: string;
    precision: number;
    valueStyle: import('vue').CSSProperties;
    showGroupSeparator: boolean;
    valueFrom: number;
    isCountdown: boolean;
}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {
    valueRef: HTMLSpanElement;
}, HTMLDivElement>;
declare const _default: __VLS_WithTemplateSlots<typeof __VLS_component, __VLS_TemplateResult["slots"]>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
