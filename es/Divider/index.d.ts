import { App } from 'vue';
import { default as _Divider } from './index.vue';
export type DividerInstance = InstanceType<typeof _Divider>;
export * from './type';
declare const Divider: {
    new (...args: any[]): import('vue').CreateComponentPublicInstanceWithMixins<Readonly<import('./type').DividerProps> & Readonly<{}>, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, import('vue').PublicProps, {
        size: number;
        type: import('./type').DividerType;
        margin: number;
        direction: import('..').Direction;
        orientation: import('./type').Orientation;
    }, false, {}, {}, import('vue').GlobalComponents, import('vue').GlobalDirectives, string, {}, HTMLDivElement, import('vue').ComponentProvideOptions, {
        P: {};
        B: {};
        D: {};
        C: {};
        M: {};
        Defaults: {};
    }, Readonly<import('./type').DividerProps> & Readonly<{}>, {}, {}, {}, {}, {
        size: number;
        type: import('./type').DividerType;
        margin: number;
        direction: import('..').Direction;
        orientation: import('./type').Orientation;
    }>;
    __isFragment?: never;
    __isTeleport?: never;
    __isSuspense?: never;
} & import('vue').ComponentOptionsBase<Readonly<import('./type').DividerProps> & Readonly<{}>, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, string, {
    size: number;
    type: import('./type').DividerType;
    margin: number;
    direction: import('..').Direction;
    orientation: import('./type').Orientation;
}, {}, string, {}, import('vue').GlobalComponents, import('vue').GlobalDirectives, string, import('vue').ComponentProvideOptions> & import('vue').VNodeProps & import('vue').AllowedComponentProps & import('vue').ComponentCustomProps & (new () => {
    $slots: Readonly<import('./type').DividerSlots> & import('./type').DividerSlots;
}) & {
    install: (app: App) => void;
};
declare module 'vue' {
    interface GlobalComponents {
        YcDivider: typeof Divider;
    }
}
export default Divider;
