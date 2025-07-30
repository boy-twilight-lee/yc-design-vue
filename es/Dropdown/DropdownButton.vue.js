import { defineComponent, openBlock, createBlock, unref, withCtx, createVNode, mergeProps, renderSlot, normalizeProps, guardReactiveProps } from "vue";
import "../node_modules/tinycolor2/esm/tinycolor.js";
import "../_shared/utils/dom.js";
import "../_shared/utils/time.js";
import "../Empty/index.js";
import "../_shared/icons/_Icon.vue.js";
import _sfc_main$3 from "../_shared/icons/IconMore.vue.js";
import _sfc_main$2 from "./Dropdown.vue.js";
import "./Dropdown.vue2.js";
import Button from "../Button/index.js";
import _sfc_main$1 from "../Button/ButtonGroup.vue.js";
import "../Button/ButtonGroup.vue2.js";
const _sfc_main = /* @__PURE__ */ defineComponent({
  ...{
    name: "DropdownButton"
  },
  __name: "DropdownButton",
  props: {
    popupVisible: { type: Boolean, default: void 0 },
    defaultPopupVisible: { type: Boolean, default: false },
    trigger: { default: "click" },
    position: { default: "br" },
    popupContainer: { default: void 0 },
    disabled: { type: Boolean, default: false },
    type: { default: "secondary" },
    size: { default: void 0 },
    buttonProps: { default: () => {
      return {};
    } },
    hideOnSelect: { type: Boolean, default: true }
  },
  emits: ["popup-visible-change", "click", "select"],
  setup(__props) {
    return (_ctx, _cache) => {
      return openBlock(), createBlock(unref(_sfc_main$1), {
        disabled: _ctx.disabled,
        type: _ctx.type,
        size: _ctx.size
      }, {
        default: withCtx(() => [
          createVNode(unref(Button), mergeProps(_ctx.buttonProps, {
            onClick: _cache[0] || (_cache[0] = (ev) => _ctx.$emit("click", ev))
          }), {
            default: withCtx(() => [
              renderSlot(_ctx.$slots, "default")
            ]),
            _: 3
          }, 16),
          createVNode(_sfc_main$2, mergeProps({
            "popup-visible": _ctx.popupVisible,
            "default-popup-visible": _ctx.defaultPopupVisible,
            trigger: _ctx.trigger,
            position: _ctx.position,
            "popup-container": _ctx.popupContainer,
            "hide-on-select": _ctx.hideOnSelect,
            disabled: _ctx.disabled
          }, _ctx.$attrs, {
            onSelect: _cache[1] || (_cache[1] = (v) => _ctx.$emit("select", v)),
            onPopupVisibleChange: _cache[2] || (_cache[2] = (v) => _ctx.$emit("popup-visible-change", v))
          }), {
            content: withCtx(() => [
              renderSlot(_ctx.$slots, "content")
            ]),
            default: withCtx(() => [
              createVNode(unref(Button), normalizeProps(guardReactiveProps(_ctx.buttonProps)), {
                icon: withCtx(() => [
                  renderSlot(_ctx.$slots, "icon", {}, () => [
                    createVNode(unref(_sfc_main$3))
                  ])
                ]),
                _: 3
              }, 16)
            ]),
            _: 3
          }, 16, ["popup-visible", "default-popup-visible", "trigger", "position", "popup-container", "hide-on-select", "disabled"])
        ]),
        _: 3
      }, 8, ["disabled", "type", "size"]);
    };
  }
});
export {
  _sfc_main as default
};
