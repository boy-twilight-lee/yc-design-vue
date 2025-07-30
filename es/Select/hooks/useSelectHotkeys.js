import { ref } from "vue";
import { onKeyStroke } from "../../node_modules/@vueuse/core/index.js";
const useSelectHotkeys = (params) => {
  const {
    computedValue,
    computedVisible,
    options,
    hotkeys,
    multiple,
    limit,
    blur,
    emits
  } = params;
  const curIndex = ref(-1);
  if (!hotkeys.value) {
    return {
      curIndex
    };
  }
  onKeyStroke(["ArrowUp", "ArrowDown", "Enter"], (e) => {
    if (!computedVisible.value || !options.value.length)
      return;
    const { key } = e;
    e.preventDefault();
    if (key == "ArrowUp") {
      curIndex.value--;
      curIndex.value = curIndex.value < 0 ? options.value.length - 1 : curIndex.value;
    } else if (key == "ArrowDown") {
      curIndex.value++;
      curIndex.value = curIndex.value >= options.value.length ? 0 : curIndex.value;
    } else {
      const value = options.value[curIndex.value].value;
      if (multiple.value) {
        const curValue = computedValue.value;
        const index = curValue.findIndex((item) => item == value);
        if (index == -1) {
          if (limit.value > 0 && curValue.length == limit.value) {
            return emits("exceedLimit", value);
          }
          computedValue.value = [...curValue, value];
        } else {
          computedValue.value = curValue.filter((item) => item != value);
        }
      } else {
        computedValue.value = value;
        blur();
      }
      emits("select", value);
    }
  });
  return {
    curIndex
  };
};
export {
  useSelectHotkeys as default
};
