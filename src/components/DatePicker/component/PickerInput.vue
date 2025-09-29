<template>
  <yc-trigger
    v-model:popup-visible="computedVisible"
    :popup-offset="4"
    :popup-container="popupContainer"
    :unmount-on-close="unmountOnClose"
    :disabled="disabled || readonly"
    :position="position"
    prevent-focus
    trigger="click"
    animation-name="slide-dynamic-origin"
    need-transform-origin
    v-bind="triggerProps"
  >
    <yc-input
      :model-value="formatValue"
      :placeholder="placeholder"
      :disabled="disabled"
      :error="error"
      :size="size"
      :readonly="readonly || disabledInput || true"
      :style="$attrs.style"
      :class="[
        $attrs.class,
        {
          'yc-picker-allow-clear': showClearBtn,
        },
      ]"
      ref="inputRef"
    >
      <template v-if="$slots.prefix" #prefix>
        <slot name="prefix" />
      </template>
      <template #suffix>
        <div class="yc-picker-suffix-icon">
          <slot name="suffix-icon">
            <icon-calendar />
          </slot>
        </div>
        <icon-button v-if="showClearBtn" @click.stop="onClear" />
      </template>
    </yc-input>
    <template #content>
      <slot name="content" />
    </template>
  </yc-trigger>
</template>

<script lang="ts" setup>
import { watch, nextTick, ref, toRefs, computed } from 'vue';
import { IconCalendar } from '@shared/icons';
import { useI18n } from '@shared/utils';
import { IconButton } from '@shared/components';
import userPickerInputContext from '../hooks/userPickerInputContext';
import YcInput, { InputInstance } from '@/components/Input';
import YcTrigger from '@/components/Trigger';
defineOptions({
  inheritAttrs: false,
});
const $props = withDefaults(
  defineProps<{
    type?: 'year' | 'month' | 'week' | 'quarter' | 'time' | 'date';
  }>(),
  {
    type: 'date',
  }
);
const { props, computedVisible, formatValue, showClearBtn, onClear } =
  userPickerInputContext().inject();
const {
  popupContainer,
  unmountOnClose,
  readonly,
  disabled,
  position,
  triggerProps,
  placeholder: _placeholder,
  size,
  error,
  disabledInput,
  locale,
} = toRefs(props);
const { t } = useI18n();
// placeholder
const placeholder = computed(() => {
  const key = `datePicker.placeholder.${$props.type}`;
  return _placeholder.value || locale.value?.[key] || t(key);
});
// inputRef
const inputRef = ref<InputInstance>();
watch(
  () => computedVisible.value,
  async (val) => {
    if (val) return;
    await nextTick();
    inputRef.value?.blur();
  }
);
</script>

<style lang="less" scoped>
@import '../style/picker-input.less';
</style>
