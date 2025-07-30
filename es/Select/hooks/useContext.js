import { toRefs, computed, provide, useSlots, inject, ref } from "vue";
import "../../node_modules/tinycolor2/esm/tinycolor.js";
import "../../_shared/utils/dom.js";
import { isBoolean, isFunction } from "../../_shared/utils/is.js";
import "../../_shared/utils/time.js";
import "../../Empty/index.js";
import "../../_shared/icons/_Icon.vue.js";
import useControlValue from "../../_shared/utils/control.js";
import useSelectOptions from "./useSelectOptions.js";
import useSelectHotkeys from "./useSelectHotkeys.js";
const SELECT_CONTEXT_KEY = "select-context";
const useContext = () => {
  const provide$1 = (props, emits, inputRef) => {
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
      showEmpty
    } = toRefs(props);
    const {
      formatLabel,
      fallbackOption,
      filterOption: _filterOption
    } = props;
    const computedVisible = useControlValue(
      popupVisible,
      defaultPopupVisible.value,
      (val) => {
        emits("update:popupVisible", val);
        emits("popup-visible-change", val);
      }
    );
    const computedValue = useControlValue(
      modelValue,
      defaultValue.value ? defaultValue.value : multiple.value ? [] : "",
      (val) => {
        emits("change", val);
        emits("update:modelValue", val);
      },
      (val) => {
        if (multiple.value) {
          return Array.isArray(val) ? val : [val];
        }
        return val;
      }
    );
    const computedInputValue = useControlValue(
      inputValue,
      defaultInputValue.value,
      (val) => {
        emits("update:inputValue", val);
      }
    );
    const fieldKey = computed(() => {
      const keys = [
        "id",
        "label",
        "value",
        "disabled",
        "tagProps",
        "render",
        "isFallbackOption"
      ];
      return Object.fromEntries(
        keys.map((key) => {
          return [key, fieldNames.value[key] ?? key];
        })
      );
    });
    const filterFn = (option) => {
      var _a;
      const label = option == null ? void 0 : option.label;
      const keyword = (_a = computedInputValue.value.toLowerCase()) == null ? void 0 : _a.toLowerCase();
      return !!(label == null ? void 0 : label.includes(keyword));
    };
    const filterOption = (option) => {
      if (allowSearch.value) {
        return isFunction(_filterOption) ? _filterOption(computedInputValue.value, option) : filterFn(option);
      }
      if (isBoolean(_filterOption) && !_filterOption) {
        return true;
      }
      return isFunction(_filterOption) ? _filterOption(computedInputValue.value, option) : filterFn(option);
    };
    const {
      options,
      renderOptions,
      createOptions,
      selectOptions,
      collectOption
    } = useSelectOptions({
      computedValue,
      multiple,
      showExtraOptions,
      provideOptions,
      getValue,
      fallbackOption,
      formatLabel
    });
    const isEmpty = computed(() => {
      if (!showEmpty.value) {
        return showEmpty.value;
      }
      if (!allowSearch.value || isBoolean(_filterOption) && !filterOption) {
        return !options.value.length;
      }
      return options.value.every((item) => {
        return !filterOption(item);
      });
    });
    const { curIndex } = useSelectHotkeys({
      computedValue,
      computedVisible,
      hotkeys,
      limit,
      multiple,
      options,
      blur,
      emits
    });
    function getValue(value) {
      return (value == null ? void 0 : value[valueKey.value]) ?? value;
    }
    function blur() {
      var _a;
      (_a = inputRef.value) == null ? void 0 : _a.blur();
    }
    provide(SELECT_CONTEXT_KEY, {
      computedValue,
      computedInputValue,
      limit,
      multiple,
      curIndex,
      options,
      isEmpty,
      fieldKey,
      renderOptions,
      slots: useSlots(),
      filterOption,
      blur,
      getValue,
      emits,
      collectOption
    });
    return {
      computedVisible,
      computedValue,
      computedInputValue,
      selectOptions,
      createOptions,
      options
    };
  };
  const inject$1 = () => {
    return inject(SELECT_CONTEXT_KEY, {
      computedValue: ref(void 0),
      computedInputValue: ref(""),
      multiple: ref(false),
      limit: ref(0),
      curIndex: ref(-1),
      options: ref([]),
      renderOptions: ref([]),
      isEmpty: ref(false),
      fieldKey: ref({}),
      slots: {},
      emits: () => {
      },
      blur: () => {
      },
      filterOption: () => {
        return true;
      },
      getValue: () => "",
      collectOption: () => {
      }
    });
  };
  return {
    provide: provide$1,
    inject: inject$1
  };
};
export {
  useContext as default
};
