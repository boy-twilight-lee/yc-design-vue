import { ref, computed, watch } from "vue";
import { useResizeObserver } from "../../node_modules/@vueuse/core/index.js";
import "../../node_modules/tinycolor2/esm/tinycolor.js";
import "../../_shared/utils/dom.js";
import { sleep } from "../../_shared/utils/fn.js";
import "../../_shared/utils/time.js";
import "../../Empty/index.js";
import "../../_shared/icons/_Icon.vue.js";
const useTabsScroll = (params) => {
  const { direction, panes, listRef } = params;
  const isScrollable = ref(false);
  const scrollDis = ref(0);
  const listWidth = ref(0);
  const listHeight = ref(0);
  const containerWidth = ref(0);
  const containerHeight = ref(0);
  const navHeight = ref(0);
  const preDisabled = computed(() => {
    return !scrollDis.value;
  });
  const nextDisabled = computed(() => {
    return direction.value == "horizontal" ? Math.abs(scrollDis.value) + containerWidth.value >= listWidth.value : Math.abs(scrollDis.value) + containerHeight.value >= listHeight.value;
  });
  useResizeObserver(listRef, () => calcScrollable());
  watch(
    () => panes.value.length,
    async () => {
      await sleep(0);
      calcScrollable();
    }
  );
  const getElementSize = () => {
    listHeight.value = listRef.value.scrollHeight;
    listWidth.value = listRef.value.scrollWidth;
    containerWidth.value = listRef.value.parentElement.offsetWidth;
    containerHeight.value = listRef.value.parentElement.offsetHeight;
    navHeight.value = listRef.value.parentElement.parentElement.offsetHeight;
  };
  const calcScrollable = () => {
    getElementSize();
    if (direction.value == "horizontal") {
      isScrollable.value = listWidth.value > containerWidth.value;
    } else {
      isScrollable.value = listHeight.value > containerHeight.value;
    }
  };
  const handleScroll = (type) => {
    getElementSize();
    const containerSize = direction.value === "horizontal" ? containerWidth.value : containerHeight.value;
    const listSize = direction.value === "horizontal" ? listWidth.value : listHeight.value;
    const scrollStep = containerSize * 0.8;
    let newscrollDis = scrollDis.value;
    if (type === "next") {
      newscrollDis = Math.max(
        scrollDis.value - scrollStep,
        containerSize - listSize
      );
    } else {
      newscrollDis = Math.min(scrollDis.value + scrollStep, 0);
    }
    scrollDis.value = newscrollDis;
  };
  return {
    navHeight,
    scrollDis,
    isScrollable,
    preDisabled,
    nextDisabled,
    handleScroll
  };
};
export {
  useTabsScroll as default
};
