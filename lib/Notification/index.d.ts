import { App } from 'vue';
import { default as _Notification } from './Notification.vue';
import { NotificationConfig, NotificationProps, NotificationType, NotificationPosition } from './type';
export type NotificationInstance = InstanceType<typeof _Notification>;
export * from './type';
declare const Notification: {
    new (...args: any[]): import('vue').CreateComponentPublicInstanceWithMixins<Readonly<NotificationProps> & Readonly<{}>, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, import('vue').PublicProps, {
        duration: number;
        content: import('../_shared/type').RenderContent;
        style: import('vue').CSSProperties;
        icon: import('vue').RenderFunction;
        type: NotificationType;
        footer: import('vue').RenderFunction;
        title: import('../_shared/type').RenderContent;
        class: import('../_shared/type').ClassName;
        id: string;
        onClose: (id: string | number) => void;
        closable: boolean;
        showIcon: boolean;
        isReset: boolean;
        closeIcon: import('vue').RenderFunction;
        closeIconElement: import('vue').RenderFunction;
    }, false, {}, {}, import('vue').GlobalComponents, import('vue').GlobalDirectives, string, {}, HTMLLIElement, import('vue').ComponentProvideOptions, {
        P: {};
        B: {};
        D: {};
        C: {};
        M: {};
        Defaults: {};
    }, Readonly<NotificationProps> & Readonly<{}>, {}, {}, {}, {}, {
        duration: number;
        content: import('../_shared/type').RenderContent;
        style: import('vue').CSSProperties;
        icon: import('vue').RenderFunction;
        type: NotificationType;
        footer: import('vue').RenderFunction;
        title: import('../_shared/type').RenderContent;
        class: import('../_shared/type').ClassName;
        id: string;
        onClose: (id: string | number) => void;
        closable: boolean;
        showIcon: boolean;
        isReset: boolean;
        closeIcon: import('vue').RenderFunction;
        closeIconElement: import('vue').RenderFunction;
    }>;
    __isFragment?: never;
    __isTeleport?: never;
    __isSuspense?: never;
} & import('vue').ComponentOptionsBase<Readonly<NotificationProps> & Readonly<{}>, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, string, {
    duration: number;
    content: import('../_shared/type').RenderContent;
    style: import('vue').CSSProperties;
    icon: import('vue').RenderFunction;
    type: NotificationType;
    footer: import('vue').RenderFunction;
    title: import('../_shared/type').RenderContent;
    class: import('../_shared/type').ClassName;
    id: string;
    onClose: (id: string | number) => void;
    closable: boolean;
    showIcon: boolean;
    isReset: boolean;
    closeIcon: import('vue').RenderFunction;
    closeIconElement: import('vue').RenderFunction;
}, {}, string, {}, import('vue').GlobalComponents, import('vue').GlobalDirectives, string, import('vue').ComponentProvideOptions> & import('vue').VNodeProps & import('vue').AllowedComponentProps & import('vue').ComponentCustomProps & {
    info: (config: string | NotificationConfig) => import('./type').NotificationReturn;
    success: (config: string | NotificationConfig) => import('./type').NotificationReturn;
    warning: (config: string | NotificationConfig) => import('./type').NotificationReturn;
    error: (config: string | NotificationConfig) => import('./type').NotificationReturn;
    remove: (id: string) => void;
    clear: (position: NotificationPosition) => import('./type').NotificationReturn;
    install: (app: App) => void;
};
declare module 'vue' {
    interface ComponentCustomProperties {
        $notification: typeof Notification;
    }
}
export default Notification;
