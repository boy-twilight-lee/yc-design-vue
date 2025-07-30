import { defineComponent, openBlock, createBlock, normalizeProps, guardReactiveProps, withCtx, createElementVNode } from "vue";
import YcIcon from "./_Icon.vue2.js";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "IconDragDot",
  setup(__props) {
    return (_ctx, _cache) => {
      return openBlock(), createBlock(YcIcon, normalizeProps(guardReactiveProps(_ctx.$attrs)), {
        default: withCtx(() => _cache[0] || (_cache[0] = [
          createElementVNode("path", {
            fill: "currentColor",
            stroke: "none",
            d: "M40 17v2h-2v-2h2ZM25 17v2h-2v-2h2ZM10 17v2H8v-2h2ZM40 29v2h-2v-2h2ZM25 29v2h-2v-2h2ZM10 29v2H8v-2h2Z"
          }, null, -1),
          createElementVNode("path", { d: "M40 17v2h-2v-2h2ZM25 17v2h-2v-2h2ZM10 17v2H8v-2h2ZM40 29v2h-2v-2h2ZM25 29v2h-2v-2h2ZM10 29v2H8v-2h2Z" }, null, -1)
        ])),
        _: 1
      }, 16);
    };
  }
});
export {
  _sfc_main as default
};
