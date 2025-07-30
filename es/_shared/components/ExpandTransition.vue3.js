import { defineComponent, openBlock, createBlock, Transition, mergeProps, withCtx, renderSlot } from "vue";
import "../../node_modules/tinycolor2/esm/tinycolor.js";
import "../utils/dom.js";
import { valueToPx } from "../utils/fn.js";
import "../utils/time.js";
import "../../Empty/index.js";
import "../icons/_Icon.vue.js";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "ExpandTransition",
  setup(__props) {
    const transitions = {
      onBeforeEnter(el) {
        el.style.maxHeight = "0";
        el.style.opacity = "0";
      },
      onEnter(el) {
        el.style.maxHeight = valueToPx(el.scrollHeight);
        el.style.opacity = "1";
      },
      onAfterEnter(el) {
        el.style.maxHeight = "";
        el.style.opacity = "";
      },
      // 收起的时候卡顿
      onBeforeLeave(el) {
        el.style.maxHeight = valueToPx(el.scrollHeight);
        el.style.opacity = "1";
      },
      onLeave(el) {
        el.style.maxHeight = "0";
        el.style.opacity = "0";
      },
      onAfterLeave(el) {
        el.style.maxHeight = "";
        el.style.opacity = "";
      }
    };
    return (_ctx, _cache) => {
      return openBlock(), createBlock(Transition, mergeProps({ name: "expand" }, transitions), {
        default: withCtx(() => [
          renderSlot(_ctx.$slots, "default", {}, void 0, true)
        ]),
        _: 3
      }, 16);
    };
  }
});
export {
  _sfc_main as default
};
