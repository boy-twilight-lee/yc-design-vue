import { App } from 'vue';
import { default as _PageHeader } from './index.vue';
export type PageHeaderInstance = InstanceType<typeof _PageHeader>;
export * from './type';
declare const PageHeader: {
    new (...args: any[]): import('vue').CreateComponentPublicInstanceWithMixins<Readonly<import('./type').PageHeaderProp> & Readonly<{
        onBack?: ((ev: Event) => any) | undefined;
    }>, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {} & {
        back: (ev: Event) => any;
    }, import('vue').PublicProps, {
        title: string;
        subtitle: string;
        showBack: boolean;
    }, false, {}, {}, import('vue').GlobalComponents, import('vue').GlobalDirectives, string, {}, HTMLDivElement, import('vue').ComponentProvideOptions, {
        P: {};
        B: {};
        D: {};
        C: {};
        M: {};
        Defaults: {};
    }, Readonly<import('./type').PageHeaderProp> & Readonly<{
        onBack?: ((ev: Event) => any) | undefined;
    }>, {}, {}, {}, {}, {
        title: string;
        subtitle: string;
        showBack: boolean;
    }>;
    __isFragment?: never;
    __isTeleport?: never;
    __isSuspense?: never;
} & import('vue').ComponentOptionsBase<Readonly<import('./type').PageHeaderProp> & Readonly<{
    onBack?: ((ev: Event) => any) | undefined;
}>, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {} & {
    back: (ev: Event) => any;
}, string, {
    title: string;
    subtitle: string;
    showBack: boolean;
}, {}, string, {}, import('vue').GlobalComponents, import('vue').GlobalDirectives, string, import('vue').ComponentProvideOptions> & import('vue').VNodeProps & import('vue').AllowedComponentProps & import('vue').ComponentCustomProps & (new () => {
    $slots: Readonly<import('./type').PageHeaderSlots> & import('./type').PageHeaderSlots;
}) & {
    install: (app: App) => void;
};
declare module 'vue' {
    interface GlobalComponents {
        YcPageHeader: typeof PageHeader;
    }
}
export default PageHeader;
