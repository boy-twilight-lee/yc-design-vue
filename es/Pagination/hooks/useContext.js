import { toRefs, ref, computed, provide, inject } from "vue";
import "../../node_modules/tinycolor2/esm/tinycolor.js";
import "../../_shared/utils/dom.js";
import "../../_shared/utils/time.js";
import { getGlobalConfig } from "../../_shared/utils/global-config.js";
import useControlValue from "../../_shared/utils/control.js";
const PAGINATION_CONTEXT_KEY = "pagination-context";
const useContext = () => {
  const provide$1 = (props, emits) => {
    const {
      disabled,
      current,
      defaultCurrent,
      pageSize,
      defaultPageSize,
      pageSizeOptions,
      pageItemStyle,
      activePageItemStyle,
      baseSize,
      bufferSize,
      autoAdjust,
      total: _total
    } = toRefs(props);
    const { size } = getGlobalConfig(props);
    const total = useControlValue(
      autoAdjust.value ? _total : ref(),
      autoAdjust.value ? 0 : _total.value
    );
    const pages = computed(() => {
      const value = Math.ceil(total.value / computedPageSize.value);
      return value <= 1 ? 1 : value;
    });
    const pagesArray = computed(() => {
      if (pages.value < baseSize.value) {
        return new Array(pages.value).fill(void 0).map((_, i) => i + 1);
      }
      const result = [];
      const showLeftMore = computedCurrent.value - bufferSize.value > 1;
      const showRightMore = computedCurrent.value + bufferSize.value < pages.value;
      let start = 0;
      if (showLeftMore) {
        start = showRightMore ? computedCurrent.value - bufferSize.value : pages.value - 2 * bufferSize.value;
      } else {
        start = 2;
      }
      let end = 0;
      if (showRightMore) {
        end = showLeftMore ? computedCurrent.value + bufferSize.value : 1 + 2 * bufferSize.value;
      } else {
        end = pages.value - 1;
      }
      result.push(1);
      if (showLeftMore) {
        result.push("more-left");
      }
      for (let i = start; i <= end; i++) {
        result.push(i);
      }
      if (showRightMore) {
        result.push("more-right");
      }
      result.push(pages.value);
      return result;
    });
    const computedCurrent = useControlValue(
      current,
      defaultCurrent.value,
      (val) => {
        emits("update:current", val);
        emits("change", val);
      }
    );
    const computedPageSize = useControlValue(
      pageSize,
      defaultPageSize.value,
      (val) => {
        computedCurrent.value = 1;
        emits("update:pageSize", val);
        emits("page-size-change", val);
      }
    );
    const sizeOptions = computed(() => {
      return pageSizeOptions.value.map((item) => {
        return {
          label: `${item}条/页`,
          value: item
        };
      });
    });
    provide(PAGINATION_CONTEXT_KEY, {
      computedCurrent,
      computedPageSize,
      disabled,
      pageItemStyle,
      activePageItemStyle,
      pages,
      baseSize,
      bufferSize
    });
    return {
      total,
      size,
      pages,
      pagesArray,
      computedCurrent,
      computedPageSize,
      sizeOptions
    };
  };
  const inject$1 = () => {
    return inject(PAGINATION_CONTEXT_KEY, {
      computedCurrent: ref(1),
      computedPageSize: ref(10),
      disabled: ref(false),
      pageItemStyle: ref({}),
      activePageItemStyle: ref({}),
      pages: ref(0),
      baseSize: ref(6),
      bufferSize: ref(2)
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
