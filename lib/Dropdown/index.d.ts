import { App } from 'vue';
import { default as _Dropdown } from './Dropdown.vue';
import { default as _Doption } from './Doption.vue';
import { default as _Dgroup } from './Dgroup.vue';
import { default as _DropdownButton } from './DropdownButton.vue';
import { default as _Dsubmenu } from './Dsubmenu.vue';
export type DropdownInstance = InstanceType<typeof _Dropdown>;
export type DoptionInstance = InstanceType<typeof _Doption>;
export type DgroupInstance = InstanceType<typeof _Dgroup>;
export type DropdownButtonInstance = InstanceType<typeof _Dropdown>;
export type DsubmenuInstance = InstanceType<typeof _Dsubmenu>;
export * from './type';
declare const Dropdown: {
    new (...args: any[]): import('vue').CreateComponentPublicInstanceWithMixins<Readonly<import('./type').DropdownProps> & Readonly<{
        "onUpdate:popupVisible"?: ((value: boolean) => any) | undefined;
        "onPopup-visible-change"?: ((value: boolean) => any) | undefined;
        onSelect?: ((value: import('./type').DoptionValue, ev: MouseEvent) => any) | undefined;
    }>, {
        show(): void;
        hide(): void;
    }, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {} & {
        "update:popupVisible": (value: boolean) => any;
        "popup-visible-change": (value: boolean) => any;
        select: (value: import('./type').DoptionValue, ev: MouseEvent) => any;
    }, import('vue').PublicProps, {
        trigger: import('..').TriggerType;
        popupVisible: boolean;
        defaultPopupVisible: boolean;
        alignPoint: boolean;
        position: import('./type').DropdownPosition;
        popupContainer: import('..').PopupContainer;
        triggerProps: import('..').TriggerProps;
        hideOnSelect: boolean;
        theme: import('..').Theme;
        popupMaxHeight: number | boolean;
    }, false, {}, {}, import('vue').GlobalComponents, import('vue').GlobalDirectives, string, {}, any, import('vue').ComponentProvideOptions, {
        P: {};
        B: {};
        D: {};
        C: {};
        M: {};
        Defaults: {};
    }, Readonly<import('./type').DropdownProps> & Readonly<{
        "onUpdate:popupVisible"?: ((value: boolean) => any) | undefined;
        "onPopup-visible-change"?: ((value: boolean) => any) | undefined;
        onSelect?: ((value: import('./type').DoptionValue, ev: MouseEvent) => any) | undefined;
    }>, {
        show(): void;
        hide(): void;
    }, {}, {}, {}, {
        trigger: import('..').TriggerType;
        popupVisible: boolean;
        defaultPopupVisible: boolean;
        alignPoint: boolean;
        position: import('./type').DropdownPosition;
        popupContainer: import('..').PopupContainer;
        triggerProps: import('..').TriggerProps;
        hideOnSelect: boolean;
        theme: import('..').Theme;
        popupMaxHeight: number | boolean;
    }>;
    __isFragment?: never;
    __isTeleport?: never;
    __isSuspense?: never;
} & import('vue').ComponentOptionsBase<Readonly<import('./type').DropdownProps> & Readonly<{
    "onUpdate:popupVisible"?: ((value: boolean) => any) | undefined;
    "onPopup-visible-change"?: ((value: boolean) => any) | undefined;
    onSelect?: ((value: import('./type').DoptionValue, ev: MouseEvent) => any) | undefined;
}>, {
    show(): void;
    hide(): void;
}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {} & {
    "update:popupVisible": (value: boolean) => any;
    "popup-visible-change": (value: boolean) => any;
    select: (value: import('./type').DoptionValue, ev: MouseEvent) => any;
}, string, {
    trigger: import('..').TriggerType;
    popupVisible: boolean;
    defaultPopupVisible: boolean;
    alignPoint: boolean;
    position: import('./type').DropdownPosition;
    popupContainer: import('..').PopupContainer;
    triggerProps: import('..').TriggerProps;
    hideOnSelect: boolean;
    theme: import('..').Theme;
    popupMaxHeight: number | boolean;
}, {}, string, {}, import('vue').GlobalComponents, import('vue').GlobalDirectives, string, import('vue').ComponentProvideOptions> & import('vue').VNodeProps & import('vue').AllowedComponentProps & import('vue').ComponentCustomProps & (new () => {
    $slots: Readonly<import('./type').DropdownSlots> & import('./type').DropdownSlots;
}) & {
    option: {
        new (...args: any[]): import('vue').CreateComponentPublicInstanceWithMixins<Readonly<import('./type').DoptionProps> & Readonly<{
            onClick?: ((ev: MouseEvent) => any) | undefined;
        }>, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {} & {
            click: (ev: MouseEvent) => any;
        }, import('vue').PublicProps, {
            disabled: boolean;
            isSubmenu: boolean;
            isActive: boolean;
        }, false, {}, {}, import('vue').GlobalComponents, import('vue').GlobalDirectives, string, {}, HTMLDivElement, import('vue').ComponentProvideOptions, {
            P: {};
            B: {};
            D: {};
            C: {};
            M: {};
            Defaults: {};
        }, Readonly<import('./type').DoptionProps> & Readonly<{
            onClick?: ((ev: MouseEvent) => any) | undefined;
        }>, {}, {}, {}, {}, {
            disabled: boolean;
            isSubmenu: boolean;
            isActive: boolean;
        }>;
        __isFragment?: never;
        __isTeleport?: never;
        __isSuspense?: never;
    } & import('vue').ComponentOptionsBase<Readonly<import('./type').DoptionProps> & Readonly<{
        onClick?: ((ev: MouseEvent) => any) | undefined;
    }>, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {} & {
        click: (ev: MouseEvent) => any;
    }, string, {
        disabled: boolean;
        isSubmenu: boolean;
        isActive: boolean;
    }, {}, string, {}, import('vue').GlobalComponents, import('vue').GlobalDirectives, string, import('vue').ComponentProvideOptions> & import('vue').VNodeProps & import('vue').AllowedComponentProps & import('vue').ComponentCustomProps & (new () => {
        $slots: Readonly<import('./type').DoptionSlots> & import('./type').DoptionSlots;
    });
    group: {
        new (...args: any[]): import('vue').CreateComponentPublicInstanceWithMixins<Readonly<import('./type').DgroupProps> & Readonly<{}>, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, import('vue').PublicProps, {}, false, {}, {}, import('vue').GlobalComponents, import('vue').GlobalDirectives, string, {}, any, import('vue').ComponentProvideOptions, {
            P: {};
            B: {};
            D: {};
            C: {};
            M: {};
            Defaults: {};
        }, Readonly<import('./type').DgroupProps> & Readonly<{}>, {}, {}, {}, {}, {}>;
        __isFragment?: never;
        __isTeleport?: never;
        __isSuspense?: never;
    } & import('vue').ComponentOptionsBase<Readonly<import('./type').DgroupProps> & Readonly<{}>, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, string, {}, {}, string, {}, import('vue').GlobalComponents, import('vue').GlobalDirectives, string, import('vue').ComponentProvideOptions> & import('vue').VNodeProps & import('vue').AllowedComponentProps & import('vue').ComponentCustomProps & (new () => {
        $slots: Readonly<import('./type').DgroupSlots> & import('./type').DgroupSlots;
    });
    button: {
        new (...args: any[]): import('vue').CreateComponentPublicInstanceWithMixins<Readonly<import('./type').DropdownButtonProps> & Readonly<{
            onClick?: ((ev: MouseEvent) => any) | undefined;
            "onPopup-visible-change"?: ((value: boolean) => any) | undefined;
            onSelect?: ((value: import('./type').DoptionValue) => any) | undefined;
        }>, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {} & {
            click: (ev: MouseEvent) => any;
            "popup-visible-change": (value: boolean) => any;
            select: (value: import('./type').DoptionValue) => any;
        }, import('vue').PublicProps, {
            size: import('..').Size;
            trigger: import('..').TriggerType;
            popupVisible: boolean;
            defaultPopupVisible: boolean;
            disabled: boolean;
            position: import('./type').DropdownPosition;
            popupContainer: import('..').PopupContainer;
            type: import('..').ButtonType;
            hideOnSelect: boolean;
            buttonProps: import('..').ButtonProps;
        }, false, {}, {}, import('vue').GlobalComponents, import('vue').GlobalDirectives, string, {}, HTMLDivElement, import('vue').ComponentProvideOptions, {
            P: {};
            B: {};
            D: {};
            C: {};
            M: {};
            Defaults: {};
        }, Readonly<import('./type').DropdownButtonProps> & Readonly<{
            onClick?: ((ev: MouseEvent) => any) | undefined;
            "onPopup-visible-change"?: ((value: boolean) => any) | undefined;
            onSelect?: ((value: import('./type').DoptionValue) => any) | undefined;
        }>, {}, {}, {}, {}, {
            size: import('..').Size;
            trigger: import('..').TriggerType;
            popupVisible: boolean;
            defaultPopupVisible: boolean;
            disabled: boolean;
            position: import('./type').DropdownPosition;
            popupContainer: import('..').PopupContainer;
            type: import('..').ButtonType;
            hideOnSelect: boolean;
            buttonProps: import('..').ButtonProps;
        }>;
        __isFragment?: never;
        __isTeleport?: never;
        __isSuspense?: never;
    } & import('vue').ComponentOptionsBase<Readonly<import('./type').DropdownButtonProps> & Readonly<{
        onClick?: ((ev: MouseEvent) => any) | undefined;
        "onPopup-visible-change"?: ((value: boolean) => any) | undefined;
        onSelect?: ((value: import('./type').DoptionValue) => any) | undefined;
    }>, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {} & {
        click: (ev: MouseEvent) => any;
        "popup-visible-change": (value: boolean) => any;
        select: (value: import('./type').DoptionValue) => any;
    }, string, {
        size: import('..').Size;
        trigger: import('..').TriggerType;
        popupVisible: boolean;
        defaultPopupVisible: boolean;
        disabled: boolean;
        position: import('./type').DropdownPosition;
        popupContainer: import('..').PopupContainer;
        type: import('..').ButtonType;
        hideOnSelect: boolean;
        buttonProps: import('..').ButtonProps;
    }, {}, string, {}, import('vue').GlobalComponents, import('vue').GlobalDirectives, string, import('vue').ComponentProvideOptions> & import('vue').VNodeProps & import('vue').AllowedComponentProps & import('vue').ComponentCustomProps & (new () => {
        $slots: Readonly<import('./type').DropdownButtonSlots> & import('./type').DropdownButtonSlots;
    });
    submenu: {
        new (...args: any[]): import('vue').CreateComponentPublicInstanceWithMixins<Readonly<import('./type').DsubmenuProps> & Readonly<{
            "onUpdate:popupVisible"?: ((value: boolean) => any) | undefined;
            "onPopup-visible-change"?: ((value: boolean) => any) | undefined;
        }>, {
            show(): void;
            hide(): void;
        }, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {} & {
            "update:popupVisible": (value: boolean) => any;
            "popup-visible-change": (value: boolean) => any;
        }, import('vue').PublicProps, {
            trigger: import('./type').DsubmenuTrigger;
            popupVisible: boolean;
            defaultPopupVisible: boolean;
            disabled: boolean;
            position: import('./type').DsubmenuPosition;
            triggerProps: import('..').TriggerProps;
            popupMaxHeight: number;
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
            optionRef: ({
                $: import('vue').ComponentInternalInstance;
                $data: {};
                $props: {
                    readonly value?: import('./type').DoptionValue | undefined;
                    readonly disabled?: boolean | undefined;
                    readonly isSubmenu?: boolean | undefined;
                    readonly isActive?: boolean | undefined;
                    readonly onClick?: ((ev: MouseEvent) => any) | undefined;
                } & import('vue').VNodeProps & import('vue').AllowedComponentProps & import('vue').ComponentCustomProps;
                $attrs: {
                    [x: string]: unknown;
                };
                $refs: {
                    [x: string]: unknown;
                };
                $slots: Readonly<{
                    [name: string]: import('vue').Slot<any> | undefined;
                }>;
                $root: import('vue').ComponentPublicInstance | null;
                $parent: import('vue').ComponentPublicInstance | null;
                $host: Element | null;
                $emit: (event: "click", ev: MouseEvent) => void;
                $el: HTMLDivElement;
                $options: import('vue').ComponentOptionsBase<Readonly<import('./type').DoptionProps> & Readonly<{
                    onClick?: ((ev: MouseEvent) => any) | undefined;
                }>, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {} & {
                    click: (ev: MouseEvent) => any;
                }, string, {
                    disabled: boolean;
                    isSubmenu: boolean;
                    isActive: boolean;
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
                disabled: boolean;
                isSubmenu: boolean;
                isActive: boolean;
            }> & Omit<Readonly<import('./type').DoptionProps> & Readonly<{
                onClick?: ((ev: MouseEvent) => any) | undefined;
            }>, "disabled" | "isSubmenu" | "isActive"> & import('vue').ShallowUnwrapRef<{}> & {} & import('vue').ComponentCustomProperties & {} & {
                $slots: Readonly<import('./type').DoptionSlots> & import('./type').DoptionSlots;
            }) | null;
        }, any, import('vue').ComponentProvideOptions, {
            P: {};
            B: {};
            D: {};
            C: {};
            M: {};
            Defaults: {};
        }, Readonly<import('./type').DsubmenuProps> & Readonly<{
            "onUpdate:popupVisible"?: ((value: boolean) => any) | undefined;
            "onPopup-visible-change"?: ((value: boolean) => any) | undefined;
        }>, {
            show(): void;
            hide(): void;
        }, {}, {}, {}, {
            trigger: import('./type').DsubmenuTrigger;
            popupVisible: boolean;
            defaultPopupVisible: boolean;
            disabled: boolean;
            position: import('./type').DsubmenuPosition;
            triggerProps: import('..').TriggerProps;
            popupMaxHeight: number;
        }>;
        __isFragment?: never;
        __isTeleport?: never;
        __isSuspense?: never;
    } & import('vue').ComponentOptionsBase<Readonly<import('./type').DsubmenuProps> & Readonly<{
        "onUpdate:popupVisible"?: ((value: boolean) => any) | undefined;
        "onPopup-visible-change"?: ((value: boolean) => any) | undefined;
    }>, {
        show(): void;
        hide(): void;
    }, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {} & {
        "update:popupVisible": (value: boolean) => any;
        "popup-visible-change": (value: boolean) => any;
    }, string, {
        trigger: import('./type').DsubmenuTrigger;
        popupVisible: boolean;
        defaultPopupVisible: boolean;
        disabled: boolean;
        position: import('./type').DsubmenuPosition;
        triggerProps: import('..').TriggerProps;
        popupMaxHeight: number;
    }, {}, string, {}, import('vue').GlobalComponents, import('vue').GlobalDirectives, string, import('vue').ComponentProvideOptions> & import('vue').VNodeProps & import('vue').AllowedComponentProps & import('vue').ComponentCustomProps & (new () => {
        $slots: Readonly<import('./type').DsubmenuSlots> & import('./type').DsubmenuSlots;
    });
    install: (app: App) => void;
};
export { _Doption as Doption, _Dgroup as Dgroup, _DropdownButton as DropdownButton, _Dsubmenu as Dsubmenu, };
declare module 'vue' {
    interface GlobalComponents {
        YcDropdown: typeof Dropdown;
        YcDropdownButton: typeof _DropdownButton;
        YcDoption: typeof _Doption;
        YcDgroup: typeof _Dgroup;
        YcDsubmenu: typeof _Dsubmenu;
    }
}
export default Dropdown;
