type IconProps = {
    strokeWidth?: number;
    strokeLinecap?: 'butt' | 'round' | 'square';
    strokeLinejoin?: 'bevel' | 'miter' | 'round' | 'inherit';
    rotate?: number;
    spin?: boolean;
    size?: number | number[];
    color?: string;
};
declare function __VLS_template(): {
    attrs: Partial<{}>;
    slots: {
        default?(_: {}): any;
    };
    refs: {};
    rootEl: SVGSVGElement;
};
type __VLS_TemplateResult = ReturnType<typeof __VLS_template>;
declare const __VLS_component: import('vue').DefineComponent<IconProps, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, string, import('vue').PublicProps, Readonly<IconProps> & Readonly<{}>, {
    strokeWidth: number;
    strokeLinecap: "butt" | "round" | "square";
    strokeLinejoin: "bevel" | "miter" | "round" | "inherit";
    spin: boolean;
}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {}, SVGSVGElement>;
declare const _default: __VLS_WithTemplateSlots<typeof __VLS_component, __VLS_TemplateResult["slots"]>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
