import { App } from 'vue';
import { default as _Typography } from './Typography.vue';
import { default as _TypographyParagraph } from './TypographyParagraph.vue';
import { default as _TypographyTitle } from './TypographyTitle.vue';
import { default as _TypographyText } from './TypographyText.vue';
export type TypographyInstance = InstanceType<typeof _Typography>;
export type TypographyParagraphInstance = InstanceType<typeof _TypographyParagraph>;
export type TypographyTitleInstance = InstanceType<typeof _TypographyTitle>;
export type TypographyTextInstance = InstanceType<typeof _TypographyText>;
export * from './type';
declare const Typography: {
    new (...args: any[]): import('vue').CreateComponentPublicInstanceWithMixins<Readonly<{}> & Readonly<{}>, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, import('vue').PublicProps, {}, true, {}, {}, import('vue').GlobalComponents, import('vue').GlobalDirectives, string, {}, HTMLElement, import('vue').ComponentProvideOptions, {
        P: {};
        B: {};
        D: {};
        C: {};
        M: {};
        Defaults: {};
    }, Readonly<{}> & Readonly<{}>, {}, {}, {}, {}, {}>;
    __isFragment?: never;
    __isTeleport?: never;
    __isSuspense?: never;
} & import('vue').ComponentOptionsBase<Readonly<{}> & Readonly<{}>, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, string, {}, {}, string, {}, import('vue').GlobalComponents, import('vue').GlobalDirectives, string, import('vue').ComponentProvideOptions> & import('vue').VNodeProps & import('vue').AllowedComponentProps & import('vue').ComponentCustomProps & (new () => {
    $slots: {
        default?(_: {}): any;
    };
}) & {
    install: (app: App) => void;
};
export { _TypographyParagraph as TypographyParagraph, _TypographyTitle as TypographyTitle, _TypographyText as TypographyText, };
declare module 'vue' {
    interface GlobalComponents {
        YcTypography: typeof Typography;
        YcTypographyParagraph: typeof _TypographyParagraph;
        YcTypographyTitle: typeof _TypographyTitle;
        YcTypographyText: typeof _TypographyText;
    }
}
export default Typography;
