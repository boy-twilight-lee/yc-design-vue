<template>
  <div
    :class="[
      'yc-scrollbar',
      outerClass,
      {
        'yc-scrollbar-both-track':
          type == 'track' && hasVerticalBar && hashorizontalBar,
        'yc-scrollbar-vertical-track': type == 'track' && hasVerticalBar,
        'yc-scrollbar-horizontal-track': type == 'track' && hashorizontalBar,
        'yc-scrollbar-real': !scrollbar,
      },
    ]"
    :style="outerStyle"
  >
    <div
      :class="['yc-scrollbar-container', $attrs.class]"
      :style="<StyleValue>$attrs.style"
      ref="scrollRef"
      @scroll="handleScroll"
    >
      <div class="yc-scrollbar-content" ref="contentRef">
        <slot />
      </div>
    </div>
    <!-- 纵向滚动条 -->
    <scrollbar-track
      v-if="hasVerticalBar"
      direction="vertical"
      @drag="handleDrag"
      @resize="(val) => (trackWidth = val)"
    />
    <!-- 横向滚动条 -->
    <scrollbar-track
      v-if="hashorizontalBar"
      direction="horizontal"
      @drag="handleDrag"
      @resize="(val) => (trackHeight = val)"
    />
  </div>
</template>

<script lang="ts" setup>
import { ref, computed, toRefs, StyleValue } from 'vue';
import {
  ScrollbarProps,
  ScrollbarEmits,
  ScrollbarSlots,
  ScrollbarExpose,
} from './type';
import { useElementSize, useResizeObserver } from '@shared/utils/vueuse';
import {
  isHorizontallyScrollable,
  isVerticallyScrollable,
} from '@shared/utils/dom';
import ScrollbarTrack from './ScrollbarTrack.vue';
import useContext from './hooks/useContext';
defineOptions({
  name: 'Scrollbar',
  inheritAttrs: false,
});
defineSlots<ScrollbarSlots>();
const props = withDefaults(defineProps<ScrollbarProps>(), {
  type: 'embed',
  outerClass: '',
  outerStyle: () => {
    return {};
  },
  style: () => {
    return {};
  },
  scrollbar: true,
});
const emits = defineEmits<ScrollbarEmits>();
// 解构属性
const { type, scrollbar } = toRefs(props);
// contentRef
const contentRef = ref<HTMLElement>();
// scrollRef
const scrollRef = ref<HTMLDivElement>();
// 获取内容的高度
const contentWidth = ref(0);
const contentHeight = ref(0);
useResizeObserver(contentRef, () => {
  const { offsetWidth, offsetHeight } = contentRef.value as HTMLDivElement;
  contentWidth.value = offsetWidth;
  contentHeight.value = offsetHeight;
});
// 初始化bar
const {
  hasVerticalBar = ref(false),
  hashorizontalBar = ref(false),
  trackHeight = ref(0),
  trackWidth = ref(0),
  scrollWidth,
  scrollHeight,
  curLeft,
  curTop,
  movableLeft,
  movableTop,
} = initScrollbar();
// 处理容器滚动
const handleScroll = (e: Event) => {
  const {
    scrollTop,
    scrollLeft,
    scrollWidth: _scrollWidth,
    scrollHeight: _scrollHeight,
  } = e.target as HTMLDivElement;
  // 触发滚动
  emits('scroll', scrollLeft, scrollTop, e);
  if (!scrollbar.value) {
    return;
  }
  //计算top
  const top =
    (scrollTop / (contentHeight.value - scrollHeight.value)) * movableTop.value;
  curTop.value = top <= movableTop.value ? top : movableTop.value;
  // 计算left
  const left =
    (scrollLeft / (contentWidth.value - scrollWidth.value)) * movableLeft.value;
  curLeft.value = left <= movableLeft.value ? left : movableLeft.value;
};
// 处理滑块拖动
const handleDrag = (isVertical: boolean, value: number) => {
  if (isVertical) {
    curTop.value = value;
    // 计算最大可位移的top
    const maxScrollbarMoveTop = contentHeight.value - scrollHeight.value;
    // 反向计算scrollTop
    const scrollTop = (curTop.value / movableTop.value) * maxScrollbarMoveTop;
    // 设置scrollTop
    scrollRef.value!.scrollTop =
      scrollTop >= maxScrollbarMoveTop ? maxScrollbarMoveTop : scrollTop;
  } else {
    curLeft.value = value;
    // 计算最大可位移的left
    const maxScrollbarMoveLeft = contentWidth.value - scrollWidth.value;
    // 反向计算scrollLeft
    const scrollLeft =
      (curLeft.value / movableLeft.value) * maxScrollbarMoveLeft;
    // 设置scrollLeft
    scrollRef.value!.scrollLeft =
      scrollLeft >= maxScrollbarMoveLeft ? maxScrollbarMoveLeft : scrollLeft;
  }
};
// 初始化scrollbar
function initScrollbar() {
  if (!scrollbar.value)
    return {
      hasVerticalBar: ref(false),
      hashorizontalBar: ref(false),
      trackHeight: ref(0),
      trackWidth: ref(0),
      contentWidth: ref(0),
      contentHeight: ref(0),
      scrollWidth: ref(0),
      scrollHeight: ref(0),
      curLeft: ref(0),
      curTop: ref(0),
      movableLeft: ref(0),
      movableTop: ref(0),
    };
  // 轨道的信息
  const trackWidth = ref<number>(0);
  const trackHeight = ref<number>(0);
  // 获取滚动的高度
  const { width: scrollWidth, height: scrollHeight } = useElementSize(
    scrollRef,
    undefined,
    {
      box: 'border-box',
    }
  );
  // 计算top
  const curTop = ref<number>(0);
  //计算left
  const curLeft = ref<number>(0);
  // 是否有纵向滚动条
  const hasVerticalBar = computed(() => {
    if (!scrollRef.value) return false;
    return (
      contentHeight.value > scrollHeight.value &&
      isVerticallyScrollable(scrollRef.value)
    );
  });
  // 是否有很想滚动条
  const hashorizontalBar = computed(() => {
    if (!scrollRef.value) return false;
    return (
      contentWidth.value > scrollWidth.value &&
      isHorizontallyScrollable(scrollRef.value)
    );
  });
  // 计算滚动条高度
  const thumbHeight = computed(() => {
    if (!hasVerticalBar.value) return 0;
    const height = +(
      (scrollHeight.value * scrollHeight.value) /
      contentHeight.value
    ).toFixed(0);
    return height <= 20 ? 20 : height;
  });
  // 计算滚动条宽度
  const thumbWidth = computed(() => {
    if (!hashorizontalBar.value) return 0;
    const width = +(
      (scrollWidth.value * scrollWidth.value) /
      contentWidth.value
    ).toFixed(0);
    return width <= 20 ? 20 : width;
  });
  // 可移动的top
  const movableTop = computed(() => {
    // 横向track的宽度
    const track = hashorizontalBar.value ? trackHeight.value : 0;
    return scrollHeight.value - thumbHeight.value - track;
  });
  // 可移动的left
  const movableLeft = computed(() => {
    // 纵向track的宽度
    const track = hasVerticalBar.value ? trackWidth.value : 0;
    return scrollWidth.value - thumbWidth.value - track;
  });
  // 提供数据
  useContext().provide({
    curLeft,
    curTop,
    movableLeft,
    movableTop,
    thumbHeight,
    thumbWidth,
    scrollRef,
    isDragging: ref<boolean>(false),
  });
  return {
    hasVerticalBar,
    hashorizontalBar,
    trackWidth,
    trackHeight,
    contentHeight,
    contentWidth,
    scrollHeight,
    scrollWidth,
    movableLeft,
    movableTop,
    curTop,
    curLeft,
  };
}
// 暴露方法
defineExpose<ScrollbarExpose>({
  scrollTo(options: ScrollOptions) {
    scrollRef.value?.scrollTo(options);
  },
  scrollLeft(left: number) {
    scrollRef.value?.scrollTo({
      left,
    });
  },
  scrollTop(top: number) {
    scrollRef.value?.scrollTo({
      top,
    });
  },
  getScrollRef() {
    return scrollRef.value as HTMLDivElement;
  },
});
</script>

<style lang="less">
@import './style/scrollbar.less';
</style>
