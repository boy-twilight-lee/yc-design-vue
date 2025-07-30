import { defineComponent, openBlock, createElementBlock, renderSlot, createCommentVNode, createElementVNode, createTextVNode, toDisplayString } from "vue";
const _hoisted_1 = { class: "yc-list-item-meta" };
const _hoisted_2 = {
  key: 0,
  class: "yc-list-item-meta-avatar"
};
const _hoisted_3 = { class: "yc-list-item-meta-content" };
const _hoisted_4 = {
  key: 0,
  class: "yc-list-item-meta-title"
};
const _hoisted_5 = {
  key: 1,
  class: "yc-list-item-meta-description"
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  ...{
    name: "ListItemMeta"
  },
  __name: "ListItemMeta",
  props: {
    title: { default: "" },
    description: { default: "" }
  },
  setup(__props) {
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1, [
        _ctx.$slots.avatar ? (openBlock(), createElementBlock("div", _hoisted_2, [
          renderSlot(_ctx.$slots, "avatar", {}, void 0, true)
        ])) : createCommentVNode("", true),
        createElementVNode("div", _hoisted_3, [
          _ctx.$slots.title || _ctx.title ? (openBlock(), createElementBlock("div", _hoisted_4, [
            renderSlot(_ctx.$slots, "title", {}, () => [
              createTextVNode(toDisplayString(_ctx.title), 1)
            ], true)
          ])) : createCommentVNode("", true),
          _ctx.$slots.description || _ctx.description ? (openBlock(), createElementBlock("div", _hoisted_5, [
            renderSlot(_ctx.$slots, "description", {}, () => [
              createTextVNode(toDisplayString(_ctx.description), 1)
            ], true)
          ])) : createCommentVNode("", true)
        ])
      ]);
    };
  }
});
export {
  _sfc_main as default
};
