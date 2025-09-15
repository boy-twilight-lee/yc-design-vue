import { computed, Ref, ref, toRefs, nextTick } from 'vue';
import { ObjectType, Required } from '@shared/type';
import { TextareaEmits } from '@/components/Textarea';
import { InputProps as _InputProps, InputEmits } from '@/components/Input';
import {
  isFunction,
  isNumber,
  isUndefined,
  useControlValue,
} from '@shared/utils';
import useCursor from './useCursor';

export type InputProps = Required<_InputProps>;

export default (params: {
  props: ObjectType;
  emits: InputEmits | TextareaEmits;
  inputRef: Ref<HTMLInputElement | HTMLTextAreaElement | undefined>;
}) => {
  const { props, emits, inputRef } = params;
  // 解构属性
  const {
    modelValue,
    defaultValue,
    disabled,
    readonly,
    allowClear,
    error: _error,
    showWordLimit: _showWordLimit,
    maxLength: _maxLength,
  } = toRefs(props as InputProps);
  const { wordLength, wordSlice } = props;
  // 初始化记录光标位置的hook
  const { setCursor, recordCursor } = useCursor(inputRef);
  // 最大长度
  const maxLength = computed(() => {
    return isNumber(_maxLength.value)
      ? _maxLength.value
      : _maxLength.value?.length;
  });
  // 是否只报错
  const maxLengthErrorOnly = computed(() => {
    return isNumber(_maxLength.value) ? false : _maxLength.value?.errorOnly;
  });
  //error状态
  const error = useControlValue<boolean>(_error, false);
  // 受控值
  const computedValue = useControlValue<string>(
    modelValue,
    defaultValue.value,
    (val) => {
      emits('update:modelValue', val);
    }
  );
  // 是否展示字数限制
  const showWordLimit = computed(() => {
    return isNumber(maxLength.value) && _showWordLimit.value;
  });
  // 显示i清楚按钮
  const showClearBtn = computed(() => {
    return (
      allowClear.value &&
      !disabled.value &&
      !readonly.value &&
      !!computedValue.value.length
    );
  });
  // wordLeng下的maxLength
  let wordLengthMax = 0;
  //   当前显示的长度
  const curLength = computed(() => {
    return getValueLength(computedValue.value);
  });
  // 是否中文合成
  const isComposition = ref<boolean>(false);
  // 记录最大长度
  const recordWordMaxLength = () => {
    if (curLength.value == maxLength.value) {
      wordLengthMax = computedValue.value.length;
    }
  };
  // 获取value的长度
  function getValueLength(value: string) {
    if (isFunction(wordLength)) {
      return wordLength(value);
    }
    return value?.length || 0;
  }
  // 保持受控
  const keepControl = async () => {
    recordCursor();
    await nextTick();
    if (inputRef.value && computedValue.value !== inputRef.value.value) {
      inputRef.value.value = computedValue.value;
      setCursor();
    }
  };
  // 更新值
  const updateValue = (value: string, e: Event) => {
    if (maxLength.value && getValueLength(value) > maxLength.value) {
      if (!maxLengthErrorOnly.value) {
        computedValue.value = wordSlice(value, wordLengthMax);
      } else {
        computedValue.value = value;
        error.value = true;
      }
    } else {
      computedValue.value = value;
    }
    emits('input', value, e);
    keepControl();
  };
  // 处理中文合成
  const handleComposition = (e: CompositionEvent) => {
    const { value, selectionStart, selectionEnd } =
      e.target as HTMLInputElement;
    isComposition.value = e.type !== 'compositionend';
    if (isComposition.value) {
      if (isUndefined(maxLength.value)) {
        emits('input', value, e);
        computedValue.value = value;
      }
      return;
    }
    if (
      maxLength.value &&
      !maxLengthErrorOnly.value &&
      curLength.value >= maxLength.value &&
      getValueLength(value) > maxLength.value &&
      selectionStart === selectionEnd
    ) {
      return keepControl();
    }
    updateValue(value, e);
  };
  // 处理限制输入
  const handleInput = async (e: Event) => {
    const { value } = e.target as HTMLInputElement;
    // 中文合成退出
    if (isComposition.value) {
      return;
    }
    recordWordMaxLength();
    // 处理输入情况
    if (
      maxLength.value &&
      !maxLengthErrorOnly.value &&
      curLength.value >= maxLength.value &&
      getValueLength(value) > maxLength.value &&
      (e as InputEvent).inputType === 'insertText'
    ) {
      return keepControl();
    }
    // 处理赋值情况
    updateValue(value, e);
  };

  return {
    computedValue,
    showClearBtn,
    showWordLimit,
    curLength,
    error,
    disabled,
    maxLength,
    handleInput,
    handleComposition,
  };
};
