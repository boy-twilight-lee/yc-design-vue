<template>
  <div
    :class="[
      'yc-transfer',
      {
        'yc-transfer-simple': simple,
        'yc-transfer-has-search': showSearch,
      },
    ]"
  >
    <!-- target -->
    <transfer-panel type="source" />
    <!-- operations -->
    <div v-if="!simple" class="yc-transfer-operations">
      <!-- to-target -->
      <yc-button
        :disabled="!sourceChecked.length || disabled"
        shape="circle"
        @click="handleAdd"
      >
        <template #icon>
          <slot name="to-target-icon">
            <icon-arrow-right />
          </slot>
        </template>
      </yc-button>
      <!-- to-source -->
      <yc-button
        v-if="!oneWay"
        :disabled="!targetChecked.length || disabled"
        shape="circle"
        @click="handleDel"
      >
        <template #icon>
          <slot name="to-source-icon">
            <icon-arrow-right :rotate="180" />
          </slot>
        </template>
      </yc-button>
    </div>
    <!-- target -->
    <transfer-panel type="target" />
  </div>
</template>

<script lang="ts" setup>
import { TransferProps, TransferEmits, TransferSlots } from './type';
import useContext from './hooks/useContext';
import { IconArrowRight } from '@shared/icons';
import TransferPanel from './TransferPanel.vue';
import YcButton from '@/components/Button';
defineOptions({
  name: 'Transfer',
});
defineSlots<TransferSlots>();
const props = withDefaults(defineProps<TransferProps>(), {
  data: () => [],
  modelValue: undefined,
  defaultValue: () => [],
  selected: undefined,
  defaultSelected: () => [],
  disabled: false,
  simple: false,
  oneWay: false,
  showSearch: false,
  showSelectAll: true,
  title: () => ['Source', 'Target'],
  sourceInputSearchProps: () => {
    return {};
  },
  targetInputSearchProps: () => {
    return {};
  },
});
const emits = defineEmits<TransferEmits>();
// 注入数据
const { computedValue, targetChecked, computedSelected, sourceChecked } =
  useContext().provide(props, emits);
// 处理添加
const handleAdd = () => {
  const checked = [...sourceChecked.value];
  computedValue.value = [...computedValue.value, ...sourceChecked.value];
  computedSelected.value = computedSelected.value.filter(
    (item: string) => !checked.includes(item)
  );
};
// 处理删除
const handleDel = () => {
  const checked = [...targetChecked.value];
  computedValue.value = computedValue.value.filter(
    (item: string) => !checked.includes(item)
  );
  computedSelected.value = computedSelected.value.filter(
    (item: string) => !checked.includes(item)
  );
};
</script>

<style lang="less" scoped>
@import './style/transfer.less';
</style>
