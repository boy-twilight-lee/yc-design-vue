import { toRefs, ref, computed, useSlots, watch, provide, inject } from "vue";
import "../../node_modules/tinycolor2/esm/tinycolor.js";
import "../../_shared/utils/dom.js";
import { isBoolean, isFunction, isArray, isObject } from "../../_shared/utils/is.js";
import "../../_shared/utils/time.js";
import "../../Empty/index.js";
import "../../_shared/icons/_Icon.vue.js";
import useControlValue from "../../_shared/utils/control.js";
const CASCADER_CONTEXT_KEY = "cascader-context";
const transformOptions = (options, level = 1, nodePath = []) => {
  return options.map((option, index) => {
    const baseOption = {
      ...option,
      index,
      level
    };
    const curNodePath = [...nodePath, baseOption];
    const enhancedOption = {
      ...baseOption,
      nodePath: curNodePath
    };
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
const flattenOptions = (options) => {
  const result = [];
  const traverse = (options2) => {
    options2.forEach((option) => {
      result.push(option);
      if (option.children && option.children.length > 0) {
        traverse(option.children);
      }
    });
  };
  traverse(options);
  return result;
};
const findOptions = (options, level, parentPath) => {
  return level == 1 ? options.filter((item) => item.level == level) : options.filter((v) => {
    var _a;
    return v.level == level && ((_a = v.nodePath) == null ? void 0 : _a.slice(0, v.nodePath.length - 1).map((item) => item.index).join("")) == parentPath.join("");
  });
};
function findOptionByValueAndLevel(options, value, level, currentLevel = 1) {
  if (currentLevel > level) {
    return void 0;
  }
  for (const option of options) {
    if (currentLevel === level && option.value === value) {
      return option;
    }
    if (option.children && option.children.length > 0) {
      const found = findOptionByValueAndLevel(
        option.children,
        value,
        level,
        currentLevel + 1
      );
      if (found) {
        return found;
      }
    }
  }
  return void 0;
}
const getLeafNodes = (nodes) => {
  const leafNodes = [];
  function traverse(currentNode) {
    if (!currentNode.children || currentNode.children.length === 0) {
      leafNodes.push(currentNode);
      return;
    }
    currentNode.children.forEach((child) => traverse(child));
  }
  nodes.forEach((node) => traverse(node));
  return leafNodes;
};
function transformField(options, fieldKeys) {
  return options.map((option) => {
    const transformed = {};
    transformed.label = option[fieldKeys.label] ?? option.label;
    transformed.value = option[fieldKeys.value] ?? option.value;
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
const useContext = () => {
  const provide$1 = (props, emits, inputRef) => {
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
      options: _options
    } = toRefs(props);
    const { formatLabel, fallback, filterOption, loadMore } = props;
    const computedValue = useControlValue(
      modelValue,
      defaultValue.value,
      (val) => {
        emits("update:modelValue", val);
        emits("change", val);
      }
    );
    const computedInputValue = useControlValue(
      inputValue,
      defaultInputValue.value,
      (val) => {
        emits("update:inputValue", val);
        emits("input-value-change", val);
      }
    );
    const computedVisible = useControlValue(
      popupVisible,
      defaultPopupVisible.value,
      (val) => {
        emits("update:popupVisible", val);
        emits("popup-visible-change", val);
      }
    );
    const totalOptions = ref([..._options.value]);
    const options = computed(() => {
      const keys = [
        "label",
        "value",
        "render",
        "disabled",
        "tagProps",
        "children",
        "isLeaf"
      ];
      const fieldKeys = Object.fromEntries(
        keys.map((key) => {
          var _a;
          return [key, ((_a = fieldNames.value) == null ? void 0 : _a[key]) ?? key];
        })
      );
      return flattenOptions(
        transformOptions(transformField(totalOptions.value, fieldKeys))
      );
    });
    const optionMap = computed(() => {
      return Object.fromEntries([
        ...options.value.map((item) => {
          return [getValueKey(item.nodePath.map((item2) => item2.value)), item];
        }),
        ...options.value.map((item) => {
          return [getValueKey(item), item];
        })
      ]);
    });
    const leafOptions = computed(() => {
      return options.value.filter((option) => {
        var _a;
        return !((_a = option.children) == null ? void 0 : _a.length);
      });
    });
    const searchOptions = computed(() => {
      return leafOptions.value.filter((item) => filterOption(computedInputValue.value, item)).map((item) => {
        var _a;
        return {
          ...item,
          label: searchOptionOnlyLabel.value ? item.label : (_a = item.nodePath) == null ? void 0 : _a.map((item2) => item2.label).join(" / ")
        };
      });
    });
    const selectOptions = computed(() => {
      const value = multiple.value ? computedValue.value : [computedValue.value].map((item) => item);
      return value.map((v) => {
        var _a, _b;
        const option = getOption(v);
        if (option) {
          return {
            ...option,
            id: (_a = option.nodePath) == null ? void 0 : _a.map((v1) => v1.index).join("-"),
            label: (formatLabel == null ? void 0 : formatLabel(option.nodePath)) ?? ((_b = option.nodePath) == null ? void 0 : _b.map((v1) => v1.label).join(" / "))
          };
        }
        if (isBoolean(fallback) && fallback || isFunction(fallback)) {
          return {
            id: getValueKey(v),
            label: isFunction(fallback) ? fallback(v) : getValueKey(v),
            value: getValueKey(v)
          };
        }
        return null;
      }).filter((v) => v);
    });
    const curLevel = ref(1);
    const maxLevel = computed(() => {
      return Math.max(...leafOptions.value.map((item) => item.level)) || 0;
    });
    const curPath = ref([]);
    const slots = useSlots();
    const getValue = (value) => {
      return isObject(value) ? value[valueKey.value] : value;
    };
    const getValueKey = (value) => {
      return isArray(value) ? value.map((v) => getValue(v)).join(" / ") : getValue(value);
    };
    const getOption = (value) => {
      return optionMap.value[getValueKey(value)];
    };
    function blur() {
      var _a;
      (_a = inputRef.value) == null ? void 0 : _a.blur();
    }
    watch(
      _options,
      () => {
        totalOptions.value = _options.value;
      },
      {
        deep: true
      }
    );
    provide(CASCADER_CONTEXT_KEY, {
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
      loadMore
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
      getOption
    };
  };
  const inject$1 = () => {
    return inject(CASCADER_CONTEXT_KEY, {
      computedValue: ref(""),
      computedInputValue: ref(""),
      options: ref([]),
      totalOptions: ref([]),
      searchOptions: ref([]),
      expandTrigger: ref("click"),
      expandChild: ref(false),
      curLevel: ref(1),
      maxLevel: ref(0),
      curPath: ref([]),
      pathMode: ref(false),
      multiple: ref(false),
      loading: ref(false),
      slots: {},
      blur: () => {
      },
      getValueKey: () => "",
      getOption: () => {
        return {};
      }
    });
  };
  return {
    provide: provide$1,
    inject: inject$1
  };
};
export {
  useContext as default,
  findOptionByValueAndLevel,
  findOptions,
  flattenOptions,
  getLeafNodes,
  transformOptions
};
