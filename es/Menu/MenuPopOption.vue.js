import { defineComponent, resolveComponent, openBlock, createBlock, unref, withCtx, resolveDynamicComponent, createElementBlock, Fragment, renderList } from "vue";
import "../Dropdown/index.js";
import Doption from "../Dropdown/Doption.vue.js";
import Dsubmenu from "../Dropdown/Dsubmenu.vue.js";
const _sfc_main = /* @__PURE__ */ defineComponent({
  ...{
    name: "PopOption"
  },
  __name: "MenuPopOption",
  props: {
    treeNode: {},
    popupMaxHeight: {},
    triggerProps: {},
    computedSelectedKeys: {}
  },
  setup(__props) {
    return (_ctx, _cache) => {
      const _component_pop_option = resolveComponent("pop-option");
      return _ctx.treeNode.type == "menuitem" ? (openBlock(), createBlock(unref(Doption), {
        key: 0,
        value: _ctx.treeNode.path,
        "is-active": _ctx.computedSelectedKeys == _ctx.treeNode.path
      }, {
        default: withCtx(() => [
          (openBlock(), createBlock(resolveDynamicComponent(_ctx.treeNode.label)))
        ]),
        _: 1
      }, 8, ["value", "is-active"])) : (openBlock(), createBlock(unref(Dsubmenu), {
        key: 1,
        "popup-max-height": _ctx.popupMaxHeight,
        "trigger-props": {
          popupTranslate: [-4, 0],
          ..._ctx.triggerProps
        }
      }, {
        content: withCtx(() => [
          (openBlock(true), createElementBlock(Fragment, null, renderList(_ctx.treeNode.children, (v) => {
            return openBlock(), createBlock(_component_pop_option, {
              key: v.path,
              "tree-node": v,
              popupMaxHeight: _ctx.popupMaxHeight,
              triggerProps: _ctx.triggerProps,
              computedSelectedKeys: _ctx.computedSelectedKeys
            }, null, 8, ["tree-node", "popupMaxHeight", "triggerProps", "computedSelectedKeys"]);
          }), 128))
        ]),
        default: withCtx(() => [
          (openBlock(), createBlock(resolveDynamicComponent(_ctx.treeNode.label)))
        ]),
        _: 1
      }, 8, ["popup-max-height", "trigger-props"]));
    };
  }
});
export {
  _sfc_main as default
};
