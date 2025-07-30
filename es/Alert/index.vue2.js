import { defineComponent, ref, openBlock, createBlock, Transition, withCtx, createElementBlock, normalizeClass, renderSlot, resolveDynamicComponent, unref, createCommentVNode, createElementVNode, createTextVNode, toDisplayString, createVNode } from "vue";
import { TYPE_ICON_MAP } from "../_shared/constants/index.js";
import IconButton from "../_shared/components/IconButton.vue.js";
import "../node_modules/tinycolor2/esm/tinycolor.js";
import "../_shared/utils/dom.js";
import "../_shared/utils/time.js";
import "../Empty/index.js";
import "../_shared/icons/_Icon.vue.js";
import "../_shared/components/ExpandTransition.vue.js";
const _hoisted_1 = {
  key: 0,
  class: "yc-alert-icon"
};
const _hoisted_2 = { class: "yc-alert-body" };
const _hoisted_3 = {
  key: 0,
  class: "yc-alert-title"
};
const _hoisted_4 = { class: "yc-alert-content" };
const _hoisted_5 = {
  key: 1,
  class: "yc-alert-action"
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  ...{
    name: "Alert"
  },
  __name: "index",
  props: {
    type: { default: "info" },
    showIcon: { type: Boolean, default: true },
    closable: { type: Boolean, default: false },
    title: { default: "" },
    banner: { type: Boolean, default: false },
    center: { type: Boolean, default: false }
  },
  emits: ["close", "after-close"],
  setup(__props, { emit: __emit }) {
    const emits = __emit;
    const visible = ref(true);
    const handleClose = (ev) => {
      visible.value = false;
      emits("close", ev);
    };
    return (_ctx, _cache) => {
      return openBlock(), createBlock(Transition, {
        name: "slide-dynamic-origin",
        onAfterLeave: _cache[0] || (_cache[0] = ($event) => _ctx.$emit("after-close"))
      }, {
        default: withCtx(() => [
          visible.value ? (openBlock(), createElementBlock("div", {
            key: 0,
            class: normalizeClass([
              "yc-alert",
              `yc-alert-${_ctx.type}`,
              {
                "yc-alert-has-title": _ctx.title || _ctx.$slots.title,
                "yc-alert-center": _ctx.center || _ctx.banner,
                "yc-alert-banner": _ctx.banner
              }
            ])
          }, [
            _ctx.showIcon ? (openBlock(), createElementBlock("div", _hoisted_1, [
              renderSlot(_ctx.$slots, "icon", {}, () => [
                (openBlock(), createBlock(resolveDynamicComponent(unref(TYPE_ICON_MAP)[_ctx.type])))
              ], true)
            ])) : createCommentVNode("", true),
            createElementVNode("div", _hoisted_2, [
              _ctx.$slots.title || _ctx.title ? (openBlock(), createElementBlock("div", _hoisted_3, [
                renderSlot(_ctx.$slots, "title", {}, () => [
                  createTextVNode(toDisplayString(_ctx.title), 1)
                ], true)
              ])) : createCommentVNode("", true),
              createElementVNode("div", _hoisted_4, [
                renderSlot(_ctx.$slots, "default", {}, void 0, true)
              ])
            ]),
            _ctx.$slots.action ? (openBlock(), createElementBlock("div", _hoisted_5, [
              renderSlot(_ctx.$slots, "action", {}, void 0, true)
            ])) : createCommentVNode("", true),
            _ctx.closable ? (openBlock(), createElementBlock("div", {
              key: 2,
              class: "yc-alert-close-btn",
              role: "button",
              "aria-label": "Close",
              onClick: handleClose
            }, [
              renderSlot(_ctx.$slots, "close-element", {}, () => [
                createVNode(unref(IconButton))
              ], true)
            ])) : createCommentVNode("", true)
          ], 2)) : createCommentVNode("", true)
        ]),
        _: 3
      });
    };
  }
});
export {
  _sfc_main as default
};
