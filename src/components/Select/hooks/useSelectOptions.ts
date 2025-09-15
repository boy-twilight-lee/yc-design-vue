import { ref, computed, Ref, onMounted, reactive } from 'vue';
import { nanoid } from 'nanoid';
import { ObjectData } from '@shared/type';
import {
  OptionProps,
  SelectValue,
  SelectOption,
  FallbackOption,
  FormatLabel,
  SelectOptionData,
  OptionValue,
} from '../index';
import { isNull, isObject, isString, isUndefined } from '@shared/utils';

export default (params: {
  multiple: Ref<boolean>;
  computedValue: Ref<SelectValue>;
  provideOptions: Ref<SelectOption[]>;
  showExtraOptions: Ref<boolean>;
  getValue: (value: OptionValue) => OptionValue;
  fallbackOption?: FallbackOption;
  formatLabel?: FormatLabel;
}) => {
  const {
    computedValue,
    multiple,
    provideOptions,
    showExtraOptions,
    getValue,
    fallbackOption,
    formatLabel,
  } = params;
  // optionMap
  const optionMap = reactive<Map<string, ObjectData>>(new Map());
  // 所有的options
  const options = computed(() => [...optionMap.values()]);
  // 创建的options
  const createOptions = ref<SelectOptionData[]>([]);
  // fallbackoption
  const fallbackOptions = computed(() => {
    if (!fallbackOption) return [];
    return selectValue.value
      .filter((v) => !options.value.find((item) => getValue(item.value) == v))
      .map((v: SelectValue) => {
        const target = fallbackOption(v);
        return {
          ...(target || {}),
          isFallbackOption: true,
        };
      });
  });
  // 渲染的option数组
  const renderOptions = computed<SelectOption[]>(() => {
    return [
      ...provideOptions.value,
      ...createOptions.value,
      ...(showExtraOptions.value ? fallbackOptions.value : []),
    ].map((item) => {
      let option = item;
      if (!isObject(item)) {
        option = {
          label: item,
          value: item,
        };
      }
      return {
        id: nanoid(),
        ...(option as ObjectData),
      };
    });
  });
  // 选中的value
  const selectValue = computed(() => {
    const value = multiple.value ? computedValue.value : [computedValue.value];
    return (value as ObjectData[])
      .map((item) => getValue(item))
      .filter((v) => !isEmpty(v));
  });
  // 选中的值
  const selectOptions = computed(() => {
    const opts = [...options.value, ...fallbackOptions.value];
    // 计算input-tag需要显示的值
    return selectValue.value.map((v) => {
      const option = (opts.find((item) => getValue(item.value) == v) ||
        {}) as SelectOptionData;
      return {
        ...option,
        id: `${v}`,
        label: option ? (formatLabel?.(option) ?? option?.label) : v,
      };
    });
  });
  // 一个值是否是空
  const isEmpty = (val: any) => {
    return isUndefined(val) || isNull(val) || (isString(val) && !val.length);
  };
  // 收集option
  const collectOption = (props: ObjectData, optionLabel: Ref<string>) => {
    if (props.isFallbackOption) return;
    const id = nanoid();
    // 挂载的时候收集option
    onMounted(() => {
      const value = `${getValue(props.value)}`;
      optionMap.set(id, {
        ...props,
        label: optionLabel.value,
        value: value ? props.value : optionLabel.value,
      } as OptionProps);
    });
  };
  return {
    options,
    createOptions,
    renderOptions,
    selectOptions,
    collectOption,
  };
};
