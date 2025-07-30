import { toRefs, computed, provide, ref, inject } from "vue";
import "../../node_modules/tinycolor2/esm/tinycolor.js";
import "../../_shared/utils/dom.js";
import { isObject } from "../../_shared/utils/is.js";
import "../../_shared/utils/time.js";
import { getGlobalConfig } from "../../_shared/utils/global-config.js";
import useControlValue from "../../_shared/utils/control.js";
const RADIO_GROUP_CONTEXT_KEY = "radio-group-context";
const useContext = () => {
  const provide$1 = (props, emits) => {
    const {
      modelValue,
      defaultValue,
      disabled,
      type,
      options: _options
    } = toRefs(props);
    const { size } = getGlobalConfig(props);
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
        return isObject(item) ? item : {
          label: item,
          value: item
        };
      });
    });
    provide(RADIO_GROUP_CONTEXT_KEY, {
      computedValue,
      type,
      disabled,
      size,
      hasGroup: ref(true),
      emits
    });
    return {
      options
    };
  };
  const inject$1 = () => {
    return inject(RADIO_GROUP_CONTEXT_KEY, {
      computedValue: ref(void 0),
      disabled: ref(false),
      type: ref("radio"),
      size: ref("medium"),
      hasGroup: ref(false),
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
