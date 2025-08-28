<template>
  <div class="yc-tabs-nav-ink" :style="sliderStyle"></div>
</template>

<script lang="ts" setup>
import { computed, toRefs } from 'vue';
import { valueToPx, isUndefined } from '@shared/utils';
import { ObjectData } from '@shared/type';
import useContext from './hooks/useContext';
const props = defineProps<{
  curIndex: number;
  panes: ObjectData[];
}>();
const { curIndex, panes } = toRefs(props);
// 接收注入
const { titleRefs, listRef, direction, editable } = useContext().inject();
// 计算sliderWidth
const sliderStyle = computed(() => {
  // 当前的pane
  const curPane = panes.value[curIndex.value];
  // 计算关闭图标的宽度
  const closeWidth =
    editable.value && (isUndefined(curPane.closable) || curPane.closable)
      ? 22
      : 0;
  // 当前的title
  const titleRef = titleRefs.value[curIndex.value];
  // 获取坐标信息
  const { left, top } = listRef.value?.getBoundingClientRect?.() ?? {
    left: 0,
    top: 0,
  };
  const { scrollLeft, scrollTop } = listRef.value ?? {
    scrollLeft: 0,
    scrollTop: 0,
  };
  const { left: curLeft, top: curTop } =
    titleRef?.getBoundingClientRect?.() ?? {
      left: 0,
      top: 0,
    };
  const { offsetHeight, offsetWidth } = titleRef ?? {
    offsetHeight: 0,
    offsetWidth: 0,
  };
  // 分方向计算
  if (direction.value == 'horizontal') {
    return {
      width: valueToPx(offsetWidth + closeWidth),
      left: valueToPx(curLeft - left + scrollLeft),
    };
  } else {
    return {
      height: valueToPx(offsetHeight),
      top: valueToPx(curTop - top + scrollTop),
    };
  }
});
</script>

<style lang="less" scoped>
@import './style/tabs.less';
</style>
