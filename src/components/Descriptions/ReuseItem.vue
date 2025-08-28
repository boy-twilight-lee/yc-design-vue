<template>
  <td class="yc-descriptions-item">
    <div
      class="yc-descriptions-item-label"
      :style="{
        ...labelStyle,
        textAlign: isObject(align) ? (align.label ?? 'left') : align,
      }"
    >
      <component
        :is="
          getSlotFunction(
            slots.label?.({
              label: data.label,
              index,
              data,
            }) ?? data.label
          )
        "
      />
    </div>
    <div
      class="yc-descriptions-item-value"
      :style="{
        ...valueStyle,
        textAlign: isObject(align) ? (align.value ?? 'left') : align,
      }"
    >
      <component
        :is="
          getSlotFunction(
            slots.value?.({
              value: data.value,
              index,
              data,
            }) ?? data.value
          )
        "
      />
    </div>
  </td>
</template>

<script lang="ts" setup>
import { DescData } from './type';
import { getSlotFunction, isObject } from '@shared/utils';
import useContext from './hooks/useContext';
defineProps<{
  data: DescData;
  index: number;
}>();
const { labelStyle, valueStyle, slots, align } = useContext().inject();
</script>

<style lang="less" scoped>
@import './style/descriptions-item.less';
</style>
