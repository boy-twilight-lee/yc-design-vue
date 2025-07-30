import { App } from 'vue';
import { default as _Select } from './Select.vue';
import { default as _Option } from './Option.vue';
import { default as _Optgroup } from './Optgroup.vue';
export type SelectInstance = InstanceType<typeof _Select>;
export type OptionInstance = InstanceType<typeof _Option>;
export type OptgroupInstance = InstanceType<typeof _Optgroup>;
export * from './type';
declare const Select: {
    new (...args: any[]): import('vue').CreateComponentPublicInstanceWithMixins<Readonly<import('./type').SelectProps> & Readonly<{
        [x: `on${Capitalize<any>}`]: ((...args: any) => any) | undefined;
    }>, {
        focus(): void;
        blur(): void;
        getPopupRef(): import('..').TriggerInstance;
    }, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
        [x: string]: any;
    } & {
        [x: string]: any;
    }, import('vue').PublicProps, {
        size: import('..').Size;
        popupVisible: boolean;
        defaultPopupVisible: boolean;
        disabled: boolean;
        popupContainer: import('..').PopupContainer;
        loading: boolean;
        error: boolean;
        scrollbar: boolean;
        multiple: boolean;
        triggerProps: import('..').TriggerProps;
        bordered: boolean;
        modelValue: import('./type').SelectValue;
        defaultValue: import('./type').SelectValue;
        placeholder: string;
        allowClear: boolean;
        showExtraOptions: boolean;
        options: import('./type').SelectOptions;
        limit: number;
        inputValue: string;
        defaultInputValue: string;
        fieldNames: Record<string, string>;
        allowSearch: boolean;
        valueKey: string;
        showEmpty: boolean;
        allowCreate: boolean;
        maxTagCount: number;
        defaultActivefirstOption: boolean;
        filterOption: import('./type').FilterOption;
        virtualListProps: import('./type').VirtualListProps;
        searchDelay: number;
        showHeaderOnEmpty: boolean;
        showFooterOnEmpty: boolean;
        tagNowrap: boolean;
    }, false, {}, {}, import('vue').GlobalComponents, import('vue').GlobalDirectives, string, {
        popupRef: ({
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
        inputRef: ({
            $: import('vue').ComponentInternalInstance;
            $data: {};
            $props: {
                readonly [x: `on${Capitalize<any>}`]: ((...args: any) => any) | undefined;
                readonly modelValue?: import('..').InputTagValue | undefined;
                readonly defaultValue?: import('..').InputTagValue | undefined;
                readonly inputValue?: string | undefined;
                readonly defaultInputValue?: string | undefined;
                readonly placeholder?: string | undefined;
                readonly disabled?: boolean | undefined;
                readonly error?: boolean | undefined;
                readonly readonly?: boolean | undefined;
                readonly allowClear?: boolean | undefined;
                readonly size?: import('..').Size | undefined;
                readonly maxTagCount?: number | undefined;
                readonly retainInputValue?: import('..').InputRetainValue | undefined;
                readonly formatTag?: import('..').FormatTag | undefined;
                readonly uniqueValue?: boolean | undefined;
                readonly tagNowrap?: boolean | undefined;
                readonly fieldNames?: Record<string, string> | undefined;
                readonly allowCreate?: boolean | undefined;
            } & import('vue').VNodeProps & import('vue').AllowedComponentProps & import('vue').ComponentCustomProps;
            $attrs: {
                [x: string]: unknown;
            };
            $refs: {
                [x: string]: unknown;
            } & {
                mirrorRef: HTMLDivElement;
                inputRef: HTMLInputElement;
            };
            $slots: Readonly<{
                [name: string]: import('vue').Slot<any> | undefined;
            }>;
            $root: import('vue').ComponentPublicInstance | null;
            $parent: import('vue').ComponentPublicInstance | null;
            $host: Element | null;
            $emit: (event: string, ...args: any[]) => void;
            $el: HTMLDivElement;
            $options: import('vue').ComponentOptionsBase<Readonly<import('..').InputTagProps> & Readonly<{
                [x: `on${Capitalize<any>}`]: ((...args: any) => any) | undefined;
            }>, {
                focus(): void;
                blur(): void;
            }, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
                [x: string]: any;
            } & {
                [x: string]: any;
            }, string, {
                size: import('..').Size;
                disabled: boolean;
                error: boolean;
                modelValue: import('..').InputTagValue;
                defaultValue: import('..').InputTagValue;
                placeholder: string;
                allowClear: boolean;
                readonly: boolean;
                inputValue: string;
                defaultInputValue: string;
                fieldNames: Record<string, string>;
                allowCreate: boolean;
                maxTagCount: number;
                tagNowrap: boolean;
                retainInputValue: import('..').InputRetainValue;
                uniqueValue: boolean;
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
            size: import('..').Size;
            disabled: boolean;
            error: boolean;
            modelValue: import('..').InputTagValue;
            defaultValue: import('..').InputTagValue;
            placeholder: string;
            allowClear: boolean;
            readonly: boolean;
            inputValue: string;
            defaultInputValue: string;
            fieldNames: Record<string, string>;
            allowCreate: boolean;
            maxTagCount: number;
            tagNowrap: boolean;
            retainInputValue: import('..').InputRetainValue;
            uniqueValue: boolean;
        }> & Omit<Readonly<import('..').InputTagProps> & Readonly<{
            [x: `on${Capitalize<any>}`]: ((...args: any) => any) | undefined;
        }>, "focus" | "blur" | ("size" | "disabled" | "error" | "modelValue" | "defaultValue" | "placeholder" | "allowClear" | "readonly" | "inputValue" | "defaultInputValue" | "fieldNames" | "allowCreate" | "maxTagCount" | "tagNowrap" | "retainInputValue" | "uniqueValue")> & import('vue').ShallowUnwrapRef<{
            focus(): void;
            blur(): void;
        }> & {} & import('vue').ComponentCustomProperties & {} & {
            $slots: Readonly<import('..').InputTagSlots> & import('..').InputTagSlots;
        }) | null;
    }, any, import('vue').ComponentProvideOptions, {
        P: {};
        B: {};
        D: {};
        C: {};
        M: {};
        Defaults: {};
    }, Readonly<import('./type').SelectProps> & Readonly<{
        [x: `on${Capitalize<any>}`]: ((...args: any) => any) | undefined;
    }>, {
        focus(): void;
        blur(): void;
        getPopupRef(): import('..').TriggerInstance;
    }, {}, {}, {}, {
        size: import('..').Size;
        popupVisible: boolean;
        defaultPopupVisible: boolean;
        disabled: boolean;
        popupContainer: import('..').PopupContainer;
        loading: boolean;
        error: boolean;
        scrollbar: boolean;
        multiple: boolean;
        triggerProps: import('..').TriggerProps;
        bordered: boolean;
        modelValue: import('./type').SelectValue;
        defaultValue: import('./type').SelectValue;
        placeholder: string;
        allowClear: boolean;
        showExtraOptions: boolean;
        options: import('./type').SelectOptions;
        limit: number;
        inputValue: string;
        defaultInputValue: string;
        fieldNames: Record<string, string>;
        allowSearch: boolean;
        valueKey: string;
        showEmpty: boolean;
        allowCreate: boolean;
        maxTagCount: number;
        defaultActivefirstOption: boolean;
        filterOption: import('./type').FilterOption;
        virtualListProps: import('./type').VirtualListProps;
        searchDelay: number;
        showHeaderOnEmpty: boolean;
        showFooterOnEmpty: boolean;
        tagNowrap: boolean;
    }>;
    __isFragment?: never;
    __isTeleport?: never;
    __isSuspense?: never;
} & import('vue').ComponentOptionsBase<Readonly<import('./type').SelectProps> & Readonly<{
    [x: `on${Capitalize<any>}`]: ((...args: any) => any) | undefined;
}>, {
    focus(): void;
    blur(): void;
    getPopupRef(): import('..').TriggerInstance;
}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
    [x: string]: any;
} & {
    [x: string]: any;
}, string, {
    size: import('..').Size;
    popupVisible: boolean;
    defaultPopupVisible: boolean;
    disabled: boolean;
    popupContainer: import('..').PopupContainer;
    loading: boolean;
    error: boolean;
    scrollbar: boolean;
    multiple: boolean;
    triggerProps: import('..').TriggerProps;
    bordered: boolean;
    modelValue: import('./type').SelectValue;
    defaultValue: import('./type').SelectValue;
    placeholder: string;
    allowClear: boolean;
    showExtraOptions: boolean;
    options: import('./type').SelectOptions;
    limit: number;
    inputValue: string;
    defaultInputValue: string;
    fieldNames: Record<string, string>;
    allowSearch: boolean;
    valueKey: string;
    showEmpty: boolean;
    allowCreate: boolean;
    maxTagCount: number;
    defaultActivefirstOption: boolean;
    filterOption: import('./type').FilterOption;
    virtualListProps: import('./type').VirtualListProps;
    searchDelay: number;
    showHeaderOnEmpty: boolean;
    showFooterOnEmpty: boolean;
    tagNowrap: boolean;
}, {}, string, {}, import('vue').GlobalComponents, import('vue').GlobalDirectives, string, import('vue').ComponentProvideOptions> & import('vue').VNodeProps & import('vue').AllowedComponentProps & import('vue').ComponentCustomProps & (new () => {
    $slots: Readonly<import('./type').SelectSlots> & import('./type').SelectSlots;
}) & {
    option: {
        new (...args: any[]): import('vue').CreateComponentPublicInstanceWithMixins<Readonly<import('./type').OptionProps> & Readonly<{}>, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, import('vue').PublicProps, {
            disabled: boolean;
            value: import('./type').SelectValue;
            label: string;
            isFallbackOption: boolean;
        }, false, {}, {}, import('vue').GlobalComponents, import('vue').GlobalDirectives, string, {
            contentRef: HTMLDivElement;
        }, HTMLDivElement, import('vue').ComponentProvideOptions, {
            P: {};
            B: {};
            D: {};
            C: {};
            M: {};
            Defaults: {};
        }, Readonly<import('./type').OptionProps> & Readonly<{}>, {}, {}, {}, {}, {
            disabled: boolean;
            value: import('./type').SelectValue;
            label: string;
            isFallbackOption: boolean;
        }>;
        __isFragment?: never;
        __isTeleport?: never;
        __isSuspense?: never;
    } & import('vue').ComponentOptionsBase<Readonly<import('./type').OptionProps> & Readonly<{}>, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, string, {
        disabled: boolean;
        value: import('./type').SelectValue;
        label: string;
        isFallbackOption: boolean;
    }, {}, string, {}, import('vue').GlobalComponents, import('vue').GlobalDirectives, string, import('vue').ComponentProvideOptions> & import('vue').VNodeProps & import('vue').AllowedComponentProps & import('vue').ComponentCustomProps & (new () => {
        $slots: Readonly<import('./type').OptionSlots> & import('./type').OptionSlots;
    });
    group: {
        new (...args: any[]): import('vue').CreateComponentPublicInstanceWithMixins<Readonly<import('./type').OptgroupProps> & Readonly<{}>, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, import('vue').PublicProps, {}, false, {}, {}, import('vue').GlobalComponents, import('vue').GlobalDirectives, string, {}, any, import('vue').ComponentProvideOptions, {
            P: {};
            B: {};
            D: {};
            C: {};
            M: {};
            Defaults: {};
        }, Readonly<import('./type').OptgroupProps> & Readonly<{}>, {}, {}, {}, {}, {}>;
        __isFragment?: never;
        __isTeleport?: never;
        __isSuspense?: never;
    } & import('vue').ComponentOptionsBase<Readonly<import('./type').OptgroupProps> & Readonly<{}>, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, string, {}, {}, string, {}, import('vue').GlobalComponents, import('vue').GlobalDirectives, string, import('vue').ComponentProvideOptions> & import('vue').VNodeProps & import('vue').AllowedComponentProps & import('vue').ComponentCustomProps & (new () => {
        $slots: Readonly<import('./type').OptgroupSlots> & import('./type').OptgroupSlots;
    });
    install: (app: App) => void;
};
export { _Option as Option, _Optgroup as Optgroup };
declare module 'vue' {
    interface GlobalComponents {
        YcSelect: typeof Select;
        YcOption: typeof _Option;
        YcOptgroup: typeof _Optgroup;
    }
}
export default Select;
