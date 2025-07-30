import { toRefs, ref, reactive, computed, provide, inject, watchEffect, onBeforeUnmount } from "vue";
import "../../node_modules/tinycolor2/esm/tinycolor.js";
import { getBreakpointValue } from "../../_shared/utils/dom.js";
import { isArray } from "../../_shared/utils/is.js";
import "../../_shared/utils/time.js";
import "../../Empty/index.js";
import "../../_shared/icons/_Icon.vue.js";
import { nanoid } from "../../node_modules/nanoid/index.browser.js";
const GRID_CONTEXT_KEY = "grid-context";
const useContext = () => {
  const provide$1 = (props) => {
    const {
      gutter: _gutter = ref(0),
      cols: _cols = ref(24),
      rowGap: _rowGap = ref(0),
      colGap: _colGap = ref(0),
      collapsed = ref(false),
      collapsedRows = ref(1),
      div = ref(false)
    } = toRefs(props);
    const spanMap = reactive(/* @__PURE__ */ new Map());
    const breakpoint = ref("xxl");
    const cols = computed(() => {
      return getBreakpointValue(breakpoint.value, _cols.value, 24);
    });
    const rowGap = computed(() => {
      return getBreakpointValue(breakpoint.value, _rowGap.value);
    });
    const colGap = computed(() => {
      return getBreakpointValue(breakpoint.value, _colGap.value, 0);
    });
    const gutter = computed(() => {
      const result = isArray(_gutter.value) ? _gutter.value.map(
        (v) => getBreakpointValue(breakpoint.value, v, 0)
      ) : [getBreakpointValue(breakpoint.value, _gutter.value, 0), 0];
      return result;
    });
    provide(GRID_CONTEXT_KEY, {
      breakpoint,
      gutter,
      div,
      spanMap,
      cols,
      colGap,
      collapsed,
      collapsedRows
    });
    return {
      breakpoint,
      cols,
      colGap,
      rowGap,
      gutter
    };
  };
  const inject$1 = () => {
    const injection = inject(GRID_CONTEXT_KEY, {
      gutter: ref([0, 0]),
      breakpoint: ref("xs"),
      div: ref(false),
      colGap: ref(0),
      cols: ref(24),
      collapsed: ref(false),
      collapsedRows: ref(1),
      spanMap: /* @__PURE__ */ new Map()
    });
    const { spanMap } = injection;
    const collectSpan = (span, suffix) => {
      const id = nanoid();
      watchEffect(() => {
        spanMap.set(id, {
          id,
          suffix: suffix.value,
          span: span.value
        });
      });
      onBeforeUnmount(() => {
        spanMap.delete(id);
      });
      return {
        id
      };
    };
    return {
      ...injection,
      collectSpan
    };
  };
  return {
    provide: provide$1,
    inject: inject$1
  };
};
export {
  GRID_CONTEXT_KEY,
  useContext as default
};
