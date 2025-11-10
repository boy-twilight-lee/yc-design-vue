<template>
  <virtual-list
    v-bind="virtualListProps"
    :style="{
      maxHeight: '200px',
    }"
  >
    <template #default="{ data: { index } }">
      <yc-option
        :value="renderOptions[index][fieldKey.value]"
        :disabled="renderOptions[index][fieldKey.disabled]"
        :is-fallback-option="renderOptions[index][fieldKey.isFallbackOption]"
      >
        <component :is="renderLabel(renderOptions[index])" />
      </yc-option>
    </template>
  </virtual-list>
</template>

<script lang="ts" setup>
import { VirtualListProps } from '@shared/components/VirtualList/type';
import { RecordType } from '@shared/type';
import { getSlotFunction } from '@shared/utils';
import { VirtualList } from '@shared/components';
import useContext from './hooks/useContext';
import YcOption from './Option.vue';
defineProps<{
  virtualListProps: VirtualListProps;
}>();
// 接收注入
const { fieldKey, renderOptions, slots } = useContext().inject();
// 渲染label
const renderLabel = (option: RecordType) => {
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
