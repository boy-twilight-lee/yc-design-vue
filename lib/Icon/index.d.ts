import { App } from 'vue';
import { IconFontOptions } from './type';
import { default as _Icon } from './index.vue';
export type IconInstance = InstanceType<typeof _Icon>;
export * from './type';
declare const Icon: {
    new (...args: any[]): import('vue').CreateComponentPublicInstanceWithMixins<Readonly<import('./type').IconProps> & Readonly<{}>, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, import('vue').PublicProps, {
        spin: boolean;
    }, false, {}, {}, import('vue').GlobalComponents, import('vue').GlobalDirectives, string, {}, SVGSVGElement, import('vue').ComponentProvideOptions, {
        P: {};
        B: {};
        D: {};
        C: {};
        M: {};
        Defaults: {};
    }, Readonly<import('./type').IconProps> & Readonly<{}>, {}, {}, {}, {}, {
        spin: boolean;
    }>;
    __isFragment?: never;
    __isTeleport?: never;
    __isSuspense?: never;
} & import('vue').ComponentOptionsBase<Readonly<import('./type').IconProps> & Readonly<{}>, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, string, {
    spin: boolean;
}, {}, string, {}, import('vue').GlobalComponents, import('vue').GlobalDirectives, string, import('vue').ComponentProvideOptions> & import('vue').VNodeProps & import('vue').AllowedComponentProps & import('vue').ComponentCustomProps & (new () => {
    $slots: Readonly<import('./type').IconSlots> & import('./type').IconSlots;
}) & {
    install: (app: App) => void;
    urlCache: Map<string, string>;
    addFromIconFontCn(options: IconFontOptions): import('vue').VNode<import('vue').RendererNode, import('vue').RendererElement, {
        [key: string]: any;
    }>;
};
declare module 'vue' {
    interface GlobalComponents {
        YcIcon: typeof Icon;
    }
}
export default Icon;
