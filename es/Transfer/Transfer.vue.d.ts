import { TransferProps, TransferSlots } from './type';
declare function __VLS_template(): {
    attrs: Partial<{}>;
    slots: Readonly<TransferSlots> & TransferSlots;
    refs: {};
    rootEl: HTMLDivElement;
};
type __VLS_TemplateResult = ReturnType<typeof __VLS_template>;
declare const __VLS_component: import('vue').DefineComponent<TransferProps, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {} & {
    change: (value: import('./type').TransferItemValue[]) => any;
    select: (value: import('./type').TransferItemValue[]) => any;
    search: (value: string, type: "source" | "target") => any;
    "update:modelValue": (value: import('./type').TransferItemValue[]) => any;
    "update:selected": (value: import('./type').TransferItemValue[]) => any;
}, string, import('vue').PublicProps, Readonly<TransferProps> & Readonly<{
    onChange?: ((value: import('./type').TransferItemValue[]) => any) | undefined;
    onSelect?: ((value: import('./type').TransferItemValue[]) => any) | undefined;
    onSearch?: ((value: string, type: "source" | "target") => any) | undefined;
    "onUpdate:modelValue"?: ((value: import('./type').TransferItemValue[]) => any) | undefined;
    "onUpdate:selected"?: ((value: import('./type').TransferItemValue[]) => any) | undefined;
}>, {
    disabled: boolean;
    data: import('./type').TransferItem[];
    title: string[];
    modelValue: string[];
    defaultValue: string[];
    simple: boolean;
    selected: string[];
    defaultSelected: string[];
    oneWay: boolean;
    sourceInputSearchProps: import('..').InputProps;
    targetInputSearchProps: import('..').InputProps;
    showSearch: boolean;
    showSelectAll: boolean;
}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {}, HTMLDivElement>;
declare const _default: __VLS_WithTemplateSlots<typeof __VLS_component, __VLS_TemplateResult["slots"]>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
