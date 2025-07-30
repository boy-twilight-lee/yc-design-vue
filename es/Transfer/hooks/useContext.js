import { toRefs, useSlots, computed, provide, inject, ref } from "vue";
import "../../node_modules/tinycolor2/esm/tinycolor.js";
import "../../_shared/utils/dom.js";
import "../../_shared/utils/time.js";
import "../../Empty/index.js";
import "../../_shared/icons/_Icon.vue.js";
import useControlValue from "../../_shared/utils/control.js";
const TRANSFER_CONTEXT_KEY = "transfer-context";
const useContext = () => {
  const provide$1 = (props, emits) => {
    const {
      modelValue,
      defaultValue,
      selected,
      defaultSelected,
      data,
      oneWay,
      simple,
      sourceInputSearchProps,
      targetInputSearchProps,
      showSearch,
      showSelectAll,
      disabled,
      title
    } = toRefs(props);
    const slots = useSlots();
    const dataMap = computed(() => {
      return Object.fromEntries(data.value.map((item) => [item.value, item]));
    });
    const computedValue = useControlValue(
      modelValue,
      defaultValue.value,
      (val) => {
        emits("update:modelValue", val);
        emits("change", val);
      }
    );
    const computedValueMap = computed(() => {
      return new Map(
        computedValue.value.map((item) => {
          return [item, item];
        })
      );
    });
    const computedSelected = useControlValue(
      selected,
      defaultSelected.value,
      (val) => {
        emits("update:selected", val);
      }
    );
    const sourceOptions = computed(() => {
      return data.value.filter((item) => {
        return !computedValueMap.value.has(item.value);
      });
    });
    const targetOptions = computed(() => {
      return computedValue.value.map((item) => {
        const target = dataMap.value[item];
        return target;
      });
    });
    const sourceChecked = computed(() => {
      return computedSelected.value.filter(
        (item) => !computedValueMap.value.has(item)
      );
    });
    const targetChecked = computed(() => {
      return computedSelected.value.filter(
        (item) => computedValueMap.value.has(item)
      );
    });
    provide(TRANSFER_CONTEXT_KEY, {
      computedValue,
      computedSelected,
      targetChecked,
      sourceChecked,
      sourceOptions,
      targetOptions,
      oneWay,
      simple,
      sourceInputSearchProps,
      targetInputSearchProps,
      showSearch,
      showSelectAll,
      disabled,
      title,
      slots,
      emits
    });
    return {
      computedValue,
      targetChecked,
      computedSelected,
      sourceChecked
    };
  };
  const inject$1 = () => {
    return inject(TRANSFER_CONTEXT_KEY, {
      computedValue: ref([]),
      computedSelected: ref([]),
      targetChecked: ref([]),
      sourceChecked: ref([]),
      sourceOptions: ref([]),
      targetOptions: ref([]),
      disabled: ref(false),
      oneWay: ref(false),
      simple: ref(false),
      title: ref([]),
      showSearch: ref(false),
      showSelectAll: ref(false),
      sourceInputSearchProps: ref({}),
      targetInputSearchProps: ref({}),
      slots: {},
      emits: () => {
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
