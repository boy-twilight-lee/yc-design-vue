<template>
  <div
    :class="[
      'yc-dropdown-group-title',
      'text-ellipsis',
      `yc-dropdown-group-title-theme-${theme}`,
    ]"
  >
    <slot name="title">
      {{ title }}
    </slot>
  </div>
  <slot />
</template>

<script lang="ts" setup>
import { DgroupProps, DgroupSlots } from './type';
import useMenuContext from '@/components/Menu/hooks/useContext';
defineOptions({
  name: 'Dgroup',
});
defineSlots<DgroupSlots>();
defineProps<DgroupProps>();
// dropdown传递的值
const { theme } = useMenuContext().inject();
</script>

<style lang="less" scoped>
@import './style/dgroup.less';
</style>
