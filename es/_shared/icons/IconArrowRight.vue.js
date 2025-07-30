import { defineComponent, openBlock, createBlock, normalizeProps, guardReactiveProps, withCtx, createElementVNode } from "vue";
import YcIcon from "./_Icon.vue2.js";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "IconArrowRight",
  setup(__props) {
    return (_ctx, _cache) => {
      return openBlock(), createBlock(YcIcon, normalizeProps(guardReactiveProps(_ctx.$attrs)), {
        default: withCtx(() => _cache[0] || (_cache[0] = [
          createElementVNode("path", { d: "m16 39.513 15.556-15.557L16 8.4" }, null, -1)
        ])),
        _: 1
      }, 16);
    };
  }
});
export {
  _sfc_main as default
};
