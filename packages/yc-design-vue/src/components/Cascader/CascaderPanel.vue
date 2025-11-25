<template>
  <transition-group tag="div" name="cascader-slide" class="yc-cascader-panel">
    <!-- loading -->
    <yc-spin v-if="loading" :loading="loading" />
    <!-- empty -->
    <div v-else-if="!options.length" class="yc-cascader-empty">
      <component :is="slots.empty || YcEmpty" />
    </div>
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
import YcSpin from '@/components/Spin';
import YcEmpty from '@/components/Empty';
// 接收注入
const { options, curLevel, curPath, maxLevel, loading, slots } =
  useContext().inject();
</script>

<style lang="less">
@import './style/panel.less';
</style>
