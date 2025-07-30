type __VLS_Props = {
    color: string;
    baseColor: string;
    popupVisible: boolean;
    disabled: boolean;
    hideTrigger: boolean;
};
declare const _default: import('vue').DefineComponent<__VLS_Props, {
    setPosition(color: string): void;
}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {} & {
    "update:color": (value: string) => any;
    "update:baseColor": (value: string) => any;
}, string, import('vue').PublicProps, Readonly<__VLS_Props> & Readonly<{
    "onUpdate:color"?: ((value: string) => any) | undefined;
    "onUpdate:baseColor"?: ((value: string) => any) | undefined;
}>, {}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {
    paletteRef: HTMLDivElement;
    btnRef: HTMLDivElement;
}, HTMLDivElement>;
export default _default;
