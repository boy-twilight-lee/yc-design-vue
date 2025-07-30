import { defineComponent, openBlock, createElementBlock, normalizeClass, unref, renderSlot } from "vue";
import useContext from "./hooks/useContext.js";
const _sfc_main = /* @__PURE__ */ defineComponent({
  ...{
    name: "Steps"
  },
  __name: "Steps",
  props: {
    type: { default: "default" },
    direction: { default: "horizontal" },
    labelPlacement: { default: "horizontal" },
    current: { default: void 0 },
    defaultCurrent: { default: 1 },
    status: { default: "process" },
    lineLess: { type: Boolean, default: false },
    small: { type: Boolean, default: false },
    changeable: { type: Boolean, default: false }
  },
  emits: ["change", "update:current"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emits = __emit;
    const { type, labelPlacement, direction } = useContext().provide(props, emits);
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", {
        class: normalizeClass([
          "yc-steps",
          `yc-steps-mode-${unref(type)}`,
          `yc-steps-${unref(direction)}`,
          `yc-steps-label-${unref(labelPlacement)}`,
          {
            "yc-steps-changeable": _ctx.changeable
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
