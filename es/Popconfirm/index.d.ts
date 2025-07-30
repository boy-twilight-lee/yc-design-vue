import { App } from 'vue';
import { default as _Popconfirm } from './index.vue';
export type PopconfirmInstance = InstanceType<typeof _Popconfirm>;
export * from './type';
declare const Popconfirm: {
    new (...args: any[]): import('vue').CreateComponentPublicInstanceWithMixins<Readonly<import('./type').PopconfirmProps> & Readonly<{
        "onUpdate:popupVisible"?: ((value: boolean) => any) | undefined;
        "onPopup-visible-change"?: ((value: boolean) => any) | undefined;
        onCancel?: (() => any) | undefined;
        onOk?: (() => any) | undefined;
    }>, {
        hide(): void;
        show(): void;
    }, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {} & {
        "update:popupVisible": (value: boolean) => any;
        "popup-visible-change": (value: boolean) => any;
        cancel: () => any;
        ok: () => any;
    }, import('vue').PublicProps, {
        popupVisible: boolean;
        defaultPopupVisible: boolean;
        position: import('..').TriggerPostion;
        contentClass: import('../_shared/type').ClassName;
        contentStyle: import('vue').CSSProperties;
        arrowClass: import('../_shared/type').ClassName;
        arrowStyle: import('vue').CSSProperties;
        popupContainer: import('..').PopupContainer;
        content: string;
        type: import('./type').PopconfirmType;
        triggerProps: import('..').TriggerProps;
        okText: string;
        cancelText: string;
        okLoading: boolean;
        okButtonProps: import('..').ButtonProps;
        cancelButtonProps: import('..').ButtonProps;
        onBeforeCancel: import('..').OnBeforeCancel;
        onBeforeOk: import('..').OnBeforeOk;
    }, false, {}, {}, import('vue').GlobalComponents, import('vue').GlobalDirectives, string, {
        triggerRef: ({
            $: import('vue').ComponentInternalInstance;
            $data: {};
            $props: {
                readonly popupVisible?: boolean | undefined;
                readonly defaultPopupVisible?: boolean | undefined;
                readonly trigger?: import('..').TriggerType | undefined;
                readonly position?: import('..').TriggerPostion | undefined;
                readonly disabled?: boolean | undefined;
                readonly popupOffset?: number | undefined;
                readonly popupTranslate?: number[] | undefined;
                readonly showArrow?: boolean | undefined;
                readonly popuphoverStay?: boolean | undefined;
                readonly blurToClose?: boolean | undefined;
                readonly clickToClose?: boolean | undefined;
                readonly clickOutsideToClose?: boolean | undefined;
                readonly unmountOnClose?: boolean | undefined;
                readonly contentClass?: import('../_shared/type').ClassName | undefined;
                readonly contentStyle?: import('vue').CSSProperties | undefined;
                readonly arrowClass?: import('../_shared/type').ClassName | undefined;
                readonly arrowStyle?: import('vue').CSSProperties | undefined;
                readonly animationName?: string | undefined;
                readonly duration?: number | undefined;
                readonly mouseEnterDelay?: number | undefined;
                readonly mouseLeaveDelay?: number | undefined;
                readonly focusDelay?: number | undefined;
                readonly autoFitPopupWidth?: boolean | undefined;
                readonly autoFitPopupMinWidth?: boolean | undefined;
                readonly popupContainer?: import('..').PopupContainer | undefined;
                readonly renderToBody?: boolean | undefined;
                readonly autoFitPosition?: boolean | undefined;
                readonly updateAtScroll?: boolean | undefined;
                readonly preventFocus?: boolean | undefined;
                readonly alignPoint?: boolean | undefined;
                readonly scrollToClose?: boolean | undefined;
                readonly scrollToCloseDistance?: number | undefined;
                readonly needTransformOrigin?: boolean | undefined;
                readonly autoSetPosition?: boolean | undefined;
                readonly onTriggerMouseenter?: (() => void) | undefined;
                readonly onTriggerMouseleave?: (() => void) | undefined;
                readonly onTriggerMouseclick?: (() => void) | undefined;
                readonly onTriggerFocus?: (() => void) | undefined;
                readonly onTriggerBlur?: (() => void) | undefined;
                readonly onClickOutSide?: (() => void) | undefined;
                readonly "onUpdate:popupVisible"?: ((value: boolean) => any) | undefined;
                readonly "onPopup-visible-change"?: ((value: boolean) => any) | undefined;
                readonly onShow?: (() => any) | undefined;
                readonly onHide?: (() => any) | undefined;
            } & import('vue').VNodeProps & import('vue').AllowedComponentProps & import('vue').ComponentCustomProps;
            $attrs: {
                [x: string]: unknown;
            };
            $refs: any;
            $slots: Readonly<{
                [name: string]: import('vue').Slot<any> | undefined;
            }>;
            $root: import('vue').ComponentPublicInstance | null;
            $parent: import('vue').ComponentPublicInstance | null;
            $host: Element | null;
            $emit: ((event: "update:popupVisible", value: boolean) => void) & ((event: "popup-visible-change", value: boolean) => void) & ((event: "show") => void) & ((event: "hide") => void);
            $el: any;
            $options: import('vue').ComponentOptionsBase<Readonly<import('..').TriggerProps> & Readonly<{
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
                trigger: import('..').TriggerType;
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
                position: import('..').TriggerPostion;
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
            }, {}, string, {}, import('vue').GlobalComponents, import('vue').GlobalDirectives, string, import('vue').ComponentProvideOptions> & {
                beforeCreate?: (() => void) | (() => void)[];
                created?: (() => void) | (() => void)[];
                beforeMount?: (() => void) | (() => void)[];
                mounted?: (() => void) | (() => void)[];
                beforeUpdate?: (() => void) | (() => void)[];
                updated?: (() => void) | (() => void)[];
                activated?: (() => void) | (() => void)[];
                deactivated?: (() => void) | (() => void)[];
                beforeDestroy?: (() => void) | (() => void)[];
                beforeUnmount?: (() => void) | (() => void)[];
                destroyed?: (() => void) | (() => void)[];
                unmounted?: (() => void) | (() => void)[];
                renderTracked?: ((e: import('vue').DebuggerEvent) => void) | ((e: import('vue').DebuggerEvent) => void)[];
                renderTriggered?: ((e: import('vue').DebuggerEvent) => void) | ((e: import('vue').DebuggerEvent) => void)[];
                errorCaptured?: ((err: unknown, instance: import('vue').ComponentPublicInstance | null, info: string) => boolean | void) | ((err: unknown, instance: import('vue').ComponentPublicInstance | null, info: string) => boolean | void)[];
            };
            $forceUpdate: () => void;
            $nextTick: typeof import('vue').nextTick;
            $watch<T extends string | ((...args: any) => any)>(source: T, cb: T extends (...args: any) => infer R ? (...args: [R, R, import('@vue/reactivity').OnCleanup]) => any : (...args: [any, any, import('@vue/reactivity').OnCleanup]) => any, options?: import('vue').WatchOptions): import('vue').WatchStopHandle;
        } & Readonly<{
            trigger: import('..').TriggerType;
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
            position: import('..').TriggerPostion;
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
        }> & Omit<Readonly<import('..').TriggerProps> & Readonly<{
            "onUpdate:popupVisible"?: ((value: boolean) => any) | undefined;
            "onPopup-visible-change"?: ((value: boolean) => any) | undefined;
            onShow?: (() => any) | undefined;
            onHide?: (() => any) | undefined;
        }>, "show" | "hide" | ("trigger" | "mouseEnterDelay" | "popupVisible" | "defaultPopupVisible" | "clickToClose" | "blurToClose" | "clickOutsideToClose" | "mouseLeaveDelay" | "focusDelay" | "disabled" | "scrollToCloseDistance" | "autoSetPosition" | "alignPoint" | "position" | "popupOffset" | "popupTranslate" | "showArrow" | "unmountOnClose" | "contentClass" | "contentStyle" | "arrowClass" | "arrowStyle" | "animationName" | "duration" | "autoFitPopupWidth" | "autoFitPopupMinWidth" | "popupContainer" | "renderToBody" | "autoFitPosition" | "updateAtScroll" | "preventFocus" | "scrollToClose" | "needTransformOrigin") | "updatePosition"> & import('vue').ShallowUnwrapRef<{
            hide(): void;
            show(): void;
            updatePosition(x: number, y: number): void;
        }> & {} & import('vue').ComponentCustomProperties & {} & {
            $slots: any;
        }) | null;
    }, any, import('vue').ComponentProvideOptions, {
        P: {};
        B: {};
        D: {};
        C: {};
        M: {};
        Defaults: {};
    }, Readonly<import('./type').PopconfirmProps> & Readonly<{
        "onUpdate:popupVisible"?: ((value: boolean) => any) | undefined;
        "onPopup-visible-change"?: ((value: boolean) => any) | undefined;
        onCancel?: (() => any) | undefined;
        onOk?: (() => any) | undefined;
    }>, {
        hide(): void;
        show(): void;
    }, {}, {}, {}, {
        popupVisible: boolean;
        defaultPopupVisible: boolean;
        position: import('..').TriggerPostion;
        contentClass: import('../_shared/type').ClassName;
        contentStyle: import('vue').CSSProperties;
        arrowClass: import('../_shared/type').ClassName;
        arrowStyle: import('vue').CSSProperties;
        popupContainer: import('..').PopupContainer;
        content: string;
        type: import('./type').PopconfirmType;
        triggerProps: import('..').TriggerProps;
        okText: string;
        cancelText: string;
        okLoading: boolean;
        okButtonProps: import('..').ButtonProps;
        cancelButtonProps: import('..').ButtonProps;
        onBeforeCancel: import('..').OnBeforeCancel;
        onBeforeOk: import('..').OnBeforeOk;
    }>;
    __isFragment?: never;
    __isTeleport?: never;
    __isSuspense?: never;
} & import('vue').ComponentOptionsBase<Readonly<import('./type').PopconfirmProps> & Readonly<{
    "onUpdate:popupVisible"?: ((value: boolean) => any) | undefined;
    "onPopup-visible-change"?: ((value: boolean) => any) | undefined;
    onCancel?: (() => any) | undefined;
    onOk?: (() => any) | undefined;
}>, {
    hide(): void;
    show(): void;
}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {} & {
    "update:popupVisible": (value: boolean) => any;
    "popup-visible-change": (value: boolean) => any;
    cancel: () => any;
    ok: () => any;
}, string, {
    popupVisible: boolean;
    defaultPopupVisible: boolean;
    position: import('..').TriggerPostion;
    contentClass: import('../_shared/type').ClassName;
    contentStyle: import('vue').CSSProperties;
    arrowClass: import('../_shared/type').ClassName;
    arrowStyle: import('vue').CSSProperties;
    popupContainer: import('..').PopupContainer;
    content: string;
    type: import('./type').PopconfirmType;
    triggerProps: import('..').TriggerProps;
    okText: string;
    cancelText: string;
    okLoading: boolean;
    okButtonProps: import('..').ButtonProps;
    cancelButtonProps: import('..').ButtonProps;
    onBeforeCancel: import('..').OnBeforeCancel;
    onBeforeOk: import('..').OnBeforeOk;
}, {}, string, {}, import('vue').GlobalComponents, import('vue').GlobalDirectives, string, import('vue').ComponentProvideOptions> & import('vue').VNodeProps & import('vue').AllowedComponentProps & import('vue').ComponentCustomProps & (new () => {
    $slots: Readonly<import('./type').PopconfirmSlots> & import('./type').PopconfirmSlots;
}) & {
    install: (app: App) => void;
};
declare module 'vue' {
    interface GlobalComponents {
        YcPopconfirm: typeof Popconfirm;
    }
}
export default Popconfirm;
