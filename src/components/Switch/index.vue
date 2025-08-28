<template>
  <button
    :class="[
      'yc-switch',
      `yc-switch-shape-${type}`,
      `yc-switch-size-${size}`,
      compuedChecked ? 'yc-switch-checked' : 'yc-switch-unchecked',
      {
        'yc-switch-loading': loading,
        'yc-switch-disabled': disabled,
      },
    ]"
    :aria-checked="compuedChecked"
    role="switch"
    @focus="$emit('focus', $event)"
    @blur="$emit('blur', $event)"
    @click="handleClick"
  >
    <span class="yc-switch-handle">
      <span class="yc-switch-handle-icon">
        <yc-spin v-if="loading" is-size-inherit />
        <slot
          v-else
          :name="compuedChecked ? 'checked-icon' : 'unchecked-icon'"
        />
      </span>
    </span>
    <!-- placeholder -->
    <span v-if="showText" class="yc-switch-placeholder">
      <slot :name="compuedChecked ? 'checked' : 'unchecked'">
        {{ compuedChecked ? checkedText : uncheckedText }}
      </slot>
    </span>
    <!-- text -->
    <span v-if="showText" class="yc-switch-text">
      <slot :name="compuedChecked ? 'checked' : 'unchecked'">
        {{ compuedChecked ? checkedText : uncheckedText }}
      </slot>
    </span>
  </button>
</template>

<script lang="ts" setup>
import { ref, toRefs, computed, useSlots } from 'vue';
import { SwitchProps, SwitchEmits, SwitchSlots, SwitchValue } from './type';
import { useControlValue, getGlobalConfig, isBoolean } from '@shared/utils';
import YcSpin from '@/components/Spin';
defineOptions({
  name: 'Switch',
});
const slots = defineSlots<SwitchSlots>();
const props = withDefaults(defineProps<SwitchProps>(), {
  modelValue: undefined,
  defaultChecked: false,
  disabled: false,
  loading: false,
  type: 'circle',
  size: undefined,
  checkedValue: true,
  uncheckedValue: false,
  checkedColor: 'rgba(22, 93, 255)',
  uncheckedColor: 'rgb(201, 205, 212)',
  checkedText: '',
  uncheckedText: '',
  beforeChange: () => {
    return true;
  },
});
const emits = defineEmits<SwitchEmits>();
const {
  modelValue,
  defaultChecked,
  checkedValue,
  uncheckedValue,
  disabled,
  type,
  checkedText,
  uncheckedText,
  checkedColor,
  uncheckedColor,
  loading: _loading,
} = toRefs(props);
const { beforeChange } = props;
// 获取全局配置
const { size } = getGlobalConfig(props);
// 计算值
const computedValue = useControlValue<SwitchValue>(
  modelValue,
  defaultChecked.value,
  (val) => {
    emits('update:modelValue', val);
  }
);
// 是否选中
const compuedChecked = computed(() => {
  return computedValue.value == checkedValue.value;
});
// 是否展示text
const showText = computed(() => {
  const showCheckedText =
    compuedChecked.value && (checkedText.value || slots.checked);
  const showUncheckedText =
    !compuedChecked.value && (uncheckedText.value || slots.unchecked);
  return (
    type.value != 'line' &&
    size.value != 'small' &&
    (showCheckedText || showUncheckedText)
  );
});
// switch样式
const background = computed(() =>
  compuedChecked.value ? checkedColor.value : uncheckedColor.value
);
//切换loading
const switchLoading = ref<boolean>(false);
// lkoading
const loading = computed(() => switchLoading.value || _loading.value);
// 处理beforeChange
const handleBeforeChange = async (newValue: SwitchValue) => {
  let isChange = true;
  switchLoading.value = true;
  const changeResult = beforeChange(newValue);
  if (isBoolean(changeResult)) {
    isChange = changeResult;
  } else if (changeResult instanceof Promise) {
    try {
      const _isChange = await changeResult;
      if (isBoolean(_isChange)) {
        isChange = _isChange;
      }
    } catch {
      isChange = false;
    }
  }
  switchLoading.value = false;
  return isChange;
};
// 处理点击
const handleClick = async (e: Event) => {
  if (loading.value || disabled.value) return;
  const newValue = compuedChecked.value
    ? uncheckedValue.value
    : checkedValue.value;
  // 处理是否发生改变
  const isChange = await handleBeforeChange(newValue);
  if (!isChange) return;
  computedValue.value = newValue;
  emits('change', newValue, e);
};
</script>

<style lang="less" scoped>
.yc-switch {
  background-color: v-bind(background);
  &::after {
    background-color: v-bind(background);
  }
}
@import './style/switch.less';
</style>
