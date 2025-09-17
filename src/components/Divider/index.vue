<template>
  <div
    role="separator"
    :class="['yc-divider', `yc-divider-direction-${direction}`]"
    :style="{
      margin,
      borderLeft: direction == 'vertical' ? border : '',
      borderBottom: direction == 'horizontal' ? border : '',
    }"
  >
    <div
      v-if="$slots.default && direction != 'vertical'"
      :class="['yc-divider-text', `yc-divider-text-${orientation}`]"
    >
      <slot />
    </div>
  </div>
</template>

<script lang="ts" setup>
import { toRefs, computed } from 'vue';
import { DividerProps, DividerSlots } from './type';
import { valueToPx } from '@shared/utils/dom';
import { isUndefined } from '@shared/utils/is';
defineOptions({
  name: 'Divider',
});
const $slots = defineSlots<DividerSlots>();
const props = withDefaults(defineProps<DividerProps>(), {
  direction: 'horizontal',
  orientation: 'center',
  type: 'solid',
  size: 1,
  margin: undefined,
});
const { size, margin: _margin, direction, type } = toRefs(props);
// margin
const margin = computed(() => {
  if (isUndefined(_margin.value)) {
    return direction.value == 'horizontal' ? '20px 0' : '0 12px';
  }
  return direction.value == 'horizontal'
    ? `${valueToPx(_margin.value)} 0`
    : `0 ${valueToPx(_margin.value)}`;
});
// border
const border = computed(
  () => `${valueToPx(size.value)} ${type.value} var(--color-neutral-3)`
);
</script>

<style lang="less">
@import './style/divider.less';
</style>
