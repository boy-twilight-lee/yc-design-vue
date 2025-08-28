<template>
  <li
    :class="[
      'yc-pagination-item',
      {
        'yc-pagination-item-disabled': disabled,
        'yc-pagination-item-active': active,
      },
    ]"
    :style="{
      ...pageItemStyle,
      ...(active ? activePageItemStyle : {}),
    }"
    @click="handleClick"
  >
    <slot>
      <icon-arrow-right
        v-if="['pre', 'next'].includes(type)"
        :rotate="type == 'pre' ? 180 : 0"
      />
      <icon-more v-else-if="type.includes('more')" />
    </slot>
  </li>
</template>

<script lang="ts" setup>
import { toRefs, computed } from 'vue';
import { IconArrowRight, IconMore } from '@shared/icons';
import useContext from './hooks/useContext';
const props = withDefaults(
  defineProps<{
    type: 'item' | 'pre' | 'next' | 'more-right' | 'more-left' | string;
    page?: number;
  }>(),
  {
    page: 1,
  }
);
const { type, page } = toRefs(props);
// 接收注入
const {
  computedCurrent,
  pages,
  pageItemStyle,
  activePageItemStyle,
  bufferSize,
  disabled: _disabled,
} = useContext().inject();
const active = computed(() => {
  return type.value == 'item' ? computedCurrent.value == page.value : false;
});
// 处理禁用
const disabled = computed(() => {
  if (['item', 'more-right', 'more-left'].includes(type.value)) {
    return _disabled.value;
  } else if (type.value == 'pre') {
    return computedCurrent.value <= 1;
  } else {
    return computedCurrent.value >= pages.value;
  }
});
// 处理点击
const handleClick = () => {
  let i = 0;
  if (type.value == 'item') {
    i = page.value;
  } else if (type.value == 'pre') {
    i = computedCurrent.value - 1;
  } else if (type.value == 'next') {
    i = computedCurrent.value + 1;
  } else {
    const addSize = 2 * bufferSize.value + 1;
    i =
      type.value == 'more-left'
        ? computedCurrent.value - addSize
        : computedCurrent.value + addSize;
    i = type.value == 'more-left' && i <= 1 ? 1 : i;
    i = type.value == 'more-right' && i >= pages.value ? pages.value : i;
  }
  if (
    disabled.value ||
    (type.value == 'item' && i == computedCurrent.value) ||
    (type.value == 'pre' && i < 1) ||
    (type.value == 'next' && i > pages.value)
  ) {
    return;
  }
  computedCurrent.value = i;
};
</script>

<style lang="less" scoped>
@import './style/pagination.less';
</style>
