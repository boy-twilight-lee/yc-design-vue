<template>
  <div
    :class="[
      'yc-tabs',
      `yc-tabs-${direction}`,
      `yc-tabs-type-${type}`,
      `yc-tabs-size-${size}`,
      {
        'yc-tabs-animation': animation,
        'yc-tabs-justify': direction == 'horizontal' && justify,
        'yc-tabs-no-padding':
          headerPadding &&
          ['line', 'text'].includes(type) &&
          props.direction === 'horizontal',
        [`yc-tabs-${position}`]: position,
      },
    ]"
  >
    <div class="yc-tabs-nav">
      <!-- pre -->
      <tab-button
        v-if="isScrollable"
        :disabled="preDisabled"
        :direction="direction == 'horizontal' ? 'left' : 'up'"
        @click="handleScroll('pre')"
      >
        <icon-arrow-right
          :rotate="direction == 'horizontal' ? 180 : -90"
          :size="14"
        />
      </tab-button>
      <!-- list -->
      <div
        :class="[
          'yc-tabs-nav-tab',
          {
            'yc-tabs-nav-tab-scroll': isScrollable,
          },
        ]"
      >
        <div
          class="yc-tabs-nav-tab-list"
          :style="{
            transform: `translate${direction == 'horizontal' ? 'X' : 'Y'}(${valueToPx(scrollDis)})`,
          }"
          ref="listRef"
        >
          <tabs-tab
            v-for="(item, i) in panes"
            :key="i"
            :index="i"
            :node="item"
          />
          <!-- ink -->
          <tabs-nav-ink
            v-if="type == 'line'"
            :cur-index="curIndex"
            :panes="panes"
          />
        </div>
      </div>
      <!-- next -->
      <tab-button
        v-if="isScrollable"
        :disabled="nextDisabled"
        :direction="direction == 'horizontal' ? 'right' : 'down'"
        @click="handleScroll('next')"
      >
        <icon-arrow-right
          :rotate="direction == 'horizontal' ? 0 : 90"
          :size="14"
        />
      </tab-button>
      <!-- 新增按钮 -->
      <tab-button v-if="showAddButton" type="add" size="12" @click="handleAdd">
        <icon-plus :size="12" />
      </tab-button>
      <!-- extra -->
      <div v-if="$slots.extra" class="yc-tabs-nav-extra">
        <slot name="extra" />
      </div>
    </div>
    <!-- content -->
    <div
      v-if="!hideContent"
      class="yc-tabs-content"
      :style="{
        height: direction == 'vertical' ? `${valueToPx(navHeight)}` : '',
      }"
    >
      <div
        class="yc-tabs-content-list"
        :style="{
          transform: `translate${direction == 'horizontal' ? 'X' : 'Y'}(${-curIndex * 100}%)`,
        }"
      >
        <component v-for="(node, i) in tabPanes" :key="i" :is="node" />
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref, computed, nextTick } from 'vue';
import { TabsProps, TabsEmits, TabsSlots } from './type';
import { findComponentsFromVnodes, valueToPx } from '@shared/utils';
import useContext from './hooks/useContext';
import useTabsScroll from './hooks/useTabsScroll';
import { IconPlus, IconArrowRight } from '@shared/icons';
import TabPane from './TabPane.vue';
import TabsTab from './TabsTab.vue';
import TabsNavInk from './TabsNavInk.vue';
import TabButton from './TabButton.vue';
defineOptions({
  name: 'Tabs',
});
const $slots = defineSlots<TabsSlots>();
const props = withDefaults(defineProps<TabsProps>(), {
  activeKey: undefined,
  defaultActiveKey: '',
  position: undefined,
  size: undefined,
  type: 'line',
  direction: 'horizontal',
  editable: false,
  showAddButton: false,
  destoryOnHide: false,
  lazyLoad: false,
  justify: false,
  animation: false,
  headerPadding: true,
  autoSwitch: false,
  hideContent: false,
  trigger: 'click',
});
const emits = defineEmits<TabsEmits>();
// tablist
const listRef = ref<HTMLDivElement>();
// 注入
const { computedActiveKey, size, direction, autoSwitch, position } =
  useContext().provide(props, emits, listRef);
// tabPanes
const tabPanes = computed(() =>
  findComponentsFromVnodes($slots.default?.() || [], TabPane.name as string)
);
// pane数据
const panes = computed(() => {
  return tabPanes.value.map((item) => {
    return {
      title: '',
      path: '',
      disabled: false,
      ...(item.props || {}),
      slots: item.children,
    };
  });
});
// 展示新增button
const showAddButton = computed(() => {
  return (
    props.showAddButton && ['line', 'card', 'card-gutter'].includes(props.type)
  );
});
// 当前的索引
const curIndex = computed(() => {
  const index = panes.value.findIndex((item) => {
    return item.path == computedActiveKey.value;
  });
  return index < 0 ? 0 : index;
});
// 初始化滚动hook
const {
  scrollDis,
  isScrollable,
  preDisabled,
  nextDisabled,
  navHeight,
  handleScroll,
} = useTabsScroll({
  listRef,
  panes,
  direction,
});
// 处理新增
const handleAdd = async () => {
  emits('add');
  if (!autoSwitch.value) return;
  await nextTick();
  computedActiveKey.value = panes.value[panes.value.length - 1].path;
};
</script>

<style lang="less">
@import './style/tabs.less';
</style>
