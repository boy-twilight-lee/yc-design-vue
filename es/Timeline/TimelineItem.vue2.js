import { defineComponent, openBlock, createElementBlock, normalizeClass, unref, createElementVNode, normalizeStyle, renderSlot, createTextVNode, toDisplayString, createCommentVNode } from "vue";
import useContext from "./hooks/useContext.js";
const _hoisted_1 = { class: "yc-timeline-item-dot-wrapper" };
const _hoisted_2 = { class: "yc-timeline-item-dot-content" };
const _hoisted_3 = {
  key: 0,
  class: "yc-timeline-item-dot-custom"
};
const _hoisted_4 = { class: "yc-timeline-item-content-wrapper" };
const _hoisted_5 = { class: "yc-timeline-item-content" };
const _hoisted_6 = {
  key: 0,
  class: "yc-timeline-item-label"
};
const _hoisted_7 = {
  key: 0,
  class: "yc-timeline-item-label"
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  ...{
    name: "TimelineItem"
  },
  __name: "TimelineItem",
  props: {
    dotColor: { default: "" },
    dotType: { default: "solid" },
    lineType: { default: "solid" },
    lineColor: { default: "" },
    label: { default: "" },
    position: { default: "top" },
    isGhost: { type: Boolean, default: false }
  },
  setup(__props) {
    const { direction, labelPosition, reverse } = useContext().inject();
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", {
        role: "listitem",
        class: normalizeClass([
          "yc-timeline-item",
          `yc-timeline-item-${_ctx.$attrs.mode}`,
          `yc-timeline-item-direction-${unref(direction)}`,
          {
            "yc-timeline-item-label-is-relative": unref(labelPosition) == "relative",
            "yc-timeline-item-ghost": _ctx.isGhost,
            "yc-timeline-item-reverse": unref(reverse)
          }
        ])
      }, [
        createElementVNode("div", _hoisted_1, [
          createElementVNode("div", {
            class: "yc-timeline-item-dot-line",
            style: normalizeStyle({
              "border-style": _ctx.lineType
            })
          }, null, 4),
          createElementVNode("div", _hoisted_2, [
            _ctx.$slots.dot ? (openBlock(), createElementBlock("div", _hoisted_3, [
              renderSlot(_ctx.$slots, "dot", {}, void 0, true)
            ])) : (openBlock(), createElementBlock("div", {
              key: 1,
              class: normalizeClass(["yc-timeline-item-dot", `yc-timeline-item-dot-${_ctx.dotType}`]),
              style: normalizeStyle({
                backgroundColor: _ctx.dotColor
              })
            }, null, 6))
          ])
        ]),
        createElementVNode("div", _hoisted_4, [
          createElementVNode("div", _hoisted_5, [
            renderSlot(_ctx.$slots, "default", {}, void 0, true)
          ]),
          unref(labelPosition) == "same" ? (openBlock(), createElementBlock("div", _hoisted_6, [
            renderSlot(_ctx.$slots, "label", {}, () => [
              createTextVNode(toDisplayString(_ctx.label), 1)
            ], true)
          ])) : createCommentVNode("", true)
        ]),
        unref(labelPosition) == "relative" ? (openBlock(), createElementBlock("div", _hoisted_7, [
          renderSlot(_ctx.$slots, "label", {}, () => [
            createTextVNode(toDisplayString(_ctx.label), 1)
          ], true)
        ])) : createCommentVNode("", true)
      ], 2);
    };
  }
});
export {
  _sfc_main as default
};
