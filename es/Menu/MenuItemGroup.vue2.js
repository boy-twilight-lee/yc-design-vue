import { defineComponent, openBlock, createElementBlock, createElementVNode, renderSlot, createTextVNode, toDisplayString, normalizeStyle, unref } from "vue";
import "../node_modules/tinycolor2/esm/tinycolor.js";
import "../_shared/utils/dom.js";
import { valueToPx } from "../_shared/utils/fn.js";
import "../_shared/utils/time.js";
import "../Empty/index.js";
import "../_shared/icons/_Icon.vue.js";
import useContext from "./hooks/useContext.js";
const _hoisted_1 = { class: "yc-menu-group" };
const _hoisted_2 = { class: "yc-menu-group-title text-ellipsis" };
const _sfc_main = /* @__PURE__ */ defineComponent({
  ...{
    name: "MenuItemGroup"
  },
  __name: "MenuItemGroup",
  props: {
    title: { default: "" }
  },
  setup(__props) {
    const { levelIndent } = useContext().inject();
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1, [
        createElementVNode("div", _hoisted_2, [
          renderSlot(_ctx.$slots, "title", {}, () => [
            createTextVNode(toDisplayString(_ctx.title), 1)
          ], true)
        ]),
        createElementVNode("div", {
          class: "yc-menu-group-content",
          style: normalizeStyle({
            paddingLeft: unref(valueToPx)(unref(levelIndent))
          })
        }, [
          renderSlot(_ctx.$slots, "default", {}, void 0, true)
        ], 4)
      ]);
    };
  }
});
export {
  _sfc_main as default
};
