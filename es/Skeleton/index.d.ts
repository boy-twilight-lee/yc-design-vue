import { App } from 'vue';
import { default as _Skeleton } from './Skeleton.vue';
import { default as _SkeletonShape } from './SkeletonShape.vue';
import { default as _SkeletonLine } from './SkeletonLine.vue';
export type SkeletonInstance = InstanceType<typeof _Skeleton>;
export type SkeletonShapeInstance = InstanceType<typeof _SkeletonShape>;
export type SkeletonLineInstance = InstanceType<typeof _SkeletonLine>;
export * from './type';
declare const Skeleton: {
    new (...args: any[]): import('vue').CreateComponentPublicInstanceWithMixins<Readonly<import('./type').SkeletonProps> & Readonly<{}>, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, import('vue').PublicProps, {
        loading: boolean;
        animation: boolean;
    }, false, {}, {}, import('vue').GlobalComponents, import('vue').GlobalDirectives, string, {}, HTMLDivElement, import('vue').ComponentProvideOptions, {
        P: {};
        B: {};
        D: {};
        C: {};
        M: {};
        Defaults: {};
    }, Readonly<import('./type').SkeletonProps> & Readonly<{}>, {}, {}, {}, {}, {
        loading: boolean;
        animation: boolean;
    }>;
    __isFragment?: never;
    __isTeleport?: never;
    __isSuspense?: never;
} & import('vue').ComponentOptionsBase<Readonly<import('./type').SkeletonProps> & Readonly<{}>, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, string, {
    loading: boolean;
    animation: boolean;
}, {}, string, {}, import('vue').GlobalComponents, import('vue').GlobalDirectives, string, import('vue').ComponentProvideOptions> & import('vue').VNodeProps & import('vue').AllowedComponentProps & import('vue').ComponentCustomProps & (new () => {
    $slots: Readonly<import('./type').SkeletonSlots> & import('./type').SkeletonSlots;
}) & {
    shape: import('vue').DefineComponent<import('./type').SkeletonShapeProps, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, string, import('vue').PublicProps, Readonly<import('./type').SkeletonShapeProps> & Readonly<{}>, {
        size: import('./type').SkeletonShapeSize;
        shape: import('./type').SkeletonShapeShape;
    }, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {}, HTMLDivElement>;
    line: import('vue').DefineComponent<import('./type').SkeletonLineProps, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, string, import('vue').PublicProps, Readonly<import('./type').SkeletonLineProps> & Readonly<{}>, {
        rows: number;
        lineHeight: number;
        widths: number[];
        lineSpacing: number;
    }, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {}, HTMLDivElement>;
    install: (app: App) => void;
};
export { _SkeletonShape as SkeletonShape, _SkeletonLine as SkeletonLine };
declare module 'vue' {
    interface GlobalComponents {
        YcSkeleton: typeof Skeleton;
        YcSkeletonShape: typeof _SkeletonShape;
        YcSkeletonLine: typeof _SkeletonLine;
    }
}
export default Skeleton;
