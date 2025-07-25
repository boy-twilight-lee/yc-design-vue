<template>
  <div
    :class="[
      'yc-list-wrapper',
      `yc-list-size-${size}`,
      {
        'yc-list-bordered': bordered,
        'yc-list-hoverable': hoverable,
        'yc-list-split': split,
      },
    ]"
  >
    <yc-spin :loading="loading" class="yc-list-spin">
      <!-- 渲染真实列表 -->
      <yc-scrollbar
        :scrollbar="scrollbar"
        :style="{
          maxHeight: isVirtualList ? '' : valueToPx(maxHeight),
        }"
        class="yc-list"
        ref="realListRef"
        @scroll="(_, _1, e) => emits('scroll', e)"
      >
        <div class="yc-list-content-wrapper">
          <div v-if="$slots.header" class="yc-list-header">
            <slot name="header" />
          </div>
          <!-- 渲染虚拟列表 -->
          <virtual-list
            v-if="isVirtualList"
            :data="data"
            :virtual-list-props="virtualListProps"
            :offset-bottom="bottomOffset"
            :style="{
              maxHeight: valueToPx(maxHeight),
            }"
            ref="virtualListRef"
            @scroll="(e) => emits('scroll', e)"
          >
            <template v-if="$slots.item" #item="scope">
              <slot name="item" v-bind="scope" />
            </template>
          </virtual-list>
          <!-- 渲染普通列表 -->
          <div v-else role="list" class="yc-list-content">
            <!-- slot -->
            <slot />
            <!-- grid -->
            <yc-grid v-if="gridProps" v-bind="gridProps">
              <yc-grid-item v-for="(item, i) in curList" :key="i">
                <slot name="item" :index="i" :item="item" />
              </yc-grid-item>
            </yc-grid>
            <!-- list -->
            <template v-else>
              <template v-for="(item, i) in curList" :key="i">
                <slot name="item" :index="i" :item="item" />
              </template>
            </template>
          </div>
          <!-- empty -->
          <component
            v-if="!$slots.default && !curList.length"
            :is="$slots.empty || renderEmpty('List')"
          />
          <!-- footer -->
          <div v-if="$slots.footer" class="yc-list-footer">
            <slot name="footer" />
          </div>
          <!-- loading -->
          <yc-list-item
            v-if="$slots['scroll-loading'] && isBottomReached"
            class="yc-list-scroll-loading"
          >
            <slot name="scroll-loading" />
          </yc-list-item>
        </div>
      </yc-scrollbar>
      <!-- 分页 -->
      <yc-pagination
        v-if="paginationProps"
        v-model:current="computedCurrent"
        v-model:page-size="computedPageSize"
        :total="paginationProps?.total || 0"
      />
    </yc-spin>
  </div>
</template>

<script lang="ts" setup>
import { ref, toRefs, computed } from 'vue';
import { ListProps, ListEmits, ListSlots } from './type';

import {
  getGlobalConfig,
  useControlValue,
  valueToPx,
  unrefElement,
} from '@shared/utils';
import useScrollReach from './hooks/useScrollReach';
import YcSpin from '@/components/Spin';
import {
  default as YcScrollbar,
  ScrollbarInstance,
} from '@/components/Scrollbar';
import YcPagination from '@/components/Pagination';
import { default as YcGrid, GridItem as YcGridItem } from '@/components/Grid';
import VirtualList from './ListVirtual.vue';
import YcListItem from './ListItem.vue';
defineOptions({
  name: 'List',
});
defineSlots<ListSlots>();
const props = withDefaults(defineProps<ListProps>(), {
  data: () => [],
  size: undefined,
  bordered: true,
  split: true,
  loading: false,
  hoverable: false,
  paginationProps: undefined,
  gridProps: undefined,
  maxHeight: undefined,
  virtualListProps: undefined,
  bottomOffset: 0,
  scrollbar: true,
});
const emits = defineEmits<ListEmits>();
const { data, paginationProps, virtualListProps, gridProps, bottomOffset } =
  toRefs(props);
// 注入全局属性
const { size, renderEmpty } = getGlobalConfig(props);
// 是否触底
const isBottomReached = ref<boolean>(false);
// scrollbar
const realListRef = ref<ScrollbarInstance>();
// virtualListRef
const virtualListRef = ref<HTMLDivElement>();
// 是否是虚拟列表
const isVirtualList = computed(() => {
  if (!virtualListProps.value || paginationProps.value || gridProps.value) {
    return false;
  }
  return (
    virtualListProps.value.itemHeight &&
    (!virtualListProps.value.threshold ||
      (virtualListProps.value.threshold as number) > data.value.length)
  );
});
// scrollRef
const scrollRef = computed(() =>
  isVirtualList.value
    ? unrefElement(virtualListRef)
    : realListRef.value?.getScrollRef()
);
// 处理滚动
useScrollReach({
  scrollRef,
  offset: {
    bottom: bottomOffset.value,
  },
  onScroll: (_e, arriveStauts) => {
    isBottomReached.value = arriveStauts.bottom;
  },
  onReachBottom: (e) => {
    emits('reach-bottom', e);
  },
});
// current
const current = computed(() => paginationProps.value?.current);
// 计算的current
const computedCurrent = useControlValue<number>(
  current,
  paginationProps.value?.current || 1,
  (val) => {
    emits('page-change', val);
  }
);
// page-size
const pageSize = computed(() => paginationProps.value?.pageSize);
// 计算的pageSize
const computedPageSize = useControlValue<number>(
  pageSize,
  paginationProps.value?.defaultPageSize || 10,
  (val) => {
    computedCurrent.value = 1;
    emits('page-change', val);
  }
);
// 当前展示的data
const curList = computed(() => {
  if (!paginationProps.value) return data.value;
  return data.value.slice(
    (computedCurrent.value - 1) * computedPageSize.value,
    computedCurrent.value * computedPageSize.value
  );
});
</script>

<style lang="less" scoped>
@import './style/list.less';
</style>
