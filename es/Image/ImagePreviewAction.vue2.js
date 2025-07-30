import { defineComponent, openBlock, createBlock, unref, withCtx, createElementVNode, normalizeClass, renderSlot } from "vue";
import Tooltip from "../Tooltip/index.js";
const _hoisted_1 = { class: "yc-image-preview-toolbar-action-content" };
const _sfc_main = /* @__PURE__ */ defineComponent({
  ...{
    name: "ImagePreviewAction"
  },
  __name: "ImagePreviewAction",
  props: {
    name: { default: "" },
    disabled: { type: Boolean, default: false }
  },
  emits: ["click", "dblclick", "contextmenu"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emits = __emit;
    const handleEvent = (type, ev) => {
      if (props.disabled)
        return;
      emits(type, ev);
    };
    return (_ctx, _cache) => {
      return openBlock(), createBlock(unref(Tooltip), {
        content: _ctx.name,
        disabled: !_ctx.name.length,
        position: "top"
      }, {
        default: withCtx(() => [
          createElementVNode("div", {
            class: normalizeClass([
              "yc-image-preview-toolbar-action",
              {
                "yc-image-preview-toolbar-action-disabled": _ctx.disabled
              }
            ]),
            onClick: _cache[0] || (_cache[0] = ($event) => handleEvent("click", $event)),
            onDblclick: _cache[1] || (_cache[1] = ($event) => handleEvent("dblclick", $event)),
            onContextmenu: _cache[2] || (_cache[2] = ($event) => handleEvent("contextmenu", $event))
          }, [
            createElementVNode("span", _hoisted_1, [
              renderSlot(_ctx.$slots, "default", {}, void 0, true)
            ])
          ], 34)
        ]),
        _: 3
      }, 8, ["content", "disabled"]);
    };
  }
});
export {
  _sfc_main as default
};
