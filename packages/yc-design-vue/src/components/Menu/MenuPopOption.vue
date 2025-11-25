<template>
  <!-- 渲染dropdownm -->
  <yc-doption
    v-if="treeNode.type == 'menuitem'"
    :value="treeNode.path"
    :is-active="computedSelectedKeys == treeNode.path"
  >
    <component :is="treeNode.label" />
  </yc-doption>
  <!-- 渲染submenu -->
  <yc-dsubmenu
    v-else
    :popup-max-height="popupMaxHeight"
    :trigger-props="{
      popupTranslate: [-4, 0],
      ...triggerProps,
    }"
  >
    <component :is="treeNode.label" />
    <template #content>
      <pop-option
        v-for="v in treeNode.children"
        :key="v.path"
        :tree-node="v"
        :popupMaxHeight="popupMaxHeight"
        :triggerProps="triggerProps"
        :computedSelectedKeys="computedSelectedKeys"
      />
    </template>
  </yc-dsubmenu>
</template>

<script lang="ts" setup>
import { MenuTreeNode } from './hooks/useContext';
import {
  Doption as YcDoption,
  Dsubmenu as YcDsubmenu,
} from '@/components/Dropdown';
import { TriggerProps } from '@/components/Trigger';
defineOptions({
  name: 'PopOption',
});
defineProps<{
  treeNode: MenuTreeNode;
  popupMaxHeight?: number;
  triggerProps: TriggerProps;
  computedSelectedKeys: string;
}>();
</script>
