import { App } from 'vue';
import { default as _Comment } from './index.vue';
export type CommentInstance = InstanceType<typeof _Comment>;
export * from './type';
declare const Comment: {
    new (...args: any[]): import('vue').CreateComponentPublicInstanceWithMixins<Readonly<import('./type').CommentProps> & Readonly<{}>, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, import('vue').PublicProps, {
        content: string;
        align: import('./type').CommentAlign;
        avatar: string;
        author: string;
        datetime: string;
    }, false, {}, {}, import('vue').GlobalComponents, import('vue').GlobalDirectives, string, {}, HTMLDivElement, import('vue').ComponentProvideOptions, {
        P: {};
        B: {};
        D: {};
        C: {};
        M: {};
        Defaults: {};
    }, Readonly<import('./type').CommentProps> & Readonly<{}>, {}, {}, {}, {}, {
        content: string;
        align: import('./type').CommentAlign;
        avatar: string;
        author: string;
        datetime: string;
    }>;
    __isFragment?: never;
    __isTeleport?: never;
    __isSuspense?: never;
} & import('vue').ComponentOptionsBase<Readonly<import('./type').CommentProps> & Readonly<{}>, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, string, {
    content: string;
    align: import('./type').CommentAlign;
    avatar: string;
    author: string;
    datetime: string;
}, {}, string, {}, import('vue').GlobalComponents, import('vue').GlobalDirectives, string, import('vue').ComponentProvideOptions> & import('vue').VNodeProps & import('vue').AllowedComponentProps & import('vue').ComponentCustomProps & (new () => {
    $slots: Readonly<import('./type').CommentSlots> & import('./type').CommentSlots;
}) & {
    install: (app: App) => void;
};
declare module 'vue' {
    interface GlobalComponents {
        YcComment: typeof Comment;
    }
}
export default Comment;
