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
    @popup-visible-change="(v: boolean) => $emit('popup-visible-change', v)"
  >
    <slot name="trigger">
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
            'yc-picker-active': computedVisible,
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
              <icon-date />
            </slot>
          </div>
          <icon-button v-if="showClearBtn" @click.stop="onClear" />
        </template>
      </yc-input>
    </slot>
    <template #content>
      <slot name="content" />
    </template>
  </yc-trigger>
</template>

<script lang="ts" setup>
import { watch, nextTick, ref, toRefs, computed } from 'vue';
import { IconDate } from '@shared/icons';
import { useI18n } from '@shared/utils';
import { IconButton } from '@shared/components';
import userPickerInputContext from '../hooks/useContext';
import YcInput, { InputInstance } from '@/components/Input';
import YcTrigger from '@/components/Trigger';
defineOptions({
  inheritAttrs: false,
});
const $props = withDefaults(
  defineProps<{
    type?: 'year' | 'month' | 'week' | 'time' | 'date';
  }>(),
  {
    type: 'date',
  }
);
defineEmits<{
  (e: 'popup-visible-change', val: boolean): void;
}>();
const { props, computedVisible, formatValue, showClearBtn, onClear } =
  userPickerInputContext().inject();
const {
  popupContainer,
  unmountOnClose,
  readonly,
  disabled,
  position,
  triggerProps,
  size,
  error,
  disabledInput,
  locale,
  placeholder: _placeholder,
} = toRefs(props);
const { t } = useI18n();
// placeholder
const placeholder = computed(() => {
  const localeKey = `placeholder.${$props.type}`;
  const tkey = `datePicker.placeholder.${$props.type}`;
  return _placeholder.value || locale.value?.[localeKey] || t(tkey);
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

<style lang="less">
@import '../style/picker.less';
</style>
