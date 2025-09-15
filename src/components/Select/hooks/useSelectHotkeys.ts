import { ref, Ref } from 'vue';
import { onKeyStroke } from '@vueuse/core';
import { SelectEmits, SelectOptionData, SelectValue } from '../type';
import { ObjectType } from '@shared/type';

export default (params: {
  hotkeys: Ref<boolean>;
  multiple: Ref<boolean>;
  limit: Ref<number>;
  computedVisible: Ref<boolean>;
  computedValue: Ref<SelectValue>;
  options: Ref<SelectOptionData[]>;
  blur: () => void;
  emits: SelectEmits;
}) => {
  const {
    computedValue,
    computedVisible,
    options,
    hotkeys,
    multiple,
    limit,
    blur,
    emits,
  } = params;
  const curIndex = ref<number>(-1);
  if (!hotkeys.value) {
    return {
      curIndex,
    };
  }
  onKeyStroke(['ArrowUp', 'ArrowDown', 'Enter'], (e) => {
    if (!computedVisible.value || !options.value.length) return;
    const { key } = e;
    e.preventDefault();
    if (key == 'ArrowUp') {
      curIndex.value--;
      curIndex.value =
        curIndex.value < 0 ? options.value.length - 1 : curIndex.value;
    } else if (key == 'ArrowDown') {
      curIndex.value++;
      curIndex.value =
        curIndex.value >= options.value.length ? 0 : curIndex.value;
    } else {
      const option = options.value[curIndex.value];
      if (option.disabled) return;
      const value = option.value!;
      if (multiple.value) {
        const curValue = computedValue.value as ObjectType[];
        const index = curValue.findIndex((item) => item == value);
        if (index == -1) {
          if (limit.value > 0 && curValue.length == limit.value) {
            return emits('exceedLimit', value);
          }
          computedValue.value = [...curValue, value];
        } else {
          computedValue.value = curValue.filter((item) => item != value);
        }
      } else {
        computedValue.value = value as string;
        blur();
      }
      emits('select', value);
    }
  });
  return {
    curIndex,
  };
};
