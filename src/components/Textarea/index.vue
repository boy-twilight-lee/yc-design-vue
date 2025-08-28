<template>
  <div
    :class="[
      'yc-textarea-wrapper',
      {
        'yc-textarea-disabled': disabled,
        'yc-textarea-error': error,
        'yc-textarea-auto-size': autoSize,
      },
    ]"
  >
    <!-- moirror获取 -->
    <div
      v-if="autoSize || showMirror"
      class="yc-textarea-mirror"
      ref="mirrorRef"
    >
      {{ computedValue }}
    </div>
    <!-- textarea -->
    <textarea
      :value="computedValue"
      :disabled="disabled"
      :readonly="readonly"
      :placeholder="placeholder"
      :style="style"
      class="yc-textarea"
      ref="inputRef"
      @compositionstart="handleComposition"
      @compositionupdate="handleComposition"
      @compositionend="handleComposition"
      @keydown="
        (ev) => {
          ev.key == 'Enter' && enterPrevent && ev.preventDefault();
          $emit('keydown', ev);
        }
      "
      @input="handleEvent('input', $event)"
      @change="handleEvent('change', $event)"
      @focus="handleEvent('focus', $event)"
      @blur="handleEvent('blur', $event)"
    ></textarea>
    <!-- wordlimit -->
    <prevent-focus
      v-if="showWordLimit"
      tag="span"
      class="yc-textarea-word-limit"
    >
      {{ curLength }}
      /
      {{ maxLength }}
    </prevent-focus>
    <!-- clear -->
    <icon-button
      v-if="showClearBtn"
      class="yc-textarea-clear-button"
      @click="handleEvent('clear', $event)"
    />
  </div>
</template>

<script lang="ts" setup>
import { ref, toRefs } from 'vue';
import { TextareaProps, TextareaEmits, TextareaExpose } from './type';
import useTextareaHeight from './hooks/useTextareaHeight';
import useLimitedInput from '@/components/Input/hooks/useLimitedInput';
import { PreventFocus, IconButton } from '@shared/components';
defineOptions({
  name: 'Textarea',
});
const props = withDefaults(defineProps<TextareaProps>(), {
  modelValue: undefined,
  defaultValue: '',
  placeholder: '',
  disabled: false,
  readonly: false,
  error: undefined,
  maxLength: undefined,
  showWordLimit: false,
  allowClear: false,
  autoSize: false,
  wordLength: (value: string) => {
    return value.length;
  },
  wordSlice: (value: string, maxLength: number) => {
    return value.slice(0, maxLength);
  },
  enterPrevent: false,
  showMirror: false,
});
const emits = defineEmits<TextareaEmits>();
const { autoSize } = toRefs(props);
// 输入实例
const inputRef = ref<HTMLTextAreaElement>();
// div的ref
const mirrorRef = ref<HTMLDivElement>();
// 限制输入hooks
const {
  error,
  computedValue,
  showWordLimit,
  showClearBtn,
  curLength,
  maxLength,
  handleInput,
  handleComposition,
} = useLimitedInput({
  props,
  emits,
  inputRef,
});
// 计算textare高度
const { style } = useTextareaHeight(mirrorRef, autoSize.value);
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
        emits(type as any, e as FocusEvent);
      }
      break;
    case 'clear':
      {
        computedValue.value = '';
        emits('clear', e as MouseEvent);
      }
      break;
  }
};
// 暴露方法
defineExpose<TextareaExpose>({
  getInputRef() {
    return inputRef.value as HTMLTextAreaElement;
  },
  getMirrorRef() {
    return mirrorRef.value as HTMLDivElement;
  },
  focus() {
    inputRef.value?.focus();
  },
  blur() {
    inputRef.value?.blur();
  },
});
</script>

<style lang="less" scoped>
@import './style/textarea.less';
</style>
