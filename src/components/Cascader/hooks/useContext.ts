import {
  ref,
  toRefs,
  Ref,
  computed,
  useSlots,
  Slots,
  watch,
  provide as _provide,
  inject as _inject,
} from 'vue';
import {
  CascaderEmits,
  CascaderProps as _CascaderProps,
  CascaderValue,
  CascaderOption,
  CascaderOptionValue,
  CascaderOptionProps,
  LoadMore,
} from '../type';
import { InputInstance } from '@/components/Input';
import { EventTrigger, RecordType, Required } from '@shared/type';
import { isObject, isArray, isBoolean, isFunction } from '@shared/utils/is';
import { useControlValue } from '@shared/utils/control';

const CASCADER_CONTEXT_KEY = 'cascader-context';
type CascaderContext = {
  computedValue: Ref<CascaderValue>;
  computedInputValue: Ref<string>;
  totalOptions: Ref<CascaderOption[]>;
  options: Ref<CascaderOptionProps[]>;
  searchOptions: Ref<CascaderOptionProps[]>;
  curLevel: Ref<number>;
  maxLevel: Ref<number>;
  curPath: Ref<number[]>;
  pathMode: Ref<boolean>;
  multiple: Ref<boolean>;
  loading: Ref<boolean>;
  expandTrigger: Ref<EventTrigger>;
  expandChild: Ref<boolean>;
  slots: Slots;
  blur: () => void;
  getValueKey: (value: any) => string;
  loadMore?: LoadMore;
  getOption: (
    value: CascaderOptionValue | CascaderOptionValue[]
  ) => CascaderOptionProps;
};
type CascaderProps = Required<_CascaderProps>;
// 增强option添加indexPath,valuePath,level,labelPath
export const transformOptions = (
  options: CascaderOption[],
  level: number = 1,
  nodePath: CascaderOption[] = []
): CascaderOptionProps[] => {
  return options.map((option, index) => {
    // 构建baseOption
    const baseOption = {
      ...option,
      index,
      level,
    };
    // 构建path
    const curNodePath = [...nodePath, baseOption];
    // 构建option
    const enhancedOption: CascaderOptionProps = {
      ...baseOption,
      nodePath: curNodePath,
    };
    // 递归处理子节点
    if (enhancedOption.children && enhancedOption.children.length > 0) {
      enhancedOption.children = transformOptions(
        enhancedOption.children,
        level + 1,
        curNodePath
      );
    }
    return enhancedOption;
  });
};
// 扁平化options
export const flattenOptions = (options: CascaderOptionProps[]) => {
  const result: CascaderOptionProps[] = [];
  const traverse = (options: CascaderOptionProps[]) => {
    options.forEach((option) => {
      // 添加当前节点到结果数组
      result.push(option);
      // 递归处理子节点
      if (option.children && option.children.length > 0) {
        traverse(option.children);
      }
    });
  };
  traverse(options);
  return result;
};
// 基于当前的level和父级path查找options
export const findOptions = (
  options: CascaderOptionProps[],
  level: number,
  parentPath: number[]
) => {
  return level == 1
    ? options.filter((item) => item.level == level)
    : options.filter((v) => {
        return (
          v.level == level &&
          v.nodePath
            ?.slice(0, v.nodePath.length - 1)
            .map((item) => item.index)
            .join('') == parentPath.join('')
        );
      });
};
// 依靠level和value查找option
export function findOptionByValueAndLevel(
  options: CascaderOption[],
  value: CascaderOptionValue,
  level: number,
  currentLevel: number = 1
): CascaderOption | undefined {
  // 如果当前层级大于目标层级，停止搜索
  if (currentLevel > level) {
    return undefined;
  }
  // 遍历当前层级的选项
  for (const option of options) {
    // 如果当前层级是目标层级，并且值匹配，返回该选项
    if (currentLevel === level && option.value === value) {
      return option;
    }
    // 如果有子节点，递归搜索下一层级
    if (option.children && option.children.length > 0) {
      const found = findOptionByValueAndLevel(
        option.children,
        value,
        level,
        currentLevel + 1
      );
      // 如果在子节点中找到匹配项，直接返回
      if (found) {
        return found;
      }
    }
  }
  // 没有找到匹配项
  return undefined;
}
// 获取所有的子叶节点
export const getLeafNodes = (nodes: CascaderOptionProps[]) => {
  const leafNodes: CascaderOptionProps[] = [];
  function traverse(currentNode: CascaderOptionProps) {
    if (!currentNode.children || currentNode.children.length === 0) {
      // 没有子节点，是叶子节点
      leafNodes.push(currentNode);
      return;
    }
    // 有子节点，继续递归遍历
    currentNode.children.forEach((child) => traverse(child));
  }
  // 遍历传入的每个节点
  nodes.forEach((node) => traverse(node));
  return leafNodes;
};
//  转换字段
function transformField(
  options: any[],
  fieldKeys: Record<string, string>
): CascaderOption[] {
  return options.map((option) => {
    // 创建新对象
    const transformed: any = {};
    // 转换基本字段
    transformed.label = option[fieldKeys.label] ?? option.label;
    transformed.value = option[fieldKeys.value] ?? option.value;
    // 转换其他可选字段
    if (fieldKeys.render) {
      transformed.render = option[fieldKeys.render] ?? option.render;
    }
    if (fieldKeys.disabled) {
      transformed.disabled = option[fieldKeys.disabled] ?? option.disabled;
    }
    if (fieldKeys.tagProps) {
      transformed.tagProps = option[fieldKeys.tagProps] ?? option.tagProps;
    }
    if (fieldKeys.isLeaf) {
      transformed.isLeaf = option[fieldKeys.isLeaf] ?? option.isLeaf;
    }
    // 递归转换子节点
    if (fieldKeys.children && option[fieldKeys.children]) {
      transformed.children = transformField(
        option[fieldKeys.children],
        fieldKeys
      );
    } else if (option.children) {
      transformed.children = transformField(option.children, fieldKeys);
    }
    return transformed;
  });
}

