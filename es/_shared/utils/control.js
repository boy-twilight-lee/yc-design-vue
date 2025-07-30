import { ref, computed } from "vue";
import "../../node_modules/tinycolor2/esm/tinycolor.js";
import "./dom.js";
import { isUndefined } from "./is.js";
import "./time.js";
import "../../Empty/index.js";
import "../icons/_Icon.vue.js";
const useControlValue = (modelValue, defaultValue, onSet = (data) => data, onGet = (data) => data) => {
  const controlValue = ref(defaultValue);
  return computed({
    get() {
      const value = isUndefined(modelValue.value) ? controlValue.value : modelValue.value;
      return onGet(value);
    },
    set(value) {
      controlValue.value = value;
      onSet(value);
    }
  });
};
export {
  useControlValue as default
};
