import { App } from 'vue';
import { default as _Trigger } from './index.vue';
export type TriggerInstance = InstanceType<typeof _Trigger>;
export * from './type';
declare const Trigger: {
    new (...args: any[]): import('vue').CreateComponentPublicInstanceWithMixins<Readonly<import('./type').TriggerProps> & Readonly<{
        "onUpdate:popupVisible"?: ((value: boolean) => any) | undefined;
        "onPopup-visible-change"?: ((value: boolean) => any) | undefined;
        onShow?: (() => any) | undefined;
        onHide?: (() => any) | undefined;
    }>, {
        hide(): void;
        show(): void;
        updatePosition(x: number, y: number): void;
    }, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {} & {
        "update:popupVisible": (value: boolean) => any;
        "popup-visible-change": (value: boolean) => any;
        show: () => any;
        hide: () => any;
    }, import('vue').PublicProps, {
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
    }, false, {}, {}, import('vue').GlobalComponents, import('vue').GlobalDirectives, string, any, any, import('vue').ComponentProvideOptions, {
        P: {};
        B: {};
        D: {};
        C: {};
        M: {};
        Defaults: {};
    }, Readonly<import('./type').TriggerProps> & Readonly<{
        "onUpdate:popupVisible"?: ((value: boolean) => any) | undefined;
        "onPopup-visible-change"?: ((value: boolean) => any) | undefined;
        onShow?: (() => any) | undefined;
        onHide?: (() => any) | undefined;
    }>, {
        hide(): void;
        show(): void;
        updatePosition(x: number, y: number): void;
    }, {}, {}, {}, {
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
    }>;
    __isFragment?: never;
    __isTeleport?: never;
    __isSuspense?: never;
} & import('vue').ComponentOptionsBase<Readonly<import('./type').TriggerProps> & Readonly<{
    "onUpdate:popupVisible"?: ((value: boolean) => any) | undefined;
    "onPopup-visible-change"?: ((value: boolean) => any) | undefined;
    onShow?: (() => any) | undefined;
    onHide?: (() => any) | undefined;
}>, {
    hide(): void;
    show(): void;
    updatePosition(x: number, y: number): void;
}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {} & {
    "update:popupVisible": (value: boolean) => any;
    "popup-visible-change": (value: boolean) => any;
    show: () => any;
    hide: () => any;
}, string, {
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
}, {}, string, {}, import('vue').GlobalComponents, import('vue').GlobalDirectives, string, import('vue').ComponentProvideOptions> & import('vue').VNodeProps & import('vue').AllowedComponentProps & import('vue').ComponentCustomProps & (new () => {
    $slots: any;
}) & {
    install: (app: App) => void;
};
declare module 'vue' {
    interface GlobalComponents {
        YcTrigger: typeof Trigger;
    }
}
export default Trigger;
