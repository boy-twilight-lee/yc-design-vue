import { defineComponent, openBlock, createBlock, normalizeProps, guardReactiveProps, withCtx, createElementVNode } from "vue";
import YcIcon from "./_Icon.vue2.js";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "IconTime",
  setup(__props) {
    return (_ctx, _cache) => {
      return openBlock(), createBlock(YcIcon, normalizeProps(guardReactiveProps(_ctx.$attrs)), {
        default: withCtx(() => _cache[0] || (_cache[0] = [
          createElementVNode("path", { d: "M24 14v10h9.5m8.5 0c0 9.941-8.059 18-18 18S6 33.941 6 24 14.059 6 24 6s18 8.059 18 18Z" }, null, -1)
        ])),
        _: 1
      }, 16);
    };
  }
});
export {
  _sfc_main as default
};
