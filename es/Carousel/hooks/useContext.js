import { toRefs, useSlots, computed, ref, provide, inject } from "vue";
import "../../node_modules/tinycolor2/esm/tinycolor.js";
import "../../_shared/utils/dom.js";
import { sleep } from "../../_shared/utils/fn.js";
import "../../_shared/utils/time.js";
import { findComponentsFromVnodes } from "../../_shared/utils/vue-utils.js";
import "../../Empty/index.js";
import "../../_shared/icons/_Icon.vue.js";
import useControlValue from "../../_shared/utils/control.js";
import CarouselItem from "../CarouselItem.vue.js";
const CAROUSEL_CONTEXT_KEY = "carousel-context";
const useContext = () => {
  const provide$1 = (props, emits) => {
    const {
      current,
      defaultCurrent,
      transitionTimingFunction,
      animationName,
      moveSpeed,
      direction,
      showArrow,
      arrowClass,
      autoPlay
    } = toRefs(props);
    const slots = useSlots();
    const carouselItems = computed(() => {
      var _a;
      return findComponentsFromVnodes(
        ((_a = slots.default) == null ? void 0 : _a.call(slots)) || [],
        CarouselItem.name
      );
    });
    const length = computed(() => {
      return carouselItems.value.length;
    });
    const computedCurrent = useControlValue(
      current,
      defaultCurrent.value,
      (val) => {
        emits("update:current", val);
      }
    );
    const moveType = ref("positive");
    const preIndex = ref(computedCurrent.value);
    let timer = null;
    const getValidIndex = (val) => {
      if (val < 0) {
        return length.value - 1;
      }
      return val > length.value ? val % length.value : val;
    };
    const slideTo = async (targetIndex) => {
      if (timer || targetIndex == computedCurrent.value) {
        return;
      }
      moveType.value = targetIndex > computedCurrent.value ? "positive" : "negative";
      preIndex.value = computedCurrent.value;
      computedCurrent.value = getValidIndex(targetIndex);
      emits("change", computedCurrent.value, preIndex.value, true);
      await sleep(moveSpeed.value);
      timer = null;
    };
    provide(CAROUSEL_CONTEXT_KEY, {
      length,
      computedCurrent,
      transitionTimingFunction,
      animationName,
      moveSpeed,
      direction,
      showArrow,
      arrowClass,
      moveType,
      preIndex,
      getValidIndex
    });
    return {
      carouselItems,
      computedCurrent,
      length,
      autoPlay,
      slideTo
    };
  };
  const inject$1 = () => {
    return inject(CAROUSEL_CONTEXT_KEY, {
      length: ref(0),
      computedCurrent: ref(1),
      transitionTimingFunction: ref("cubic-bezier(0.34, 0.69, 0.1, 1)"),
      animationName: ref("slide"),
      moveSpeed: ref(500),
      direction: ref("horizontal"),
      showArrow: ref("always"),
      arrowClass: ref(""),
      preIndex: ref(0),
      moveType: ref("positive"),
      getValidIndex: () => 0
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
