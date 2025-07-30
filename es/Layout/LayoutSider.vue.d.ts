import { LayoutSiderProps, LayoutSiderSlots } from './type';
declare function __VLS_template(): {
    attrs: Partial<{}>;
    slots: Readonly<LayoutSiderSlots> & LayoutSiderSlots;
    refs: {};
    rootEl: any;
};
type __VLS_TemplateResult = ReturnType<typeof __VLS_template>;
declare const __VLS_component: import('vue').DefineComponent<LayoutSiderProps, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {} & {
    collapse: (collapsed: boolean, type: "clickTrigger" | "responsive") => any;
    breakpoint: (collapsed: boolean) => any;
    "update:collapsed": (collapsed: boolean) => any;
}, string, import('vue').PublicProps, Readonly<LayoutSiderProps> & Readonly<{
    onCollapse?: ((collapsed: boolean, type: "clickTrigger" | "responsive") => any) | undefined;
    onBreakpoint?: ((collapsed: boolean) => any) | undefined;
    "onUpdate:collapsed"?: ((collapsed: boolean) => any) | undefined;
}>, {
    width: number;
    collapsed: boolean;
    breakpoint: import('..').BreakpointName;
    theme: import('..').Theme;
    hideTrigger: boolean;
    defaultCollapsed: boolean;
    collapsible: boolean;
    collapsedWidth: number;
    reverseArrow: boolean;
    resizeDirections: import('./type').ResizeDirections;
}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {}, any>;
declare const _default: __VLS_WithTemplateSlots<typeof __VLS_component, __VLS_TemplateResult["slots"]>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
