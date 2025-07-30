import { defineComponent, openBlock, createElementBlock, createElementVNode, renderSlot, createCommentVNode, createVNode, unref, toDisplayString } from "vue";
import "../node_modules/tinycolor2/esm/tinycolor.js";
import "../_shared/utils/dom.js";
import "../_shared/utils/time.js";
import "./index.js";
import "../_shared/icons/_Icon.vue.js";
import _sfc_main$1 from "../_shared/icons/IconEmpty.vue.js";
const _hoisted_1 = { class: "yc-empty" };
const _hoisted_2 = { class: "yc-empty-image" };
const _hoisted_3 = ["src"];
const _hoisted_4 = {
  key: 0,
  class: "yc-empty-description"
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  ...{
    name: "Empty"
  },
  __name: "index",
  props: {
    description: { default: "暂无数据" },
    imgSrc: { default: "" }
  },
  setup(__props) {
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1, [
        createElementVNode("div", _hoisted_2, [
          renderSlot(_ctx.$slots, "image", {}, () => [
            _ctx.imgSrc ? (openBlock(), createElementBlock("img", {
              key: 0,
              src: _ctx.imgSrc,
              alt: "图片加载失败"
            }, null, 8, _hoisted_3)) : createCommentVNode("", true),
            createVNode(unref(_sfc_main$1))
          ], true)
        ]),
        _ctx.description ? (openBlock(), createElementBlock("div", _hoisted_4, toDisplayString(_ctx.description), 1)) : createCommentVNode("", true)
      ]);
    };
  }
});
export {
  _sfc_main as default
};
