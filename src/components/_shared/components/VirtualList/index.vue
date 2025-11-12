<template>
  <div class="yc-virtual-list-wrapper" ref="scrollContainerRef">
    <div
      :style="{
        height: horizontal ? '100%' : valueToPx(virtualList.getTotalSize()),
        width: horizontal ? valueToPx(virtualList.getTotalSize()) : '100%',
      }"
      class="yc-virtual-list"
    >
      <div
        v-for="v in virtualList.getVirtualItems()"
        :key="<number>v.key"
        :style="{
          height: horizontal ? '100%' : valueToPx(v.size),
          width: horizontal ? valueToPx(v.size) : '100%',
          transform: `translate${horizontal ? 'X' : 'Y'}(${valueToPx(v.start)})`,
        }"
        class="yc-virtual-list-item"
      >
        <slot :data="v" />
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref, toRefs, computed } from 'vue';
import { VirtualListProps, VirtualListSlots } from './type';
import { useVirtualizer } from '@tanstack/vue-virtual';
import { valueToPx, isFunction } from '@shared/utils';
const slots = defineSlots<VirtualListSlots>();
const props = withDefaults(defineProps<VirtualListProps>(), {
  overscan: 15,
  enabled: true,
});
const {
  count,
  debug,
  initialRect,
  overscan,
  horizontal,
  paddingStart,
  paddingEnd,
  scrollPaddingStart,
  scrollPaddingEnd,
  scrollMargin,
  gap,
  indexAttribute,
  initialMeasurementsCache,
  lanes,
  isScrollingResetDelay,
  useScrollendEvent,
  enabled,
  isRtl,
  useAnimationFrameWithResizeObserver,
  initialOffset,
} = toRefs(props);
const {
  estimateSize,
  getItemKey,
  getScrollElement,
  scrollToFn,
  observeElementOffset,
  observeElementRect,
  onChange,
  measureElement,
  rangeExtractor,
} = props;
// 滚动容器引用
const scrollContainerRef = ref<HTMLDivElement>();
// 虚拟滚动条的options
const virtualOptions = computed(() => {
  const options: VirtualListProps = {
    count: count.value,
    debug: debug.value,
    initialRect: initialRect.value,
    overscan: overscan.value,
    horizontal: horizontal.value,
    paddingStart: paddingStart.value,
    paddingEnd: paddingEnd.value,
    scrollPaddingStart: scrollPaddingStart.value,
    scrollPaddingEnd: scrollPaddingEnd.value,
    scrollMargin: scrollMargin.value,
    gap: gap.value,
    indexAttribute: indexAttribute.value,
    initialMeasurementsCache: initialMeasurementsCache.value,
    lanes: lanes.value,
    isScrollingResetDelay: isScrollingResetDelay.value,
    useScrollendEvent: useScrollendEvent.value,
    enabled: enabled.value,
    isRtl: isRtl.value,
    useAnimationFrameWithResizeObserver:
      useAnimationFrameWithResizeObserver.value,
    initialOffset: initialOffset.value,
    getScrollElement: () =>
      getScrollElement?.() || (scrollContainerRef.value as HTMLDivElement),
    estimateSize,
    getItemKey,
    onChange,
    measureElement,
    rangeExtractor,
  };
  if (isFunction(scrollToFn)) {
    options.scrollToFn = scrollToFn;
  }
  if (isFunction(observeElementOffset)) {
    options.observeElementOffset = observeElementOffset;
  }
  if (isFunction(observeElementRect)) {
    options.observeElementRect = observeElementRect;
  }
  return options;
});
// 虚拟列表
const virtualList = useVirtualizer(virtualOptions as any);

defineExpose({
  getScrollRef() {
    return scrollContainerRef.value;
  },
});
</script>

<style lang="less" scoped>
.yc-virtual-list-wrapper {
  overflow: auto;
  .yc-virtual-list {
    position: relative;
    .yc-virtual-list-item {
      overflow: hidden;
      position: absolute;
      left: 0;
      top: 0;
    }
  }
}
</style>
