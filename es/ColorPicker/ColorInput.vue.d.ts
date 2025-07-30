type __VLS_Props = {
    color: string;
    baseColor: string;
    alpha: number;
    disabled: boolean;
    disabledAlpha: boolean;
};
declare const _default: import('vue').DefineComponent<__VLS_Props, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {} & {
    change: (color: string, type: "color" | "alpha") => any;
    "update:color": (value: string) => any;
    "update:baseColor": (value: string) => any;
    "update:alpha": (value: number) => any;
}, string, import('vue').PublicProps, Readonly<__VLS_Props> & Readonly<{
    onChange?: ((color: string, type: "color" | "alpha") => any) | undefined;
    "onUpdate:color"?: ((value: string) => any) | undefined;
    "onUpdate:baseColor"?: ((value: string) => any) | undefined;
    "onUpdate:alpha"?: ((value: number) => any) | undefined;
}>, {}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {}, HTMLDivElement>;
export default _default;
