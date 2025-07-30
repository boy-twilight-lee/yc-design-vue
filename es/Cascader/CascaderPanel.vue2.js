import { defineComponent, openBlock, createBlock, TransitionGroup, withCtx, unref, resolveDynamicComponent, createElementBlock, Fragment, renderList, withDirectives, normalizeStyle, createVNode, createElementVNode, mergeProps, vShow } from "vue";
import useContext, { findOptions } from "./hooks/useContext.js";
import YcCascaderOption from "./CascaderOption.vue.js";
import Scrollbar from "../Scrollbar/index.js";
import "../node_modules/tinycolor2/esm/tinycolor.js";
import "../_shared/utils/dom.js";
import "../_shared/utils/time.js";
import { getGlobalConfig } from "../_shared/utils/global-config.js";
import Spin from "../Spin/index.js";
const _hoisted_1 = {
  role: "menu",
  class: "yc-cascader-list"
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "CascaderPanel",
  setup(__props) {
    const { renderEmpty } = getGlobalConfig();
    const { options, curLevel, curPath, maxLevel, loading, slots } = useContext().inject();
    return (_ctx, _cache) => {
      return openBlock(), createBlock(TransitionGroup, {
        tag: "div",
        name: "cascader-slide",
        class: "yc-cascader-panel"
      }, {
        default: withCtx(() => [
          unref(loading) ? (openBlock(), createBlock(unref(Spin), {
            key: 0,
            loading: unref(loading)
          }, null, 8, ["loading"])) : !unref(options).length ? (openBlock(), createBlock(resolveDynamicComponent(unref(slots).empty || unref(renderEmpty)("Select")), { key: 1 })) : (openBlock(true), createElementBlock(Fragment, { key: 2 }, renderList(unref(maxLevel), (i) => {
            return withDirectives((openBlock(), createElementBlock("div", {
              key: i,
              style: normalizeStyle({
                zIndex: unref(maxLevel) + 1 - i
              }),
              class: "yc-cascader-panel-column"
            }, [
              createVNode(unref(Scrollbar), { class: "yc-cascader-column-content" }, {
                default: withCtx(() => [
                  createElementVNode("ul", _hoisted_1, [
                    (openBlock(true), createElementBlock(Fragment, null, renderList(unref(findOptions)(
                      unref(options),
                      i,
                      unref(curPath).slice(0, i - 1)
                    ), (option, i1) => {
                      return openBlock(), createBlock(YcCascaderOption, mergeProps({
                        key: i1,
                        ref_for: true
                      }, option), null, 16);
                    }), 128))
                  ])
                ]),
                _: 2
              }, 1024)
            ], 4)), [
              [vShow, unref(curLevel) >= i]
            ]);
          }), 128))
        ]),
        _: 1
      });
    };
  }
});
export {
  _sfc_main as default
};
