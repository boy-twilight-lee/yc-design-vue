import { defineComponent, openBlock, createBlock, normalizeProps, guardReactiveProps, withCtx, createElementVNode } from "vue";
import YcIcon from "./_Icon.vue2.js";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "IconEdit",
  setup(__props) {
    return (_ctx, _cache) => {
      return openBlock(), createBlock(YcIcon, normalizeProps(guardReactiveProps(_ctx.$attrs)), {
        default: withCtx(() => _cache[0] || (_cache[0] = [
          createElementVNode("path", { d: "m30.48 19.038 5.733-5.734a1 1 0 0 0 0-1.414l-5.586-5.586a1 1 0 0 0-1.414 0l-5.734 5.734m7 7L15.763 33.754a1 1 0 0 1-.59.286l-6.048.708a1 1 0 0 1-1.113-1.069l.477-6.31a1 1 0 0 1 .29-.631l14.7-14.7m7 7-7-7M6 42h36" }, null, -1)
        ])),
        _: 1
      }, 16);
    };
  }
});
export {
  _sfc_main as default
};
