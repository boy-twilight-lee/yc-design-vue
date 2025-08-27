<template>
  <transition-group tag="div" name="cascader-slide" class="yc-cascader-panel">
    <!-- loading -->
    <yc-spin v-if="loading" :loading="loading" />
    <!-- empty -->
    <component
      v-else-if="!options.length"
      :is="slots.empty || renderEmpty('Select')"
    />
    <!-- 渲染panel -->
    <template v-else>
      <div
        v-show="curLevel >= i"
        v-for="i in maxLevel"
        :key="i"
        :style="{
          zIndex: maxLevel + 1 - i,
        }"
        class="yc-cascader-panel-column"
      >
        <yc-scrollbar class="yc-cascader-column-content">
          <ul role="menu" class="yc-cascader-list">
            <yc-cascader-option
              v-for="(option, i1) in findOptions(
                options,
                i,
                curPath.slice(0, i - 1)
              )"
              :key="i1"
              v-bind="option"
            />
          </ul>
        </yc-scrollbar>
      </div>
    </template>
  </transition-group>
</template>

<script lang="ts" setup>
import { default as useContext, findOptions } from './hooks/useContext';
import YcCascaderOption from './CascaderOption.vue';
import YcScrollbar from '@/components/Scrollbar';
import { getGlobalConfig } from '@shared/utils';
import YcSpin from '@/components/Spin';
// configProvider
const { renderEmpty } = getGlobalConfig();
// 接收注入
const { options, curLevel, curPath, maxLevel, loading, slots } =
  useContext().inject();
</script>

<style lang="less" scoped>
@import './style/panel.less';
@import './style/dark.less';
</style>
