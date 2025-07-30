import { defineComponent, openBlock, createElementBlock, normalizeClass, unref } from "vue";
import "../node_modules/tinycolor2/esm/tinycolor.js";
import "../_shared/utils/dom.js";
import "../_shared/utils/time.js";
import { getGlobalConfig } from "../_shared/utils/global-config.js";
const _sfc_main = /* @__PURE__ */ defineComponent({
  ...{
    name: "SkeletonShape"
  },
  __name: "SkeletonShape",
  props: {
    shape: { default: "sqaure" },
    size: { default: void 0 }
  },
  setup(__props) {
    const props = __props;
    const { size } = getGlobalConfig(props);
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", {
        class: normalizeClass([
          "yc-skeleton-shape",
          `yc-skeleton-shape-shape-${_ctx.shape}`,
          `yc-skeleton-shape-size-${unref(size)}`
        ])
      }, null, 2);
    };
  }
});
export {
  _sfc_main as default
};
