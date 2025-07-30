type __VLS_Props = {
    color: string;
    baseColor: string;
    popupVisible: boolean;
    disabled: boolean;
    hideTrigger: boolean;
    mode: 'alpha' | 'color';
};
declare const _default: import('vue').DefineComponent<__VLS_Props, {
    setPosition: (color: string) => void;
}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {} & {
    change: (value: string) => any;
    "update:color": (value: string) => any;
    "update:baseColor": (value: string) => any;
    "update:alpha": (value: number) => any;
}, string, import('vue').PublicProps, Readonly<__VLS_Props> & Readonly<{
    onChange?: ((value: string) => any) | undefined;
    "onUpdate:color"?: ((value: string) => any) | undefined;
    "onUpdate:baseColor"?: ((value: string) => any) | undefined;
    "onUpdate:alpha"?: ((value: number) => any) | undefined;
}>, {}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {
    barRef: HTMLDivElement;
    btnRef: HTMLDivElement;
}, HTMLDivElement>;
export default _default;
