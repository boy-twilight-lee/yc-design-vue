<template>
  <div
    :class="['yc-checkbox-group', `yc-checkbox-group-direction-${direction}`]"
  >
    <slot />
    <yc-checkbox
      v-for="(item, i) in options"
      :key="i"
      :value="item.value"
      :disabled="item.disabled"
      :indeterminate="item.indeterminate"
    >
      <!-- checkbox -->
      <template v-if="$slots.checkbox" #checkbox="scope">
        <slot name="checkbox" v-bind="scope" />
      </template>
      <!-- label -->
      <slot name="label" :data="item">
        {{ item.label }}
      </slot>
    </yc-checkbox>
  </div>
</template>

<script lang="ts" setup>
import {
  CheckboxGroupProps,
  CheckboxGroupEmits,
  CheckboxGroupSlots,
} from './type';
import useContext from './hooks/useContext';
import YcCheckbox from './Checkbox.vue';
defineOptions({
  name: 'CheckboxGroup',
});
const $slots = defineSlots<CheckboxGroupSlots>();
const props = withDefaults(defineProps<CheckboxGroupProps>(), {
  modelValue: undefined,
  defaultValue: () => [],
  max: undefined,
  options: () => [],
  direction: 'horizontal',
  disabled: false,
});
const emits = defineEmits<CheckboxGroupEmits>();
// 注入数据
const { options } = useContext().provide(props, emits);
</script>

<style lang="less">
@import './style/checkbox-group.less';
</style>
