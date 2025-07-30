import { defineComponent, openBlock, createElementBlock, createElementVNode, renderSlot, createTextVNode, toDisplayString, createCommentVNode, unref, createBlock, resolveDynamicComponent } from "vue";
import "../node_modules/tinycolor2/esm/tinycolor.js";
import "../_shared/utils/dom.js";
import "../_shared/utils/time.js";
import { getSlotFunction } from "../_shared/utils/vue-utils.js";
import "../Empty/index.js";
import "../_shared/icons/_Icon.vue.js";
import useContext from "./hooks/useContext.js";
const _hoisted_1 = { class: "yc-card-meta" };
const _hoisted_2 = { class: "yc-card-meta-content" };
const _hoisted_3 = {
  key: 0,
  class: "yc-card-meta-title text-ellipsis"
};
const _hoisted_4 = {
  key: 1,
  class: "yc-card-meta-description"
};
const _hoisted_5 = { class: "yc-card-meta-footer" };
const _hoisted_6 = {
  key: 0,
  class: "yc-card-meta-avatar"
};
const _hoisted_7 = {
  key: 1,
  class: "yc-card-actions"
};
const _hoisted_8 = { class: "yc-card-actions-right text-ellipsis" };
const _sfc_main = /* @__PURE__ */ defineComponent({
  ...{
    name: "CardMeta"
  },
  __name: "CardMeta",
  props: {
    title: { default: "" },
    description: { default: "" }
  },
  setup(__props) {
    const { slots } = useContext().inject();
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1, [
        createElementVNode("div", _hoisted_2, [
          _ctx.$slots.title || _ctx.title ? (openBlock(), createElementBlock("div", _hoisted_3, [
            renderSlot(_ctx.$slots, "title", {}, () => [
              createTextVNode(toDisplayString(_ctx.title), 1)
            ], true)
          ])) : createCommentVNode("", true),
          _ctx.$slots.description || _ctx.description ? (openBlock(), createElementBlock("div", _hoisted_4, [
            renderSlot(_ctx.$slots, "description", {}, () => [
              createTextVNode(toDisplayString(_ctx.description), 1)
            ], true)
          ])) : createCommentVNode("", true)
        ]),
        createElementVNode("div", _hoisted_5, [
          _ctx.$slots.avatar ? (openBlock(), createElementBlock("div", _hoisted_6, [
            renderSlot(_ctx.$slots, "avatar", {}, void 0, true)
          ])) : createCommentVNode("", true),
          unref(slots).actions ? (openBlock(), createElementBlock("div", _hoisted_7, [
            createElementVNode("div", _hoisted_8, [
              (openBlock(), createBlock(resolveDynamicComponent(unref(getSlotFunction)(unref(slots).actions))))
            ])
          ])) : createCommentVNode("", true)
        ])
      ]);
    };
  }
});
export {
  _sfc_main as default
};
