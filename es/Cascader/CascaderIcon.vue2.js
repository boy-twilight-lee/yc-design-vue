import { defineComponent, resolveComponent, openBlock, createBlock, unref, createSlots, withCtx, resolveDynamicComponent, createElementBlock, Fragment, createElementVNode, createCommentVNode, withModifiers } from "vue";
import useContext from "./hooks/useContext.js";
import _sfc_main$1 from "../_shared/icons/IconArrowDown.vue.js";
import "../node_modules/tinycolor2/esm/tinycolor.js";
import "../_shared/utils/dom.js";
import "../_shared/utils/time.js";
import "../Empty/index.js";
import "../_shared/icons/_Icon.vue.js";
import IconButton from "../_shared/components/IconButton.vue.js";
import "../_shared/components/ExpandTransition.vue.js";
import Spin from "../Spin/index.js";
const _hoisted_1 = { class: "yc-cascader-suffix-icon" };
const _hoisted_2 = {
  key: 0,
  class: "yc-cascader-search-icon"
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "CascaderIcon",
  props: {
    loading: { type: Boolean },
    popupVisible: { type: Boolean },
    showClearBtn: { type: Boolean },
    allowSearch: { type: Boolean }
  },
  emits: ["clear"],
  setup(__props) {
    const { slots } = useContext().inject();
    const renderIcon = (name) => {
      return slots[name];
    };
    return (_ctx, _cache) => {
      const _component_icon_search = resolveComponent("icon-search");
      return _ctx.loading ? (openBlock(), createBlock(unref(Spin), {
        key: 0,
        size: 12,
        class: "yc-cascader-loading-icon"
      }, createSlots({ _: 2 }, [
        _ctx.$slots["loading-icon"] ? {
          name: "icon",
          fn: withCtx(() => [
            (openBlock(), createBlock(resolveDynamicComponent(renderIcon("loading-icon"))))
          ]),
          key: "0"
        } : void 0
      ]), 1024)) : (openBlock(), createElementBlock(Fragment, { key: 1 }, [
        createElementVNode("div", _hoisted_1, [
          unref(slots)["arrow-icon"] ? (openBlock(), createBlock(resolveDynamicComponent(renderIcon("arrow-icon")), { key: 0 })) : (openBlock(), createBlock(unref(_sfc_main$1), {
            key: 1,
            rotate: _ctx.popupVisible ? 180 : 0
          }, null, 8, ["rotate"]))
        ]),
        _ctx.allowSearch ? (openBlock(), createElementBlock("div", _hoisted_2, [
          unref(slots)["search-icon"] ? (openBlock(), createBlock(resolveDynamicComponent(renderIcon("search-icon")), { key: 0 })) : (openBlock(), createBlock(_component_icon_search, { key: 1 }))
        ])) : createCommentVNode("", true),
        _ctx.showClearBtn ? (openBlock(), createBlock(unref(IconButton), {
          key: 1,
          class: "yc-cascader-clear-icon",
          onClick: _cache[0] || (_cache[0] = withModifiers(($event) => _ctx.$emit("clear"), ["stop"]))
        })) : createCommentVNode("", true)
      ], 64));
    };
  }
});
export {
  _sfc_main as default
};
