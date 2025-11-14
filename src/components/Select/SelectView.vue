<template>
  <div class="yc-select-dropdown">
    <!--dropdown -->
    <yc-spin
      v-if="loading"
      :loading="loading"
      class="yc-select-dropdown-loading"
    >
      <template v-if="slots['loading-icon']" #icon>
        <component :is="slots['loading-icon']" />
      </template>
    </yc-spin>
    <template v-else>
      <!-- header -->
      <div
        v-if="slots.header && (showHeaderOnEmpty || !isEmpty)"
        class="yc-select-dropdown-header"
      >
        <component :is="slots.header" />
      </div>
      <!-- 虚拟列表 -->
      <virtual-list
        v-if="isVirtualList"
        v-bind="virtualListProps"
        :style="{
          maxHeight: '200px',
        }"
        :ref="(el) => (scrollRef = (el as ScrollbarInstance).getScrollRef())"
      >
        <template #default="{ data: { index } }">
          <yc-option
            :value="renderOptions[index][fieldKey.value]"
            :disabled="renderOptions[index][fieldKey.disabled]"
            :is-fallback-option="
              renderOptions[index][fieldKey.isFallbackOption]
            "
          >
            <component :is="renderLabel(renderOptions[index])" />
          </yc-option>
        </template>
      </virtual-list>
      <!-- 真实列表 -->
      <yc-scrollbar
        v-else
        class="yc-select-dropdown-list-wrapper"
        :ref="(el) => (scrollRef = (el as ScrollbarInstance).getScrollRef())"
      >
        <div class="yc-select-dropdown-list">
          <component :is="slots.default" />
          <template v-for="option in renderOptions" :key="option.id">
            <template v-if="option.isGroup">
              <yc-optgroup :label="option.label">
                <yc-option
                  v-for="v in option.options"
                  :key="v[fieldKey.value]"
                  :value="v[fieldKey.value]"
                  :disabled="v[fieldKey.disabled]"
                  :tag-props="v[fieldKey.tagProps]"
                  :is-fallback-option="v[fieldKey.isFallbackOption]"
                >
                  <component :is="renderLabel(v)" />
                </yc-option>
              </yc-optgroup>
            </template>
            <template v-else>
              <yc-option
                :value="option[fieldKey.value]"
                :disabled="option[fieldKey.disabled]"
                :tag-props="option[fieldKey.tagProps]"
                :is-fallback-option="option[fieldKey.isFallbackOption]"
              >
                <component :is="renderLabel(option)" />
              </yc-option>
            </template>
          </template>
        </div>
      </yc-scrollbar>
      <!-- empty -->
      <component v-if="isEmpty" :is="slots.empty || YcEmpty" />
      <!-- footer -->
      <div
        v-if="slots.footer && (showFooterOnEmpty || !isEmpty)"
        class="yc-select-dropdown-footer"
      >
        <component :is="slots.footer" />
      </div>
    </template>
  </div>
</template>

<script lang="ts" setup>
import { ref, toRefs, computed } from 'vue';
import { VirtualListProps } from '@shared/components/VirtualList/type';
import { RecordType } from '@shared/type';
import { isNumber, getSlotFunction } from '@shared/utils';
import useContext from './hooks/useContext';
import useScrollReach from '@/components/List/hooks/useScrollReach';
import { VirtualList } from '@shared/components';
import {
  default as YcScrollbar,
  ScrollbarInstance,
} from '@/components/Scrollbar';
import YcSpin from '@/components/Spin';
import YcEmpty from '@/components/Empty';
const props = defineProps<{
  loading: boolean;
  showFooterOnEmpty: boolean;
  showHeaderOnEmpty: boolean;
  virtualListProps?: VirtualListProps;
}>();
const { virtualListProps } = toRefs(props);
// 接收注入
const { slots, isEmpty, fieldKey, renderOptions, emits } =
  useContext().inject();
// 滚动的ref
const scrollRef = ref<HTMLDivElement>();
// 是否是虚拟列表
const isVirtualList = computed(() => {
  return (
    virtualListProps.value?.estimateSize &&
    isNumber(virtualListProps.value.count)
  );
});
// 处理滚动
useScrollReach({
  scrollRef,
  onScroll: (e) => {
    emits('dropdown-scroll', e);
  },
  onReachBottom: (e) => {
    emits('dropdown-reach-bottom', e);
  },
});
// 渲染label
const renderLabel = (option: RecordType) => {
  if (slots.option) {
    return () =>
      slots.option?.({
        data: option,
      }) || [];
  }
  const { render, label } = fieldKey.value;
  return getSlotFunction(option[render] ? option[render] : option[label]);
};
</script>

<style lang="less">
@import './style/select.less';
</style>
