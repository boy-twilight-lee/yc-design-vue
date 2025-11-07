import { App } from 'vue';
import _Timeline from './Timeline.vue';
import _TimelineItem from './TimelineItem.vue';

export type TimelineInstance = InstanceType<typeof _Timeline>;
export type TimelineItemInstance = InstanceType<typeof _TimelineItem>;
export * from './type';

const Timeline = Object.assign(_Timeline, {
  item: _TimelineItem,
  install: (app: App) => {
    app.component('Yc' + _Timeline.name, _Timeline);
    app.component('Yc' + _TimelineItem.name, _TimelineItem);
  },
});

export { _TimelineItem as TimelineItem };

declare module 'vue' {
  interface GlobalComponents {
    YcTimeline: typeof Timeline;
    YcTimelineItem: typeof _TimelineItem;
  }
}

export default Timeline;
