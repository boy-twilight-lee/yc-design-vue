import { CSSProperties } from 'vue';
import { TooltipProps, TooltipSlots } from './type';
declare function __VLS_template(): {
    attrs: Partial<{}>;
    slots: Readonly<TooltipSlots> & TooltipSlots;
    refs: {};
    rootEl: any;
};
type __VLS_TemplateResult = ReturnType<typeof __VLS_template>;
declare const __VLS_component: import('vue').DefineComponent<TooltipProps, {
    hide(): void;
    show(): void;
}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {} & {
    "update:popupVisible": (value: boolean) => any;
    "popup-visible-change": (value: boolean) => any;
}, string, import('vue').PublicProps, Readonly<TooltipProps> & Readonly<{
    "onUpdate:popupVisible"?: ((value: boolean) => any) | undefined;
    "onPopup-visible-change"?: ((value: boolean) => any) | undefined;
}>, {
    mini: boolean;
    popupVisible: boolean;
    defaultPopupVisible: boolean;
    position: import('../Trigger').TriggerPostion;
    contentClass: import('../_shared/type').ClassName;
    contentStyle: CSSProperties;
    arrowClass: import('../_shared/type').ClassName;
    arrowStyle: CSSProperties;
    popupContainer: import('..').PopupContainer;
    content: string;
    backgroundColor: string;
    triggerProps: import('../Trigger').TriggerProps;
}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {}, any>;
declare const _default: __VLS_WithTemplateSlots<typeof __VLS_component, __VLS_TemplateResult["slots"]>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
