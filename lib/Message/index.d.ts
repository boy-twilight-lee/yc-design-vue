import { App } from 'vue';
import { default as _Message } from './Message.vue';
import { MessageConfig, MessageProps, MessageType, MessagePostion } from './type';
export type MessageInstance = InstanceType<typeof _Message>;
export * from './type';
declare const Message: {
    new (...args: any[]): import('vue').CreateComponentPublicInstanceWithMixins<Readonly<MessageProps> & Readonly<{}>, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, import('vue').PublicProps, {
        duration: number;
        content: import('../_shared/type').RenderContent;
        icon: import('vue').RenderFunction;
        type: MessageType;
        id: string;
        onClose: (id: string | number) => void;
        closable: boolean;
        showIcon: boolean;
        onDestory: (id: string | number) => void;
        isReset: boolean;
        resetOnHover: boolean;
    }, false, {}, {}, import('vue').GlobalComponents, import('vue').GlobalDirectives, string, {}, HTMLLIElement, import('vue').ComponentProvideOptions, {
        P: {};
        B: {};
        D: {};
        C: {};
        M: {};
        Defaults: {};
    }, Readonly<MessageProps> & Readonly<{}>, {}, {}, {}, {}, {
        duration: number;
        content: import('../_shared/type').RenderContent;
        icon: import('vue').RenderFunction;
        type: MessageType;
        id: string;
        onClose: (id: string | number) => void;
        closable: boolean;
        showIcon: boolean;
        onDestory: (id: string | number) => void;
        isReset: boolean;
        resetOnHover: boolean;
    }>;
    __isFragment?: never;
    __isTeleport?: never;
    __isSuspense?: never;
} & import('vue').ComponentOptionsBase<Readonly<MessageProps> & Readonly<{}>, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, string, {
    duration: number;
    content: import('../_shared/type').RenderContent;
    icon: import('vue').RenderFunction;
    type: MessageType;
    id: string;
    onClose: (id: string | number) => void;
    closable: boolean;
    showIcon: boolean;
    onDestory: (id: string | number) => void;
    isReset: boolean;
    resetOnHover: boolean;
}, {}, string, {}, import('vue').GlobalComponents, import('vue').GlobalDirectives, string, import('vue').ComponentProvideOptions> & import('vue').VNodeProps & import('vue').AllowedComponentProps & import('vue').ComponentCustomProps & {
    info: (config: string | MessageConfig) => import('./type').MessageReturn;
    success: (config: string | MessageConfig) => import('./type').MessageReturn;
    warning: (config: string | MessageConfig) => import('./type').MessageReturn;
    error: (config: string | MessageConfig) => import('./type').MessageReturn;
    loading: (config: string | MessageConfig) => import('./type').MessageReturn;
    normoal: (config: string | MessageConfig) => import('./type').MessageReturn;
    clear: (position: MessagePostion) => import('./type').MessageReturn;
    install: (app: App) => void;
};
declare module 'vue' {
    interface ComponentCustomProperties {
        $message: typeof Message;
    }
}
export default Message;
