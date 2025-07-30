import { defineComponent, toRefs, computed, openBlock, createElementBlock, normalizeClass, unref, createVNode } from "vue";
import "../node_modules/tinycolor2/esm/tinycolor.js";
import "../_shared/utils/dom.js";
import "../_shared/utils/time.js";
import "../Empty/index.js";
import "../_shared/icons/_Icon.vue.js";
import _sfc_main$1 from "../_shared/icons/IconArrowRight.vue.js";
import useContext from "./hooks/useContext.js";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "CarouselArrow",
  props: {
    type: {}
  },
  emits: ["change"],
  setup(__props) {
    const props = __props;
    const { type } = toRefs(props);
    const { showArrow, direction, arrowClass, computedCurrent } = useContext().inject();
    const rotate = computed(() => {
      if (type.value == "next") {
        return direction.value == "horizontal" ? 0 : 90;
      } else {
        return direction.value == "horizontal" ? 180 : -90;
      }
    });
    const positionClass = computed(() => {
      if (type.value == "next") {
        return direction.value == "horizontal" ? "yc-carousel-arrow-right" : "yc-carousel-arrow-bottom";
      } else {
        return direction.value == "horizontal" ? "yc-carousel-arrow-left" : "yc-carousel-arrow-top";
      }
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", {
        class: normalizeClass([
          "yc-carousel-arrow",
          positionClass.value,
          unref(arrowClass),
          {
            "yc-carousel-arrow-show-hover": unref(showArrow) == "hover"
          }
        ]),
        onClick: _cache[0] || (_cache[0] = ($event) => _ctx.$emit(
          "change",
          unref(type) == "next" ? unref(computedCurrent) + 1 : unref(computedCurrent) - 1
        ))
      }, [
        createVNode(unref(_sfc_main$1), { rotate: rotate.value }, null, 8, ["rotate"])
      ], 2);
    };
  }
});
export {
  _sfc_main as default
};
