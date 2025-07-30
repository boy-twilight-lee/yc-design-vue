import { App } from 'vue';
import { default as _Popover } from './index.vue';
export type PopoverInstance = InstanceType<typeof _Popover>;
export * from './type';
declare const Popover: {
    new (...args: any[]): import('vue').CreateComponentPublicInstanceWithMixins<Readonly<import('./type').PopoverProps> & Readonly<{
        "onUpdate:popupVisible"?: ((value: boolean) => any) | undefined;
        "onPopup-visible-change"?: ((value: boolean) => any) | undefined;
    }>, {
        hide(): void;
        show(): void;
    }, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {} & {
        "update:popupVisible": (value: boolean) => any;
        "popup-visible-change": (value: boolean) => any;
    }, import('vue').PublicProps, {
        trigger: import('..').TriggerType;
        popupVisible: boolean;
        defaultPopupVisible: boolean;
        position: import('..').TriggerPostion;
        contentClass: import('../_shared/type').ClassName;
        contentStyle: import('vue').CSSProperties;
        arrowClass: import('../_shared/type').ClassName;
        arrowStyle: import('vue').CSSProperties;
        popupContainer: import('..').PopupContainer;
        content: string;
        title: string;
        triggerProps: import('..').TriggerProps;
    }, false, {}, {}, import('vue').GlobalComponents, import('vue').GlobalDirectives, string, {}, any, import('vue').ComponentProvideOptions, {
        P: {};
        B: {};
        D: {};
        C: {};
        M: {};
        Defaults: {};
    }, Readonly<import('./type').PopoverProps> & Readonly<{
        "onUpdate:popupVisible"?: ((value: boolean) => any) | undefined;
        "onPopup-visible-change"?: ((value: boolean) => any) | undefined;
    }>, {
        hide(): void;
        show(): void;
    }, {}, {}, {}, {
        trigger: import('..').TriggerType;
        popupVisible: boolean;
        defaultPopupVisible: boolean;
        position: import('..').TriggerPostion;
        contentClass: import('../_shared/type').ClassName;
        contentStyle: import('vue').CSSProperties;
        arrowClass: import('../_shared/type').ClassName;
        arrowStyle: import('vue').CSSProperties;
        popupContainer: import('..').PopupContainer;
        content: string;
        title: string;
        triggerProps: import('..').TriggerProps;
    }>;
    __isFragment?: never;
    __isTeleport?: never;
    __isSuspense?: never;
} & import('vue').ComponentOptionsBase<Readonly<import('./type').PopoverProps> & Readonly<{
    "onUpdate:popupVisible"?: ((value: boolean) => any) | undefined;
    "onPopup-visible-change"?: ((value: boolean) => any) | undefined;
}>, {
    hide(): void;
    show(): void;
}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {} & {
    "update:popupVisible": (value: boolean) => any;
    "popup-visible-change": (value: boolean) => any;
}, string, {
    trigger: import('..').TriggerType;
    popupVisible: boolean;
    defaultPopupVisible: boolean;
    position: import('..').TriggerPostion;
    contentClass: import('../_shared/type').ClassName;
    contentStyle: import('vue').CSSProperties;
    arrowClass: import('../_shared/type').ClassName;
    arrowStyle: import('vue').CSSProperties;
    popupContainer: import('..').PopupContainer;
    content: string;
    title: string;
    triggerProps: import('..').TriggerProps;
}, {}, string, {}, import('vue').GlobalComponents, import('vue').GlobalDirectives, string, import('vue').ComponentProvideOptions> & import('vue').VNodeProps & import('vue').AllowedComponentProps & import('vue').ComponentCustomProps & (new () => {
    $slots: Readonly<import('./type').PopoverSlots> & import('./type').PopoverSlots;
}) & {
    install: (app: App) => void;
};
declare module 'vue' {
    interface GlobalComponents {
        YcPopover: typeof Popover;
    }
}
export default Popover;
