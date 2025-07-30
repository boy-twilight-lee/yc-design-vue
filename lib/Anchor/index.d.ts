import { App } from 'vue';
import { default as _Anchor } from './Anchor.vue';
import { default as _AnchorLink } from './AnchorLink.vue';
export type AnchorInstance = InstanceType<typeof _Anchor>;
export type AnchorLinkInstance = InstanceType<typeof _AnchorLink>;
export * from './type';
declare const Anchor: {
    new (...args: any[]): import('vue').CreateComponentPublicInstanceWithMixins<Readonly<import('./type').AnchorProps> & Readonly<{}>, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, import('vue').PublicProps, {
        smooth: boolean;
        boundary: import('./type').AnchorBoundary;
        changeHash: boolean;
        lineLess: boolean;
        scrollContainer: import('..').TargetContainer;
    }, false, {}, {}, import('vue').GlobalComponents, import('vue').GlobalDirectives, string, {
        listRef: HTMLDivElement;
    }, HTMLDivElement, import('vue').ComponentProvideOptions, {
        P: {};
        B: {};
        D: {};
        C: {};
        M: {};
        Defaults: {};
    }, Readonly<import('./type').AnchorProps> & Readonly<{}>, {}, {}, {}, {}, {
        smooth: boolean;
        boundary: import('./type').AnchorBoundary;
        changeHash: boolean;
        lineLess: boolean;
        scrollContainer: import('..').TargetContainer;
    }>;
    __isFragment?: never;
    __isTeleport?: never;
    __isSuspense?: never;
} & import('vue').ComponentOptionsBase<Readonly<import('./type').AnchorProps> & Readonly<{}>, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, string, {
    smooth: boolean;
    boundary: import('./type').AnchorBoundary;
    changeHash: boolean;
    lineLess: boolean;
    scrollContainer: import('..').TargetContainer;
}, {}, string, {}, import('vue').GlobalComponents, import('vue').GlobalDirectives, string, import('vue').ComponentProvideOptions> & import('vue').VNodeProps & import('vue').AllowedComponentProps & import('vue').ComponentCustomProps & (new () => {
    $slots: Readonly<import('./type').AnchorSlots> & import('./type').AnchorSlots;
}) & {
    link: {
        new (...args: any[]): import('vue').CreateComponentPublicInstanceWithMixins<Readonly<import('./type').AnchorLinkProps> & Readonly<{}>, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, import('vue').PublicProps, {
            title: string;
            href: string;
        }, false, {}, {}, import('vue').GlobalComponents, import('vue').GlobalDirectives, string, {
            linkRef: HTMLAnchorElement;
        }, HTMLDivElement, import('vue').ComponentProvideOptions, {
            P: {};
            B: {};
            D: {};
            C: {};
            M: {};
            Defaults: {};
        }, Readonly<import('./type').AnchorLinkProps> & Readonly<{}>, {}, {}, {}, {}, {
            title: string;
            href: string;
        }>;
        __isFragment?: never;
        __isTeleport?: never;
        __isSuspense?: never;
    } & import('vue').ComponentOptionsBase<Readonly<import('./type').AnchorLinkProps> & Readonly<{}>, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, string, {
        title: string;
        href: string;
    }, {}, string, {}, import('vue').GlobalComponents, import('vue').GlobalDirectives, string, import('vue').ComponentProvideOptions> & import('vue').VNodeProps & import('vue').AllowedComponentProps & import('vue').ComponentCustomProps & (new () => {
        $slots: Readonly<import('./type').AnchorLinkSlots> & import('./type').AnchorLinkSlots;
    });
    install: (app: App) => void;
};
export { _AnchorLink as AnchorLink };
declare module 'vue' {
    interface GlobalComponents {
        YcAnchor: typeof Anchor;
        YcAnchorLink: typeof _AnchorLink;
    }
}
export default Anchor;
