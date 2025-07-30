import { defineComponent, openBlock, createElementBlock, createVNode, unref, withCtx, normalizeClass, normalizeStyle, renderSlot, Fragment, renderList, createElementVNode, createBlock, resolveDynamicComponent, createCommentVNode, createTextVNode, toDisplayString, Transition } from "vue";
import { createReusableTemplate } from "../node_modules/@vueuse/core/index.js";
import "../node_modules/tinycolor2/esm/tinycolor.js";
import "../_shared/utils/dom.js";
import { valueToPx } from "../_shared/utils/fn.js";
import "../_shared/utils/time.js";
import { getGlobalConfig } from "../_shared/utils/global-config.js";
const _hoisted_1 = { class: "yc-spin" };
const _hoisted_2 = {
  key: 0,
  class: "yc-dot-loading"
};
const _hoisted_3 = {
  key: 1,
  class: "yc-spin-tip"
};
const _hoisted_4 = {
  key: 0,
  class: "yc-spin-mask"
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  ...{
    name: "Spin"
  },
  __name: "index",
  props: {
    size: { default: 20 },
    loading: { type: Boolean, default: false },
    dot: { type: Boolean, default: false },
    tip: { default: "" },
    hideIcon: { type: Boolean, default: false },
    isSizeInherit: { type: Boolean, default: false }
  },
  setup(__props) {
    const { define: DefineTemplate, reuse: ReuseTemplate } = createReusableTemplate();
    const { renderLoading } = getGlobalConfig();
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1, [
        createVNode(unref(DefineTemplate), null, {
          default: withCtx(() => [
            !_ctx.hideIcon ? (openBlock(), createElementBlock("div", {
              key: 0,
              class: normalizeClass([
                "yc-spin-icon",
                {
                  "yc-spin-icon-loading": !_ctx.dot
                }
              ]),
              style: normalizeStyle({
                fontSize: !_ctx.isSizeInherit ? unref(valueToPx)(_ctx.size) : ""
              })
            }, [
              renderSlot(_ctx.$slots, "icon", {}, () => [
                _ctx.dot ? (openBlock(), createElementBlock("div", _hoisted_2, [
                  (openBlock(), createElementBlock(Fragment, null, renderList(5, (i) => {
                    return createElementVNode("div", {
                      key: i,
                      class: "yc-dot-loading-item"
                    });
                  }), 64))
                ])) : (openBlock(), createBlock(resolveDynamicComponent(unref(renderLoading)()), { key: 1 }))
              ], true)
            ], 6)) : createCommentVNode("", true),
            _ctx.tip ? (openBlock(), createElementBlock("div", _hoisted_3, [
              renderSlot(_ctx.$slots, "tip", {}, () => [
                createTextVNode(toDisplayString(_ctx.tip), 1)
              ], true)
            ])) : createCommentVNode("", true)
          ]),
          _: 3
        }),
        !_ctx.$slots.default ? (openBlock(), createBlock(unref(ReuseTemplate), { key: 0 })) : (openBlock(), createBlock(Transition, {
          key: 1,
          name: "fade"
        }, {
          default: withCtx(() => [
            _ctx.loading ? (openBlock(), createElementBlock("div", _hoisted_4, [
              createVNode(unref(ReuseTemplate))
            ])) : createCommentVNode("", true)
          ]),
          _: 1
        })),
        renderSlot(_ctx.$slots, "default", {}, void 0, true)
      ]);
    };
  }
});
export {
  _sfc_main as default
};
