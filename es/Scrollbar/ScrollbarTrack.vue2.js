import { defineComponent, toRefs, computed, ref, watchEffect, openBlock, createElementBlock, normalizeClass, unref, withModifiers, createElementVNode, normalizeStyle } from "vue";
import { useResizeObserver, useDraggable } from "../node_modules/@vueuse/core/index.js";
import "../node_modules/tinycolor2/esm/tinycolor.js";
import "../_shared/utils/dom.js";
import { valueToPx } from "../_shared/utils/fn.js";
import "../_shared/utils/time.js";
import "../Empty/index.js";
import "../_shared/icons/_Icon.vue.js";
import useContext from "./hooks/useContext.js";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "ScrollbarTrack",
  props: {
    direction: { default: "vertical" }
  },
  emits: ["drag", "resize"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emits = __emit;
    const { direction } = toRefs(props);
    const {
      scrollRef,
      thumbHeight,
      thumbWidth,
      movableLeft,
      movableTop,
      curTop,
      curLeft,
      isDragging: _isDragging
    } = useContext().inject();
    const isVertical = computed(() => direction.value == "vertical");
    const thmubStyle = computed(() => {
      return isVertical.value ? {
        height: valueToPx(thumbHeight.value),
        transform: `translateY(${valueToPx(curTop.value)})`
      } : {
        width: valueToPx(thumbWidth.value),
        transform: `translateX(${valueToPx(curLeft.value)})`
      };
    });
    const trackRef = ref();
    useResizeObserver(trackRef, () => {
      const { width, height } = trackRef.value.getBoundingClientRect();
      emits("resize", isVertical.value ? width : height);
    });
    const dragRef = ref();
    const { x, y, isDragging } = useDraggable(dragRef, {
      onMove() {
        const { left, top } = scrollRef.value.getBoundingClientRect();
        const minTop = top;
        const maxTop = movableTop.value + minTop;
        const minLeft = left;
        const maxLeft = movableLeft.value + minLeft;
        if (isVertical.value) {
          y.value = y.value <= minTop ? minTop : y.value;
          y.value = y.value >= maxTop ? maxTop : y.value;
          emits("drag", true, y.value - minTop);
        } else {
          x.value = x.value <= minLeft ? minLeft : x.value;
          x.value = x.value >= maxLeft ? maxLeft : x.value;
          emits("drag", false, x.value - minLeft);
        }
      }
    });
    watchEffect(() => {
      _isDragging.value = isDragging.value;
    });
    const handleClick = (e) => {
      const { offsetX, offsetY } = e;
      if (isVertical.value) {
        const moveDistance = curTop.value < offsetY ? movableTop.value / 9 : -movableTop.value / 9;
        let value = curTop.value + moveDistance;
        value = value <= 0 ? 0 : value;
        value = value > movableTop.value ? movableTop.value : value;
        emits("drag", true, value);
      } else {
        const moveDistance = curLeft.value < offsetX ? movableLeft.value / 9 : -movableLeft.value / 9;
        let value = curLeft.value + moveDistance;
        value = value <= 0 ? 0 : value;
        value = value > movableLeft.value ? movableLeft.value : value;
        emits("drag", false, value);
      }
    };
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", {
        class: normalizeClass(["yc-scrollbar-track", `yc-scrollbar-track-direction-${unref(direction)}`]),
        ref_key: "trackRef",
        ref: trackRef,
        onClick: withModifiers(handleClick, ["self"])
      }, [
        createElementVNode("div", {
          class: normalizeClass([
            "yc-scrollbar-thumb",
            `yc-scrollbar-thumb-direction-${unref(direction)}`
          ]),
          style: normalizeStyle(thmubStyle.value),
          ref_key: "dragRef",
          ref: dragRef
        }, [
          createElementVNode("div", {
            class: normalizeClass([
              "yc-scrollbar-thumb-bar",
              {
                "yc-scrollbar-thumb-bar-dragging": unref(isDragging),
                "yc-scrollbar-thumb-bar-hover": !unref(isDragging) && unref(_isDragging)
              }
            ])
          }, null, 2)
        ], 6)
      ], 2);
    };
  }
});
export {
  _sfc_main as default
};
