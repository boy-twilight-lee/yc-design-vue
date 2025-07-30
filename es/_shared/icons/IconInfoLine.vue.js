import { defineComponent, openBlock, createBlock, normalizeProps, guardReactiveProps, withCtx, createElementVNode } from "vue";
import YcIcon from "./_Icon.vue2.js";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "IconInfoLine",
  setup(__props) {
    return (_ctx, _cache) => {
      return openBlock(), createBlock(YcIcon, normalizeProps(guardReactiveProps(_ctx.$attrs)), {
        default: withCtx(() => _cache[0] || (_cache[0] = [
          createElementVNode("path", { d: "M25 39h-2V18h2z" }, null, -1),
          createElementVNode("path", {
            fill: "currentColor",
            stroke: "none",
            d: "M25 39h-2V18h2z"
          }, null, -1),
          createElementVNode("path", { d: "M25 11h-2V9h2z" }, null, -1),
          createElementVNode("path", {
            fill: "currentColor",
            stroke: "none",
            d: "M25 11h-2V9h2z"
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
