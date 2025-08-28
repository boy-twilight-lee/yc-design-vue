<template>
  <td
    :class="[
      type == 'label'
        ? 'yc-descriptions-item-label'
        : 'yc-descriptions-item-value',
      `yc-descriptions-item-cell-size-${size}`,
      {
        'yc-descriptions-item-cell-bordered': bordered,
      },
    ]"
    :style="{
      ...(type == 'label' ? labelStyle : valueStyle),
      textAlign: isObject(align) ? (align[type] ?? 'left') : align,
    }"
    :colspan="colspan"
  >
    <component
      :is="
        getSlotFunction(
          type == 'label'
            ? (slots.label?.({
                label: data.label,
                index,
                data,
              }) ?? data.label)
            : (slots.value?.({
                value: data.value,
                index,
                data,
              }) ?? data.value)
        )
      "
    />
  </td>
</template>

<script lang="ts" setup>
import { DescData } from './type';
import { getSlotFunction, isObject } from '@shared/utils';
import useContext from './hooks/useContext';
defineProps<{
  data: DescData;
  index: number;
  type: 'label' | 'value';
  colspan?: number;
}>();
const { labelStyle, valueStyle, bordered, size, align, slots } =
  useContext().inject();
</script>

<style lang="less" scoped>
@import './style/descriptions-item.less';
</style>
