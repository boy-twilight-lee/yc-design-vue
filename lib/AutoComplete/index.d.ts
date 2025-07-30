import { App } from 'vue';
import { default as _AutoComplete } from './index.vue';
export type AutoCompleteInstance = InstanceType<typeof _AutoComplete>;
export * from './type';
declare const AutoComplete: {
    new (...args: any[]): import('vue').CreateComponentPublicInstanceWithMixins<Readonly<import('./type').AutoCompleteProps> & Readonly<{
        [x: `on${Capitalize<any>}`]: ((...args: any) => any) | undefined;
    }>, {
        focus(): void;
        blur(): void;
        getInputRef(): HTMLInputElement | HTMLTextAreaElement | undefined;
        getMirrorRef(): HTMLDivElement | undefined;
        updatePosition(x: number, y: number): void;
    }, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
        [x: string]: any;
    } & {
        [x: string]: any;
    }, import('vue').PublicProps, {
        disabled: boolean;
        popupContainer: import('..').PopupContainer;
        strict: boolean;
        type: "textarea" | "input";
        data: import('..').SelectOptions;
        triggerProps: import('..').TriggerProps;
        modelValue: string;
        defaultValue: string;
        allowClear: boolean;
        filterOption: (inputValue: string, option: import('..').SelectOptionData) => boolean;
        isSelectSetValue: boolean;
        isSearch: boolean;
    }, false, {}, {}, import('vue').GlobalComponents, import('vue').GlobalDirectives, string, {
        selectRef: ({
            $: import('vue').ComponentInternalInstance;
            $data: {};
            $props: {
                readonly [x: `on${Capitalize<any>}`]: ((...args: any) => any) | undefined;
                readonly multiple?: boolean | undefined;
                readonly modelValue?: import('..').SelectValue | undefined;
                readonly defaultValue?: import('..').SelectValue | undefined;
                readonly inputValue?: string | undefined;
                readonly defaultInputValue?: string | undefined;
                readonly size?: import('..').Size | undefined;
                readonly placeholder?: string | undefined;
                readonly loading?: boolean | undefined;
                readonly disabled?: boolean | undefined;
                readonly error?: boolean | undefined;
                readonly allowClear?: boolean | undefined;
                readonly allowSearch?: boolean | undefined;
                readonly allowCreate?: boolean | undefined;
                readonly maxTagCount?: number | undefined;
                readonly popupContainer?: import('..').PopupContainer | undefined;
                readonly bordered?: boolean | undefined;
                readonly defaultActivefirstOption?: boolean | undefined;
                readonly popupVisible?: boolean | undefined;
                readonly defaultPopupVisible?: boolean | undefined;
                readonly unmountonClose?: boolean | undefined;
                readonly filterOption?: import('..').FilterOption | undefined;
                readonly options?: import('..').SelectOptions | undefined;
                readonly virtualListProps?: import('..').VirtualListProps | undefined;
                readonly triggerProps?: import('..').TriggerProps | undefined;
                readonly formatLabel?: import('..').FormatLabel | undefined;
                readonly fallbackOption?: import('..').FallbackOption | undefined;
                readonly showExtraOptions?: boolean | undefined;
                readonly valueKey?: string | undefined;
                readonly searchDelay?: number | undefined;
                readonly limit?: number | undefined;
                readonly fieldNames?: Record<string, string> | undefined;
                readonly scrollbar?: boolean | undefined;
                readonly showHeaderOnEmpty?: boolean | undefined;
                readonly showFooterOnEmpty?: boolean | undefined;
                readonly tagNowrap?: boolean | undefined;
                readonly hotkeys?: boolean | undefined;
                readonly showEmpty?: boolean | undefined;
            } & import('vue').VNodeProps & import('vue').AllowedComponentProps & import('vue').ComponentCustomProps;
            $attrs: {
                [x: string]: unknown;
            };
            $refs: {
                [x: string]: unknown;
            } & {
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
            };
            $slots: Readonly<{
                [name: string]: import('vue').Slot<any> | undefined;
            }>;
            $root: import('vue').ComponentPublicInstance | null;
            $parent: import('vue').ComponentPublicInstance | null;
            $host: Element | null;
            $emit: (event: string, ...args: any[]) => void;
            $el: any;
            $options: import('vue').ComponentOptionsBase<Readonly<import('..').SelectProps> & Readonly<{
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
                modelValue: import('..').SelectValue;
                defaultValue: import('..').SelectValue;
                placeholder: string;
                allowClear: boolean;
                showExtraOptions: boolean;
                options: import('..').SelectOptions;
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
                filterOption: import('..').FilterOption;
                virtualListProps: import('..').VirtualListProps;
                searchDelay: number;
                showHeaderOnEmpty: boolean;
                showFooterOnEmpty: boolean;
                tagNowrap: boolean;
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
            modelValue: import('..').SelectValue;
            defaultValue: import('..').SelectValue;
            placeholder: string;
            allowClear: boolean;
            showExtraOptions: boolean;
            options: import('..').SelectOptions;
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
            filterOption: import('..').FilterOption;
            virtualListProps: import('..').VirtualListProps;
            searchDelay: number;
            showHeaderOnEmpty: boolean;
            showFooterOnEmpty: boolean;
            tagNowrap: boolean;
        }> & Omit<Readonly<import('..').SelectProps> & Readonly<{
            [x: `on${Capitalize<any>}`]: ((...args: any) => any) | undefined;
        }>, "focus" | "blur" | ("size" | "popupVisible" | "defaultPopupVisible" | "disabled" | "popupContainer" | "loading" | "error" | "scrollbar" | "multiple" | "triggerProps" | "bordered" | "modelValue" | "defaultValue" | "placeholder" | "allowClear" | "showExtraOptions" | "options" | "limit" | "inputValue" | "defaultInputValue" | "fieldNames" | "allowSearch" | "valueKey" | "showEmpty" | "allowCreate" | "maxTagCount" | "defaultActivefirstOption" | "filterOption" | "virtualListProps" | "searchDelay" | "showHeaderOnEmpty" | "showFooterOnEmpty" | "tagNowrap") | "getPopupRef"> & import('vue').ShallowUnwrapRef<{
            focus(): void;
            blur(): void;
            getPopupRef(): import('..').TriggerInstance;
        }> & {} & import('vue').ComponentCustomProperties & {} & {
            $slots: Readonly<import('..').SelectSlots> & import('..').SelectSlots;
        }) | null;
        inputRef: import('vue').CreateComponentPublicInstanceWithMixins<Readonly<import('..').TextareaProps> & Readonly<{
            onChange?: ((value: string, ev: Event) => any) | undefined;
            onFocus?: ((ev: FocusEvent) => any) | undefined;
            onClear?: ((ev: MouseEvent) => any) | undefined;
            onBlur?: ((ev: FocusEvent) => any) | undefined;
            onInput?: ((value: string, ev: Event) => any) | undefined;
            onKeydown?: ((ev: KeyboardEvent) => any) | undefined;
            "onUpdate:modelValue"?: ((value: string) => any) | undefined;
        }>, {
            focus(): void;
            blur(): void;
            getInputRef(): HTMLTextAreaElement;
            getMirrorRef(): HTMLDivElement;
        }, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {} & {
            change: (value: string, ev: Event) => any;
            focus: (ev: FocusEvent) => any;
            clear: (ev: MouseEvent) => any;
            blur: (ev: FocusEvent) => any;
            input: (value: string, ev: Event) => any;
            keydown: (ev: KeyboardEvent) => any;
            "update:modelValue": (value: string) => any;
        }, import('vue').PublicProps, {
            disabled: boolean;
            error: import('..').AutoSize;
            modelValue: string;
            defaultValue: string;
            placeholder: string;
            maxLength: import('..').MaxLength;
            showWordLimit: boolean;
            allowClear: boolean;
            readonly: boolean;
            autoSize: import('..').AutoSize;
            wordLength: import('..').WordLength;
            wordSlice: import('..').WordSlice;
            enterPrevent: boolean;
            showMirror: boolean;
        }, false, {}, {}, import('vue').GlobalComponents, import('vue').GlobalDirectives, string, {
            mirrorRef: HTMLDivElement;
            inputRef: HTMLTextAreaElement;
        }, HTMLDivElement, import('vue').ComponentProvideOptions, {
            P: {};
            B: {};
            D: {};
            C: {};
            M: {};
            Defaults: {};
        }, Readonly<import('..').TextareaProps> & Readonly<{
            onChange?: ((value: string, ev: Event) => any) | undefined;
            onFocus?: ((ev: FocusEvent) => any) | undefined;
            onClear?: ((ev: MouseEvent) => any) | undefined;
            onBlur?: ((ev: FocusEvent) => any) | undefined;
            onInput?: ((value: string, ev: Event) => any) | undefined;
            onKeydown?: ((ev: KeyboardEvent) => any) | undefined;
            "onUpdate:modelValue"?: ((value: string) => any) | undefined;
        }>, {
            focus(): void;
            blur(): void;
            getInputRef(): HTMLTextAreaElement;
            getMirrorRef(): HTMLDivElement;
        }, {}, {}, {}, {
            disabled: boolean;
            error: import('..').AutoSize;
            modelValue: string;
            defaultValue: string;
            placeholder: string;
            maxLength: import('..').MaxLength;
            showWordLimit: boolean;
            allowClear: boolean;
            readonly: boolean;
            autoSize: import('..').AutoSize;
            wordLength: import('..').WordLength;
            wordSlice: import('..').WordSlice;
            enterPrevent: boolean;
            showMirror: boolean;
        }> | null;
    }, any, import('vue').ComponentProvideOptions, {
        P: {};
        B: {};
        D: {};
        C: {};
        M: {};
        Defaults: {};
    }, Readonly<import('./type').AutoCompleteProps> & Readonly<{
        [x: `on${Capitalize<any>}`]: ((...args: any) => any) | undefined;
    }>, {
        focus(): void;
        blur(): void;
        getInputRef(): HTMLInputElement | HTMLTextAreaElement | undefined;
        getMirrorRef(): HTMLDivElement | undefined;
        updatePosition(x: number, y: number): void;
    }, {}, {}, {}, {
        disabled: boolean;
        popupContainer: import('..').PopupContainer;
        strict: boolean;
        type: "textarea" | "input";
        data: import('..').SelectOptions;
        triggerProps: import('..').TriggerProps;
        modelValue: string;
        defaultValue: string;
        allowClear: boolean;
        filterOption: (inputValue: string, option: import('..').SelectOptionData) => boolean;
        isSelectSetValue: boolean;
        isSearch: boolean;
    }>;
    __isFragment?: never;
    __isTeleport?: never;
    __isSuspense?: never;
} & import('vue').ComponentOptionsBase<Readonly<import('./type').AutoCompleteProps> & Readonly<{
    [x: `on${Capitalize<any>}`]: ((...args: any) => any) | undefined;
}>, {
    focus(): void;
    blur(): void;
    getInputRef(): HTMLInputElement | HTMLTextAreaElement | undefined;
    getMirrorRef(): HTMLDivElement | undefined;
    updatePosition(x: number, y: number): void;
}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
    [x: string]: any;
} & {
    [x: string]: any;
}, string, {
    disabled: boolean;
    popupContainer: import('..').PopupContainer;
    strict: boolean;
    type: "textarea" | "input";
    data: import('..').SelectOptions;
    triggerProps: import('..').TriggerProps;
    modelValue: string;
    defaultValue: string;
    allowClear: boolean;
    filterOption: (inputValue: string, option: import('..').SelectOptionData) => boolean;
    isSelectSetValue: boolean;
    isSearch: boolean;
}, {}, string, {}, import('vue').GlobalComponents, import('vue').GlobalDirectives, string, import('vue').ComponentProvideOptions> & import('vue').VNodeProps & import('vue').AllowedComponentProps & import('vue').ComponentCustomProps & (new () => {
    $slots: Readonly<import('./type').AutoCompleteSlots> & import('./type').AutoCompleteSlots;
}) & {
    install: (app: App) => void;
};
declare module 'vue' {
    interface GlobalComponents {
        YcAutoComplete: typeof AutoComplete;
    }
}
export default AutoComplete;
