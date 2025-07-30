import { App } from 'vue';
import { default as _Affix } from './index.vue';
export type AffixInstance = InstanceType<typeof _Affix>;
export * from './type';
declare const Affix: {
    new (...args: any[]): import('vue').CreateComponentPublicInstanceWithMixins<Readonly<import('./type').AffixProps> & Readonly<{
        onChange?: ((fixed: boolean) => any) | undefined;
    }>, {
        updatePosition(): void;
    }, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {} & {
        change: (fixed: boolean) => any;
    }, import('vue').PublicProps, {
        offsetTop: number;
        target: import('..').TargetContainer;
        offsetBottom: number;
        targetContainer: import('..').TargetContainer;
    }, false, {}, {}, import('vue').GlobalComponents, import('vue').GlobalDirectives, string, {
        wrapperRef: HTMLDivElement;
        affixRef: HTMLDivElement;
    }, HTMLDivElement, import('vue').ComponentProvideOptions, {
        P: {};
        B: {};
        D: {};
        C: {};
        M: {};
        Defaults: {};
    }, Readonly<import('./type').AffixProps> & Readonly<{
        onChange?: ((fixed: boolean) => any) | undefined;
    }>, {
        updatePosition(): void;
    }, {}, {}, {}, {
        offsetTop: number;
        target: import('..').TargetContainer;
        offsetBottom: number;
        targetContainer: import('..').TargetContainer;
    }>;
    __isFragment?: never;
    __isTeleport?: never;
    __isSuspense?: never;
} & import('vue').ComponentOptionsBase<Readonly<import('./type').AffixProps> & Readonly<{
    onChange?: ((fixed: boolean) => any) | undefined;
}>, {
    updatePosition(): void;
}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {} & {
    change: (fixed: boolean) => any;
}, string, {
    offsetTop: number;
    target: import('..').TargetContainer;
    offsetBottom: number;
    targetContainer: import('..').TargetContainer;
}, {}, string, {}, import('vue').GlobalComponents, import('vue').GlobalDirectives, string, import('vue').ComponentProvideOptions> & import('vue').VNodeProps & import('vue').AllowedComponentProps & import('vue').ComponentCustomProps & (new () => {
    $slots: Readonly<import('./type').AffixSlots> & import('./type').AffixSlots;
}) & {
    install: (app: App) => void;
};
declare module 'vue' {
    interface GlobalComponents {
        YcAffix: typeof Affix;
    }
}
export default Affix;
