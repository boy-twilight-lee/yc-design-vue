import { App } from 'vue';
import { default as _Card } from './Card.vue';
import { default as _CardMeta } from './CardMeta.vue';
import { default as _CardGrid } from './CardGrid.vue';
export type CardInstance = InstanceType<typeof _Card>;
export type CardMetaInstance = InstanceType<typeof _CardMeta>;
export type CardGridInstance = InstanceType<typeof _CardGrid>;
export * from './type';
declare const Card: {
    new (...args: any[]): import('vue').CreateComponentPublicInstanceWithMixins<Readonly<import('./type').CardProps> & Readonly<{}>, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, import('vue').PublicProps, {
        size: import('./type').CardSize;
        loading: boolean;
        title: string;
        bordered: boolean;
        hoverable: boolean;
        headerStyle: import('vue').CSSProperties;
        bodyStyle: import('vue').CSSProperties;
        extra: string;
    }, false, {}, {}, import('vue').GlobalComponents, import('vue').GlobalDirectives, string, {}, HTMLDivElement, import('vue').ComponentProvideOptions, {
        P: {};
        B: {};
        D: {};
        C: {};
        M: {};
        Defaults: {};
    }, Readonly<import('./type').CardProps> & Readonly<{}>, {}, {}, {}, {}, {
        size: import('./type').CardSize;
        loading: boolean;
        title: string;
        bordered: boolean;
        hoverable: boolean;
        headerStyle: import('vue').CSSProperties;
        bodyStyle: import('vue').CSSProperties;
        extra: string;
    }>;
    __isFragment?: never;
    __isTeleport?: never;
    __isSuspense?: never;
} & import('vue').ComponentOptionsBase<Readonly<import('./type').CardProps> & Readonly<{}>, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, string, {
    size: import('./type').CardSize;
    loading: boolean;
    title: string;
    bordered: boolean;
    hoverable: boolean;
    headerStyle: import('vue').CSSProperties;
    bodyStyle: import('vue').CSSProperties;
    extra: string;
}, {}, string, {}, import('vue').GlobalComponents, import('vue').GlobalDirectives, string, import('vue').ComponentProvideOptions> & import('vue').VNodeProps & import('vue').AllowedComponentProps & import('vue').ComponentCustomProps & (new () => {
    $slots: Readonly<import('./type').CardSlots> & import('./type').CardSlots;
}) & {
    meta: {
        new (...args: any[]): import('vue').CreateComponentPublicInstanceWithMixins<Readonly<import('./type').CardMetaProps> & Readonly<{}>, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, import('vue').PublicProps, {
            title: string;
            description: string;
        }, false, {}, {}, import('vue').GlobalComponents, import('vue').GlobalDirectives, string, {}, HTMLDivElement, import('vue').ComponentProvideOptions, {
            P: {};
            B: {};
            D: {};
            C: {};
            M: {};
            Defaults: {};
        }, Readonly<import('./type').CardMetaProps> & Readonly<{}>, {}, {}, {}, {}, {
            title: string;
            description: string;
        }>;
        __isFragment?: never;
        __isTeleport?: never;
        __isSuspense?: never;
    } & import('vue').ComponentOptionsBase<Readonly<import('./type').CardMetaProps> & Readonly<{}>, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, string, {
        title: string;
        description: string;
    }, {}, string, {}, import('vue').GlobalComponents, import('vue').GlobalDirectives, string, import('vue').ComponentProvideOptions> & import('vue').VNodeProps & import('vue').AllowedComponentProps & import('vue').ComponentCustomProps & (new () => {
        $slots: Readonly<import('./type').CardMetaSlots> & import('./type').CardMetaSlots;
    });
    grid: {
        new (...args: any[]): import('vue').CreateComponentPublicInstanceWithMixins<Readonly<import('./type').CardGridProps> & Readonly<{}>, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, import('vue').PublicProps, {
            hoverable: boolean;
        }, false, {}, {}, import('vue').GlobalComponents, import('vue').GlobalDirectives, string, {}, HTMLDivElement, import('vue').ComponentProvideOptions, {
            P: {};
            B: {};
            D: {};
            C: {};
            M: {};
            Defaults: {};
        }, Readonly<import('./type').CardGridProps> & Readonly<{}>, {}, {}, {}, {}, {
            hoverable: boolean;
        }>;
        __isFragment?: never;
        __isTeleport?: never;
        __isSuspense?: never;
    } & import('vue').ComponentOptionsBase<Readonly<import('./type').CardGridProps> & Readonly<{}>, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, string, {
        hoverable: boolean;
    }, {}, string, {}, import('vue').GlobalComponents, import('vue').GlobalDirectives, string, import('vue').ComponentProvideOptions> & import('vue').VNodeProps & import('vue').AllowedComponentProps & import('vue').ComponentCustomProps & (new () => {
        $slots: Readonly<import('./type').CardGridSlots> & import('./type').CardGridSlots;
    });
    install: (app: App) => void;
};
export { _CardMeta as CardMeta, _CardGrid as CardGrid };
declare module 'vue' {
    interface GlobalComponents {
        YcCard: typeof Card;
        YcCardMeta: typeof _CardMeta;
        YcCardGrid: typeof _CardGrid;
    }
}
export default Card;
