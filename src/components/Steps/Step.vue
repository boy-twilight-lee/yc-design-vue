<template>
  <div
    :class="[
      'yc-steps-item',
      `yc-steps-item-${direction}`,
      `yc-steps-item-label-${labelPlacement}`,
      `yc-steps-item-${status}`,
      `yc-steps-item-next-${nextStatus}`,
      {
        'yc-steps-item-active':
          curStep == computedCurrent && type == 'navigation',
        'yc-steps-item-line-less': lineLess,
        'yc-steps-item-size-small': small,
      },
    ]"
    @click="handleClick"
  >
    <div
      v-if="
        (type == 'default' &&
          (direction == 'vertical' || labelPlacement == 'vertical')) ||
        type == 'dot'
      "
      class="yc-steps-item-tail"
    ></div>
    <!-- icon -->
    <slot v-if="type != 'arrow'" name="node" :step="curStep" :status="status">
      <div class="yc-steps-item-node">
        <div class="yc-steps-icon">
          <slot
            v-if="['default', 'navigation'].includes(type)"
            name="icon"
            :status="status"
            :step="curStep"
          >
            <icon-check v-if="status == 'finish'" />
            <icon-close v-else-if="status == 'error'" />
            <template v-else>
              {{ curStep }}
            </template>
          </slot>
        </div>
      </div>
    </slot>
    <!-- content -->
    <div class="yc-steps-item-content">
      <div class="yc-steps-item-title">
        <slot>
          {{ title }}
        </slot>
      </div>
      <div
        v-if="$slots.description || description"
        class="yc-steps-item-description"
      >
        <slot name="description">
          {{ description }}
        </slot>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { toRefs, computed } from 'vue';
import { StepProps, StepSlots } from './type';
import { IconCheck, IconClose } from '@shared/icons';
import useContext from './hooks/useContext';
defineOptions({
  name: 'Step',
});
defineSlots<StepSlots>();
const props = withDefaults(defineProps<StepProps>(), {
  title: '',
  description: '',
  status: undefined,
  disabled: false,
});
const { disabled } = toRefs(props);
// 接收注入
const {
  curStep,
  stepMap,
  computedCurrent,
  type,
  changeable,
  status,
  nextStatus,
  direction,
  labelPlacement,
  lineLess: _lineLess,
  small: _small,
  emits,
} = useContext().inject(props);
// small
const small = computed(() => {
  return type.value != 'dot' ? _small.value : false;
});
// lineLess
const lineLess = computed(() => {
  return (
    _lineLess.value ||
    curStep.value == stepMap.size ||
    ['arrow', 'navigation'].includes(type.value)
  );
});
// 处理点击
const handleClick = (e: Event) => {
  if (!changeable.value || disabled.value) return;
  computedCurrent.value = curStep.value;
  emits('change', curStep.value, e);
};
</script>

<style lang="less" scoped>
@import './style/step.less';
@import './style/steps.less';
</style>
