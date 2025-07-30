import _Timeline from "./Timeline.vue.js";
import TimelineItem from "./TimelineItem.vue.js";
const Timeline = Object.assign(_Timeline, {
  item: TimelineItem,
  install: (app) => {
    app.component("Yc" + _Timeline.name, _Timeline);
    app.component("Yc" + TimelineItem.name, TimelineItem);
  }
});
export {
  TimelineItem,
  Timeline as default
};
