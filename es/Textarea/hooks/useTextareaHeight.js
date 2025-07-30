import { computed } from "vue";
import { useElementSize } from "../../node_modules/@vueuse/core/index.js";
import "../../node_modules/tinycolor2/esm/tinycolor.js";
import "../../_shared/utils/dom.js";
import { valueToPx } from "../../_shared/utils/fn.js";
import "../../_shared/utils/time.js";
import "../../Empty/index.js";
import "../../_shared/icons/_Icon.vue.js";
const useTextareaHeight = (mirrorRef, autoSize) => {
  if (!autoSize) {
    return {};
  }
  const { height: _height } = useElementSize(mirrorRef, void 0, {
    box: "border-box"
  });
  const calcHeightFromRows = (rows) => {
    return rows * 14 * 1.5715 + 8;
  };
  const style = computed(() => {
    const { minRows: min = 1, maxRows: max = 1e4 } = autoSize;
    const minRows = min <= 1 ? 1 : min;
    const minHeight = calcHeightFromRows(min);
    const maxRows = max <= minRows ? minRows : max;
    const maxHeight = calcHeightFromRows(maxRows);
    let height = _height.value;
    height = height < minHeight ? minHeight : height;
    height = height > maxHeight ? maxHeight : height;
    return {
      minHeight: valueToPx(minHeight),
      height: valueToPx(height)
    };
  });
  return {
    style
  };
};
export {
  useTextareaHeight as default
};
