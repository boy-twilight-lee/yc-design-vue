import { defineComponent, openBlock, createBlock, normalizeProps, guardReactiveProps, withCtx, createElementVNode } from "vue";
import YcIcon from "./_Icon.vue2.js";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "IconOriginSize",
  setup(__props) {
    return (_ctx, _cache) => {
      return openBlock(), createBlock(YcIcon, normalizeProps(guardReactiveProps(_ctx.$attrs)), {
        default: withCtx(() => _cache[0] || (_cache[0] = [
          createElementVNode("path", { d: "m5.5 11.5 5-2.5h1v32M34 11.5 39 9h1v32" }, null, -1),
          createElementVNode("path", {
            d: "M24 17h1v1h-1v-1ZM24 30h1v1h-1v-1Z",
            fill: "currentColor",
            stroke: "none"
          }, null, -1),
          createElementVNode("path", { d: "M24 17h1v1h-1v-1ZM24 30h1v1h-1v-1Z" }, null, -1)
        ])),
        _: 1
      }, 16);
    };
  }
});
export {
  _sfc_main as default
};
