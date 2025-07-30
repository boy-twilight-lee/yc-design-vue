import { App } from 'vue';
import { default as _Image } from './Image.vue';
import { default as _ImagePreview } from './ImagePreview.vue';
import { default as _ImagePreviewGroup } from './ImagePreviewGroup.vue';
import { default as _ImagePreviewAction } from './ImagePreviewAction.vue';
export type ImageInstance = InstanceType<typeof _Image>;
export type ImagePreviewInstance = InstanceType<typeof _ImagePreview>;
export type ImagePreviewGroupInstance = InstanceType<typeof _ImagePreviewGroup>;
export type ImagePreviewActionInstance = InstanceType<typeof _ImagePreviewAction>;
export * from './type';
declare const Image: {
    new (...args: any[]): import('vue').CreateComponentPublicInstanceWithMixins<Readonly<import('./type').ImageProps> & Readonly<{
        "onUpdate:previewVisible"?: ((visible: boolean) => any) | undefined;
        "onPreview-visible-change"?: ((visible: boolean) => any) | undefined;
    }>, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {} & {
        "update:previewVisible": (visible: boolean) => any;
        "preview-visible-change": (visible: boolean) => any;
    }, import('vue').PublicProps, {
        title: string;
        description: string;
        src: string;
        hideFooter: import('./type').HideFooter;
        footerPosition: import('./type').FooterPostion;
        showLoader: boolean;
        preview: boolean;
        previewVisible: boolean;
        defaultPreviewVisible: boolean;
        previewProps: import('./type').ImagePreviewProps;
        footerClass: import('../_shared/type').ClassName;
    }, false, {}, {}, import('vue').GlobalComponents, import('vue').GlobalDirectives, string, {}, HTMLDivElement, import('vue').ComponentProvideOptions, {
        P: {};
        B: {};
        D: {};
        C: {};
        M: {};
        Defaults: {};
    }, Readonly<import('./type').ImageProps> & Readonly<{
        "onUpdate:previewVisible"?: ((visible: boolean) => any) | undefined;
        "onPreview-visible-change"?: ((visible: boolean) => any) | undefined;
    }>, {}, {}, {}, {}, {
        title: string;
        description: string;
        src: string;
        hideFooter: import('./type').HideFooter;
        footerPosition: import('./type').FooterPostion;
        showLoader: boolean;
        preview: boolean;
        previewVisible: boolean;
        defaultPreviewVisible: boolean;
        previewProps: import('./type').ImagePreviewProps;
        footerClass: import('../_shared/type').ClassName;
    }>;
    __isFragment?: never;
    __isTeleport?: never;
    __isSuspense?: never;
} & import('vue').ComponentOptionsBase<Readonly<import('./type').ImageProps> & Readonly<{
    "onUpdate:previewVisible"?: ((visible: boolean) => any) | undefined;
    "onPreview-visible-change"?: ((visible: boolean) => any) | undefined;
}>, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {} & {
    "update:previewVisible": (visible: boolean) => any;
    "preview-visible-change": (visible: boolean) => any;
}, string, {
    title: string;
    description: string;
    src: string;
    hideFooter: import('./type').HideFooter;
    footerPosition: import('./type').FooterPostion;
    showLoader: boolean;
    preview: boolean;
    previewVisible: boolean;
    defaultPreviewVisible: boolean;
    previewProps: import('./type').ImagePreviewProps;
    footerClass: import('../_shared/type').ClassName;
}, {}, string, {}, import('vue').GlobalComponents, import('vue').GlobalDirectives, string, import('vue').ComponentProvideOptions> & import('vue').VNodeProps & import('vue').AllowedComponentProps & import('vue').ComponentCustomProps & (new () => {
    $slots: Readonly<import('./type').ImageSlots> & import('./type').ImageSlots;
}) & {
    preview: {
        new (...args: any[]): import('vue').CreateComponentPublicInstanceWithMixins<Readonly<import('./type').ImagePreviewProps> & Readonly<{
            onClose?: (() => any) | undefined;
            "onUpdate:visible"?: ((value: boolean) => any) | undefined;
        }>, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {} & {
            close: () => any;
            "update:visible": (value: boolean) => any;
        }, import('vue').PublicProps, {
            popupContainer: import('..').PopupContainer;
            visible: boolean;
            src: string;
            defaultVisible: boolean;
            closable: boolean;
            maskClosable: boolean;
            escToClose: boolean;
            actionsLayout: string[];
            wheelZoom: boolean;
            keyboard: boolean;
            defaultScale: number;
            zoomRate: number;
        }, false, {}, {}, import('vue').GlobalComponents, import('vue').GlobalDirectives, string, {
            imageRef: HTMLImageElement;
        }, any, import('vue').ComponentProvideOptions, {
            P: {};
            B: {};
            D: {};
            C: {};
            M: {};
            Defaults: {};
        }, Readonly<import('./type').ImagePreviewProps> & Readonly<{
            onClose?: (() => any) | undefined;
            "onUpdate:visible"?: ((value: boolean) => any) | undefined;
        }>, {}, {}, {}, {}, {
            popupContainer: import('..').PopupContainer;
            visible: boolean;
            src: string;
            defaultVisible: boolean;
            closable: boolean;
            maskClosable: boolean;
            escToClose: boolean;
            actionsLayout: string[];
            wheelZoom: boolean;
            keyboard: boolean;
            defaultScale: number;
            zoomRate: number;
        }>;
        __isFragment?: never;
        __isTeleport?: never;
        __isSuspense?: never;
    } & import('vue').ComponentOptionsBase<Readonly<import('./type').ImagePreviewProps> & Readonly<{
        onClose?: (() => any) | undefined;
        "onUpdate:visible"?: ((value: boolean) => any) | undefined;
    }>, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {} & {
        close: () => any;
        "update:visible": (value: boolean) => any;
    }, string, {
        popupContainer: import('..').PopupContainer;
        visible: boolean;
        src: string;
        defaultVisible: boolean;
        closable: boolean;
        maskClosable: boolean;
        escToClose: boolean;
        actionsLayout: string[];
        wheelZoom: boolean;
        keyboard: boolean;
        defaultScale: number;
        zoomRate: number;
    }, {}, string, {}, import('vue').GlobalComponents, import('vue').GlobalDirectives, string, import('vue').ComponentProvideOptions> & import('vue').VNodeProps & import('vue').AllowedComponentProps & import('vue').ComponentCustomProps & (new () => {
        $slots: Readonly<import('./type').ImagePreviewSlots> & import('./type').ImagePreviewSlots;
    });
    "preview-group": {
        new (...args: any[]): import('vue').CreateComponentPublicInstanceWithMixins<Readonly<import('./type').ImagePreviewGroupProps> & Readonly<{
            onChange?: ((index: number) => any) | undefined;
            "onUpdate:visible"?: ((value: boolean) => any) | undefined;
            "onUpdate:current"?: ((index: number) => any) | undefined;
            "onVisible-change"?: ((value: boolean) => any) | undefined;
        }>, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {} & {
            change: (index: number) => any;
            "update:visible": (value: boolean) => any;
            "update:current": (index: number) => any;
            "visible-change": (value: boolean) => any;
        }, import('vue').PublicProps, {
            popupContainer: import('..').PopupContainer;
            infinite: boolean;
            visible: boolean;
            defaultVisible: boolean;
            closable: boolean;
            current: number;
            defaultCurrent: number;
            maskClosable: boolean;
            escToClose: boolean;
            actionsLayout: string[];
            wheelZoom: boolean;
            keyboard: boolean;
            defaultScale: number;
            zoomRate: number;
            srcList: string[];
        }, false, {}, {}, import('vue').GlobalComponents, import('vue').GlobalDirectives, string, {}, any, import('vue').ComponentProvideOptions, {
            P: {};
            B: {};
            D: {};
            C: {};
            M: {};
            Defaults: {};
        }, Readonly<import('./type').ImagePreviewGroupProps> & Readonly<{
            onChange?: ((index: number) => any) | undefined;
            "onUpdate:visible"?: ((value: boolean) => any) | undefined;
            "onUpdate:current"?: ((index: number) => any) | undefined;
            "onVisible-change"?: ((value: boolean) => any) | undefined;
        }>, {}, {}, {}, {}, {
            popupContainer: import('..').PopupContainer;
            infinite: boolean;
            visible: boolean;
            defaultVisible: boolean;
            closable: boolean;
            current: number;
            defaultCurrent: number;
            maskClosable: boolean;
            escToClose: boolean;
            actionsLayout: string[];
            wheelZoom: boolean;
            keyboard: boolean;
            defaultScale: number;
            zoomRate: number;
            srcList: string[];
        }>;
        __isFragment?: never;
        __isTeleport?: never;
        __isSuspense?: never;
    } & import('vue').ComponentOptionsBase<Readonly<import('./type').ImagePreviewGroupProps> & Readonly<{
        onChange?: ((index: number) => any) | undefined;
        "onUpdate:visible"?: ((value: boolean) => any) | undefined;
        "onUpdate:current"?: ((index: number) => any) | undefined;
        "onVisible-change"?: ((value: boolean) => any) | undefined;
    }>, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {} & {
        change: (index: number) => any;
        "update:visible": (value: boolean) => any;
        "update:current": (index: number) => any;
        "visible-change": (value: boolean) => any;
    }, string, {
        popupContainer: import('..').PopupContainer;
        infinite: boolean;
        visible: boolean;
        defaultVisible: boolean;
        closable: boolean;
        current: number;
        defaultCurrent: number;
        maskClosable: boolean;
        escToClose: boolean;
        actionsLayout: string[];
        wheelZoom: boolean;
        keyboard: boolean;
        defaultScale: number;
        zoomRate: number;
        srcList: string[];
    }, {}, string, {}, import('vue').GlobalComponents, import('vue').GlobalDirectives, string, import('vue').ComponentProvideOptions> & import('vue').VNodeProps & import('vue').AllowedComponentProps & import('vue').ComponentCustomProps & (new () => {
        $slots: Readonly<import('./type').ImagePreviewGroupSlots> & import('./type').ImagePreviewGroupSlots;
    });
    action: {
        new (...args: any[]): import('vue').CreateComponentPublicInstanceWithMixins<Readonly<import('./type').ImagePreviewActionProps> & Readonly<{
            onClick?: ((ev: MouseEvent) => any) | undefined;
            onContextmenu?: ((ev: MouseEvent) => any) | undefined;
            onDblclick?: ((ev: MouseEvent) => any) | undefined;
        }>, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {} & {
            click: (ev: MouseEvent) => any;
            contextmenu: (ev: MouseEvent) => any;
            dblclick: (ev: MouseEvent) => any;
        }, import('vue').PublicProps, {
            disabled: boolean;
            name: string;
        }, false, {}, {}, import('vue').GlobalComponents, import('vue').GlobalDirectives, string, {}, any, import('vue').ComponentProvideOptions, {
            P: {};
            B: {};
            D: {};
            C: {};
            M: {};
            Defaults: {};
        }, Readonly<import('./type').ImagePreviewActionProps> & Readonly<{
            onClick?: ((ev: MouseEvent) => any) | undefined;
            onContextmenu?: ((ev: MouseEvent) => any) | undefined;
            onDblclick?: ((ev: MouseEvent) => any) | undefined;
        }>, {}, {}, {}, {}, {
            disabled: boolean;
            name: string;
        }>;
        __isFragment?: never;
        __isTeleport?: never;
        __isSuspense?: never;
    } & import('vue').ComponentOptionsBase<Readonly<import('./type').ImagePreviewActionProps> & Readonly<{
        onClick?: ((ev: MouseEvent) => any) | undefined;
        onContextmenu?: ((ev: MouseEvent) => any) | undefined;
        onDblclick?: ((ev: MouseEvent) => any) | undefined;
    }>, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {} & {
        click: (ev: MouseEvent) => any;
        contextmenu: (ev: MouseEvent) => any;
        dblclick: (ev: MouseEvent) => any;
    }, string, {
        disabled: boolean;
        name: string;
    }, {}, string, {}, import('vue').GlobalComponents, import('vue').GlobalDirectives, string, import('vue').ComponentProvideOptions> & import('vue').VNodeProps & import('vue').AllowedComponentProps & import('vue').ComponentCustomProps & (new () => {
        $slots: Readonly<import('./type').ImagePreviewActionSlots> & import('./type').ImagePreviewActionSlots;
    });
    install: (app: App) => void;
};
export { _ImagePreview as ImagePreview, _ImagePreviewGroup as ImagePreviewGroup, _ImagePreviewAction as ImagePreviewAction, };
declare module 'vue' {
    interface GlobalComponents {
        YcImage: typeof Image;
        YcImagePreview: typeof _ImagePreview;
        YcImagePreviewGroup: typeof _ImagePreviewGroup;
        YcImagePreviewAction: typeof _ImagePreviewAction;
    }
}
export default Image;
