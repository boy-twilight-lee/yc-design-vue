import { defineComponent, openBlock, createElementBlock, createVNode, unref, createSlots, withCtx, renderSlot, createTextVNode, toDisplayString, withDirectives, createElementVNode, vShow } from "vue";
import useContext from "./hooks/useContext.js";
import _sfc_main$1 from "../_shared/icons/IconArrowDown.vue.js";
import "../node_modules/tinycolor2/esm/tinycolor.js";
import "../_shared/utils/dom.js";
import "../_shared/utils/time.js";
import "../Empty/index.js";
import "../_shared/icons/_Icon.vue.js";
import "../_shared/components/IconButton.vue2.js";
import ExpandTransition from "../_shared/components/ExpandTransition.vue.js";
import "./index.js";
import MenuItem from "./MenuItem.vue.js";
const _hoisted_1 = { class: "yc-menu-inline" };
const _hoisted_2 = { class: "yc-menu-inline-content" };
const _sfc_main = /* @__PURE__ */ defineComponent({
  ...{
    name: "SubMenu"
  },
  __name: "SubMenu",
  props: {
    path: { default: "" },
    title: { default: "" },
    selectable: { type: Boolean, default: false },
    popup: { type: Boolean, default: false },
    popupMaxHeight: { type: [Boolean, Number], default: void 0 }
  },
  setup(__props) {
    const { mode, computedOpenKeys, computedCollapsed } = useContext().inject();
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1, [
        createVNode(unref(MenuItem), {
          "is-submenu": "",
          path: _ctx.path,
          popupMaxHeight: _ctx.popupMaxHeight,
          class: "yc-menu-inline-header"
        }, createSlots({
          suffix: withCtx(() => [
            renderSlot(_ctx.$slots, "expand-icon-down", {}, () => [
              createVNode(unref(_sfc_main$1), {
                rotate: unref(computedOpenKeys).includes(_ctx.path) ? 180 : 0
              }, null, 8, ["rotate"])
            ], true)
          ]),
          default: withCtx(() => [
            renderSlot(_ctx.$slots, "title", {}, () => [
              createTextVNode(toDisplayString(_ctx.title), 1)
            ], true)
          ]),
          _: 2
        }, [
          _ctx.$slots.icon ? {
            name: "icon",
            fn: withCtx(() => [
              renderSlot(_ctx.$slots, "icon", {}, void 0, true)
            ]),
            key: "0"
          } : void 0
        ]), 1032, ["path", "popupMaxHeight"]),
        createVNode(unref(ExpandTransition), null, {
          default: withCtx(() => [
            withDirectives(createElementVNode("div", _hoisted_2, [
              renderSlot(_ctx.$slots, "default", {}, void 0, true)
            ], 512), [
              [
                vShow,
                unref(mode) == "vertical" && !unref(computedCollapsed) && unref(computedOpenKeys).includes(_ctx.path)
              ]
            ])
          ]),
          _: 3
        })
      ]);
    };
  }
});
export {
  _sfc_main as default
};
