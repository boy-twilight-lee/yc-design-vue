<template>
  <div :class="['yc-menu-group', `yc-menu-group-${theme}`]">
    <div class="yc-menu-group-title text-ellipsis">
      <slot name="title">
        {{ title }}
      </slot>
    </div>
    <div
      class="yc-menu-group-content"
      :style="{
        paddingLeft: valueToPx(levelIndent),
      }"
    >
      <slot />
    </div>
  </div>
</template>

<script lang="ts" setup>
import { MenuItemGroupProps, MenuItemGroupSlots } from './type';
import { valueToPx } from '@shared/utils/dom';
import useContext from './hooks/useContext';
defineOptions({
  name: 'MenuItemGroup',
});
defineSlots<MenuItemGroupSlots>();
withDefaults(defineProps<MenuItemGroupProps>(), {
  title: '',
});
// 接收menu注入
const { levelIndent, theme } = useContext().inject();
</script>

<style lang="less">
@import './style/menu-item-group.less';
</style>
