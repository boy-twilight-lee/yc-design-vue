import { defineComponent, openBlock, createBlock, normalizeProps, guardReactiveProps, withCtx, createElementVNode } from "vue";
import YcIcon from "./_Icon.vue2.js";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "IconEyeClose",
  setup(__props) {
    return (_ctx, _cache) => {
      return openBlock(), createBlock(YcIcon, normalizeProps(guardReactiveProps(_ctx.$attrs)), {
        default: withCtx(() => _cache[0] || (_cache[0] = [
          createElementVNode("path", {
            d: "M24 37c6.627 0 12.627-4.333 18-13-5.373-8.667-11.373-13-18-13-6.627 0-12.627 4.333-18 13 5.373 8.667 11.373 13 18 13Z",
            "clip-rule": "evenodd"
          }, null, -1),
          createElementVNode("path", { d: "M29 24a5 5 0 1 1-10 0 5 5 0 0 1 10 0Z" }, null, -1)
        ])),
        _: 1
      }, 16);
    };
  }
});
export {
  _sfc_main as default
};
