import { toRefs, computed, ref, nextTick } from "vue";
import "../../node_modules/tinycolor2/esm/tinycolor.js";
import "../../_shared/utils/dom.js";
import { isNumber, isFunction, isUndefined } from "../../_shared/utils/is.js";
import "../../_shared/utils/time.js";
import "../../Empty/index.js";
import "../../_shared/icons/_Icon.vue.js";
import useControlValue from "../../_shared/utils/control.js";
import useCursor from "./useCursor.js";
const useLimitedInput = (params) => {
  const { props, emits, inputRef } = params;
  const {
    modelValue,
    defaultValue,
    disabled,
    readonly,
    allowClear,
    error: _error,
    showWordLimit: _showWordLimit,
    maxLength: _maxLength
  } = toRefs(props);
  const { wordLength, wordSlice } = props;
  const { setCursor, recordCursor } = useCursor(inputRef);
  const maxLength = computed(() => {
    var _a;
    return isNumber(_maxLength.value) ? _maxLength.value : (_a = _maxLength.value) == null ? void 0 : _a.length;
  });
  const maxLengthErrorOnly = computed(() => {
    var _a;
    return isNumber(_maxLength.value) ? false : (_a = _maxLength.value) == null ? void 0 : _a.errorOnly;
  });
  const error = useControlValue(_error, false);
  const computedValue = useControlValue(
    modelValue,
    defaultValue.value,
    (val) => {
      emits("update:modelValue", val);
    }
  );
  const showWordLimit = computed(() => {
    return isNumber(maxLength.value) && _showWordLimit.value;
  });
  const showClearBtn = computed(() => {
    return allowClear.value && !disabled.value && !readonly.value && !!computedValue.value.length;
  });
  let wordLengthMax = 0;
  const curLength = computed(() => {
    return getValueLength(computedValue.value);
  });
  const isComposition = ref(false);
  const recordWordMaxLength = () => {
    if (curLength.value == maxLength.value) {
      wordLengthMax = computedValue.value.length;
    }
  };
  function getValueLength(value) {
    if (isFunction(wordLength)) {
      return wordLength(value);
    }
    return (value == null ? void 0 : value.length) || 0;
  }
  const keepControl = async () => {
    recordCursor();
    await nextTick();
    if (inputRef.value && computedValue.value !== inputRef.value.value) {
      inputRef.value.value = computedValue.value;
      setCursor();
    }
  };
  const updateValue = (value, e) => {
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
    emits("input", value, e);
    keepControl();
  };
  const handleComposition = (e) => {
    const { value, selectionStart, selectionEnd } = e.target;
    isComposition.value = e.type !== "compositionend";
    if (isComposition.value) {
      if (isUndefined(maxLength.value)) {
        emits("input", value, e);
        computedValue.value = value;
      }
      return;
    }
    if (maxLength.value && !maxLengthErrorOnly.value && curLength.value >= maxLength.value && getValueLength(value) > maxLength.value && selectionStart === selectionEnd) {
      return keepControl();
    }
    updateValue(value, e);
  };
  const handleInput = async (e) => {
    const { value } = e.target;
    if (isComposition.value) {
      return;
    }
    recordWordMaxLength();
    if (maxLength.value && !maxLengthErrorOnly.value && curLength.value >= maxLength.value && getValueLength(value) > maxLength.value && e.inputType === "insertText") {
      return keepControl();
    }
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
    handleComposition
  };
};
export {
  useLimitedInput as default
};