export default () => {
  const provide = (
    props: RecordType,
    emits: CascaderEmits,
    inputRef: Ref<InputInstance | undefined>
  ) => {
    const {
      modelValue,
      defaultValue,
      inputValue,
      defaultInputValue,
      popupVisible,
      defaultPopupVisible,
      pathMode,
      searchDelay,
      multiple,
      disabled,
      allowClear,
      allowSearch,
      loading,
      fieldNames,
      valueKey,
      expandTrigger,
      expandChild,
      searchOptionOnlyLabel,
      options: _options,
    } = toRefs(props as CascaderProps);
    const { formatLabel, fallback, filterOption, loadMore } =
      props as CascaderProps;
    // 受控的值
    const computedValue = useControlValue<CascaderValue>(
      modelValue,
      defaultValue.value,
      (val) => {
        emits('update:modelValue', val);
        emits('change', val);
      }
    );
    // 受控的输入
    const computedInputValue = useControlValue<string>(
      inputValue,
      defaultInputValue.value,
      (val) => {
        emits('update:inputValue', val);
        emits('input-value-change', val);
      }
    );
    // 受控的可见性
    const computedVisible = useControlValue<boolean>(
      popupVisible,
      defaultPopupVisible.value,
      (val) => {
        emits('update:popupVisible', val);
        emits('popup-visible-change', val);
      }
    );
    // 总的options
    const totalOptions = ref<CascaderOption[]>([..._options.value]);
    // options
    const options = computed(() => {
      // 转换fieldKeys
      const keys = [
        'label',
        'value',
        'render',
        'disabled',
        'tagProps',
        'children',
        'isLeaf',
      ];
      // 转换字段
      const fieldKeys = Object.fromEntries(
        keys.map((key) => [key, fieldNames.value?.[key] ?? key])
      ) as Record<string, string>;
      // 转换options
      return flattenOptions(
        transformOptions(transformField(totalOptions.value, fieldKeys))
      );
    });
    // optionMap
    const optionMap = computed(() => {
      return Object.fromEntries([
        ...options.value.map((item) => {
          return [getValueKey(item.nodePath!.map((item) => item.value!)), item];
        }),
        ...options.value.map((item) => {
          return [getValueKey(item), item];
        }),
      ]);
    });
    // 子叶option
    const leafOptions = computed(() => {
      return options.value.filter((option) => !option.children?.length);
    });
    // 搜索options
    const searchOptions = computed(() => {
      return leafOptions.value
        .filter((item) => filterOption(computedInputValue.value, item))
        .map((item) => {
          return {
            ...item,
            label: searchOptionOnlyLabel.value
              ? item.label
              : item.nodePath?.map((item) => item.label).join(' / '),
          };
        });
    });
    // 选中的option
    const selectOptions = computed(() => {
      const value = multiple.value
        ? computedValue.value
        : [computedValue.value].map((item) => item);
      return (value as CascaderOptionValue[][])
        .map((v) => {
          const option = getOption(v);
          if (option) {
            return {
              ...option,
              id: option.nodePath?.map((v1) => v1.index).join('-'),
              label:
                formatLabel?.(option.nodePath!) ??
                option.nodePath?.map((v1) => v1.label).join(' / '),
            };
          }
          if ((isBoolean(fallback) && fallback) || isFunction(fallback)) {
            return {
              id: getValueKey(v),
              label: isFunction(fallback) ? fallback(v) : getValueKey(v),
              value: getValueKey(v),
            };
          }
          return null;
        })
        .filter((v) => v) as RecordType[];
    });
    // 当前的层级
    const curLevel = ref<number>(1);
    // 最大level
    const maxLevel = computed(() => {
      return Math.max(...leafOptions.value.map((item) => item.level!)) || 0;
    });
    // 当前的index
    const curPath = ref<number[]>([]);
    // 插槽
    const slots = useSlots();
    // 获取value
    const getValue = (value: CascaderOptionValue) => {
      return isObject(value) ? value[valueKey.value] : value;
    };
    // 获取valueKey
    const getValueKey = (
      value: CascaderOptionValue | CascaderOptionValue[]
    ) => {
      return isArray(value)
        ? value.map((v) => getValue(v as CascaderOptionValue)).join(' / ')
        : (getValue(value) as string);
    };
    // 获取option
    const getOption = (value: CascaderOptionValue | CascaderOptionValue[]) => {
      return optionMap.value[getValueKey(value)] as CascaderOptionProps;
    };
    // 失焦
    function blur() {
      inputRef.value?.blur();
    }
    // 查找options
    watch(
      _options,
      () => {
        totalOptions.value = _options.value;
      },
      {
        deep: true,
      }
    );
    // 提供给子组件
    _provide<CascaderContext>(CASCADER_CONTEXT_KEY, {
      computedValue,
      computedInputValue,
      options,
      totalOptions,
      searchOptions,
      curLevel,
      maxLevel,
      curPath,
      expandTrigger,
      expandChild,
      pathMode,
      multiple,
      loading,
      slots,
      blur,
      getValueKey,
      getOption,
      loadMore,
    });
    return {
      computedValue,
      computedInputValue,
      computedVisible,
      options,
      optionMap,
      selectOptions,
      curLevel,
      curPath,
      multiple,
      pathMode,
      disabled,
      allowClear,
      allowSearch,
      searchDelay,
      loading,
      getValue,
      getValueKey,
      getOption,
    };
  };
  const inject = () => {
    // 接收的值
    return _inject<CascaderContext>(CASCADER_CONTEXT_KEY, {
      computedValue: ref(''),
      computedInputValue: ref(''),
      options: ref([]),
      totalOptions: ref([]),
      searchOptions: ref([]),
      expandTrigger: ref('click'),
      expandChild: ref(false),
      curLevel: ref(1),
      maxLevel: ref(0),
      curPath: ref([]),
      pathMode: ref(false),
      multiple: ref(false),
      loading: ref(false),
      slots: {},
      blur: () => {},
      getValueKey: () => '',
      getOption: () => {
        return {};
      },
    });
  };
  return {
    provide,
    inject,
  };
};
