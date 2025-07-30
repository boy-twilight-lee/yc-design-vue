import { App } from 'vue';
import { default as _Timeline } from './Timeline.vue';
import { default as _TimelineItem } from './TimelineItem.vue';
export type TimelineInstance = InstanceType<typeof _Timeline>;
export type TimelineItemInstance = InstanceType<typeof _TimelineItem>;
export * from './type';
declare const Timeline: {
    new (...args: any[]): import('vue').CreateComponentPublicInstanceWithMixins<Readonly<import('./type').TimelineProps> & Readonly<{}>, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, import('vue').PublicProps, {
        reverse: boolean;
        mode: import('./type').TimelineMode;
        direction: import('..').Direction;
        labelPosition: import('./type').TimelineLabelPosition;
        pending: boolean | string;
    }, false, {}, {}, import('vue').GlobalComponents, import('vue').GlobalDirectives, string, {}, HTMLDivElement, import('vue').ComponentProvideOptions, {
        P: {};
        B: {};
        D: {};
        C: {};
        M: {};
        Defaults: {};
    }, Readonly<import('./type').TimelineProps> & Readonly<{}>, {}, {}, {}, {}, {
        reverse: boolean;
        mode: import('./type').TimelineMode;
        direction: import('..').Direction;
        labelPosition: import('./type').TimelineLabelPosition;
        pending: boolean | string;
    }>;
    __isFragment?: never;
    __isTeleport?: never;
    __isSuspense?: never;
} & import('vue').ComponentOptionsBase<Readonly<import('./type').TimelineProps> & Readonly<{}>, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, string, {
    reverse: boolean;
    mode: import('./type').TimelineMode;
    direction: import('..').Direction;
    labelPosition: import('./type').TimelineLabelPosition;
    pending: boolean | string;
}, {}, string, {}, import('vue').GlobalComponents, import('vue').GlobalDirectives, string, import('vue').ComponentProvideOptions> & import('vue').VNodeProps & import('vue').AllowedComponentProps & import('vue').ComponentCustomProps & (new () => {
    $slots: Readonly<import('./type').TimelineSlots> & import('./type').TimelineSlots;
}) & {
    item: {
        new (...args: any[]): import('vue').CreateComponentPublicInstanceWithMixins<Readonly<import('./type').TimelineItemProps> & Readonly<{}>, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, import('vue').PublicProps, {
            position: import('./type').TimelinePositon;
            label: string;
            dotColor: string;
            dotType: import('./type').TimelineDotType;
            lineType: import('./type').TimelineLineType;
            lineColor: string;
            isGhost: boolean;
        }, false, {}, {}, import('vue').GlobalComponents, import('vue').GlobalDirectives, string, {}, HTMLDivElement, import('vue').ComponentProvideOptions, {
            P: {};
            B: {};
            D: {};
            C: {};
            M: {};
            Defaults: {};
        }, Readonly<import('./type').TimelineItemProps> & Readonly<{}>, {}, {}, {}, {}, {
            position: import('./type').TimelinePositon;
            label: string;
            dotColor: string;
            dotType: import('./type').TimelineDotType;
            lineType: import('./type').TimelineLineType;
            lineColor: string;
            isGhost: boolean;
        }>;
        __isFragment?: never;
        __isTeleport?: never;
        __isSuspense?: never;
    } & import('vue').ComponentOptionsBase<Readonly<import('./type').TimelineItemProps> & Readonly<{}>, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, string, {
        position: import('./type').TimelinePositon;
        label: string;
        dotColor: string;
        dotType: import('./type').TimelineDotType;
        lineType: import('./type').TimelineLineType;
        lineColor: string;
        isGhost: boolean;
    }, {}, string, {}, import('vue').GlobalComponents, import('vue').GlobalDirectives, string, import('vue').ComponentProvideOptions> & import('vue').VNodeProps & import('vue').AllowedComponentProps & import('vue').ComponentCustomProps & (new () => {
        $slots: Readonly<import('./type').TimelineItemSlots> & import('./type').TimelineItemSlots;
    });
    install: (app: App) => void;
};
export { _TimelineItem as TimelineItem };
declare module 'vue' {
    interface GlobalComponents {
        YcTimeline: typeof Timeline;
        YcTimelineItem: typeof _TimelineItem;
    }
}
export default Timeline;
