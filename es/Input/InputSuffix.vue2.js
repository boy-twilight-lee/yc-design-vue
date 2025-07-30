import { defineComponent, openBlock, createBlock, unref, withCtx, createElementBlock, toDisplayString, createCommentVNode, renderSlot } from "vue";
import "../node_modules/tinycolor2/esm/tinycolor.js";
import "../_shared/utils/dom.js";
import "../_shared/utils/time.js";
import "../Empty/index.js";
import "../_shared/icons/_Icon.vue.js";
import _sfc_main$3 from "../_shared/icons/IconEyeClose.vue2.js";
import _sfc_main$2 from "../_shared/icons/IconEyeOpen.vue2.js";
import IconButton from "../_shared/components/IconButton.vue.js";
import _sfc_main$1 from "../_shared/components/PreventFocus.vue.js";
import "../_shared/components/ExpandTransition.vue2.js";
const _hoisted_1 = {
  key: 0,
  class: "yc-input-word-limit"
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "InputSuffix",
  props: {
    curLength: {},
    maxLength: {},
    showWordLimit: { type: Boolean },
    computedVisibility: { type: Boolean },
    isPassword: { type: Boolean },
    invisibleButton: { type: Boolean }
  },
  emits: ["clear", "visibilityChange"],
  setup(__props) {
    return (_ctx, _cache) => {
      return openBlock(), createBlock(unref(_sfc_main$1), { class: "yc-input-suffix" }, {
        default: withCtx(() => [
          _ctx.showWordLimit ? (openBlock(), createElementBlock("div", _hoisted_1, toDisplayString(_ctx.curLength) + "/" + toDisplayString(_ctx.maxLength), 1)) : createCommentVNode("", true),
          _ctx.isPassword && _ctx.invisibleButton ? (openBlock(), createBlock(unref(IconButton), {
            key: 1,
            size: 14,
            onClick: _cache[0] || (_cache[0] = ($event) => _ctx.$emit("visibilityChange", !_ctx.computedVisibility))
          }, {
            default: withCtx(() => [
              _ctx.computedVisibility ? (openBlock(), createBlock(unref(_sfc_main$2), { key: 0 })) : (openBlock(), createBlock(unref(_sfc_main$3), { key: 1 }))
            ]),
            _: 1
          })) : createCommentVNode("", true),
          _ctx.$slots.suffix ? renderSlot(_ctx.$slots, "suffix", { key: 2 }, void 0, true) : createCommentVNode("", true)
        ]),
        _: 3
      });
    };
  }
});
export {
  _sfc_main as default
};
