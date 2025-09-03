<template>
  <div class="yc-select-dropdown-virtual-list" v-bind="containerProps">
    <!-- 渲染虚拟列表 -->
    <div class="yc-select-dropdown-list" v-bind="wrapperProps">
      <yc-option
        v-for="{ data: v } in list"
        :key="v[fieldKey.value]"
        :value="v[fieldKey.value]"
        :disabled="v[fieldKey.disabled]"
        :is-fallback-option="v[fieldKey.isFallbackOption]"
      >
        <component :is="renderLabel(v)" />
      </yc-option>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { toRefs } from 'vue';
import { useVirtualList } from '@vueuse/core';
import { ObjectData } from '@shared/type';
import { getSlotFunction } from '@shared/utils';
import useContext from './hooks/useContext';
import { Option as YcOption, VirtualListProps } from './index';
const props = defineProps<{
  virtualListProps: VirtualListProps;
}>();
const { virtualListProps } = toRefs(props);
// 接收注入
const { fieldKey, renderOptions, slots, emits } = useContext().inject();
// 初始化虚拟滚动
const { list, wrapperProps, containerProps } = useVirtualList(renderOptions, {
  overscan: virtualListProps.value?.buffer ?? 10,
  itemHeight: virtualListProps.value?.itemHeight || 36,
});
// 渲染label
const renderLabel = (option: ObjectData) => {
  if (slots.option) {
    return () =>
      slots.option?.({
        data: option,
      }) || [];
  }
  const { render, label } = fieldKey.value;
  return option[render]
    ? getSlotFunction(option[render])
    : getSlotFunction(option[label]);
};
</script>

<style lang="less">
@import './style/select.less';
</style>
