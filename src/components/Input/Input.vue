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
        v-show="!$slots.label || ($slots.label && showInput)"
        :value="computedValue"
        :type="type"
        :disabled="disabled"
        :readonly="readonly"
        :placeholder="placeholder"
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
      <input-suffix
        v-if="$slots.suffix || showWordLimit || (isPassword && invisibleButton)"
        :cur-length="curLength"
        :max-length="maxLength"
        :computed-value="computedValue"
        :show-word-limit="showWordLimit"
        :computed-visibility="computedVisibility"
        :invisible-button="invisibleButton"
        :is-password="isPassword"
        @visibility-change="(v) => (computedVisibility = v)"
      >
        <template v-if="$slots.suffix" #suffix>
          <slot name="suffix" />
        </template>
      </input-suffix>
    </div>
    <!-- append -->
    <prevent-focus v-if="$slots.append" class="yc-input-append">
      <slot name="append" />
    </prevent-focus>
  </div>
</template>

<script lang="ts" setup>
import { ref, toRefs, computed } from 'vue';
import { InputProps, InputEmits, InputSlots, InputExpose } from './type';
import { useControlValue, getGlobalConfig } from '@shared/utils';
import useLimitedInput from './hooks/useLimitedInput';
import { PreventFocus, IconButton } from '@shared/components';
import InputSuffix from './InputSuffix.vue';
defineOptions({
  name: 'Input',
});
defineSlots<InputSlots>();
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
  // password
  isPassword: false,
  visibility: undefined,
  defaultVisibility: false,
  invisibleButton: true,
  // select
  showInput: false,
});
const emits = defineEmits<InputEmits>();
const { visibility, defaultVisibility } = toRefs(props);
// 获取全局属性
const { size } = getGlobalConfig(props);
// 输入实例
const inputRef = ref<HTMLInputElement>();
// 非受控的vis
const computedVisibility = useControlValue<boolean>(
  visibility,
  defaultVisibility.value,
  (val) => {
    emits('update:visibility', val);
    emits('visibility-change', val);
  }
);
// 输入框类型
const type = computed(() => {
  return computedVisibility.value ? 'password' : 'text';
});
// 限制输入hooks
const {
  computedValue,
  showWordLimit,
  showClearBtn,
  curLength,
  maxLength,
  error,
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
