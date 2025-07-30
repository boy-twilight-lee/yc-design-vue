import { toRefs, useSlots, computed, provide, inject, ref } from "vue";
import "../../node_modules/tinycolor2/esm/tinycolor.js";
import "../../_shared/utils/dom.js";
import "../../_shared/utils/time.js";
import { findComponentsFromVnodes } from "../../_shared/utils/vue-utils.js";
import "../../Empty/index.js";
import "../../_shared/icons/_Icon.vue.js";
import TimelineItem from "../TimelineItem.vue.js";
const TIMELINE_CONTEXT_KEY = "timeline-context";
const useContext = () => {
  const provide$1 = (props) => {
    const {
      direction,
      labelPosition,
      reverse,
      mode: _mode
    } = toRefs(props);
    const slots = useSlots();
    const mode = computed(() => {
      if (direction.value == "vertical") {
        return ["left", "right", "alternate"].includes(_mode.value) ? _mode.value : "left";
      }
      {
        return ["top", "bottom", "alternate"].includes(_mode.value) ? _mode.value : "bottom";
      }
    });
    const timelineItems = computed(() => {
      var _a;
      return findComponentsFromVnodes(
        ((_a = slots.default) == null ? void 0 : _a.call(slots)) || [],
        TimelineItem.name
      );
    });
    provide(TIMELINE_CONTEXT_KEY, {
      direction,
      mode,
      labelPosition,
      reverse
    });
    return {
      direction,
      mode,
      timelineItems
    };
  };
  const inject$1 = () => {
    return inject(TIMELINE_CONTEXT_KEY, {
      direction: ref("vertical"),
      mode: ref("left"),
      labelPosition: ref("same"),
      reverse: ref(false)
    });
  };
  return {
    provide: provide$1,
    inject: inject$1
  };
};
export {
  useContext as default
};
