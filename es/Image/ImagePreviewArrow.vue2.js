import { defineComponent, openBlock, createElementBlock, normalizeClass, createVNode, unref } from "vue";
import "../node_modules/tinycolor2/esm/tinycolor.js";
import "../_shared/utils/dom.js";
import "../_shared/utils/time.js";
import "../Empty/index.js";
import "../_shared/icons/_Icon.vue.js";
import _sfc_main$1 from "../_shared/icons/IconArrowRight.vue.js";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "ImagePreviewArrow",
  props: {
    type: {}
  },
  setup(__props) {
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", {
        class: normalizeClass([`yc-image-preview-arrow-${_ctx.type}`])
      }, [
        createVNode(unref(_sfc_main$1), {
          rotate: _ctx.type == "left" ? 180 : 0
        }, null, 8, ["rotate"])
      ], 2);
    };
  }
});
export {
  _sfc_main as default
};
