import { DropdownButtonProps, DoptionValue, DropdownButtonSlots } from './type';
declare function __VLS_template(): {
    attrs: Partial<{}>;
    slots: Readonly<DropdownButtonSlots> & DropdownButtonSlots;
    refs: {};
    rootEl: HTMLDivElement;
};
type __VLS_TemplateResult = ReturnType<typeof __VLS_template>;
declare const __VLS_component: import('vue').DefineComponent<DropdownButtonProps, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {} & {
    click: (ev: MouseEvent) => any;
    "popup-visible-change": (value: boolean) => any;
    select: (value: DoptionValue) => any;
}, string, import('vue').PublicProps, Readonly<DropdownButtonProps> & Readonly<{
    onClick?: ((ev: MouseEvent) => any) | undefined;
    "onPopup-visible-change"?: ((value: boolean) => any) | undefined;
    onSelect?: ((value: DoptionValue) => any) | undefined;
}>, {
    size: import('..').Size;
    trigger: import('..').TriggerType;
    popupVisible: boolean;
    defaultPopupVisible: boolean;
    disabled: boolean;
    position: import('./type').DropdownPosition;
    popupContainer: import('..').PopupContainer;
    type: import('../Button').ButtonType;
    hideOnSelect: boolean;
    buttonProps: import('../Button').ButtonProps;
}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {}, HTMLDivElement>;
declare const _default: __VLS_WithTemplateSlots<typeof __VLS_component, __VLS_TemplateResult["slots"]>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
