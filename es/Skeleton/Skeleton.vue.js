import { defineComponent, toRefs, openBlock, createElementBlock, normalizeClass, unref, renderSlot } from "vue";
const _sfc_main = /* @__PURE__ */ defineComponent({
  ...{
    name: "Skeleton"
  },
  __name: "Skeleton",
  props: {
    animation: { type: Boolean, default: false },
    loading: { type: Boolean, default: true }
  },
  setup(__props) {
    const props = __props;
    const { animation, loading } = toRefs(props);
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", {
        class: normalizeClass([
          "yc-skeleton",
          {
            "yc-skeleton-animation": unref(animation)
          }
        ])
      }, [
        renderSlot(_ctx.$slots, unref(loading) ? "default" : "content")
      ], 2);
    };
  }
});
export {
  _sfc_main as default
};
