<template>
  <div class="yc-select-dropdown">
    <!--dropdown -->
    <yc-spin
      v-if="loading"
      :loading="loading"
      class="yc-select-dropdown-loading"
    >
      <template v-if="slots['loading-icon']" #icon>
        <component :is="renderSlots('loading-icon')" />
      </template>
    </yc-spin>
    <template v-else>
      <!-- header -->
      <div
        v-if="slots.header && (showHeaderOnEmpty || !isEmpty)"
        class="yc-select-dropdown-header"
      >
        <component :is="renderSlots('header')" />
      </div>
      <!-- 虚拟列表 -->
      <select-virtual-list
        v-if="isVirtualList"
        :virtual-list-props="virtualListProps!"
        ref="virtualListRef"
      />
      <!-- list -->
      <select-real-list v-else :scrollbar="scrollbar" ref="realListRef" />
      <!-- empty -->
      <component v-if="isEmpty" :is="slots.empty || YcEmpty" />
      <!-- footer -->
      <div
        v-if="slots.footer && (showFooterOnEmpty || !isEmpty)"
        class="yc-select-dropdown-footer"
      >
        <component :is="renderSlots('footer')" />
      </div>
    </template>
  </div>
</template>

<script lang="ts" setup>
import { ref, toRefs, computed } from 'vue';
import { VirtualListProps } from './type';
import { unrefElement } from '@shared/utils';
import useContext from './hooks/useContext';
import useScrollReach from '@/components/List/hooks/useScrollReach';
import SelectVirtualList from './SelectVirtualList.vue';
import SelectRealList from './SelectRealList.vue';
import YcSpin from '@/components/Spin';
import YcEmpty from '@/components/Empty';
const props = defineProps<{
  loading: boolean;
  scrollbar: boolean;
  showFooterOnEmpty: boolean;
  showHeaderOnEmpty: boolean;
  virtualListProps?: VirtualListProps;
}>();
const { virtualListProps } = toRefs(props);
// 接收注入
const { slots, options, isEmpty, emits } = useContext().inject();
// realList
const realListRef = ref<InstanceType<typeof SelectRealList>>();
// virtualList
const virtualListRef = ref<HTMLDivElement>();
// 是否是虚拟列表
const isVirtualList = computed(() => {
  if (!virtualListProps.value) {
    return false;
  }
  return (
    virtualListProps.value.itemHeight &&
    (!virtualListProps.value.threshold ||
      (virtualListProps.value.threshold as number) > options.value.length)
  );
});
// 滚动ref
const scrollRef = computed(() => {
  return isVirtualList.value
    ? unrefElement(virtualListRef)
    : realListRef.value?.getScrollRef();
});
// 处理滚动
useScrollReach({
  scrollRef,
  onScroll: (e) => {
    emits('dropdown-scroll', e);
  },
  onReachBottom: (e) => {
    emits('dropdown-reach-bottom', e);
  },
});
// 渲染插槽
const renderSlots = (name: string) => {
  return slots[name];
};
</script>

<style lang="less">
@import './style/select.less';
</style>
