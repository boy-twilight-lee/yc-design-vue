<template>
  <div
    :class="[
      'yc-collapse',
      {
        'yc-collapse-bordered': bordered,
      },
    ]"
  >
    <slot />
  </div>
</template>

<script lang="ts" setup>
import { CollapseProps, CollapseEmits, CollapseSlots } from './type';
import useContext from './hooks/useContext';
defineOptions({
  name: 'Collapse',
});
defineSlots<CollapseSlots>();
const props = withDefaults(defineProps<CollapseProps>(), {
  activeKey: undefined,
  defaultActiveKey: () => [],
  accordion: false,
  showExpandIcon: true,
  expandIconPosition: 'left',
  bordered: true,
  destroyOnHide: false,
});
const emits = defineEmits<CollapseEmits>();
// 注入数据
useContext().provide(props, emits);
</script>

<style lang="less" scoped>
@import './style/collapse.less';
</style>
