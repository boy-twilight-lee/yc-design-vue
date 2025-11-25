<template>
  <div
    class="yc-grid"
    :style="{
      gap: `${valueToPx(rowGap)} ${valueToPx(colGap)}`,
      gridTemplateColumns: `repeat(${cols}, minmax(0px, 1fr))`,
    }"
  >
    <slot />
  </div>
</template>

<script lang="ts" setup>
import { GridProps, GridSlots } from './type';
import { mediaQueryHandler, valueToPx } from '@shared/utils';
import useContext from './hooks/useContext';
defineOptions({
  name: 'Grid',
});
defineSlots<GridSlots>();
const props = withDefaults(defineProps<GridProps>(), {
  cols: 24,
  rowGap: 0,
  colGap: 0,
  collapsed: false,
  collapsedRows: 1,
});
// 注入
const { breakpoint, cols, rowGap, colGap } = useContext().provide(props);
// 媒体查询管理器
mediaQueryHandler((name) => {
  breakpoint.value = name;
});
</script>

<style lang="less">
@import './style/grid.less';
</style>
