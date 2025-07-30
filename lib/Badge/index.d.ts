import { App } from 'vue';
import { default as _Badge } from './index.vue';
export type BadgeInstance = InstanceType<typeof _Badge>;
export * from './type';
declare const Badge: {
    new (...args: any[]): import('vue').CreateComponentPublicInstanceWithMixins<Readonly<import('./type').BadgeProps> & Readonly<{}>, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, import('vue').PublicProps, {
        color: string;
        text: string;
        dot: boolean;
        offset: number[];
        maxCount: number;
        status: import('./type').BadgeStatus;
        dotStyle: import('vue').CSSProperties;
        count: number;
    }, false, {}, {}, import('vue').GlobalComponents, import('vue').GlobalDirectives, string, {}, HTMLDivElement, import('vue').ComponentProvideOptions, {
        P: {};
        B: {};
        D: {};
        C: {};
        M: {};
        Defaults: {};
    }, Readonly<import('./type').BadgeProps> & Readonly<{}>, {}, {}, {}, {}, {
        color: string;
        text: string;
        dot: boolean;
        offset: number[];
        maxCount: number;
        status: import('./type').BadgeStatus;
        dotStyle: import('vue').CSSProperties;
        count: number;
    }>;
    __isFragment?: never;
    __isTeleport?: never;
    __isSuspense?: never;
} & import('vue').ComponentOptionsBase<Readonly<import('./type').BadgeProps> & Readonly<{}>, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, string, {
    color: string;
    text: string;
    dot: boolean;
    offset: number[];
    maxCount: number;
    status: import('./type').BadgeStatus;
    dotStyle: import('vue').CSSProperties;
    count: number;
}, {}, string, {}, import('vue').GlobalComponents, import('vue').GlobalDirectives, string, import('vue').ComponentProvideOptions> & import('vue').VNodeProps & import('vue').AllowedComponentProps & import('vue').ComponentCustomProps & (new () => {
    $slots: Readonly<import('./type').BadgeSlots> & import('./type').BadgeSlots;
}) & {
    install: (app: App) => void;
};
declare module 'vue' {
    interface GlobalComponents {
        YcBadge: typeof Badge;
    }
}
export default Badge;
