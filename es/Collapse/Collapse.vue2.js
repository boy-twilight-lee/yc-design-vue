import { defineComponent, openBlock, createElementBlock, normalizeClass, renderSlot } from "vue";
import useContext from "./hooks/useContext.js";
const _sfc_main = /* @__PURE__ */ defineComponent({
  ...{
    name: "Collapse"
  },
  __name: "Collapse",
  props: {
    activeKey: { default: void 0 },
    defaultActiveKey: { default: () => [] },
    accordion: { type: Boolean, default: false },
    showExpandIcon: { type: Boolean, default: true },
    expandIconPosition: { default: "left" },
    bordered: { type: Boolean, default: true },
    destroyOnHide: { type: Boolean, default: false }
  },
  emits: ["update:activekey", "change"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emits = __emit;
    useContext().provide(props, emits);
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", {
        class: normalizeClass([
          "yc-collapse",
          {
            "yc-collapse-bordered": _ctx.bordered
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
