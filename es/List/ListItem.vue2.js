import { defineComponent, openBlock, createElementBlock, createElementVNode, renderSlot, createCommentVNode } from "vue";
const _hoisted_1 = {
  role: "listitem",
  class: "yc-list-item"
};
const _hoisted_2 = { class: "yc-list-item-main" };
const _hoisted_3 = {
  key: 0,
  class: "yc-list-item-meta"
};
const _hoisted_4 = { class: "yc-list-item-content" };
const _hoisted_5 = {
  key: 1,
  class: "yc-list-item-action"
};
const _hoisted_6 = {
  key: 0,
  class: "yc-list-item-action"
};
const _hoisted_7 = {
  key: 1,
  class: "list-item-extra"
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  ...{
    name: "ListItem"
  },
  __name: "ListItem",
  props: {
    actionLayout: { default: "horizontal" }
  },
  setup(__props) {
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1, [
        createElementVNode("div", _hoisted_2, [
          _ctx.$slots.meta ? (openBlock(), createElementBlock("div", _hoisted_3, [
            renderSlot(_ctx.$slots, "meta", {}, void 0, true)
          ])) : createCommentVNode("", true),
          createElementVNode("div", _hoisted_4, [
            renderSlot(_ctx.$slots, "default", {}, void 0, true)
          ]),
          _ctx.$slots.actions && _ctx.actionLayout == "vertical" ? (openBlock(), createElementBlock("div", _hoisted_5, [
            renderSlot(_ctx.$slots, "actions", {}, void 0, true)
          ])) : createCommentVNode("", true)
        ]),
        _ctx.$slots.actions && _ctx.actionLayout == "horizontal" ? (openBlock(), createElementBlock("div", _hoisted_6, [
          renderSlot(_ctx.$slots, "actions", {}, void 0, true)
        ])) : createCommentVNode("", true),
        _ctx.$slots.extra ? (openBlock(), createElementBlock("div", _hoisted_7, [
          renderSlot(_ctx.$slots, "extra", {}, void 0, true)
        ])) : createCommentVNode("", true)
      ]);
    };
  }
});
export {
  _sfc_main as default
};
