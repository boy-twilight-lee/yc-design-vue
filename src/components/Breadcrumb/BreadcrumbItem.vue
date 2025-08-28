<template>
  <yc-dropdown
    v-model:popup-visible="popupVisible"
    v-bind="dropdownProps"
    :disabled="!droplist.length && !$slots.droplist"
  >
    <div class="yc-breadcrumb-item">
      <a v-if="path" :href="`#${path}`">
        <slot />
      </a>
      <slot v-else />
      <!-- 显示dropdowncion -->
      <div
        v-if="droplist.length || $slots.droplist"
        class="yc-breadcrumb-item-dropdown-icon"
      >
        <icon-arrow-down :rotate="popupVisible ? 180 : 0" />
      </div>
    </div>
    <template #content>
      <slot name="droplist">
        <yc-doption
          v-for="item in droplist"
          :key="item.path"
          :value="item.path"
        >
          {{ item.label }}
        </yc-doption>
      </slot>
    </template>
  </yc-dropdown>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import { BreadcrumbItemProps, BreadcrumbItemSlots } from './type';
import { IconArrowDown } from '@shared/icons';
import {
  default as YcDropdown,
  Doption as YcDoption,
} from '@/components/Dropdown';
defineOptions({
  name: 'BreadcrumbItem',
});
defineSlots<BreadcrumbItemSlots>();
withDefaults(defineProps<BreadcrumbItemProps>(), {
  separator: '',
  droplist: () => [],
  dropdownProps: () => {
    return {};
  },
  path: '',
  showSeparator: true,
});
// popupVisible
const popupVisible = ref<boolean>(false);
</script>

<style lang="less" scoped>
@import './style/breadcrumb-item.less';
</style>
