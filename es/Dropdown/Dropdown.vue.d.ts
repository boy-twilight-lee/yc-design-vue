import { DropdownProps, DoptionValue, DropdownSlots } from './type';
declare function __VLS_template(): {
    attrs: Partial<{}>;
    slots: Readonly<DropdownSlots> & DropdownSlots;
    refs: {};
    rootEl: any;
};
type __VLS_TemplateResult = ReturnType<typeof __VLS_template>;
declare const __VLS_component: import('vue').DefineComponent<DropdownProps, {
    show(): void;
    hide(): void;
}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {} & {
    "update:popupVisible": (value: boolean) => any;
    "popup-visible-change": (value: boolean) => any;
    select: (value: DoptionValue, ev: MouseEvent) => any;
}, string, import('vue').PublicProps, Readonly<DropdownProps> & Readonly<{
    "onUpdate:popupVisible"?: ((value: boolean) => any) | undefined;
    "onPopup-visible-change"?: ((value: boolean) => any) | undefined;
    onSelect?: ((value: DoptionValue, ev: MouseEvent) => any) | undefined;
}>, {
    trigger: import('../Trigger').TriggerType;
    popupVisible: boolean;
    defaultPopupVisible: boolean;
    alignPoint: boolean;
    position: import('./type').DropdownPosition;
    popupContainer: import('..').PopupContainer;
    triggerProps: import('../Trigger').TriggerProps;
    hideOnSelect: boolean;
    theme: import('..').Theme;
    popupMaxHeight: number | boolean;
}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {}, any>;
declare const _default: __VLS_WithTemplateSlots<typeof __VLS_component, __VLS_TemplateResult["slots"]>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
