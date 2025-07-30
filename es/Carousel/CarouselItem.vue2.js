import { defineComponent, useAttrs, computed, openBlock, createElementBlock, normalizeClass, unref, normalizeStyle, renderSlot } from "vue";
import useContext from "./hooks/useContext.js";
const _sfc_main = /* @__PURE__ */ defineComponent({
  ...{
    name: "CarouselItem"
  },
  __name: "CarouselItem",
  setup(__props) {
    const {
      moveType,
      preIndex,
      computedCurrent,
      direction,
      moveSpeed,
      animationName,
      transitionTimingFunction,
      getValidIndex
    } = useContext().inject();
    const attrs = useAttrs();
    const index = computed(() => attrs.index);
    const slideClass = computed(() => {
      if (animationName.value != "slide" || computedCurrent.value == preIndex.value || preIndex.value != index.value && computedCurrent.value != index.value) {
        return;
      }
      const slideDirection = direction.value == "horizontal" ? "-x" : "-y";
      const slideType = preIndex.value == index.value ? "-out" : "-in";
      const siideMoveType = moveType.value == "positive" ? "" : "-reverse";
      return `yc-carousel-slide${slideDirection}${slideType}${siideMoveType}`;
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", {
        class: normalizeClass([
          "yc-carousel-item",
          slideClass.value,
          {
            "yc-carousel-item-current": index.value == unref(getValidIndex)(unref(computedCurrent)),
            "yc-carousel-item-prev": index.value == unref(getValidIndex)(unref(computedCurrent) - 1),
            "yc-carousel-item-next": index.value == unref(getValidIndex)(unref(computedCurrent) + 1)
          }
        ]),
        style: normalizeStyle({
          transitionTimingFunction: unref(transitionTimingFunction),
          animationTimingFunction: unref(transitionTimingFunction),
          transitionDuration: unref(moveSpeed) + "ms",
          animationDuration: unref(moveSpeed) + "ms"
        })
      }, [
        renderSlot(_ctx.$slots, "default", {}, void 0, true)
      ], 6);
    };
  }
});
export {
  _sfc_main as default
};
