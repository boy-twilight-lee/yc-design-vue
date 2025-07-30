import { App } from 'vue';
import { default as _Tooltip } from './index.vue';
export type TooltipInstance = InstanceType<typeof _Tooltip>;
export * from './type';
declare const Tooltip: {
    new (...args: any[]): import('vue').CreateComponentPublicInstanceWithMixins<Readonly<import('./type').TooltipProps> & Readonly<{
        "onUpdate:popupVisible"?: ((value: boolean) => any) | undefined;
        "onPopup-visible-change"?: ((value: boolean) => any) | undefined;
    }>, {
        hide(): void;
        show(): void;
    }, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {} & {
        "update:popupVisible": (value: boolean) => any;
        "popup-visible-change": (value: boolean) => any;
    }, import('vue').PublicProps, {
        mini: boolean;
        popupVisible: boolean;
        defaultPopupVisible: boolean;
        position: import('..').TriggerPostion;
        contentClass: import('../_shared/type').ClassName;
        contentStyle: import('vue').CSSProperties;
        arrowClass: import('../_shared/type').ClassName;
        arrowStyle: import('vue').CSSProperties;
        popupContainer: import('..').PopupContainer;
        content: string;
        backgroundColor: string;
        triggerProps: import('..').TriggerProps;
    }, false, {}, {}, import('vue').GlobalComponents, import('vue').GlobalDirectives, string, {}, any, import('vue').ComponentProvideOptions, {
        P: {};
        B: {};
        D: {};
        C: {};
        M: {};
        Defaults: {};
    }, Readonly<import('./type').TooltipProps> & Readonly<{
        "onUpdate:popupVisible"?: ((value: boolean) => any) | undefined;
        "onPopup-visible-change"?: ((value: boolean) => any) | undefined;
    }>, {
        hide(): void;
        show(): void;
    }, {}, {}, {}, {
        mini: boolean;
        popupVisible: boolean;
        defaultPopupVisible: boolean;
        position: import('..').TriggerPostion;
        contentClass: import('../_shared/type').ClassName;
        contentStyle: import('vue').CSSProperties;
        arrowClass: import('../_shared/type').ClassName;
        arrowStyle: import('vue').CSSProperties;
        popupContainer: import('..').PopupContainer;
        content: string;
        backgroundColor: string;
        triggerProps: import('..').TriggerProps;
    }>;
    __isFragment?: never;
    __isTeleport?: never;
    __isSuspense?: never;
} & import('vue').ComponentOptionsBase<Readonly<import('./type').TooltipProps> & Readonly<{
    "onUpdate:popupVisible"?: ((value: boolean) => any) | undefined;
    "onPopup-visible-change"?: ((value: boolean) => any) | undefined;
}>, {
    hide(): void;
    show(): void;
}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {} & {
    "update:popupVisible": (value: boolean) => any;
    "popup-visible-change": (value: boolean) => any;
}, string, {
    mini: boolean;
    popupVisible: boolean;
    defaultPopupVisible: boolean;
    position: import('..').TriggerPostion;
    contentClass: import('../_shared/type').ClassName;
    contentStyle: import('vue').CSSProperties;
    arrowClass: import('../_shared/type').ClassName;
    arrowStyle: import('vue').CSSProperties;
    popupContainer: import('..').PopupContainer;
    content: string;
    backgroundColor: string;
    triggerProps: import('..').TriggerProps;
}, {}, string, {}, import('vue').GlobalComponents, import('vue').GlobalDirectives, string, import('vue').ComponentProvideOptions> & import('vue').VNodeProps & import('vue').AllowedComponentProps & import('vue').ComponentCustomProps & (new () => {
    $slots: Readonly<import('./type').TooltipSlots> & import('./type').TooltipSlots;
}) & {
    install: (app: App) => void;
};
declare module 'vue' {
    interface GlobalComponents {
        YcTooltip: typeof Tooltip;
    }
}
export default Tooltip;
