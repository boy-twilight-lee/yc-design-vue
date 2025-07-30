import { defineComponent, toRefs, useSlots, computed, openBlock, createElementBlock, mergeProps, unref, createBlock, renderSlot, createCommentVNode } from "vue";
import useContext from "./hooks/useContext.js";
import Spin from "../Spin/index.js";
const _hoisted_1 = ["href"];
const _hoisted_2 = {
  key: 0,
  class: "yc-button-icon"
};
const _hoisted_3 = ["type", "disabled"];
const _hoisted_4 = {
  key: 0,
  class: "yc-button-icon"
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  ...{
    name: "Button"
  },
  __name: "Button",
  props: {
    type: { default: void 0 },
    shape: { default: void 0 },
    status: { default: void 0 },
    size: { default: void 0 },
    long: { type: Boolean, default: false },
    loading: { type: Boolean, default: false },
    disabled: { type: Boolean, default: void 0 },
    htmlType: { default: "button" },
    href: { default: "" }
  },
  emits: ["mousedown", "mouseup", "click", "dblclick", "contextmenu"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emits = __emit;
    const {
      loading,
      disabled: _disabled,
      type: _type,
      status: _status,
      shape: _shape,
      long
    } = toRefs(props);
    const { size, disabled, type, status, shape } = useContext().inject(props);
    const slots = useSlots();
    const className = computed(() => {
      return [
        "yc-button",
        `yc-button-size-${size.value}`,
        `yc-button-${type.value}`,
        `yc-button-status-${status.value}`,
        `yc-button-shape-${shape.value}`,
        {
          "yc-button-long": long.value,
          "yc-button-loading": loading.value,
          "yc-button-disabled": disabled.value,
          "yc-button-only-icon": !slots.default
        }
      ];
    });
    const handleEvent = (type2, e) => {
      if (disabled.value || loading.value)
        return;
      emits(type2, e);
    };
    return (_ctx, _cache) => {
      return _ctx.href ? (openBlock(), createElementBlock("a", mergeProps({
        key: 0,
        href: _ctx.href,
        class: className.value
      }, _ctx.$attrs, {
        onMousedown: _cache[0] || (_cache[0] = ($event) => handleEvent("mousedown", $event)),
        onMouseup: _cache[1] || (_cache[1] = ($event) => handleEvent("mouseup", $event)),
        onClick: _cache[2] || (_cache[2] = ($event) => handleEvent("click", $event)),
        onDblclick: _cache[3] || (_cache[3] = ($event) => handleEvent("dblclick", $event)),
        onContextmenu: _cache[4] || (_cache[4] = ($event) => handleEvent("contextmenu", $event))
      }), [
        _ctx.$slots.icon || unref(loading) ? (openBlock(), createElementBlock("span", _hoisted_2, [
          unref(loading) ? (openBlock(), createBlock(unref(Spin), {
            key: 0,
            "is-size-inherit": ""
          })) : renderSlot(_ctx.$slots, "icon", { key: 1 }, void 0, true)
        ])) : createCommentVNode("", true),
        renderSlot(_ctx.$slots, "default", {}, void 0, true)
      ], 16, _hoisted_1)) : (openBlock(), createElementBlock("button", mergeProps({
        key: 1,
        type: _ctx.htmlType,
        disabled: unref(disabled),
        class: className.value
      }, _ctx.$attrs, {
        onMousedown: _cache[5] || (_cache[5] = ($event) => handleEvent("mousedown", $event)),
        onMouseup: _cache[6] || (_cache[6] = ($event) => handleEvent("mouseup", $event)),
        onClick: _cache[7] || (_cache[7] = ($event) => handleEvent("click", $event)),
        onDblclick: _cache[8] || (_cache[8] = ($event) => handleEvent("dblclick", $event)),
        onContextmenu: _cache[9] || (_cache[9] = ($event) => handleEvent("contextmenu", $event))
      }), [
        _ctx.$slots.icon || unref(loading) ? (openBlock(), createElementBlock("span", _hoisted_4, [
          unref(loading) ? (openBlock(), createBlock(unref(Spin), {
            key: 0,
            "is-size-inherit": ""
          })) : renderSlot(_ctx.$slots, "icon", { key: 1 }, void 0, true)
        ])) : createCommentVNode("", true),
        renderSlot(_ctx.$slots, "default", {}, void 0, true)
      ], 16, _hoisted_3));
    };
  }
});
export {
  _sfc_main as default
};
