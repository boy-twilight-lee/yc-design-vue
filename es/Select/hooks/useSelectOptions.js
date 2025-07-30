import { reactive, computed, ref, onMounted } from "vue";
import { nanoid } from "../../node_modules/nanoid/index.browser.js";
import "../../node_modules/tinycolor2/esm/tinycolor.js";
import "../../_shared/utils/dom.js";
import { isUndefined, isNull, isString, isObject } from "../../_shared/utils/is.js";
import "../../_shared/utils/time.js";
import "../../Empty/index.js";
import "../../_shared/icons/_Icon.vue.js";
const useSelectOptions = (params) => {
  const {
    computedValue,
    multiple,
    provideOptions,
    showExtraOptions,
    getValue,
    fallbackOption,
    formatLabel
  } = params;
  const optionMap = reactive(/* @__PURE__ */ new Map());
  const options = computed(() => [...optionMap.values()]);
  const createOptions = ref([]);
  const fallbackOptions = computed(() => {
    if (!fallbackOption)
      return [];
    return selectValue.value.filter((v) => !options.value.find((item) => getValue(item.value) == v)).map((v) => {
      const target = fallbackOption(v);
      return {
        ...target || {},
        isFallbackOption: true
      };
    });
  });
  const renderOptions = computed(() => {
    return [
      ...provideOptions.value,
      ...createOptions.value,
      ...showExtraOptions.value ? fallbackOptions.value : []
    ].map((item) => {
      let option = item;
      if (!isObject(item)) {
        option = {
          label: item,
          value: item
        };
      }
      return {
        id: nanoid(),
        ...option
      };
    });
  });
  const selectValue = computed(() => {
    const value = multiple.value ? computedValue.value : [computedValue.value];
    return value.map((item) => getValue(item)).filter((v) => !isEmpty(v));
  });
  const selectOptions = computed(() => {
    const opts = [...options.value, ...fallbackOptions.value];
    return selectValue.value.map((v) => {
      const option = opts.find((item) => getValue(item.value) == v) || {};
      return {
        ...option,
        id: `${v}`,
        label: option ? (formatLabel == null ? void 0 : formatLabel(option)) ?? (option == null ? void 0 : option.label) : v
      };
    });
  });
  const isEmpty = (val) => {
    return isUndefined(val) || isNull(val) || isString(val) && !val.length;
  };
  const collectOption = (props, optionLabel) => {
    if (props.isFallbackOption)
      return;
    const id = nanoid();
    onMounted(() => {
      const value = `${getValue(props.value)}`;
      optionMap.set(id, {
        ...props,
        label: optionLabel.value,
        value: value ? props.value : optionLabel.value
      });
    });
  };
  return {
    options,
    createOptions,
    renderOptions,
    selectOptions,
    collectOption
  };
};
export {
  useSelectOptions as default
};
