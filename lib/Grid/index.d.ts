import { App } from 'vue';
import { default as _Col } from './GridCol.vue';
import { default as _Row } from './GridRow.vue';
import { default as _GridItem } from './GridItem.vue';
export type RowInstance = InstanceType<typeof _Row>;
export type ColInstance = InstanceType<typeof _Col>;
export * from './type';
declare const Grid: {
    new (...args: any[]): import('vue').CreateComponentPublicInstanceWithMixins<Readonly<import('./type').GridProps> & Readonly<{}>, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, import('vue').PublicProps, {
        cols: number | import('./type').ResponsiveValue;
        rowGap: number | import('./type').ResponsiveValue;
        colGap: number | import('./type').ResponsiveValue;
        collapsed: boolean;
        collapsedRows: number;
    }, false, {}, {}, import('vue').GlobalComponents, import('vue').GlobalDirectives, string, {}, HTMLDivElement, import('vue').ComponentProvideOptions, {
        P: {};
        B: {};
        D: {};
        C: {};
        M: {};
        Defaults: {};
    }, Readonly<import('./type').GridProps> & Readonly<{}>, {}, {}, {}, {}, {
        cols: number | import('./type').ResponsiveValue;
        rowGap: number | import('./type').ResponsiveValue;
        colGap: number | import('./type').ResponsiveValue;
        collapsed: boolean;
        collapsedRows: number;
    }>;
    __isFragment?: never;
    __isTeleport?: never;
    __isSuspense?: never;
} & import('vue').ComponentOptionsBase<Readonly<import('./type').GridProps> & Readonly<{}>, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, string, {
    cols: number | import('./type').ResponsiveValue;
    rowGap: number | import('./type').ResponsiveValue;
    colGap: number | import('./type').ResponsiveValue;
    collapsed: boolean;
    collapsedRows: number;
}, {}, string, {}, import('vue').GlobalComponents, import('vue').GlobalDirectives, string, import('vue').ComponentProvideOptions> & import('vue').VNodeProps & import('vue').AllowedComponentProps & import('vue').ComponentCustomProps & (new () => {
    $slots: Readonly<import('./type').GridSlots> & import('./type').GridSlots;
}) & {
    col: {
        new (...args: any[]): import('vue').CreateComponentPublicInstanceWithMixins<Readonly<import('./type').GridColProps> & Readonly<{}>, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, import('vue').PublicProps, {
            span: number | import('./type').ResponsiveValue;
            offset: number | import('./type').ResponsiveValue;
        }, false, {}, {}, import('vue').GlobalComponents, import('vue').GlobalDirectives, string, {}, HTMLDivElement, import('vue').ComponentProvideOptions, {
            P: {};
            B: {};
            D: {};
            C: {};
            M: {};
            Defaults: {};
        }, Readonly<import('./type').GridColProps> & Readonly<{}>, {}, {}, {}, {}, {
            span: number | import('./type').ResponsiveValue;
            offset: number | import('./type').ResponsiveValue;
        }>;
        __isFragment?: never;
        __isTeleport?: never;
        __isSuspense?: never;
    } & import('vue').ComponentOptionsBase<Readonly<import('./type').GridColProps> & Readonly<{}>, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, string, {
        span: number | import('./type').ResponsiveValue;
        offset: number | import('./type').ResponsiveValue;
    }, {}, string, {}, import('vue').GlobalComponents, import('vue').GlobalDirectives, string, import('vue').ComponentProvideOptions> & import('vue').VNodeProps & import('vue').AllowedComponentProps & import('vue').ComponentCustomProps & (new () => {
        $slots: Readonly<import('./type').GridColSlots> & import('./type').GridColSlots;
    });
    row: {
        new (...args: any[]): import('vue').CreateComponentPublicInstanceWithMixins<Readonly<import('./type').GridRowProps> & Readonly<{}>, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, import('vue').PublicProps, {
            wrap: boolean;
            justify: import('./type').GridRowJustify;
            div: boolean;
            gutter: import('./type').Gutter | [import('./type').Gutter, import('./type').Gutter];
            align: import('./type').GridRowAlign;
        }, false, {}, {}, import('vue').GlobalComponents, import('vue').GlobalDirectives, string, {}, HTMLDivElement, import('vue').ComponentProvideOptions, {
            P: {};
            B: {};
            D: {};
            C: {};
            M: {};
            Defaults: {};
        }, Readonly<import('./type').GridRowProps> & Readonly<{}>, {}, {}, {}, {}, {
            wrap: boolean;
            justify: import('./type').GridRowJustify;
            div: boolean;
            gutter: import('./type').Gutter | [import('./type').Gutter, import('./type').Gutter];
            align: import('./type').GridRowAlign;
        }>;
        __isFragment?: never;
        __isTeleport?: never;
        __isSuspense?: never;
    } & import('vue').ComponentOptionsBase<Readonly<import('./type').GridRowProps> & Readonly<{}>, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, string, {
        wrap: boolean;
        justify: import('./type').GridRowJustify;
        div: boolean;
        gutter: import('./type').Gutter | [import('./type').Gutter, import('./type').Gutter];
        align: import('./type').GridRowAlign;
    }, {}, string, {}, import('vue').GlobalComponents, import('vue').GlobalDirectives, string, import('vue').ComponentProvideOptions> & import('vue').VNodeProps & import('vue').AllowedComponentProps & import('vue').ComponentCustomProps & (new () => {
        $slots: Readonly<import('./type').GridRowSlots> & import('./type').GridRowSlots;
    });
    item: {
        new (...args: any[]): import('vue').CreateComponentPublicInstanceWithMixins<Readonly<import('./type').GridItemProps> & Readonly<{}>, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, import('vue').PublicProps, {
            span: number | import('./type').ResponsiveValue;
            suffix: boolean;
            offset: number | import('./type').ResponsiveValue;
        }, false, {}, {}, import('vue').GlobalComponents, import('vue').GlobalDirectives, string, {}, HTMLDivElement, import('vue').ComponentProvideOptions, {
            P: {};
            B: {};
            D: {};
            C: {};
            M: {};
            Defaults: {};
        }, Readonly<import('./type').GridItemProps> & Readonly<{}>, {}, {}, {}, {}, {
            span: number | import('./type').ResponsiveValue;
            suffix: boolean;
            offset: number | import('./type').ResponsiveValue;
        }>;
        __isFragment?: never;
        __isTeleport?: never;
        __isSuspense?: never;
    } & import('vue').ComponentOptionsBase<Readonly<import('./type').GridItemProps> & Readonly<{}>, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, string, {
        span: number | import('./type').ResponsiveValue;
        suffix: boolean;
        offset: number | import('./type').ResponsiveValue;
    }, {}, string, {}, import('vue').GlobalComponents, import('vue').GlobalDirectives, string, import('vue').ComponentProvideOptions> & import('vue').VNodeProps & import('vue').AllowedComponentProps & import('vue').ComponentCustomProps & (new () => {
        $slots: Readonly<import('./type').GridItemSlots> & import('./type').GridItemSlots;
    });
    install: (app: App) => void;
};
export { _Col as GridCol, _Row as GridRow, _GridItem as GridItem };
declare module 'vue' {
    interface GlobalComponents {
        YcGrid: typeof Grid;
        YcCol: typeof _Col;
        YcRow: typeof _Row;
        YcGridItem: typeof _GridItem;
    }
}
export default Grid;
