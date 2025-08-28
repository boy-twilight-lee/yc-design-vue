<template>
  <div
    :class="[
      'yc-steps',
      `yc-steps-mode-${type}`,
      `yc-steps-${direction}`,
      `yc-steps-label-${labelPlacement}`,
      {
        'yc-steps-changeable': changeable,
      },
    ]"
  >
    <slot />
  </div>
</template>

<script lang="ts" setup>
import { StepsProps, StepsEmits, StepsSlots } from './type';
import useContext from './hooks/useContext';
defineOptions({
  name: 'Steps',
});
defineSlots<StepsSlots>();
const props = withDefaults(defineProps<StepsProps>(), {
  type: 'default',
  direction: 'horizontal',
  labelPlacement: 'horizontal',
  current: undefined,
  defaultCurrent: 1,
  status: 'process',
  lineLess: false,
  small: false,
  changeable: false,
});
const emits = defineEmits<StepsEmits>();
// 注入数据
const { type, labelPlacement, direction } = useContext().provide(props, emits);
</script>

<style lang="less" scoped>
@import './style/steps.less';
</style>
