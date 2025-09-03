<template>
  <yc-spin v-if="loading" :size="12" class="yc-select-loading-icon">
    <template v-if="$slots['loading-icon']" #icon>
      <component :is="renderIcon('loading-icon')" />
    </template>
  </yc-spin>
  <template v-else>
    <div class="yc-select-suffix-icon">
      <component v-if="slots['arrow-icon']" :is="renderIcon('arrow-icon')" />
      <icon-arrow-down v-else :rotate="popupVisible ? 180 : 0" />
    </div>
    <div v-if="allowSearch" class="yc-select-search-icon">
      <component v-if="slots['search-icon']" :is="renderIcon('search-icon')" />
      <icon-search v-else />
    </div>
    <icon-button
      v-if="showClearBtn"
      class="yc-select-clear-icon"
      @click.stop="$emit('clear')"
    />
  </template>
</template>

<script lang="ts" setup>
import useContext from './hooks/useContext';
import { IconArrowDown } from '@shared/icons';
import { IconButton } from '@shared/components';
import YcSpin from '@/components/Spin';
defineProps<{
  loading: boolean;
  popupVisible: boolean;
  showClearBtn: boolean;
  allowSearch: boolean;
}>();
defineEmits<{
  (e: 'clear'): void;
}>();
// 接收注入
const { slots } = useContext().inject();
// 渲染icon
const renderIcon = (name: string) => {
  return slots[name];
};
</script>

<style lang="less">
@import './style/select.less';
</style>
