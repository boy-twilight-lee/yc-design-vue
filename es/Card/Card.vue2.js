import { defineComponent, computed, openBlock, createElementBlock, normalizeClass, unref, normalizeStyle, renderSlot, createTextVNode, toDisplayString, createCommentVNode, createElementVNode, createBlock, withCtx } from "vue";
import "../node_modules/tinycolor2/esm/tinycolor.js";
import "../_shared/utils/dom.js";
import "../_shared/utils/time.js";
import { findComponentsFromVnodes } from "../_shared/utils/vue-utils.js";
import { getGlobalConfig } from "../_shared/utils/global-config.js";
import useContext from "./hooks/useContext.js";
import Spin from "../Spin/index.js";
import CardGrid from "./CardGrid.vue.js";
import CardMeta from "./CardMeta.vue.js";
const _hoisted_1 = {
  key: 0,
  class: "yc-card-header-title text-ellipsis"
};
const _hoisted_2 = {
  key: 1,
  class: "yc-card-header-extra text-ellipsis"
};
const _hoisted_3 = {
  key: 1,
  class: "yc-card-cover"
};
const _hoisted_4 = {
  key: 2,
  class: "yc-card-actions"
};
const _hoisted_5 = { class: "yc-card-actions-right text-ellipsis" };
const _sfc_main = /* @__PURE__ */ defineComponent({
  ...{
    name: "Card"
  },
  __name: "Card",
  props: {
    bordered: { type: Boolean, default: true },
    loading: { type: Boolean, default: false },
    hoverable: { type: Boolean, default: false },
    size: { default: void 0 },
    headerStyle: { default: () => {
      return {};
    } },
    bodyStyle: { default: () => {
      return {};
    } },
    title: { default: "" },
    extra: { default: "" }
  },
  setup(__props) {
    const props = __props;
    const { size } = getGlobalConfig(props);
    const { slots } = useContext().provide();
    const nodes = computed(() => {
      var _a;
      return ((_a = slots.default) == null ? void 0 : _a.call(slots)) || [];
    });
    const hasMeta = computed(() => {
      const meta = findComponentsFromVnodes(nodes.value, CardMeta.name);
      return !!meta.length;
    });
    const hasGrid = computed(() => {
      const grid = findComponentsFromVnodes(nodes.value, CardGrid.name);
      return !!grid.length;
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", {
        class: normalizeClass([
          "yc-card",
          `yc-card-size-${unref(size)}`,
          {
            "yc-card-bordered": _ctx.bordered,
            "yc-card-hoverable": _ctx.hoverable,
            "yc-card-loading": _ctx.loading,
            "yc-card-contain-grid": hasGrid.value
          }
        ])
      }, [
        _ctx.title || _ctx.extra || _ctx.$slots.title || _ctx.$slots.extra ? (openBlock(), createElementBlock("div", {
          key: 0,
          class: "yc-card-header",
          style: normalizeStyle(_ctx.headerStyle)
        }, [
          _ctx.title || _ctx.$slots.title ? (openBlock(), createElementBlock("div", _hoisted_1, [
            renderSlot(_ctx.$slots, "title", {}, () => [
              createTextVNode(toDisplayString(_ctx.title), 1)
            ], true)
          ])) : createCommentVNode("", true),
          _ctx.extra || _ctx.$slots.extra ? (openBlock(), createElementBlock("div", _hoisted_2, [
            renderSlot(_ctx.$slots, "extra", {}, () => [
              createTextVNode(toDisplayString(_ctx.extra), 1)
            ], true)
          ])) : createCommentVNode("", true)
        ], 4)) : createCommentVNode("", true),
        _ctx.$slots.cover ? (openBlock(), createElementBlock("div", _hoisted_3, [
          renderSlot(_ctx.$slots, "cover", {}, void 0, true)
        ])) : createCommentVNode("", true),
        createElementVNode("div", {
          class: "yc-card-body",
          style: normalizeStyle(_ctx.bodyStyle)
        }, [
          _ctx.loading ? (openBlock(), createBlock(unref(Spin), {
            key: 0,
            "is-size-inherit": "",
            loading: ""
          }, {
            default: withCtx(() => [
              renderSlot(_ctx.$slots, "default", {}, void 0, true)
            ]),
            _: 3
          })) : renderSlot(_ctx.$slots, "default", { key: 1 }, void 0, true),
          _ctx.$slots.actions && !hasMeta.value ? (openBlock(), createElementBlock("div", _hoisted_4, [
            createElementVNode("div", _hoisted_5, [
              renderSlot(_ctx.$slots, "actions", {}, void 0, true)
            ])
          ])) : createCommentVNode("", true)
        ], 4)
      ], 2);
    };
  }
});
export {
  _sfc_main as default
};
