import { defineComponent, openBlock, createBlock, unref, mergeProps, withCtx, renderSlot, createCommentVNode } from "vue";
import IconButton from "../_shared/components/IconButton.vue.js";
import "../node_modules/tinycolor2/esm/tinycolor.js";
import "../_shared/utils/dom.js";
import "../_shared/utils/time.js";
import "../Empty/index.js";
import "../_shared/icons/_Icon.vue.js";
import "../_shared/components/ExpandTransition.vue2.js";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "TabButton",
  props: {
    className: { type: Boolean, default: true },
    type: {},
    direction: {}
  },
  setup(__props) {
    return (_ctx, _cache) => {
      return openBlock(), createBlock(unref(IconButton), mergeProps({
        size: 14,
        class: [
          `yc-tabs-nav-${_ctx.type ? `${_ctx.type}-` : ""}button`,
          {
            [`yc-tabs-nav-button-${_ctx.direction}`]: _ctx.direction
          }
        ],
        "hover-color": "rgb(242,243,245)"
      }, _ctx.$attrs), {
        default: withCtx(() => [
          _ctx.$slots.default ? renderSlot(_ctx.$slots, "default", { key: 0 }, void 0, true) : createCommentVNode("", true)
        ]),
        _: 3
      }, 16, ["class"]);
    };
  }
});
export {
  _sfc_main as default
};
