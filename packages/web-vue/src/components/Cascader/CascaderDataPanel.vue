<template>
  <yc-cascader
    v-bind="props"
    hide-trigger
    @change="(v) => $emit('change', v)"
    @update:model-value="(v) => $emit('update:modelValue', v)"
  >
    <template v-if="$slots.empty" #empty>
      <slot name="empty" />
    </template>
  </yc-cascader>
</template>

<script lang="ts" setup>
import {
  CascaderPanelProps,
  CascaderPanelEmits,
  CascaderPanelSlots,
} from './type';
import YcCascader from './Cascader.vue';
defineOptions({
  name: 'CascaderPanel',
});
const $slots = defineSlots<CascaderPanelSlots>();
const props = withDefaults(defineProps<CascaderPanelProps>(), {
  pathMode: false,
  multiple: false,
  modelValue: undefined,
  defaultValue: (props) => {
    return props.multiple ? [] : '';
  },
  options: () => [],
  expandTrigger: 'click',
  loadMore: undefined,
  fieldNames: () => {
    return {};
  },
  valueKey: 'value',
  expandChild: false,
});
defineEmits<CascaderPanelEmits>();
</script>
