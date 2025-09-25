<template>
  <div
    :class="[
      'yc-input-outer',
      `yc-input-size-${size}`,
      {
        'yc-input-disabled': disabled,
        'yc-input-error': error,
        'yc-input-has-prepend': $slots.prepend,
        'yc-input-has-append': $slots.append,
      },
    ]"
  >
    <!-- prepend -->
    <prevent-focus v-if="$slots.prepend" class="yc-input-prepend">
      <slot name="prepend" />
    </prevent-focus>
    <!-- wrapper -->
    <div
      :class="['yc-input-wrapper', { 'yc-input-wrapper-disabled': disabled }]"
    >
      <!-- prefix-icon -->
      <prevent-focus v-if="$slots.prefix" class="yc-input-prefix">
        <slot name="prefix" />
      </prevent-focus>
      <!-- input -->
      <input
        v-show="!$slots.label || showInput"
        :value="computedValue"
        :disabled="disabled"
        :readonly="readonly"
        :placeholder="placeholder"
        type="text"
        v-bind="inputAttrs"
        class="yc-input"
        ref="inputRef"
        @input="handleEvent('input', $event)"
        @change="handleEvent('change', $event)"
        @compositionstart="handleComposition"
        @compositionupdate="handleComposition"
        @compositionend="handleComposition"
        @focus="handleEvent('focus', $event)"
        @blur="handleEvent('blur', $event)"
        @keydown.enter="handleEvent('keydown', $event)"
      />
      <!-- select模式下的label -->
      <prevent-focus
        v-if="$slots.label"
        v-show="!showInput"
        class="yc-input text-ellipsis"
      >
        <slot name="label" />
      </prevent-focus>
      <!-- clear-btn -->
      <icon-button
        v-if="showClearBtn"
        class="yc-input-clear-button"
        @click="handleEvent('clear', $event)"
      />
      <!-- suffix -->
      <prevent-focus class="yc-input-suffix">
        <!-- word-limit -->
        <div v-if="showWordLimit" class="yc-input-word-limit">
          {{ curLength }}/{{ maxLength }}
        </div>
        <!-- extra -->
        <slot name="extra" />
        <!-- suffix -->
        <slot name="suffix" />
      </prevent-focus>
    </div>
    <!-- append -->
    <prevent-focus v-if="$slots.append" class="yc-input-append">
      <slot name="append" />
    </prevent-focus>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import { InputProps, InputEmits, InputSlots, InputExpose } from './type';
import { getGlobalConfig } from '@shared/utils';
import useLimitedInput from './hooks/useLimitedInput';
import { PreventFocus, IconButton } from '@shared/components';
defineOptions({
  name: 'Input',
});
const $slots = defineSlots<InputSlots>();
const props = withDefaults(defineProps<InputProps>(), {
  modelValue: undefined,
  defaultValue: '',
  size: undefined,
  allowClear: false,
  disabled: false,
  readonly: false,
  error: undefined,
  maxLength: undefined,
  showWordLimit: false,
  placeholder: '',
  inputAttrs: () => {
    return {};
  },
  wordLength: (value: string) => {
    return value.length;
  },
  wordSlice: (value: string, maxLength: number) => {
    return value.slice(0, maxLength);
  },
  // select
  showInput: false,
});
const emits = defineEmits<InputEmits>();
// 获取全局属性
const { size } = getGlobalConfig(props);
// 输入实例
const inputRef = ref<HTMLInputElement>();
// 限制输入hooks
const {
  computedValue,
  showWordLimit,
  showClearBtn,
  curLength,
  maxLength,
  error,
  recordCursor,
  setCursor,
  handleInput,
  handleComposition,
} = useLimitedInput({
  props,
  emits,
  inputRef,
});
// 处理输入，改变和清除
const handleEvent = async (type: string, e: Event) => {
  switch (type) {
    case 'input':
      {
        handleInput(e);
      }
      break;
    case 'change':
      {
        emits('change', computedValue.value, e);
      }
      break;
    case 'focus':
    case 'blur':
      {
        emits(type as keyof InputEmits, e as FocusEvent);
      }
      break;
    case 'clear':
      {
        computedValue.value = '';
        emits('clear', e as MouseEvent);
      }
      break;
    case 'keydown':
      {
        const ev = e as KeyboardEvent;
        emits('keydown', ev);
        ev.key == 'Enter' && emits('pressEnter', ev);
      }
      break;
  }
};
// 暴露方法
defineExpose<InputExpose>({
  setCursor,
  recordCursor,
  focus() {
    inputRef.value?.focus();
  },
  blur() {
    inputRef.value?.blur();
  },
  getInputRef() {
    return inputRef.value as HTMLInputElement;
  },
});
</script>

<style lang="less">
@import './style/input.less';
</style>
