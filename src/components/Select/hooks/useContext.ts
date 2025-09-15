import {
  ref,
  computed,
  toRefs,
  Ref,
  useSlots,
  Slots,
  provide as _provide,
  inject as _inject,
} from 'vue';
import {
  SelectValue,
  SelectOptionData,
  SelectEmits,
  SelectProps as _SelectProps,
  OptionValue,
} from '../type';
import { InputInstance } from '@/components/Input';
import { ObjectData, Required } from '@shared/type';
import { isBoolean, isFunction, useControlValue } from '@shared/utils';
import useSelectOptions from './useSelectOptions';
import useSelectHotkeys from './useSelectHotkeys';

const SELECT_CONTEXT_KEY = 'select-context';
type SelectContext = {
  computedValue: Ref<SelectValue | undefined>;
  computedInputValue: Ref<string>;
  multiple: Ref<boolean>;
  limit: Ref<number>;
  curIndex: Ref<number>;
  options: Ref<SelectOptionData[]>;
  renderOptions: Ref<ObjectData[]>;
  fieldKey: Ref<Record<string, string>>;
  isEmpty: Ref<boolean>;
  slots: Slots;
  blur: () => void;
  filterOption: (option: SelectOptionData) => boolean;
  getValue: (value: OptionValue | ObjectData) => OptionValue;
  collectOption: (props: ObjectData, optionLabel: Ref<string>) => void;
  emits: SelectEmits;
};
type SelectProps = Required<_SelectProps>;

export default () => {
  const provide = (
    props: ObjectData,
    emits: SelectEmits,
    inputRef: Ref<InputInstance | undefined>
  ) => {
    const {
      popupVisible,
      defaultPopupVisible,
      modelValue,
      defaultValue,
      inputValue,
      defaultInputValue,
      multiple,
      fieldNames,
      limit,
      allowSearch,
      showExtraOptions,
      valueKey,
      hotkeys,
      options: provideOptions,
      showEmpty,
    } = toRefs(props as SelectProps);
    const {
      formatLabel,
      fallbackOption,
      filterOption: _filterOption,
    } = props as SelectProps;
    // popupVisible
    const computedVisible = useControlValue<boolean>(
      popupVisible,
      defaultPopupVisible.value,
      (val) => {
        emits('update:popupVisible', val);
        emits('popup-visible-change', val);
      }
    );
    // 当前选项
    const computedValue = useControlValue<SelectValue>(
      modelValue,
      defaultValue.value ? defaultValue.value : multiple.value ? [] : '',
      (val) => {
        emits('change', val);
        emits('update:modelValue', val);
      },
      (val) => {
        if (multiple.value) {
          return Array.isArray(val) ? val : [val];
        }
        return val;
      }
    );
    // 输入框的值
    const computedInputValue = useControlValue<string>(
      inputValue,
      defaultInputValue.value,
      (val) => {
        emits('update:inputValue', val);
      }
    );
    // fieldKey
    const fieldKey = computed(() => {
      const keys = [
        'id',
        'label',
        'value',
        'disabled',
        'tagProps',
        'render',
        'isFallbackOption',
      ];
      return Object.fromEntries(
        keys.map((key) => {
          return [key, fieldNames.value[key] ?? key];
        })
      );
    });
    // 过滤函数
    const filterFn = (option: SelectOptionData) => {
      const label = option?.label;
      const keyword = computedInputValue.value.toLowerCase()?.toLowerCase();
      return !!label?.includes(keyword);
    };
    // 过滤函数
    const filterOption = (option: SelectOptionData) => {
      if (allowSearch.value) {
        return isFunction(_filterOption)
          ? _filterOption(computedInputValue.value, option)
          : filterFn(option);
      }
      if (isBoolean(_filterOption) && !_filterOption) {
        return true;
      }
      return isFunction(_filterOption)
        ? _filterOption(computedInputValue.value, option)
        : filterFn(option);
    };
    // 获取选项的值
    const {
      options,
      renderOptions,
      createOptions,
      selectOptions,
      collectOption,
    } = useSelectOptions({
      computedValue,
      multiple,
      showExtraOptions,
      provideOptions,
      getValue,
      fallbackOption,
      formatLabel,
    });
    // 搜索为空的情况
    const isEmpty = computed(() => {
      if (!showEmpty.value) {
        return showEmpty.value;
      }
      if (!allowSearch.value || (isBoolean(_filterOption) && !filterOption)) {
        return !options.value.length;
      }
      return options.value.every((item) => {
        return !filterOption(item);
      });
    });
    // 初始化快捷键
    const { curIndex } = useSelectHotkeys({
      computedValue,
      computedVisible,
      hotkeys,
      limit,
      multiple,
      options,
      blur,
      emits,
    });
    // 获取value
    function getValue(value: OptionValue): OptionValue {
      return (value as ObjectData)?.[valueKey.value] ?? value;
    }
    // 失焦
    function blur() {
      inputRef.value?.blur();
    }
    // 提供值
    _provide<SelectContext>(SELECT_CONTEXT_KEY, {
      computedValue,
      computedInputValue,
      limit,
      multiple,
      curIndex,
      options,
      isEmpty,
      fieldKey,
      renderOptions: renderOptions as Ref<ObjectData[]>,
      slots: useSlots(),
      filterOption,
      blur,
      getValue,
      emits,
      collectOption,
    });
    return {
      computedVisible,
      computedValue,
      computedInputValue,
      selectOptions,
      createOptions,
      options,
    };
  };
  const inject = () => {
    return _inject<SelectContext>(SELECT_CONTEXT_KEY, {
      computedValue: ref(undefined),
      computedInputValue: ref(''),
      multiple: ref(false),
      limit: ref(0),
      curIndex: ref(-1),
      options: ref([]),
      renderOptions: ref([]),
      isEmpty: ref(false),
      fieldKey: ref({}),
      slots: {},
      emits: () => {},
      blur: () => {},
      filterOption: () => {
        return true;
      },
      getValue: () => '',
      collectOption: () => {},
    });
  };
  return {
    provide,
    inject,
  };
};
