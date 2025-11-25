<template>
  <div :class="['yc-menu-inline', `yc-menu-inline-${theme}`]">
    <yc-menu-item
      is-submenu
      :path="path"
      :popupMaxHeight="popupMaxHeight"
      class="yc-menu-inline-header"
    >
      <slot name="title">
        {{ title }}
      </slot>
      <template v-if="$slots.icon" #icon>
        <slot name="icon" />
      </template>
      <template #suffix>
        <slot name="expand-icon-down">
          <icon-arrow-down
            :rotate="computedOpenKeys.includes(path) ? 180 : 0"
          />
        </slot>
      </template>
    </yc-menu-item>
    <!-- 过渡 -->
    <expand-transition>
      <div
        v-show="
          mode == 'vertical' &&
          !computedCollapsed &&
          computedOpenKeys.includes(path)
        "
        class="yc-menu-inline-content"
      >
        <slot />
      </div>
    </expand-transition>
  </div>
</template>

<script lang="ts" setup>
import { SubMenuProps, SubMenuSlots } from './type';
import useContext from './hooks/useContext';
import { IconArrowDown } from '@shared/icons';
import { ExpandTransition } from '@shared/components';
import YcMenuItem from './MenuItem.vue';
defineOptions({
  name: 'SubMenu',
});
const $slots = defineSlots<SubMenuSlots>();
withDefaults(defineProps<SubMenuProps>(), {
  path: '',
  title: '',
  selectable: false,
  popup: false,
  popupMaxHeight: undefined,
});
// 接收父级注入的属性
const { mode, theme, computedOpenKeys, computedCollapsed } =
  useContext().inject();
</script>

<style lang="less">
@import './style/sub-menu.less';
</style>
