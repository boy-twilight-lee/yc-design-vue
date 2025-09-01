<template>
  <div
    :class="[
      'yc-menu',
      `yc-menu-mode-${mode}`,
      `yc-menu-${theme}`,
      {
        'yc-menu-collapsed': computedCollapsed && mode != 'horizontal',
      },
    ]"
  >
    <div class="yc-menu-inner" ref="menuRef">
      <slot />
      <!-- 省略内容  -->
      <menu-ellipsis v-if="mode == 'horizontal' && max < menuTree.length" />
    </div>
    <!-- 收缩按钮 -->
    <div
      v-if="showCollapseButton && mode != 'horizontal'"
      class="yc-menu-collapse-button"
      @click="handleClick"
    >
      <icon-menu-fold v-if="!computedCollapsed" />
      <icon-menu-unfold v-else />
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref, computed } from 'vue';
import { MenuProps, MenuEmits, MenuSlots } from './type';
import { mediaQueryHandler } from '@shared/utils';
import { IconMenuFold, IconMenuUnfold } from '@shared/icons';
import useContext from './hooks/useContext';
import MenuEllipsis from './MenuEllipsis.vue';
defineOptions({
  name: 'Menu',
});
defineSlots<MenuSlots>();
const props = withDefaults(defineProps<MenuProps>(), {
  theme: undefined,
  mode: 'vertical',
  levelIndent: 20,
  autoOpen: false,
  collapsed: undefined,
  defaultCollapsed: false,
  collapsedWidth: 48,
  accordion: false,
  autoScrollIntoView: false,
  showCollapseButton: false,
  selectedKeys: undefined,
  defaultSelectedKeys: '',
  openKeys: undefined,
  defaultOpenKeys: () => [],
  triggerProps: () => {
    return {};
  },
  tooltipProps: () => {
    return {};
  },
  autoOpenSelected: false,
  breakpoint: undefined,
  popupMaxHeight: 167,
});
const emits = defineEmits<MenuEmits>();
// menuredf
const menuRef = ref<HTMLDivElement>();
// 注入数据
const { computedCollapsed, collapsedWidth, breakpoint, menuTree, max, theme } =
  useContext().provide(props, emits, menuRef);
// 处理点击
const handleClick = () => {
  const value = !computedCollapsed.value;
  computedCollapsed.value = value;
  emits('collapse', value, 'clickTrigger');
};
// 媒体查询
mediaQueryHandler((_, order, i) => {
  if (!breakpoint.value) return;
  const value = i <= order[breakpoint.value];
  computedCollapsed.value = value;
  emits('collapse', value, 'responsive');
});
</script>

<style lang="less" scoped>
@import './style/menu.less';
// 收缩
.yc-menu-collapsed {
  width: v-bind(collapsedWidth) !important;
  .yc-menu-inner {
    padding: 4px;
  }
}
</style>
