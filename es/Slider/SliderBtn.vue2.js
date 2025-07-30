import { defineComponent, toRefs, ref, computed, watch, openBlock, createBlock, unref, isRef, withCtx, createElementVNode, normalizeStyle } from "vue";
import useContext from "./hooks/useContext.js";
import useSliderDraggable from "./hooks/useSliderDraggable.js";
import Tooltip from "../Tooltip/index.js";
import "../node_modules/tinycolor2/esm/tinycolor.js";
import "../_shared/utils/dom.js";
import "../_shared/utils/time.js";
import "../Empty/index.js";
import "../_shared/icons/_Icon.vue.js";
import useControlValue from "../_shared/utils/control.js";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "SliderBtn",
  props: {
    type: {},
    position: {}
  },
  emits: ["update:position"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emits = __emit;
    const { type } = toRefs(props);
    const triggerRef = ref();
    const {
      trackRef,
      min,
      max,
      direction,
      disabled,
      step,
      showTooltip,
      startValue,
      endValue,
      formatTooltip,
      normalizeValue,
      denormalizeValue
    } = useContext().inject();
    const computedValue = computed({
      get() {
        return type.value == "start" ? startValue.value : endValue.value;
      },
      set(val) {
        if (type.value == "start") {
          startValue.value = val;
        } else {
          endValue.value = val;
        }
      }
    });
    const { position, isDragging } = useSliderDraggable({
      trackRef,
      triggerRef,
      computedValue,
      direction,
      step,
      min,
      max,
      disabled,
      denormalizeValue,
      normalizeValue
    });
    const computedVisible = useControlValue(
      ref(),
      false,
      () => {
      },
      (val) => {
        return isDragging.value || val;
      }
    );
    watch(position, () => {
      emits("update:position", position);
    });
    return (_ctx, _cache) => {
      return openBlock(), createBlock(unref(Tooltip), {
        "popup-visible": unref(computedVisible),
        "onUpdate:popupVisible": _cache[0] || (_cache[0] = ($event) => isRef(computedVisible) ? computedVisible.value = $event : null),
        disabled: !unref(showTooltip),
        position: unref(direction) == "vertical" ? "right" : "bottom",
        content: unref(formatTooltip) ? unref(formatTooltip)(computedValue.value) : String(computedValue.value)
      }, {
        default: withCtx(() => [
          createElementVNode("div", {
            class: "yc-slider-btn",
            ref_key: "triggerRef",
            ref: triggerRef,
            style: normalizeStyle({
              transform: unref(position).transform
            })
          }, null, 4)
        ]),
        _: 1
      }, 8, ["popup-visible", "disabled", "position", "content"]);
    };
  }
});
export {
  _sfc_main as default
};
