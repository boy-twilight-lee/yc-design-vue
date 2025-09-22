<template>
  <div
    :class="[
      {
        'yc-row': !div,
        'yc-row-wrap': wrap && !div,
        [`yc-row-align-${align}`]: !div,
        [`yc-row-justify-${justify}`]: !div,
      },
    ]"
    :style="{
      margin: `0 ${valueToPx(-gutter[0] / 2)}`,
    }"
  >
    <slot />
  </div>
</template>

<script lang="ts" setup>
import { toRefs } from 'vue';
import { GridRowProps, GridRowSlots } from './type';
import { mediaQueryHandler, valueToPx } from '@shared/utils';
import useContext from './hooks/useContext';
defineOptions({
  name: 'Row',
});
defineSlots<GridRowSlots>();
const props = withDefaults(defineProps<GridRowProps>(), {
  gutter: 0,
  justify: 'start',
  align: 'start',
  div: false,
  wrap: true,
});
const { div, wrap, justify, align } = toRefs(props);
// 注入
const { breakpoint, gutter } = useContext().provide(props);
// 媒体查询管理器
mediaQueryHandler((name) => {
  breakpoint.value = name;
});
</script>

<style lang="less">
@import './style/row.less';
</style>
