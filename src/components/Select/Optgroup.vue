<template>
  <div class="yc-option-group-label text-ellipsis">
    <slot name="label">
      {{ label }}
    </slot>
  </div>
  <slot />
</template>

<script lang="ts" setup>
import { OptgroupProps, OptgroupSlots } from './type';
defineOptions({
  name: 'Optgroup',
});
defineSlots<OptgroupSlots>();
defineProps<OptgroupProps>();
</script>

<style lang="less" scoped>
@import './style/option-group.less';
</style>
