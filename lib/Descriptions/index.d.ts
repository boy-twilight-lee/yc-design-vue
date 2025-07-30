import { App } from 'vue';
import { default as _Descriptions } from './Descriptions.vue';
import { default as _DescriptionsItem } from './DescriptionsItem.vue';
export type DescriptionsInstance = InstanceType<typeof _Descriptions>;
export type DescriptionsItemInstance = InstanceType<typeof _DescriptionsItem>;
export * from './type';
declare const Descriptions: {
    new (...args: any[]): import('vue').CreateComponentPublicInstanceWithMixins<Readonly<import('./type').DescriptionsProps> & Readonly<{}>, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, import('vue').PublicProps, {
        size: import('..').Size;
        column: import('./type').DescriptionsColumn;
        layout: import('./type').DescriptionsLayout;
        data: import('./type').DescData[];
        title: string;
        align: import('./type').DescriptionsAlign;
        tableLayout: import('./type').TableLayout;
        bordered: boolean;
        labelStyle: import('vue').CSSProperties;
        valueStyle: import('vue').CSSProperties;
    }, false, {}, {}, import('vue').GlobalComponents, import('vue').GlobalDirectives, string, {}, HTMLDivElement, import('vue').ComponentProvideOptions, {
        P: {};
        B: {};
        D: {};
        C: {};
        M: {};
        Defaults: {};
    }, Readonly<import('./type').DescriptionsProps> & Readonly<{}>, {}, {}, {}, {}, {
        size: import('..').Size;
        column: import('./type').DescriptionsColumn;
        layout: import('./type').DescriptionsLayout;
        data: import('./type').DescData[];
        title: string;
        align: import('./type').DescriptionsAlign;
        tableLayout: import('./type').TableLayout;
        bordered: boolean;
        labelStyle: import('vue').CSSProperties;
        valueStyle: import('vue').CSSProperties;
    }>;
    __isFragment?: never;
    __isTeleport?: never;
    __isSuspense?: never;
} & import('vue').ComponentOptionsBase<Readonly<import('./type').DescriptionsProps> & Readonly<{}>, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, string, {
    size: import('..').Size;
    column: import('./type').DescriptionsColumn;
    layout: import('./type').DescriptionsLayout;
    data: import('./type').DescData[];
    title: string;
    align: import('./type').DescriptionsAlign;
    tableLayout: import('./type').TableLayout;
    bordered: boolean;
    labelStyle: import('vue').CSSProperties;
    valueStyle: import('vue').CSSProperties;
}, {}, string, {}, import('vue').GlobalComponents, import('vue').GlobalDirectives, string, import('vue').ComponentProvideOptions> & import('vue').VNodeProps & import('vue').AllowedComponentProps & import('vue').ComponentCustomProps & (new () => {
    $slots: Readonly<import('./type').DescriptionsSlots> & import('./type').DescriptionsSlots;
}) & {
    item: {
        new (...args: any[]): import('vue').CreateComponentPublicInstanceWithMixins<Readonly<import('./type').DescriptionsItemProps> & Readonly<{}>, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, import('vue').PublicProps, {
            label: string;
            span: number;
        }, false, {}, {}, import('vue').GlobalComponents, import('vue').GlobalDirectives, string, {}, any, import('vue').ComponentProvideOptions, {
            P: {};
            B: {};
            D: {};
            C: {};
            M: {};
            Defaults: {};
        }, Readonly<import('./type').DescriptionsItemProps> & Readonly<{}>, {}, {}, {}, {}, {
            label: string;
            span: number;
        }>;
        __isFragment?: never;
        __isTeleport?: never;
        __isSuspense?: never;
    } & import('vue').ComponentOptionsBase<Readonly<import('./type').DescriptionsItemProps> & Readonly<{}>, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, string, {
        label: string;
        span: number;
    }, {}, string, {}, import('vue').GlobalComponents, import('vue').GlobalDirectives, string, import('vue').ComponentProvideOptions> & import('vue').VNodeProps & import('vue').AllowedComponentProps & import('vue').ComponentCustomProps & (new () => {
        $slots: Readonly<import('./type').DescriptionsItemSlots> & import('./type').DescriptionsItemSlots;
    });
    install: (app: App) => void;
};
export { _DescriptionsItem as DescriptionsItem };
declare module 'vue' {
    interface GlobalComponents {
        YcDescriptions: typeof Descriptions;
        YcDescriptionsItem: typeof _DescriptionsItem;
    }
}
export default Descriptions;
