import { defineComponent, toRefs, openBlock, createElementBlock, unref, normalizeClass, createElementVNode, renderSlot, Fragment, createBlock, resolveDynamicComponent, createCommentVNode, createTextVNode, toDisplayString } from "vue";
import { TYPE_ICON_MAP } from "../_shared/constants/index.js";
const _hoisted_1 = { class: "yc-result" };
const _hoisted_2 = { class: "yc-result-icon-tip" };
const _hoisted_3 = ["src"];
const _hoisted_4 = {
  key: 1,
  class: "yc-result-title"
};
const _hoisted_5 = {
  key: 2,
  class: "yc-result-subtitle"
};
const _hoisted_6 = {
  key: 3,
  class: "yc-result-extra"
};
const _hoisted_7 = {
  key: 4,
  class: "yc-result-content"
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  ...{
    name: "Result"
  },
  __name: "index",
  props: {
    status: { default: "info" },
    title: { default: "" },
    subtitle: { default: "" }
  },
  setup(__props) {
    const props = __props;
    const { status } = toRefs(props);
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1, [
        _ctx.$slots.icon || unref(status) ? (openBlock(), createElementBlock("div", {
          key: 0,
          class: normalizeClass(["yc-result-icon", `yc-result-icon-${unref(status)}`])
        }, [
          createElementVNode("div", _hoisted_2, [
            renderSlot(_ctx.$slots, "icon", {}, () => [
              unref(status) ? (openBlock(), createElementBlock(Fragment, { key: 0 }, [
                ["403", "404", "500"].includes(unref(status)) ? (openBlock(), createElementBlock("img", {
                  key: 0,
                  src: unref(TYPE_ICON_MAP)[`result-${unref(status)}`]
                }, null, 8, _hoisted_3)) : (openBlock(), createBlock(resolveDynamicComponent(unref(TYPE_ICON_MAP)[`result-${unref(status)}`]), { key: 1 }))
              ], 64)) : createCommentVNode("", true)
            ], true)
          ])
        ], 2)) : createCommentVNode("", true),
        _ctx.$slots.title || _ctx.title ? (openBlock(), createElementBlock("div", _hoisted_4, [
          renderSlot(_ctx.$slots, "title", {}, () => [
            createTextVNode(toDisplayString(_ctx.title), 1)
          ], true)
        ])) : createCommentVNode("", true),
        _ctx.$slots.subtitle || _ctx.subtitle ? (openBlock(), createElementBlock("div", _hoisted_5, [
          renderSlot(_ctx.$slots, "subtitle", {}, () => [
            createTextVNode(toDisplayString(_ctx.subtitle), 1)
          ], true)
        ])) : createCommentVNode("", true),
        _ctx.$slots.extra ? (openBlock(), createElementBlock("div", _hoisted_6, [
          renderSlot(_ctx.$slots, "extra", {}, void 0, true)
        ])) : createCommentVNode("", true),
        _ctx.$slots.default ? (openBlock(), createElementBlock("div", _hoisted_7, [
          renderSlot(_ctx.$slots, "default", {}, void 0, true)
        ])) : createCommentVNode("", true)
      ]);
    };
  }
});
export {
  _sfc_main as default
};
