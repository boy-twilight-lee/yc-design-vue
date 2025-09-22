import { reactive, Ref, watch, nextTick, computed } from 'vue';
import { Direction } from '@shared/type';
import { useDraggable, valueToPx } from '@shared/utils';

export interface RangeData {
  minLeft: number;
  maxLeft: number;
  minTop: number;
  maxTop: number;
}

export interface PositionData {
  left: number;
  right: number;
  top: number;
  bottom: number;
  transform?: string;
}

export default (params: {
  computedValue: Ref<number>;
  trackRef: Ref<HTMLDivElement | undefined>;
  triggerRef: Ref<HTMLDivElement | undefined>;
  max: Ref<number>;
  min: Ref<number>;
  step: Ref<number>;
  disabled: Ref<boolean>;
  direction: Ref<Direction>;
  normalizeValue: (value: number) => number;
  denormalizeValue: (value: number) => number;
}) => {
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
    denormalizeValue,
  } = params;
  // 处理Button拖动
  const { x, y, isDragging } = useDraggable(triggerRef, {
    disabled,
    onMove() {
      // 给出范围
      const { minTop, maxTop, minLeft, maxLeft } = moveRange;
      let value;
      // 处理不同情况的拖动
      if (direction.value == 'vertical') {
        y.value = y.value > minTop ? minTop : y.value;
        y.value = y.value < maxTop ? maxTop : y.value;
        value = calcValueFromPosition(y.value);
      } else {
        x.value = x.value < minLeft ? minLeft : x.value;
        x.value = x.value > maxLeft ? maxLeft : x.value;
        value = calcValueFromPosition(x.value);
      }
      // value为标准值，需要将其还原
      value = denormalizeValue(value);
      setPositionFromValue(value);
      if (value == computedValue.value) {
        return;
      }
      computedValue.value = value;
    },
  });
  // 标准化最大值
  const normalizeMax = computed(() => normalizeValue(max.value));
  // 标准化step
  const normalizeStep = computed(() => normalizeValue(step.value));
  // 水平情况下的距离
  const position = reactive<PositionData>({
    bottom: 0,
    left: 0,
    top: 0,
    right: 0,
  });
  // 范围
  const moveRange = reactive<RangeData>({
    minLeft: 0,
    maxLeft: 0,
    minTop: 0,
    maxTop: 0,
  });
  // 计算value
  const calcValueFromPosition = (distance: number) => {
    const {
      left: sliderLeft,
      bottom: sliderBottom,
      width: sliderWidth,
      height: sliderHeight,
    } = trackRef.value!.getBoundingClientRect();
    // 计算比例
    const rate =
      direction.value == 'vertical'
        ? ((sliderBottom - distance) / sliderHeight) * normalizeMax.value
        : ((distance - sliderLeft) / sliderWidth) * normalizeMax.value;
    // 处理步长
    return Math.floor(rate / normalizeStep.value) * normalizeStep.value;
  };
  // 计算position
  const calcPositionFromValue = (distance: number) => {
    distance = normalizeValue(distance);
    const {
      left: sliderLeft,
      bottom: sliderBottom,
      width: sliderWidth,
      height: sliderHeight,
    } = trackRef.value!.getBoundingClientRect();
    // 处理步长
    distance = Math.floor(distance / normalizeStep.value) * normalizeStep.value;
    // 计算值
    return direction.value == 'vertical'
      ? sliderBottom - (distance / normalizeMax.value) * sliderHeight
      : (distance / normalizeMax.value) * sliderWidth + sliderLeft;
  };
  // 设置位置
  const setPositionFromValue = (distance: number) => {
    // 处理比例问题
    distance = normalizeValue(distance);
    const { width: sliderWidth, height: sliderHeight } =
      trackRef.value!.getBoundingClientRect();
    // 计算偏移位置
    const translateY =
      (normalizeValue(computedValue.value) / normalizeMax.value) * sliderHeight;
    const translateX =
      (normalizeValue(computedValue.value) / normalizeMax.value) * sliderWidth;
    if (direction.value == 'vertical') {
      position.top = 100 - distance;
      position.bottom = distance;
      position.transform = `translate(-50%,calc(${valueToPx(-translateY)} + 50%))`;
    } else {
      position.left = distance;
      position.right = 100 - distance;
      position.transform = `translate(calc(${valueToPx(translateX)} - 50%),-50%)`;
    }
  };
  // 检测min,max计算范围
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
      immediate: true,
    }
  );
  // 检测computedValue的改变重置位置
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
    position,
  };
};
