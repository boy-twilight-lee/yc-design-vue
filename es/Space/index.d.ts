import { App } from 'vue';
import { default as _Space } from './index.vue';
export type SpaceInstance = InstanceType<typeof _Space>;
export * from './type';
declare const Space: {
    new (...args: any[]): import('vue').CreateComponentPublicInstanceWithMixins<Readonly<import('./type').SpaceProps> & Readonly<{}>, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, import('vue').PublicProps, {
        size: import('..').Size | number;
        fill: boolean;
        wrap: boolean;
        align: import('./type').SpaceAlign;
        direction: import('..').Direction;
    }, false, {}, {}, import('vue').GlobalComponents, import('vue').GlobalDirectives, string, {}, HTMLDivElement, import('vue').ComponentProvideOptions, {
        P: {};
        B: {};
        D: {};
        C: {};
        M: {};
        Defaults: {};
    }, Readonly<import('./type').SpaceProps> & Readonly<{}>, {}, {}, {}, {}, {
        size: import('..').Size | number;
        fill: boolean;
        wrap: boolean;
        align: import('./type').SpaceAlign;
        direction: import('..').Direction;
    }>;
    __isFragment?: never;
    __isTeleport?: never;
    __isSuspense?: never;
} & import('vue').ComponentOptionsBase<Readonly<import('./type').SpaceProps> & Readonly<{}>, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, string, {
    size: import('..').Size | number;
    fill: boolean;
    wrap: boolean;
    align: import('./type').SpaceAlign;
    direction: import('..').Direction;
}, {}, string, {}, import('vue').GlobalComponents, import('vue').GlobalDirectives, string, import('vue').ComponentProvideOptions> & import('vue').VNodeProps & import('vue').AllowedComponentProps & import('vue').ComponentCustomProps & (new () => {
    $slots: Readonly<import('./type').SpaceSlots> & import('./type').SpaceSlots;
}) & {
    install: (app: App) => void;
};
declare module 'vue' {
    interface GlobalComponents {
        YcSpace: typeof Space;
    }
}
export default Space;
