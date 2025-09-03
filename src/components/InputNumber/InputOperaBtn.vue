<template>
  <yc-button
    :size="size"
    :disabled="disabled"
    :class="[
      {
        'yc-input-number-plus-embed': mode == 'embed',
      },
    ]"
    @click="$emit('click', type)"
  >
    <template #icon>
      <slot name="icon">
        <icon-arrow-down
          v-if="mode == 'embed'"
          :rotate="type == 'plus' ? 180 : 0"
        />
        <template v-else>
          <icon-minus v-if="type == 'minus'" />
          <icon-plus v-else />
        </template>
      </slot>
    </template>
  </yc-button>
</template>

<script lang="ts" setup>
import { computed, toRefs } from 'vue';
import { InputNumberMode, InputNumberValue } from './type';
import { Size } from '@shared/type';
import { IconArrowDown, IconPlus, IconMinus } from '@shared/icons';
import YcButton from '@/components/Button';
const props = defineProps<{
  mode: InputNumberMode;
  type: 'minus' | 'plus';
  disabled: boolean;
  computedValue: InputNumberValue;
  min: number;
  max: number;
  size?: Size;
}>();
defineEmits<{
  (e: 'click', type: 'minus' | 'plus'): void;
}>();
const { disabled: _disabled, computedValue, min, max, type } = toRefs(props);
// 禁用递减
const disabled = computed(() => {
  if (_disabled.value) return _disabled.value;
  return type.value == 'minus'
    ? +computedValue.value <= min.value
    : +computedValue.value >= max.value;
});
</script>

<style lang="less">
@import './style/input-number.less';
</style>
