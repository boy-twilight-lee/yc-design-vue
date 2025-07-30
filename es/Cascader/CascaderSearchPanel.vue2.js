import { defineComponent, openBlock, createElementBlock, unref, createBlock, resolveDynamicComponent, createCommentVNode, createVNode, withCtx, createElementVNode, Fragment, renderList, mergeProps } from "vue";
import useContext from "./hooks/useContext.js";
import "../node_modules/tinycolor2/esm/tinycolor.js";
import "../_shared/utils/dom.js";
import "../_shared/utils/time.js";
import { getGlobalConfig } from "../_shared/utils/global-config.js";
import YcCascaderOption from "./CascaderOption.vue.js";
import Scrollbar from "../Scrollbar/index.js";
const _hoisted_1 = { class: "yc-cascader-panel yc-cascader-search-panel" };
const _hoisted_2 = {
  key: 0,
  class: "yc-cascader-empty"
};
const _hoisted_3 = {
  role: "menu",
  class: "yc-cascader-list"
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "CascaderSearchPanel",
  setup(__props) {
    const { renderEmpty } = getGlobalConfig();
    const { searchOptions, slots } = useContext().inject();
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1, [
        !unref(searchOptions).length ? (openBlock(), createElementBlock("div", _hoisted_2, [
          (openBlock(), createBlock(resolveDynamicComponent(unref(slots).empty || unref(renderEmpty)("Select"))))
        ])) : createCommentVNode("", true),
        createVNode(unref(Scrollbar), { class: "yc-cascader-column-content" }, {
          default: withCtx(() => [
            createElementVNode("ul", _hoisted_3, [
              (openBlock(true), createElementBlock(Fragment, null, renderList(unref(searchOptions), (option, i1) => {
                return openBlock(), createBlock(YcCascaderOption, mergeProps({
                  key: i1,
                  ref_for: true
                }, option), null, 16);
              }), 128))
            ])
          ]),
          _: 1
        })
      ]);
    };
  }
});
export {
  _sfc_main as default
};
