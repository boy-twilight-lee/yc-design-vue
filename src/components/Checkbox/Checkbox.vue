<template>
  <label
    :class="[
      'yc-checkbox',
      {
        'yc-checkbox-disabled': computedDisabled,
        'yc-checkbox-unchecked': !computedChecked && !indeterminate,
        'yc-checkbox-indeterminate': !computedChecked && indeterminate,
        'yc-checkbox-checked': computedChecked,
      },
    ]"
  >
    <input
      type="checkbox"
      class="yc-checkbox-target"
      :value="value"
      :disabled="computedDisabled"
      :checked="computedChecked"
      @change="handleCollect"
    />
    <slot
      name="checkbox"
      :checked="computedChecked"
      :disabled="computedDisabled"
    >
      <icon-button
        :hover-size="24"
        :hover-color="
          computedChecked || computedDisabled
            ? 'transparent'
            : 'rgb(242, 243, 245)'
        "
      >
        <span class="yc-checkbox-icon">
          <icon-checkbox-checked :size="[8, 10]" />
        </span>
      </icon-button>
      <span v-if="$slots.default" class="yc-checkbox-label text-ellipsis">
        <slot />
      </span>
    </slot>
  </label>
</template>

<script lang="ts" setup>
import { toRefs, computed } from 'vue';
import { CheckboxProps, CheckboxEmits, CheckboxSlots } from './type';
import { useControlValue, isUndefined } from '@shared/utils';
import useContext from './hooks/useContext';
import { IconCheckboxChecked } from '@shared/icons';
import { IconButton } from '@shared/components';
defineOptions({
  name: 'Checkbox',
});
defineSlots<CheckboxSlots>();
const props = withDefaults(defineProps<CheckboxProps>(), {
  modelValue: undefined,
  defaultChecked: false,
  disabled: false,
  value: '',
  indeterminate: false,
});
const emits = defineEmits<CheckboxEmits>();
const {
  modelValue,
  defaultChecked,
  value: checkboxValue,
  disabled,
} = toRefs(props);
// 接收注入
const {
  computedValue,
  max,
  hasGroup,
  disabled: injectDisabled,
} = useContext().inject();
// checkbox受控的值
const checked = useControlValue<boolean>(
  modelValue,
  defaultChecked.value,
  (val) => {
    emits('update:modelValue', val);
  }
);
// 用于显示的值
const computedChecked = computed(() => {
  return hasGroup.value
    ? computedValue.value.includes(checkboxValue.value)
    : checked.value;
});
// 禁用
const computedDisabled = computed(() => {
  return (
    disabled.value ||
    injectDisabled.value ||
    (!isUndefined(max.value) &&
      !computedChecked.value &&
      computedValue.value.length >= max.value)
  );
});
// 处理check发生改变
const handleCollect = (e: Event) => {
  // 如果外面没有嵌套checkbox-group则执行收集就可以了
  if (!hasGroup.value) {
    const curChecked = (e.target as HTMLInputElement)?.checked;
    checked.value = curChecked;
    emits('change', curChecked, e);
  } else {
    computedValue.value = computedChecked.value
      ? computedValue.value.filter((item) => item != checkboxValue.value)
      : [...computedValue.value, checkboxValue.value];
  }
};
</script>

<style lang="less" scoped>
@import './style/checkbox.less';
</style>
