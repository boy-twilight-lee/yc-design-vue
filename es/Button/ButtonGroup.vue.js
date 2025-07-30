import { defineComponent, openBlock, createElementBlock, normalizeClass, renderSlot } from "vue";
import useContext from "./hooks/useContext.js";
const _sfc_main = /* @__PURE__ */ defineComponent({
  ...{
    name: "ButtonGroup"
  },
  __name: "ButtonGroup",
  props: {
    type: { default: "secondary" },
    status: { default: "normal" },
    shape: { default: "square" },
    size: { default: void 0 },
    disabled: { type: Boolean, default: false }
  },
  setup(__props) {
    const props = __props;
    useContext().provide(props);
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", {
        class: normalizeClass([
          "yc-button-group",
          `yc-button-group-${_ctx.type}`,
          `yc-button-group-status-${_ctx.status}`
        ])
      }, [
        renderSlot(_ctx.$slots, "default")
      ], 2);
    };
  }
});
export {
  _sfc_main as default
};
