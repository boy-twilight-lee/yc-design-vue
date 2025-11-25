<template>
  <div class="yc-cascader-panel yc-cascader-search-panel">
    <!-- empty -->
    <div v-if="!searchOptions.length" class="yc-cascader-empty">
      <component :is="slots.empty || YcEmpty" />
    </div>
    <yc-scrollbar class="yc-cascader-column-content">
      <ul role="menu" class="yc-cascader-list">
        <yc-cascader-option
          v-for="(option, i1) in searchOptions"
          :key="i1"
          v-bind="option"
        />
      </ul>
    </yc-scrollbar>
  </div>
</template>

<script lang="ts" setup>
import useContext from './hooks/useContext';
import YcCascaderOption from './CascaderOption.vue';
import YcScrollbar from '@/components/Scrollbar';
import YcEmpty from '@/components/Empty';
// 接收注入
const { searchOptions, slots } = useContext().inject();
</script>

<style lang="less">
@import './style/panel.less';
</style>
