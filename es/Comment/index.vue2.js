import { defineComponent, openBlock, createElementBlock, renderSlot, createVNode, unref, createCommentVNode, createElementVNode, normalizeClass, createTextVNode, toDisplayString } from "vue";
import "../node_modules/tinycolor2/esm/tinycolor.js";
import "../_shared/utils/dom.js";
import { isObject } from "../_shared/utils/is.js";
import "../_shared/utils/time.js";
import "../Empty/index.js";
import "../_shared/icons/_Icon.vue.js";
import useContext from "./hooks/useContext.js";
import Avatar from "../Avatar/index.js";
const _hoisted_1 = {
  Comment: "",
  class: "yc-comment"
};
const _hoisted_2 = {
  key: 0,
  class: "yc-comment-avatar"
};
const _hoisted_3 = { class: "yc-comment-inner" };
const _hoisted_4 = { class: "yc-comment-inner-content" };
const _hoisted_5 = {
  key: 0,
  class: "yc-comment-author"
};
const _hoisted_6 = {
  key: 1,
  class: "yc-comment-datetime"
};
const _hoisted_7 = {
  key: 0,
  class: "yc-comment-content"
};
const _hoisted_8 = {
  key: 0,
  class: "yc-comment-inner-comment"
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  ...{
    name: "Comment"
  },
  __name: "index",
  props: {
    author: { default: "" },
    avatar: { default: "" },
    content: { default: "" },
    datetime: { default: "" },
    align: { default: "left" }
  },
  setup(__props) {
    const { hasChildren } = useContext();
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1, [
        _ctx.$slots.avatar || _ctx.avatar ? (openBlock(), createElementBlock("div", _hoisted_2, [
          renderSlot(_ctx.$slots, "avatar", {}, () => [
            createVNode(unref(Avatar), {
              "image-url": _ctx.avatar,
              size: unref(hasChildren) ? 32 : 40
            }, null, 8, ["image-url", "size"])
          ], true)
        ])) : createCommentVNode("", true),
        createElementVNode("div", _hoisted_3, [
          createElementVNode("div", _hoisted_4, [
            createElementVNode("div", {
              class: normalizeClass([
                "yc-comment-title",
                {
                  "yc-comment-title-align-left": _ctx.align == "left" || unref(isObject)(_ctx.align) && _ctx.align.datetime == "left",
                  "yc-comment-title-align-right": _ctx.align == "right" || unref(isObject)(_ctx.align) && _ctx.align.datetime == "right"
                }
              ])
            }, [
              _ctx.$slots.author || _ctx.author ? (openBlock(), createElementBlock("span", _hoisted_5, [
                renderSlot(_ctx.$slots, "author", {}, () => [
                  createTextVNode(toDisplayString(_ctx.author), 1)
                ], true)
              ])) : createCommentVNode("", true),
              _ctx.$slots.datetime || _ctx.datetime ? (openBlock(), createElementBlock("span", _hoisted_6, [
                renderSlot(_ctx.$slots, "datetime", {}, () => [
                  createTextVNode(toDisplayString(_ctx.datetime), 1)
                ], true)
              ])) : createCommentVNode("", true)
            ], 2),
            _ctx.$slots.content || _ctx.content ? (openBlock(), createElementBlock("div", _hoisted_7, [
              renderSlot(_ctx.$slots, "content", {}, () => [
                createTextVNode(toDisplayString(_ctx.content), 1)
              ], true)
            ])) : createCommentVNode("", true),
            _ctx.$slots.actions ? (openBlock(), createElementBlock("div", {
              key: 1,
              class: normalizeClass([
                "yc-comment-actions",
                {
                  "yc-comment-actions-align-left": _ctx.align == "left" || unref(isObject)(_ctx.align) && _ctx.align.datetime == "left",
                  "yc-comment-actions-align-right": _ctx.align == "right" || unref(isObject)(_ctx.align) && _ctx.align.datetime == "right"
                }
              ])
            }, [
              renderSlot(_ctx.$slots, "actions", {}, void 0, true)
            ], 2)) : createCommentVNode("", true)
          ]),
          _ctx.$slots.default ? (openBlock(), createElementBlock("div", _hoisted_8, [
            renderSlot(_ctx.$slots, "default", {}, void 0, true)
          ])) : createCommentVNode("", true)
        ])
      ]);
    };
  }
});
export {
  _sfc_main as default
};
