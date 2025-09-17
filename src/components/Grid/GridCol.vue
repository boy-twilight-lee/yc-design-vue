<template>
  <div
    :class="[
      {
        'yc-col': !div,
      },
    ]"
    :style="style"
  >
    <slot />
  </div>
</template>

<script lang="ts" setup>
import { toRefs, computed, CSSProperties } from 'vue';
import { GridColProps, GridColSlots } from './type';
import { getBreakpointValue, valueToPx } from '@shared/utils/dom';
import { isString } from '@shared/utils/is';
import useContext from './hooks/useContext';
defineOptions({
  name: 'Col',
});
defineSlots<GridColSlots>();
const props = withDefaults(defineProps<GridColProps>(), {
  span: 24,
  offset: 0,
});
const { span, order, offset, flex } = toRefs(props);
// 接收注入属性
const { gutter, div, breakpoint } = useContext().inject();
// col-style
const style = computed(() => {
  const curFlex = getBreakpointValue(breakpoint.value, flex.value as string);
  const curSpan = getBreakpointValue(
    breakpoint.value,
    span.value,
    24
  ) as number;
  const curOffset = getBreakpointValue(
    breakpoint.value,
    offset.value,
    0
  ) as number;
  const baseStyle: CSSProperties = {
    padding: `${valueToPx(gutter.value[1] / 2)} ${valueToPx(
      gutter.value[0] / 2
    )}`,
    order: getBreakpointValue(breakpoint.value, order.value as number, 0),
  };
  if (!curFlex) {
    if (!curSpan) {
      return {
        display: 'none',
      };
    }
    return {
      ...baseStyle,
      flex: `0 0 ${(curSpan / 24) * 100}%`,
      marginLeft: `calc(${(curOffset / 24) * 100}%)`,
    };
  }
  let styleFlex = '';
  if (isString(curFlex)) {
    styleFlex = /\d/.test(curFlex) ? `0 0 ${curFlex}` : curFlex;
  } else {
    styleFlex = `${curFlex} 1 0%`;
  }
  return {
    ...baseStyle,
    flex: styleFlex,
  };
});
</script>
