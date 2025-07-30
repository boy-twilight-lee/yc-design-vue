import { useScroll } from "../../node_modules/@vueuse/core/index.js";
import "../../node_modules/tinycolor2/esm/tinycolor.js";
import "../../_shared/utils/dom.js";
import { debounce } from "../../_shared/utils/fn.js";
import "../../_shared/utils/time.js";
import "vue";
import "../../Empty/index.js";
import "../../_shared/icons/_Icon.vue.js";
const useScrollReach = (options) => {
  const {
    scrollRef,
    offset,
    onReachBottom,
    onReachLeft,
    onReachRight,
    onReachTop,
    onScroll
  } = options;
  const { arrivedState } = useScroll(scrollRef, {
    onScroll: debounce((e) => {
      onScroll == null ? void 0 : onScroll(e, arrivedState);
      arrivedState.bottom && (onReachBottom == null ? void 0 : onReachBottom(e));
      arrivedState.left && (onReachLeft == null ? void 0 : onReachLeft(e));
      arrivedState.right && (onReachRight == null ? void 0 : onReachRight(e));
      arrivedState.top && (onReachTop == null ? void 0 : onReachTop(e));
    }, 50),
    offset
  });
};
export {
  useScrollReach as default
};
