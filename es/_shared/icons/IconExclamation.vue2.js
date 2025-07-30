import { defineComponent, openBlock, createBlock, normalizeProps, guardReactiveProps, withCtx, createElementVNode } from "vue";
import YcIcon from "./_Icon.vue2.js";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "IconExclamation",
  setup(__props) {
    return (_ctx, _cache) => {
      return openBlock(), createBlock(YcIcon, normalizeProps(guardReactiveProps(_ctx.$attrs)), {
        default: withCtx(() => _cache[0] || (_cache[0] = [
          createElementVNode("path", { d: "M23 9h2v21h-2z" }, null, -1),
          createElementVNode("path", {
            fill: "currentColor",
            stroke: "none",
            d: "M23 9h2v21h-2z"
          }, null, -1),
          createElementVNode("path", { d: "M23 37h2v2h-2z" }, null, -1),
          createElementVNode("path", {
            fill: "currentColor",
            stroke: "none",
            d: "M23 37h2v2h-2z"
          }, null, -1)
        ])),
        _: 1
      }, 16);
    };
  }
});
export {
  _sfc_main as default
};
