import { App } from 'vue';
import { default as _OverflowList } from './index.vue';
export type OverflowListInstance = InstanceType<typeof _OverflowList>;
export * from './type';
declare const OverflowList: {
    new (...args: any[]): import('vue').CreateComponentPublicInstanceWithMixins<Readonly<import('./type').OverflowListProps> & Readonly<{
        onChange?: ((value: number) => any) | undefined;
    }>, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {} & {
        change: (value: number) => any;
    }, import('vue').PublicProps, {
        margin: number;
        min: number;
        from: import('./type').OverflowListFrom;
    }, false, {}, {}, import('vue').GlobalComponents, import('vue').GlobalDirectives, string, {
        listRef: HTMLDivElement;
        overflowRef: HTMLDivElement;
    }, HTMLDivElement, import('vue').ComponentProvideOptions, {
        P: {};
        B: {};
        D: {};
        C: {};
        M: {};
        Defaults: {};
    }, Readonly<import('./type').OverflowListProps> & Readonly<{
        onChange?: ((value: number) => any) | undefined;
    }>, {}, {}, {}, {}, {
        margin: number;
        min: number;
        from: import('./type').OverflowListFrom;
    }>;
    __isFragment?: never;
    __isTeleport?: never;
    __isSuspense?: never;
} & import('vue').ComponentOptionsBase<Readonly<import('./type').OverflowListProps> & Readonly<{
    onChange?: ((value: number) => any) | undefined;
}>, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {} & {
    change: (value: number) => any;
}, string, {
    margin: number;
    min: number;
    from: import('./type').OverflowListFrom;
}, {}, string, {}, import('vue').GlobalComponents, import('vue').GlobalDirectives, string, import('vue').ComponentProvideOptions> & import('vue').VNodeProps & import('vue').AllowedComponentProps & import('vue').ComponentCustomProps & (new () => {
    $slots: Readonly<import('./type').OverflowListSlots> & import('./type').OverflowListSlots;
}) & {
    install: (app: App) => void;
};
declare module 'vue' {
    interface GlobalComponents {
        YcOverflowList: typeof OverflowList;
    }
}
export default OverflowList;
