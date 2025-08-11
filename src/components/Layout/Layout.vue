<template>
  <section
    :class="[
      'yc-layout',
      {
        'yc-layout-has-sider': hasSider,
      },
    ]"
  >
    <slot />
  </section>
</template>

<script lang="ts" setup>
import { toRefs, computed, useSlots } from 'vue';
import { LayoutProps, LayoutSlots } from './type';
import { ObjectData } from '@shared/type';
import { isUndefined } from '@shared/utils';
import LayoutSider from './LayoutSider.vue';
defineOptions({
  name: 'Layout',
});
const slots = defineSlots<LayoutSlots>();
const props = withDefaults(defineProps<LayoutProps>(), {
  hasSider: undefined,
});
const { hasSider: _hasSider } = toRefs(props);
// 是否有sider
const hasSider = computed(() => {
  if (!isUndefined(_hasSider.value)) return _hasSider.value;
  const sider = (slots.default?.() || []).find(
    (item) => (item.type as ObjectData).name == LayoutSider.name
  );
  return !!sider;
});
</script>

<style lang="less" scoped>
@import './style/layout.less';
</style>
