import { App } from 'vue';
import { default as _Breadcrumb } from './Breadcrumb.vue';
import { default as _BreadcrumbItem } from './BreadcrumbItem.vue';
export type BreadcrumbInstance = InstanceType<typeof _Breadcrumb>;
export type BreadcrumbItemInstance = InstanceType<typeof _BreadcrumbItem>;
export * from './type';
declare const Breadcrumb: {
    new (...args: any[]): import('vue').CreateComponentPublicInstanceWithMixins<Readonly<import('./type').BreadcrumbProps> & Readonly<{}>, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, import('vue').PublicProps, {
        separator: import('./type').BreadcrumbSeparator;
        maxCount: number;
        routes: import('./type').BreadcrumbRoute[];
        customUrl: import('./type').CustomUrl;
    }, false, {}, {}, import('vue').GlobalComponents, import('vue').GlobalDirectives, string, {}, HTMLDivElement, import('vue').ComponentProvideOptions, {
        P: {};
        B: {};
        D: {};
        C: {};
        M: {};
        Defaults: {};
    }, Readonly<import('./type').BreadcrumbProps> & Readonly<{}>, {}, {}, {}, {}, {
        separator: import('./type').BreadcrumbSeparator;
        maxCount: number;
        routes: import('./type').BreadcrumbRoute[];
        customUrl: import('./type').CustomUrl;
    }>;
    __isFragment?: never;
    __isTeleport?: never;
    __isSuspense?: never;
} & import('vue').ComponentOptionsBase<Readonly<import('./type').BreadcrumbProps> & Readonly<{}>, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, string, {
    separator: import('./type').BreadcrumbSeparator;
    maxCount: number;
    routes: import('./type').BreadcrumbRoute[];
    customUrl: import('./type').CustomUrl;
}, {}, string, {}, import('vue').GlobalComponents, import('vue').GlobalDirectives, string, import('vue').ComponentProvideOptions> & import('vue').VNodeProps & import('vue').AllowedComponentProps & import('vue').ComponentCustomProps & (new () => {
    $slots: Readonly<import('./type').BreadcrumbSlots> & import('./type').BreadcrumbSlots;
}) & {
    item: {
        new (...args: any[]): import('vue').CreateComponentPublicInstanceWithMixins<Readonly<import('./type').BreadcrumbItemProps> & Readonly<{}>, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, import('vue').PublicProps, {
            separator: import('./type').BreadcrumbSeparator;
            path: string;
            showSeparator: boolean;
            droplist: import('./type').BreadcrumbRoute[];
            dropdownProps: import('..').DropdownProps;
        }, false, {}, {}, import('vue').GlobalComponents, import('vue').GlobalDirectives, string, {}, any, import('vue').ComponentProvideOptions, {
            P: {};
            B: {};
            D: {};
            C: {};
            M: {};
            Defaults: {};
        }, Readonly<import('./type').BreadcrumbItemProps> & Readonly<{}>, {}, {}, {}, {}, {
            separator: import('./type').BreadcrumbSeparator;
            path: string;
            showSeparator: boolean;
            droplist: import('./type').BreadcrumbRoute[];
            dropdownProps: import('..').DropdownProps;
        }>;
        __isFragment?: never;
        __isTeleport?: never;
        __isSuspense?: never;
    } & import('vue').ComponentOptionsBase<Readonly<import('./type').BreadcrumbItemProps> & Readonly<{}>, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, string, {
        separator: import('./type').BreadcrumbSeparator;
        path: string;
        showSeparator: boolean;
        droplist: import('./type').BreadcrumbRoute[];
        dropdownProps: import('..').DropdownProps;
    }, {}, string, {}, import('vue').GlobalComponents, import('vue').GlobalDirectives, string, import('vue').ComponentProvideOptions> & import('vue').VNodeProps & import('vue').AllowedComponentProps & import('vue').ComponentCustomProps & (new () => {
        $slots: Readonly<import('./type').BreadcrumbItemSlots> & import('./type').BreadcrumbItemSlots;
    });
    install: (app: App) => void;
};
export { _BreadcrumbItem as BreadcrumbItem };
declare module 'vue' {
    interface GlobalComponents {
        YcBreadcrumb: typeof Breadcrumb;
        YcBreadcrumbItem: typeof _BreadcrumbItem;
    }
}
export default Breadcrumb;
