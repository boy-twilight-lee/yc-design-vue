<template>
  <div class="yc-virtual-list" v-bind="containerProps">
    <div class="yc-list-content" v-bind="wrapperProps">
      <!-- 虚拟列表 -->
      <template v-for="{ data, index: i } in list" :key="i">
        <slot name="item" :index="i" :item="data" />
      </template>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { toRefs } from 'vue';
import { VirtualListProps } from '@/components/Select';
import { RecordType } from '@shared/type';
import { useVirtualList } from '@shared/utils';
const props = defineProps<{
  data: RecordType[];
  virtualListProps: VirtualListProps;
}>();
const { data, virtualListProps } = toRefs(props);
// 虚拟列表
const { list, containerProps, wrapperProps } = useVirtualList(data, {
  itemHeight: virtualListProps.value?.itemHeight || 40,
  overscan: virtualListProps.value?.buffer || 10,
});
</script>

<style lang="less">
@import './style/list.less';
</style>
