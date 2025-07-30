import { defineComponent, openBlock, createElementBlock, renderSlot } from "vue";
const _hoisted_1 = { class: "yc-layout-footer" };
const _sfc_main = /* @__PURE__ */ defineComponent({
  ...{
    name: "LayoutFooter"
  },
  __name: "LayoutFooter",
  setup(__props) {
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("footer", _hoisted_1, [
        renderSlot(_ctx.$slots, "default", {}, void 0, true)
      ]);
    };
  }
});
export {
  _sfc_main as default
};
