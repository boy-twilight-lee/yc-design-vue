import { defineComponent, openBlock, createElementBlock, normalizeClass, renderSlot } from "vue";
const _sfc_main = /* @__PURE__ */ defineComponent({
  ...{
    name: "CardGrid"
  },
  __name: "CardGrid",
  props: {
    hoverable: { type: Boolean, default: false }
  },
  setup(__props) {
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", {
        class: normalizeClass([
          "yc-card-grid",
          {
            "yc-card-grid-hoverable": _ctx.hoverable
          }
        ])
      }, [
        renderSlot(_ctx.$slots, "default", {}, void 0, true)
      ], 2);
    };
  }
});
export {
  _sfc_main as default
};
