import { defineComponent, openBlock, createElementBlock, createElementVNode, toDisplayString, createCommentVNode, Fragment, renderList, normalizeStyle } from "vue";
const _hoisted_1 = { class: "yc-color-picker-colors-section" };
const _hoisted_2 = { class: "yc-color-picker-colors-text" };
const _hoisted_3 = {
  key: 0,
  class: "yc-color-picker-colors-empty"
};
const _hoisted_4 = { class: "yc-color-picker-colors-list" };
const _hoisted_5 = ["onClick"];
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "ColorList",
  props: {
    label: {},
    colors: {}
  },
  emits: ["colorClick"],
  setup(__props) {
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1, [
        createElementVNode("div", _hoisted_2, toDisplayString(_ctx.label), 1),
        !_ctx.colors.length ? (openBlock(), createElementBlock("div", _hoisted_3, "暂无")) : createCommentVNode("", true),
        createElementVNode("div", _hoisted_4, [
          (openBlock(true), createElementBlock(Fragment, null, renderList(_ctx.colors, (color, index) => {
            return openBlock(), createElementBlock("div", {
              key: index,
              class: "yc-color-picker-color-block",
              style: normalizeStyle({
                backgroundColor: color
              }),
              onClick: ($event) => _ctx.$emit("colorClick", color)
            }, [
              createElementVNode("div", {
                class: "yc-color-picker-block",
                style: normalizeStyle({
                  backgroundColor: color
                })
              }, null, 4)
            ], 12, _hoisted_5);
          }), 128))
        ])
      ]);
    };
  }
});
export {
  _sfc_main as default
};
