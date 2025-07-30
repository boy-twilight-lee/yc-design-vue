import { VirtualListProps } from './type';
type __VLS_Props = {
    loading: boolean;
    scrollbar: boolean;
    showFooterOnEmpty: boolean;
    showHeaderOnEmpty: boolean;
    virtualListProps?: VirtualListProps;
};
declare const _default: import('vue').DefineComponent<__VLS_Props, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, string, import('vue').PublicProps, Readonly<__VLS_Props> & Readonly<{}>, {}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {
    virtualListRef: import('vue').CreateComponentPublicInstanceWithMixins<Readonly<{
        virtualListProps: VirtualListProps;
    }> & Readonly<{}>, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, import('vue').PublicProps, {}, false, {}, {}, import('vue').GlobalComponents, import('vue').GlobalDirectives, string, {}, HTMLDivElement, import('vue').ComponentProvideOptions, {
        P: {};
        B: {};
        D: {};
        C: {};
        M: {};
        Defaults: {};
    }, Readonly<{
        virtualListProps: VirtualListProps;
    }> & Readonly<{}>, {}, {}, {}, {}, {}> | null;
    realListRef: import('vue').CreateComponentPublicInstanceWithMixins<Readonly<{
        scrollbar: boolean;
    }> & Readonly<{}>, {
        getScrollRef(): HTMLDivElement | undefined;
    }, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, import('vue').PublicProps, {}, false, {}, {}, import('vue').GlobalComponents, import('vue').GlobalDirectives, string, {}, any, import('vue').ComponentProvideOptions, {
        P: {};
        B: {};
        D: {};
        C: {};
        M: {};
        Defaults: {};
    }, Readonly<{
        scrollbar: boolean;
    }> & Readonly<{}>, {
        getScrollRef(): HTMLDivElement | undefined;
    }, {}, {}, {}, {}> | null;
}, HTMLDivElement>;
export default _default;
