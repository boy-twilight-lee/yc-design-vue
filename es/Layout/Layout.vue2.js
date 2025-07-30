import { defineComponent, toRefs, useSlots, computed, openBlock, createElementBlock, normalizeClass, renderSlot } from "vue";
import "../node_modules/tinycolor2/esm/tinycolor.js";
import "../_shared/utils/dom.js";
import { isUndefined } from "../_shared/utils/is.js";
import "../_shared/utils/time.js";
import "../Empty/index.js";
import "../_shared/icons/_Icon.vue.js";
import LayoutSider from "./LayoutSider.vue.js";
const _sfc_main = /* @__PURE__ */ defineComponent({
  ...{
    name: "Layout"
  },
  __name: "Layout",
  props: {
    hasSider: { type: Boolean, default: void 0 }
  },
  setup(__props) {
    const props = __props;
    const { hasSider: _hasSider } = toRefs(props);
    const slots = useSlots();
    const hasSider = computed(() => {
      var _a;
      if (!isUndefined(_hasSider.value))
        return _hasSider.value;
      const sider = (((_a = slots.default) == null ? void 0 : _a.call(slots)) || []).find(
        (item) => item.type.name == LayoutSider.name
      );
      return !!sider;
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("section", {
        class: normalizeClass([
          "yc-layout",
          {
            "yc-layout-has-sider": hasSider.value
          }
        ])
      }, [
        renderSlot(_ctx.$slots, "default", {}, void 0, true)
      ], 2);
    };
  }
});
export {
  _sfc_main as default
};
