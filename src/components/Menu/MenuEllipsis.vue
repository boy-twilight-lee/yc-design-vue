<template>
  <div :class="['yc-menu-item-wrapper', 'yc-menu-item-mode-horizontal']">
    <yc-dropdown
      :popup-max-height="popupMaxHeight"
      :trigger-props="{
        position: 'bl',
        popupOffset: 20,
        showArrow: true,
        ...triggerProps,
      }"
      @select="handleSelect"
    >
      <div
        :class="[
          'yc-menu-item',
          'yc-menu-item-ellipsis',
          `yc-menu-item-${theme}`,
          {
            'yc-menu-item-selected': isSelected,
          },
        ]"
      >
        <div class="yc-menu-item-title">
          <icon-more />
        </div>
        <div class="yc-menu-icon-suffix">
          <icon-arrow-down />
        </div>
      </div>
      <template #content>
        <menu-pop-option
          v-for="node in submenus"
          :key="node.path"
          :tree-node="node"
          :popup-max-height="popupMaxHeight"
          :trigger-props="triggerProps"
          :computed-selected-keys="computedSelectedKeys"
        />
      </template>
    </yc-dropdown>
  </div>
</template>

<script lang="ts" setup>
import { computed } from 'vue';
import { IconMore, IconArrowDown } from '@shared/icons';
import { default as useContext, isMenuItemActive } from './hooks/useContext';
import MenuPopOption from './MenuPopOption.vue';
import { default as YcDropdown, DoptionValue } from '@/components/Dropdown';
// 接收menu注入
const {
  computedSelectedKeys,
  theme,
  triggerProps,
  popupMaxHeight,
  menuTree,
  max,
  emits,
} = useContext().inject();
// submenu
const submenus = computed(() => menuTree.value.slice(max.value));
// 是否选中
const isSelected = computed(() => {
  return submenus.value.some((item) => {
    return isMenuItemActive(
      menuTree.value,
      item.path,
      computedSelectedKeys.value
    );
  });
});
// 处理选择
const handleSelect = (value: DoptionValue) => {
  if (computedSelectedKeys.value == value) return;
  computedSelectedKeys.value = value as string;
  emits('menu-item-click', value as string);
};
</script>

<style lang="less">
@import './style/menu-item.less';
</style>
