import { defineComponent, toRefs, openBlock, createElementBlock, normalizeClass, unref, Fragment, renderList, normalizeStyle, toDisplayString } from "vue";
import useContext from "./hooks/useContext.js";
const _hoisted_1 = ["onClick"];
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "SliderTicks",
  props: {
    type: {},
    data: {}
  },
  emits: ["labelClick"],
  setup(__props) {
    const props = __props;
    const { type } = toRefs(props);
    const { min, max, startValue, endValue, range, direction, normalizeValue } = useContext().inject();
    const getPosition = (value) => {
      const curValue = normalizeValue(value);
      if (type.value == "ticks") {
        return `calc(${curValue}% - 0.5px)`;
      } else if (type.value == "dots") {
        return `calc(${curValue}% - 4px)`;
      } else {
        return `calc(${curValue}% - 7px)`;
      }
    };
    const isInRange = (value) => {
      const curValue = normalizeValue(value);
      const start = normalizeValue(startValue.value);
      const end = normalizeValue(endValue.value);
      const rangeMin = normalizeValue(min.value);
      const rangeMax = normalizeValue(max.value);
      if (!range.value) {
        return start >= curValue && curValue >= rangeMin && curValue <= rangeMax;
      } else {
        const minVal = Math.min(start, end);
        const maxVal = Math.max(start, end);
        return curValue >= minVal && curValue <= maxVal;
      }
    };
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", {
        class: normalizeClass([`yc-slider-${unref(type)}`])
      }, [
        (openBlock(true), createElementBlock(Fragment, null, renderList(_ctx.data, ({ label, value }) => {
          return openBlock(), createElementBlock("span", {
            key: value,
            style: normalizeStyle({
              left: unref(direction) == "horizontal" ? getPosition(value) : "",
              bottom: unref(direction) == "vertical" ? getPosition(value) : ""
            }),
            class: normalizeClass([
              `yc-slider-${unref(type).replace("s", "")}`,
              {
                "yc-slider-dot-active": unref(type) == "dots" && isInRange(value),
                "yc-slider-tick-active": unref(type) == "ticks" && isInRange(value)
              }
            ]),
            onClick: ($event) => _ctx.$emit("labelClick", value)
          }, toDisplayString(unref(type) == "marks" ? label : ""), 15, _hoisted_1);
        }), 128))
      ], 2);
    };
  }
});
export {
  _sfc_main as default
};
