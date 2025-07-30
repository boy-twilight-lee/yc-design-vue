import { computed, reactive, watch, nextTick } from "vue";
import { useDraggable } from "../../node_modules/@vueuse/core/index.js";
import "../../node_modules/tinycolor2/esm/tinycolor.js";
import "../../_shared/utils/dom.js";
import { valueToPx } from "../../_shared/utils/fn.js";
import "../../_shared/utils/time.js";
import "../../Empty/index.js";
import "../../_shared/icons/_Icon.vue.js";
const useSliderDraggable = (params) => {
  const {
    trackRef,
    triggerRef,
    computedValue,
    direction,
    max,
    min,
    step,
    disabled,
    normalizeValue,
    denormalizeValue
  } = params;
  const { x, y, isDragging } = useDraggable(triggerRef, {
    disabled,
    onMove() {
      const { minTop, maxTop, minLeft, maxLeft } = moveRange;
      let value;
      if (direction.value == "vertical") {
        y.value = y.value > minTop ? minTop : y.value;
        y.value = y.value < maxTop ? maxTop : y.value;
        value = calcValueFromPosition(y.value);
      } else {
        x.value = x.value < minLeft ? minLeft : x.value;
        x.value = x.value > maxLeft ? maxLeft : x.value;
        value = calcValueFromPosition(x.value);
      }
      value = denormalizeValue(value);
      setPositionFromValue(value);
      if (value == computedValue.value) {
        return;
      }
      computedValue.value = value;
    }
  });
  const normalizeMax = computed(() => normalizeValue(max.value));
  const normalizeStep = computed(() => normalizeValue(step.value));
  const position = reactive({
    bottom: 0,
    left: 0,
    top: 0,
    right: 0
  });
  const moveRange = reactive({
    minLeft: 0,
    maxLeft: 0,
    minTop: 0,
    maxTop: 0
  });
  const calcValueFromPosition = (distance) => {
    const {
      left: sliderLeft,
      bottom: sliderBottom,
      width: sliderWidth,
      height: sliderHeight
    } = trackRef.value.getBoundingClientRect();
    const rate = direction.value == "vertical" ? (sliderBottom - distance) / sliderHeight * normalizeMax.value : (distance - sliderLeft) / sliderWidth * normalizeMax.value;
    return Math.floor(rate / normalizeStep.value) * normalizeStep.value;
  };
  const calcPositionFromValue = (distance) => {
    distance = normalizeValue(distance);
    const {
      left: sliderLeft,
      bottom: sliderBottom,
      width: sliderWidth,
      height: sliderHeight
    } = trackRef.value.getBoundingClientRect();
    distance = Math.floor(distance / normalizeStep.value) * normalizeStep.value;
    return direction.value == "vertical" ? sliderBottom - distance / normalizeMax.value * sliderHeight : distance / normalizeMax.value * sliderWidth + sliderLeft;
  };
  const setPositionFromValue = (distance) => {
    distance = normalizeValue(distance);
    const { width: sliderWidth, height: sliderHeight } = trackRef.value.getBoundingClientRect();
    const translateY = normalizeValue(computedValue.value) / normalizeMax.value * sliderHeight;
    const translateX = normalizeValue(computedValue.value) / normalizeMax.value * sliderWidth;
    if (direction.value == "vertical") {
      position.top = 100 - distance;
      position.bottom = distance;
      position.transform = `translate(-50%,calc(${valueToPx(-translateY)} + 50%))`;
    } else {
      position.left = distance;
      position.right = 100 - distance;
      position.transform = `translate(calc(${valueToPx(translateX)} - 50%),-50%)`;
    }
  };
  watch(
    [min, max],
    async () => {
      await nextTick();
      moveRange.minTop = calcPositionFromValue(min.value);
      moveRange.maxTop = calcPositionFromValue(max.value);
      moveRange.minLeft = calcPositionFromValue(min.value);
      moveRange.maxLeft = calcPositionFromValue(max.value);
      if (computedValue.value > max.value) {
        computedValue.value = max.value;
      } else if (computedValue.value < min.value) {
        computedValue.value = min.value;
      }
      setPositionFromValue(computedValue.value);
    },
    {
      immediate: true
    }
  );
  watch(
    () => computedValue.value,
    async (v) => {
      if (isDragging.value) {
        return;
      }
      await nextTick();
      setPositionFromValue(v);
    }
  );
  return {
    isDragging,
    position
  };
};
export {
  useSliderDraggable as default
};
