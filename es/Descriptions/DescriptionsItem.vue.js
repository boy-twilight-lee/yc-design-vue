import { defineComponent, renderSlot } from "vue";
const _sfc_main = /* @__PURE__ */ defineComponent({
  ...{
    name: "DescriptionsItem"
  },
  __name: "DescriptionsItem",
  props: {
    span: { default: 1 },
    label: { default: "" }
  },
  setup(__props) {
    return (_ctx, _cache) => {
      return renderSlot(_ctx.$slots, "default");
    };
  }
});
export {
  _sfc_main as default
};
