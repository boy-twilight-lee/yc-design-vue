import { TriggerProps } from './type';
declare function __VLS_template(): any;
type __VLS_TemplateResult = ReturnType<typeof __VLS_template>;
declare const __VLS_component: import('vue').DefineComponent<TriggerProps, {
    hide(): void;
    show(): void;
    updatePosition(x: number, y: number): void;
}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {} & {
    "update:popupVisible": (value: boolean) => any;
    "popup-visible-change": (value: boolean) => any;
    show: () => any;
    hide: () => any;
}, string, import('vue').PublicProps, Readonly<TriggerProps> & Readonly<{
    "onUpdate:popupVisible"?: ((value: boolean) => any) | undefined;
    "onPopup-visible-change"?: ((value: boolean) => any) | undefined;
    onShow?: (() => any) | undefined;
    onHide?: (() => any) | undefined;
}>, {
    trigger: import('./type').TriggerType;
    mouseEnterDelay: number;
    popupVisible: boolean;
    defaultPopupVisible: boolean;
    clickToClose: boolean;
    blurToClose: boolean;
    clickOutsideToClose: boolean;
    mouseLeaveDelay: number;
    focusDelay: number;
    disabled: boolean;
    scrollToCloseDistance: number;
    autoSetPosition: boolean;
    alignPoint: boolean;
    position: import('./type').TriggerPostion;
    popupOffset: number;
    popupTranslate: number[];
    showArrow: boolean;
    unmountOnClose: boolean;
    contentClass: import('../_shared/type').ClassName;
    contentStyle: import('vue').CSSProperties;
    arrowClass: import('../_shared/type').ClassName;
    arrowStyle: import('vue').CSSProperties;
    animationName: string;
    duration: number;
    autoFitPopupWidth: boolean;
    autoFitPopupMinWidth: boolean;
    popupContainer: import('..').PopupContainer;
    renderToBody: boolean;
    autoFitPosition: boolean;
    updateAtScroll: boolean;
    preventFocus: boolean;
    scrollToClose: boolean;
    needTransformOrigin: boolean;
}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, any, any>;
declare const _default: __VLS_WithTemplateSlots<typeof __VLS_component, __VLS_TemplateResult["slots"]>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
