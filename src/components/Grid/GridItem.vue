<template>
  <div v-show="!isCollapsed" class="yc-grid-item" :style="style">
    <slot :overflow="isOverflow" />
  </div>
</template>

<script lang="ts" setup>
import { toRefs, computed, CSSProperties } from 'vue';
import { GridItemProps, GridItemSlots } from './type';
import { getBreakpointValue, valueToPx } from '@shared/utils';
import useContext from './hooks/useContext';
defineOptions({
  name: 'GridItem',
});
defineSlots<GridItemSlots>();
const props = withDefaults(defineProps<GridItemProps>(), {
  span: 1,
  offset: 0,
  suffix: false,
});
const { span: _span, offset: _offset, suffix } = toRefs(props);
// 接收数据
const {
  cols,
  colGap,
  collapsed,
  collapsedRows,
  spanMap,
  breakpoint,
  collectSpan,
} = useContext().inject();
// offset
const offset = computed(() => {
  return getBreakpointValue(breakpoint.value, _offset.value) as number;
});
// span
const span = computed(() => {
  const result =
    (getBreakpointValue(breakpoint.value, _span.value) as number) +
    offset.value;
  return result >= cols.value ? cols.value : result;
});
// 计算style
const style = computed<CSSProperties>(() => {
  const start = suffix.value
    ? cols.value - span.value + 1
    : `span ${span.value}`;
  return {
    gridColumn: `${start} / span ${span.value}`,
    marginLeft: offset.value
      ? `calc(${(100 / span.value) * offset.value}% + ${valueToPx(offset.value * colGap!.value)})`
      : '',
  };
});
// 收集span
const { id } = collectSpan(span, suffix);
// 判断是否溢出
const isOverflow = computed(() => {
  if (!collapsed.value) return false;
  // values
  const values = [...spanMap.values()];
  // suffixspan
  const totalSpan = cols.value * collapsedRows.value;
  // 剩余的非后缀span
  const calcSpan = values
    .filter(({ suffix }) => !suffix)
    .reduce((pre, cur) => pre + cur.span, 0);
  return calcSpan > totalSpan;
});
// 计算是否被折叠
const isCollapsed = computed(() => {
  if (!collapsed.value || suffix.value) return false;
  // values
  const values = [...spanMap.values()];
  // 后缀span
  const suffixSpan = values
    .filter(({ suffix }) => suffix)
    .reduce((pre, { span }) => pre + span, 0);
  // suffixspan
  const totalSpan = cols.value * collapsedRows.value;
  // 剩余的非后缀span
  const calcSpan = values.filter(({ suffix }) => !suffix);
  // 计算Item当前总的span
  let curSpan = 0;
  for (let { id: _id, span } of calcSpan) {
    curSpan += span;
    if (_id == id) break;
  }
  return curSpan > totalSpan - suffixSpan;
});
</script>
