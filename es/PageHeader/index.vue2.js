import { defineComponent, openBlock, createElementBlock, createElementVNode, renderSlot, createCommentVNode, createVNode, unref, withCtx, createTextVNode, toDisplayString, createBlock } from "vue";
import "../node_modules/tinycolor2/esm/tinycolor.js";
import "../_shared/utils/dom.js";
import "../_shared/utils/time.js";
import "../Empty/index.js";
import "../_shared/icons/_Icon.vue.js";
import _sfc_main$1 from "../_shared/icons/IconArrowRight.vue.js";
import Divider from "../Divider/index.js";
import IconButton from "../_shared/components/IconButton.vue.js";
import "../_shared/components/ExpandTransition.vue.js";
const _hoisted_1 = { class: "yc-page-header" };
const _hoisted_2 = { class: "yc-page-header-wrapper" };
const _hoisted_3 = {
  key: 0,
  class: "yc-page-header-breadcrumb"
};
const _hoisted_4 = { class: "yc-page-header-header" };
const _hoisted_5 = { class: "yc-page-header-main" };
const _hoisted_6 = {
  key: 0,
  class: "yc-page-header-title text-ellipsis"
};
const _hoisted_7 = {
  key: 2,
  class: "yc-page-header-subtitle text-ellipsis"
};
const _hoisted_8 = {
  key: 0,
  class: "yc-page-header-extra"
};
const _hoisted_9 = {
  key: 0,
  class: "yc-page-header-content"
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  ...{
    name: "PageHeader"
  },
  __name: "index",
  props: {
    title: { default: "" },
    subtitle: { default: "" },
    showBack: { type: Boolean, default: true }
  },
  emits: ["back"],
  setup(__props) {
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1, [
        createElementVNode("div", _hoisted_2, [
          _ctx.$slots.breadcrumb ? (openBlock(), createElementBlock("div", _hoisted_3, [
            renderSlot(_ctx.$slots, "breadcrumb", {}, void 0, true)
          ])) : createCommentVNode("", true),
          createElementVNode("div", _hoisted_4, [
            createElementVNode("div", _hoisted_5, [
              createVNode(unref(IconButton), {
                size: 14,
                "hover-size": 30,
                onClick: _cache[0] || (_cache[0] = ($event) => _ctx.$emit("back", $event))
              }, {
                default: withCtx(() => [
                  renderSlot(_ctx.$slots, "back-icon", {}, () => [
                    createVNode(unref(_sfc_main$1))
                  ], true)
                ]),
                _: 3
              }),
              _ctx.$slots.title || _ctx.title ? (openBlock(), createElementBlock("div", _hoisted_6, [
                renderSlot(_ctx.$slots, "title", {}, () => [
                  createTextVNode(toDisplayString(_ctx.title), 1)
                ], true)
              ])) : createCommentVNode("", true),
              _ctx.$slots.subtitle || _ctx.subtitle ? (openBlock(), createBlock(unref(Divider), {
                key: 1,
                direction: "vertical"
              })) : createCommentVNode("", true),
              _ctx.$slots.subtitle || _ctx.subtitle ? (openBlock(), createElementBlock("div", _hoisted_7, [
                renderSlot(_ctx.$slots, "subtitle", {}, () => [
                  createTextVNode(toDisplayString(_ctx.subtitle), 1)
                ], true)
              ])) : createCommentVNode("", true)
            ]),
            _ctx.$slots.extra ? (openBlock(), createElementBlock("div", _hoisted_8, [
              renderSlot(_ctx.$slots, "extra", {}, void 0, true)
            ])) : createCommentVNode("", true)
          ])
        ]),
        _ctx.$slots.default ? (openBlock(), createElementBlock("div", _hoisted_9, [
          renderSlot(_ctx.$slots, "default", {}, void 0, true)
        ])) : createCommentVNode("", true)
      ]);
    };
  }
});
export {
  _sfc_main as default
};
