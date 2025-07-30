import { toRefs, computed, provide, ref, inject } from "vue";
import "../../node_modules/tinycolor2/esm/tinycolor.js";
import "../../_shared/utils/dom.js";
import { isObject } from "../../_shared/utils/is.js";
import "../../_shared/utils/time.js";
import "../../Empty/index.js";
import "../../_shared/icons/_Icon.vue.js";
import useControlValue from "../../_shared/utils/control.js";
const CHECKBOX_GROUP_CONTEXT_KEY = "checkbox-group-context";
const useContext = () => {
  const provide$1 = (props, emits) => {
    const {
      modelValue,
      defaultValue,
      disabled,
      max,
      options: _options
    } = toRefs(props);
    const computedValue = useControlValue(
      modelValue,
      defaultValue.value,
      (val) => {
        emits("update:modelValue", val);
        emits("change", val);
      }
    );
    const options = computed(() => {
      return _options.value.map((item) => {
        return isObject(item) ? item : { label: item, value: item };
      });
    });
    provide(CHECKBOX_GROUP_CONTEXT_KEY, {
      computedValue,
      max,
      disabled,
      hasGroup: ref(true)
    });
    return {
      options
    };
  };
  const inject$1 = () => {
    return inject(CHECKBOX_GROUP_CONTEXT_KEY, {
      computedValue: ref([]),
      max: ref(1e5),
      disabled: ref(false),
      hasGroup: ref(false)
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
