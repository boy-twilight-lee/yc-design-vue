import { defineComponent, ref, openBlock, createBlock, unref, mergeProps, withCtx, renderSlot, createElementBlock, Fragment, renderList, createTextVNode, toDisplayString, createElementVNode, createVNode, createCommentVNode } from "vue";
import _sfc_main$1 from "../_shared/icons/IconArrowDown.vue.js";
import "../node_modules/tinycolor2/esm/tinycolor.js";
import "../_shared/utils/dom.js";
import "../_shared/utils/time.js";
import "../Empty/index.js";
import "../_shared/icons/_Icon.vue.js";
import Dropdown from "../Dropdown/index.js";
import Doption from "../Dropdown/Doption.vue.js";
const _hoisted_1 = { class: "yc-breadcrumb-item" };
const _hoisted_2 = ["href"];
const _hoisted_3 = {
  key: 2,
  class: "yc-breadcrumb-item-dropdown-icon"
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  ...{
    name: "BreadcrumbItem"
  },
  __name: "BreadcrumbItem",
  props: {
    separator: { default: "" },
    droplist: { default: () => [] },
    dropdownProps: { default: () => {
      return {};
    } },
    path: { default: "" },
    showSeparator: { type: Boolean, default: true }
  },
  setup(__props) {
    const popupVisible = ref(false);
    return (_ctx, _cache) => {
      return openBlock(), createBlock(unref(Dropdown), mergeProps({
        "popup-visible": popupVisible.value,
        "onUpdate:popupVisible": _cache[0] || (_cache[0] = ($event) => popupVisible.value = $event)
      }, _ctx.dropdownProps, {
        disabled: !_ctx.droplist.length && !_ctx.$slots.droplist
      }), {
        content: withCtx(() => [
          renderSlot(_ctx.$slots, "droplist", {}, () => [
            (openBlock(true), createElementBlock(Fragment, null, renderList(_ctx.droplist, (item) => {
              return openBlock(), createBlock(unref(Doption), {
                key: item.path,
                value: item.path
              }, {
                default: withCtx(() => [
                  createTextVNode(toDisplayString(item.label), 1)
                ]),
                _: 2
              }, 1032, ["value"]);
            }), 128))
          ], true)
        ]),
        default: withCtx(() => [
          createElementVNode("div", _hoisted_1, [
            _ctx.path ? (openBlock(), createElementBlock("a", {
              key: 0,
              href: `#${_ctx.path}`
            }, [
              renderSlot(_ctx.$slots, "default", {}, void 0, true)
            ], 8, _hoisted_2)) : renderSlot(_ctx.$slots, "default", { key: 1 }, void 0, true),
            _ctx.droplist.length || _ctx.$slots.droplist ? (openBlock(), createElementBlock("div", _hoisted_3, [
              createVNode(unref(_sfc_main$1), {
                rotate: popupVisible.value ? 180 : 0
              }, null, 8, ["rotate"])
            ])) : createCommentVNode("", true)
          ])
        ]),
        _: 3
      }, 16, ["popup-visible", "disabled"]);
    };
  }
});
export {
  _sfc_main as default
};
