import { SelectProps, SelectSlots } from './type';
import { InputTagValue } from '../InputTag';
import { TriggerInstance } from '../Trigger';
declare function __VLS_template(): {
    attrs: Partial<{}>;
    slots: Readonly<SelectSlots> & SelectSlots;
    refs: {
        popupRef: ({
            $: import('vue').ComponentInternalInstance;
            $data: {};
            $props: {
                readonly popupVisible?: boolean | undefined;
                readonly defaultPopupVisible?: boolean | undefined;
                readonly trigger?: import('../Trigger').TriggerType | undefined;
                readonly position?: import('../Trigger').TriggerPostion | undefined;
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
            $options: import('vue').ComponentOptionsBase<Readonly<import('../Trigger').TriggerProps> & Readonly<{
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
                trigger: import('../Trigger').TriggerType;
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
                position: import('../Trigger').TriggerPostion;
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
            trigger: import('../Trigger').TriggerType;
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
            position: import('../Trigger').TriggerPostion;
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
        }> & Omit<Readonly<import('../Trigger').TriggerProps> & Readonly<{
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
                readonly modelValue?: InputTagValue | undefined;
                readonly defaultValue?: InputTagValue | undefined;
                readonly inputValue?: string | undefined;
                readonly defaultInputValue?: string | undefined;
                readonly placeholder?: string | undefined;
                readonly disabled?: boolean | undefined;
                readonly error?: boolean | undefined;
                readonly readonly?: boolean | undefined;
                readonly allowClear?: boolean | undefined;
                readonly size?: import('..').Size | undefined;
                readonly maxTagCount?: number | undefined;
                readonly retainInputValue?: import('../InputTag').InputRetainValue | undefined;
                readonly formatTag?: import('../InputTag').FormatTag | undefined;
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
            $options: import('vue').ComponentOptionsBase<Readonly<import('../InputTag').InputTagProps> & Readonly<{
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
                modelValue: InputTagValue;
                defaultValue: InputTagValue;
                placeholder: string;
                allowClear: boolean;
                readonly: boolean;
                inputValue: string;
                defaultInputValue: string;
                fieldNames: Record<string, string>;
                allowCreate: boolean;
                maxTagCount: number;
                tagNowrap: boolean;
                retainInputValue: import('../InputTag').InputRetainValue;
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
            modelValue: InputTagValue;
            defaultValue: InputTagValue;
            placeholder: string;
            allowClear: boolean;
            readonly: boolean;
            inputValue: string;
            defaultInputValue: string;
            fieldNames: Record<string, string>;
            allowCreate: boolean;
            maxTagCount: number;
            tagNowrap: boolean;
            retainInputValue: import('../InputTag').InputRetainValue;
            uniqueValue: boolean;
        }> & Omit<Readonly<import('../InputTag').InputTagProps> & Readonly<{
            [x: `on${Capitalize<any>}`]: ((...args: any) => any) | undefined;
        }>, "focus" | "blur" | ("size" | "disabled" | "error" | "modelValue" | "defaultValue" | "placeholder" | "allowClear" | "readonly" | "inputValue" | "defaultInputValue" | "fieldNames" | "allowCreate" | "maxTagCount" | "tagNowrap" | "retainInputValue" | "uniqueValue")> & import('vue').ShallowUnwrapRef<{
            focus(): void;
            blur(): void;
        }> & {} & import('vue').ComponentCustomProperties & {} & {
            $slots: Readonly<import('../InputTag').InputTagSlots> & import('../InputTag').InputTagSlots;
        }) | null;
    };
    rootEl: any;
};
type __VLS_TemplateResult = ReturnType<typeof __VLS_template>;
declare const __VLS_component: import('vue').DefineComponent<SelectProps, {
    focus(): void;
    blur(): void;
    getPopupRef(): TriggerInstance;
}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
    [x: string]: any;
} & {
    [x: string]: any;
}, string, import('vue').PublicProps, Readonly<SelectProps> & Readonly<{
    [x: `on${Capitalize<any>}`]: ((...args: any) => any) | undefined;
}>, {
    size: import('..').Size;
    popupVisible: boolean;
    defaultPopupVisible: boolean;
    disabled: boolean;
    popupContainer: import('..').PopupContainer;
    loading: boolean;
    error: boolean;
    scrollbar: boolean;
    multiple: boolean;
    triggerProps: import('../Trigger').TriggerProps;
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
}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {
    popupRef: ({
        $: import('vue').ComponentInternalInstance;
        $data: {};
        $props: {
            readonly popupVisible?: boolean | undefined;
            readonly defaultPopupVisible?: boolean | undefined;
            readonly trigger?: import('../Trigger').TriggerType | undefined;
            readonly position?: import('../Trigger').TriggerPostion | undefined;
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
        $options: import('vue').ComponentOptionsBase<Readonly<import('../Trigger').TriggerProps> & Readonly<{
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
            trigger: import('../Trigger').TriggerType;
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
            position: import('../Trigger').TriggerPostion;
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
        trigger: import('../Trigger').TriggerType;
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
        position: import('../Trigger').TriggerPostion;
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
    }> & Omit<Readonly<import('../Trigger').TriggerProps> & Readonly<{
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
            readonly modelValue?: InputTagValue | undefined;
            readonly defaultValue?: InputTagValue | undefined;
            readonly inputValue?: string | undefined;
            readonly defaultInputValue?: string | undefined;
            readonly placeholder?: string | undefined;
            readonly disabled?: boolean | undefined;
            readonly error?: boolean | undefined;
            readonly readonly?: boolean | undefined;
            readonly allowClear?: boolean | undefined;
            readonly size?: import('..').Size | undefined;
            readonly maxTagCount?: number | undefined;
            readonly retainInputValue?: import('../InputTag').InputRetainValue | undefined;
            readonly formatTag?: import('../InputTag').FormatTag | undefined;
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
        $options: import('vue').ComponentOptionsBase<Readonly<import('../InputTag').InputTagProps> & Readonly<{
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
            modelValue: InputTagValue;
            defaultValue: InputTagValue;
            placeholder: string;
            allowClear: boolean;
            readonly: boolean;
            inputValue: string;
            defaultInputValue: string;
            fieldNames: Record<string, string>;
            allowCreate: boolean;
            maxTagCount: number;
            tagNowrap: boolean;
            retainInputValue: import('../InputTag').InputRetainValue;
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
        modelValue: InputTagValue;
        defaultValue: InputTagValue;
        placeholder: string;
        allowClear: boolean;
        readonly: boolean;
        inputValue: string;
        defaultInputValue: string;
        fieldNames: Record<string, string>;
        allowCreate: boolean;
        maxTagCount: number;
        tagNowrap: boolean;
        retainInputValue: import('../InputTag').InputRetainValue;
        uniqueValue: boolean;
    }> & Omit<Readonly<import('../InputTag').InputTagProps> & Readonly<{
        [x: `on${Capitalize<any>}`]: ((...args: any) => any) | undefined;
    }>, "focus" | "blur" | ("size" | "disabled" | "error" | "modelValue" | "defaultValue" | "placeholder" | "allowClear" | "readonly" | "inputValue" | "defaultInputValue" | "fieldNames" | "allowCreate" | "maxTagCount" | "tagNowrap" | "retainInputValue" | "uniqueValue")> & import('vue').ShallowUnwrapRef<{
        focus(): void;
        blur(): void;
    }> & {} & import('vue').ComponentCustomProperties & {} & {
        $slots: Readonly<import('../InputTag').InputTagSlots> & import('../InputTag').InputTagSlots;
    }) | null;
}, any>;
declare const _default: __VLS_WithTemplateSlots<typeof __VLS_component, __VLS_TemplateResult["slots"]>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
