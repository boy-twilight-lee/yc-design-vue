import { defineComponent, openBlock, createElementBlock, renderSlot } from "vue";
const _hoisted_1 = { class: "yc-typography" };
const _sfc_main = /* @__PURE__ */ defineComponent({
  ...{
    name: "Typography"
  },
  __name: "Typography",
  setup(__props) {
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("article", _hoisted_1, [
        renderSlot(_ctx.$slots, "default")
      ]);
    };
  }
});
export {
  _sfc_main as default
};
