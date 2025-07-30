import { defineComponent, openBlock, createBlock, resolveDynamicComponent, withCtx, renderSlot } from "vue";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "PreventFocus",
  props: {
    preventFocus: { type: Boolean, default: true },
    tag: { default: "div" }
  },
  setup(__props) {
    return (_ctx, _cache) => {
      return openBlock(), createBlock(resolveDynamicComponent(_ctx.tag), {
        onMousedown: _cache[0] || (_cache[0] = (e) => _ctx.preventFocus && e.preventDefault())
      }, {
        default: withCtx(() => [
          renderSlot(_ctx.$slots, "default")
        ]),
        _: 3
      }, 32);
    };
  }
});
export {
  _sfc_main as default
};
