import { defineComponent, toRefs, computed, openBlock, createElementBlock, normalizeStyle } from "vue";
import "../node_modules/tinycolor2/esm/tinycolor.js";
import "../_shared/utils/dom.js";
import { valueToPx } from "../_shared/utils/fn.js";
import { isUndefined } from "../_shared/utils/is.js";
import "../_shared/utils/time.js";
import "../Empty/index.js";
import "../_shared/icons/_Icon.vue.js";
import useContext from "./hooks/useContext.js";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "TabsNavInk",
  props: {
    curIndex: {},
    panes: {}
  },
  setup(__props) {
    const props = __props;
    const { curIndex, panes } = toRefs(props);
    const { titleRefs, listRef, direction, editable } = useContext().inject();
    const sliderStyle = computed(() => {
      var _a, _b, _c;
      const curPane = panes.value[curIndex.value];
      const closeWidth = editable.value && (isUndefined(curPane.closable) || curPane.closable) ? 22 : 0;
      const titleRef = titleRefs.value[curIndex.value];
      const { left, top } = ((_b = (_a = listRef.value) == null ? void 0 : _a.getBoundingClientRect) == null ? void 0 : _b.call(_a)) ?? {
        left: 0,
        top: 0
      };
      const { scrollLeft, scrollTop } = listRef.value ?? {
        scrollLeft: 0,
        scrollTop: 0
      };
      const { left: curLeft, top: curTop } = ((_c = titleRef == null ? void 0 : titleRef.getBoundingClientRect) == null ? void 0 : _c.call(titleRef)) ?? {
        left: 0,
        top: 0
      };
      const { offsetHeight, offsetWidth } = titleRef ?? {
        offsetHeight: 0,
        offsetWidth: 0
      };
      if (direction.value == "horizontal") {
        return {
          width: valueToPx(offsetWidth + closeWidth),
          left: valueToPx(curLeft - left + scrollLeft)
        };
      } else {
        return {
          height: valueToPx(offsetHeight),
          top: valueToPx(curTop - top + scrollTop)
        };
      }
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", {
        class: "yc-tabs-nav-ink",
        style: normalizeStyle(sliderStyle.value)
      }, null, 4);
    };
  }
});
export {
  _sfc_main as default
};
