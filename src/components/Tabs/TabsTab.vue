<template>
  <div
    tabindex="0"
    :class="[
      'yc-tabs-tab',
      `yc-tabs-tab-type-${type}`,
      `yc-tabs-tab-${direction}`,
      `yc-tabs-tab-size-${size}`,
      {
        [`yc-tabs-tab-${position}`]: position,
        'yc-tabs-tab-no-padding':
          !headerPadding &&
          direction == 'horizontal' &&
          ['line', 'text'].includes(type),
        'yc-tabs-tab-active': computedActiveKey == node.path,
        'yc-tabs-tab-disabled': node.disabled,
      },
    ]"
    :ref="(el) => (tabRefs[index] = el as HTMLDivElement)"
    @mouseenter="handleChange(node, 'hover')"
    @click="handleChange(node, 'click')"
  >
    <!-- title -->
    <span
      class="yc-tabs-tab-title"
      :ref="(el) => (titleRefs[index] = el as HTMLSpanElement)"
    >
      <component :is="renderTitle(node)" />
    </span>
    <!-- 删除按钮 -->
    <tab-button
      v-if="editable && (isUndefined(node.closable) || node.closable)"
      type="close"
      @click="handleDel(node)"
    />
  </div>
</template>

<script lang="ts" setup>
import { toRefs, onMounted } from 'vue';
import { default as useContext, PaneNode } from './hooks/useContext';
import { isUndefined } from '@shared/utils';
import TabButton from './TabButton.vue';
const props = defineProps<{
  node: PaneNode;
  index: number;
}>();
const { node, index } = toRefs(props);
// 接收注入
const {
  computedActiveKey,
  titleRefs,
  tabRefs,
  trigger,
  editable,
  type,
  direction,
  position,
  headerPadding,
  size,
  emits,
} = useContext().inject();
// 渲染title
const renderTitle = (node: PaneNode) => {
  const { slots, title } = node;
  return slots.title ?? (() => title);
};
// 处理状态改变
const handleChange = (node: PaneNode, triggerType: string) => {
  const { disabled, path } = node;
  if (
    computedActiveKey.value == path ||
    disabled ||
    triggerType != trigger.value
  ) {
    return;
  }
  computedActiveKey.value = path;
  emits('change', path);
  emits('tab-click', path);
};
// 处理删除
const handleDel = async (node: PaneNode) => {
  emits('delete', node.path);
};
// 自动滚动
onMounted(() => {
  if (computedActiveKey.value != node.value.path) {
    if (computedActiveKey.value || index.value) return;
    computedActiveKey.value = node.value.path;
    return;
  }
});
</script>

<style lang="less" scoped>
@import './style/tabs-tab.less';
</style>
