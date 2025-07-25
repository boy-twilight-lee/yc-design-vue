<template>
  <div
    v-if="curIndex < max"
    :class="[
      'yc-menu-item-wrapper',
      {
        'yc-menu-item-mode-horizontal': mode == 'horizontal',
      },
    ]"
  >
    <define-template>
      <div
        :class="[
          'yc-menu-item',
          `yc-menu-item-theme-${theme}`,
          {
            'yc-menu-item-selected': isSelected,
            'yc-menu-item-disabled': disabled,
            'yc-menu-item-collapsed': computedCollapsed,
          },
        ]"
        ref="menuItemRef"
        @click="handleClick"
      >
        <!-- indent -->
        <div
          v-if="!isRoot"
          class="yc-menu-indent"
          :style="{
            width: valueToPx(levelIndent * curNode.level),
            height: valueToPx(levelIndent),
          }"
        ></div>
        <!-- icon -->
        <div v-if="$slots.icon" class="yc-menu-icon">
          <slot name="icon" />
        </div>
        <!-- content -->
        <div
          v-show="!computedCollapsed"
          :class="[
            'yc-menu-item-title',
            {
              'text-ellipsis': mode != 'horizontal',
            },
          ]"
        >
          <slot />
        </div>
        <!-- suffix -->
        <div
          v-if="$slots.suffix"
          v-show="!computedCollapsed"
          class="yc-menu-icon-suffix"
        >
          <slot name="suffix" />
        </div>
      </div>
    </define-template>
    <!-- dropdown选择 -->
    <yc-dropdown
      v-if="isSubmenu && isRoot && (mode != 'vertical' || computedCollapsed)"
      :popup-max-height="popupMaxHeight"
      :theme="theme"
      :trigger-props="{
        autoFitPosition: false,
        position: mode == 'horizontal' ? 'bl' : 'rt',
        animationName:
          mode == 'horizontal' ? 'slide-dynamic-origin' : 'zoom-in-fade-out',
        popupOffset: mode == 'vertical' ? 14 : 20,
        showArrow: true,
        ...triggerProps,
      }"
      @select="handleSelect"
    >
      <reuse-template />
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
    <!-- 选然tooltip -->
    <yc-tooltip
      v-else-if="!isSubmenu && isRoot && computedCollapsed"
      position="rt"
      :trigger-props="{
        autoFitPosition: false,
        popupOffset: mode == 'vertical' ? 14 : 18,
        showArrow: true,
        ...tooltipProps,
        ...triggerProps,
      }"
    >
      <reuse-template />
      <template #content>
        <component :is="$slots.default" />
      </template>
    </yc-tooltip>
    <!-- 选然template -->
    <reuse-template v-else />
  </div>
</template>

<script lang="ts" setup>
import { ref, toRefs, computed, onMounted, useAttrs } from 'vue';
import { MenuItemProps, MenuItemSlots, PopupMaxHeight } from './type';
import { createReusableTemplate } from '@vueuse/core';
import { isUndefined, valueToPx } from '@shared/utils';
import {
  default as useContext,
  MenuTreeNode,
  isMenuItemActive,
  getPopupMaxHeight,
} from './hooks/useContext';
import MenuPopOption from './MenuPopOption.vue';
import { default as YcDropdown, DoptionValue } from '@/components/Dropdown';
import YcTooltip from '@/components/Tooltip';
defineOptions({
  name: 'MenuItem',
});
defineSlots<MenuItemSlots>();
const props = withDefaults(defineProps<MenuItemProps>(), {
  path: '',
  disabled: false,
});
const { path, disabled } = toRefs(props);
// 创建通用模板
const { reuse: ReuseTemplate, define: DefineTemplate } =
  createReusableTemplate();
// attrs
const attrs = useAttrs();
// 接收menu注入
const {
  computedSelectedKeys,
  computedOpenKeys,
  computedCollapsed,
  levelIndent,
  mode,
  theme,
  autoOpen,
  autoOpenSelected,
  accordion,
  triggerProps,
  tooltipProps,
  autoScrollIntoView,
  scrollConfig,
  popupMaxHeight: _popupMaxHeight,
  menuTreeNodes,
  menuTree,
  max,
  menuItemWidths,
  emits,
} = useContext().inject();
// 当前节点的信息
const curNode = computed(() => {
  const node = (menuTreeNodes.value.find(
    (item) => item.path == path.value
  ) as MenuTreeNode) || { type: 'menuitem', level: 0 };
  return node;
});
// 当前的index
const curIndex = computed(() => {
  return menuTree.value.findIndex((item) => item.path == path.value);
});
// 当前的menu
const submenus = computed(() => {
  return menuTree.value[curIndex.value]?.children || ([] as MenuTreeNode[]);
});
// 是否是子节点
const isSubmenu = computed(() => {
  return curNode.value.type == 'submenu';
});
// 是否是根节点
const isRoot = computed(() => {
  return curNode.value.level === 0;
});
// 是否选中
const isSelected = computed(() => {
  return isMenuItemActive(
    menuTree.value,
    path.value,
    computedSelectedKeys.value
  );
});
// maxHeight
const popupMaxHeight = computed(() => {
  return !isUndefined(attrs.popupMaxHeight)
    ? getPopupMaxHeight(attrs.popupMaxHeight as PopupMaxHeight)
    : _popupMaxHeight.value;
});
// menuItem容器
const menuItemRef = ref<HTMLDivElement>();
// 处理选中
const handleSelect = (value: DoptionValue) => {
  if (computedSelectedKeys.value == value) return;
  computedSelectedKeys.value = value as string;
  emits('menu-item-click', value as string);
};
// 处理点击
const handleClick = () => {
  if (
    (mode.value != 'vertical' && isSubmenu.value) ||
    computedCollapsed.value
  ) {
    return;
  }
  // men点击
  if (
    !isSubmenu.value &&
    !disabled.value &&
    computedSelectedKeys.value != path.value
  ) {
    computedSelectedKeys.value = path.value;
    return emits('menu-item-click', path.value);
  }
  // 展开元素
  if (computedOpenKeys.value.includes(path.value)) {
    computedOpenKeys.value = computedOpenKeys.value.filter(
      (item) => item != path.value
    );
  } else {
    computedOpenKeys.value = accordion.value
      ? [path.value]
      : [...computedOpenKeys.value, path.value];
  }
  emits('sub-menu-click', path.value, computedOpenKeys.value);
};
// 收集
onMounted(() => {
  // 收集节点
  if (isRoot.value) {
    menuItemWidths.value[curIndex.value] = menuItemRef.value!.offsetWidth;
  }
  // 配置自动滚动
  if (autoScrollIntoView.value && computedSelectedKeys.value == path.value) {
    menuItemRef.value?.scrollIntoView(scrollConfig.value);
  }
  if (
    !isSubmenu.value ||
    !autoOpen.value ||
    !autoOpenSelected.value ||
    !isSelected.value
  ) {
    return;
  }
  computedOpenKeys.value.push(path.value);
});
</script>

<style lang="less" scoped>
@import './style/menu-item.less';
</style>
