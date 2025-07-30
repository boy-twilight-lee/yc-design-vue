import { WatermarkProps, WatermarkSlots } from './type';
declare function __VLS_template(): {
    attrs: Partial<{}>;
    slots: Readonly<WatermarkSlots> & WatermarkSlots;
    refs: {
        containerRef: HTMLDivElement;
    };
    rootEl: HTMLDivElement;
};
type __VLS_TemplateResult = ReturnType<typeof __VLS_template>;
declare const __VLS_component: import('vue').DefineComponent<WatermarkProps, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, string, import('vue').PublicProps, Readonly<WatermarkProps> & Readonly<{}>, {
    zIndex: number;
    width: number;
    height: number;
    repeat: boolean;
    content: string | string[];
    alpha: number;
    rotate: number;
    image: string;
    offset: number[];
    gap: number[];
    font: import('./type').WatermarkFont;
    grayscale: boolean;
    staggered: boolean;
    antiTamper: boolean;
}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {
    containerRef: HTMLDivElement;
}, HTMLDivElement>;
declare const _default: __VLS_WithTemplateSlots<typeof __VLS_component, __VLS_TemplateResult["slots"]>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
