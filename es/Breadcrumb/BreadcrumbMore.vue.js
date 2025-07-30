import { defineComponent, openBlock, createBlock, withCtx, resolveDynamicComponent, unref } from "vue";
import "../node_modules/tinycolor2/esm/tinycolor.js";
import "../_shared/utils/dom.js";
import "../_shared/utils/time.js";
import "../Empty/index.js";
import "../_shared/icons/_Icon.vue.js";
import _sfc_main$1 from "../_shared/icons/IconMore.vue.js";
import BreadcrumbItem from "./BreadcrumbItem.vue.js";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "BreadcrumbMore",
  props: {
    slots: {}
  },
  setup(__props) {
    return (_ctx, _cache) => {
      return openBlock(), createBlock(BreadcrumbItem, null, {
        default: withCtx(() => [
          _ctx.slots["more-icon"] ? (openBlock(), createBlock(resolveDynamicComponent(_ctx.slots["more-icon"]), { key: 0 })) : (openBlock(), createBlock(unref(_sfc_main$1), { key: 1 }))
        ]),
        _: 1
      });
    };
  }
});
export {
  _sfc_main as default
};
