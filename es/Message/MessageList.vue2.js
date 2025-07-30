import { defineComponent, openBlock, createBlock, TransitionGroup, normalizeClass, withCtx, createElementBlock, Fragment, renderList, mergeProps } from "vue";
import _Message from "./Message.vue.js";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "MessageList",
  props: {
    messageList: { default: () => [] },
    position: { default: "top" }
  },
  setup(__props) {
    return (_ctx, _cache) => {
      return openBlock(), createBlock(TransitionGroup, {
        name: "fade-message",
        moveClass: "flip-list-move",
        tag: "div",
        class: normalizeClass(["yc-message-list", `yc-message-list-${_ctx.position}`])
      }, {
        default: withCtx(() => [
          (openBlock(true), createElementBlock(Fragment, null, renderList(_ctx.messageList, (message) => {
            return openBlock(), createBlock(_Message, mergeProps({
              key: message.id,
              ref_for: true
            }, message), null, 16);
          }), 128))
        ]),
        _: 1
      }, 8, ["class"]);
    };
  }
});
export {
  _sfc_main as default
};
