import { defineComponent, toRefs, ref, computed, openBlock, createElementBlock, createBlock, unref, createSlots, withCtx, resolveDynamicComponent, Fragment, createCommentVNode } from "vue";
import "../node_modules/tinycolor2/esm/tinycolor.js";
import "../_shared/utils/dom.js";
import "../_shared/utils/time.js";
import { unrefElement } from "../_shared/utils/vue-utils.js";
import { getGlobalConfig } from "../_shared/utils/global-config.js";
import useContext from "./hooks/useContext.js";
import useScrollReach from "../List/hooks/useScrollReach.js";
import SelectVirtualList from "./SelectVirtualList.vue.js";
import SelectRealList from "./SelectRealList.vue.js";
import Spin from "../Spin/index.js";
const _hoisted_1 = { class: "yc-select-dropdown" };
const _hoisted_2 = {
  key: 0,
  class: "yc-select-dropdown-header"
};
const _hoisted_3 = {
  key: 4,
  class: "yc-select-dropdown-footer"
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "SelectView",
  props: {
    loading: { type: Boolean },
    scrollbar: { type: Boolean },
    showFooterOnEmpty: { type: Boolean },
    showHeaderOnEmpty: { type: Boolean },
    virtualListProps: {}
  },
  setup(__props) {
    const props = __props;
    const { virtualListProps } = toRefs(props);
    const { slots, options, isEmpty, emits } = useContext().inject();
    const { renderEmpty } = getGlobalConfig();
    const realListRef = ref();
    const virtualListRef = ref();
    const scrollRef = computed(() => {
      var _a;
      return isVirtualList.value ? unrefElement(virtualListRef) : (_a = realListRef.value) == null ? void 0 : _a.getScrollRef();
    });
    useScrollReach({
      scrollRef,
      onScroll: (e) => {
        emits("dropdown-scroll", e);
      },
      onReachBottom: (e) => {
        emits("dropdown-reach-bottom", e);
      }
    });
    const isVirtualList = computed(() => {
      if (!virtualListProps.value) {
        return false;
      }
      return virtualListProps.value.itemHeight && (!virtualListProps.value.threshold || virtualListProps.value.threshold > options.value.length);
    });
    const renderSlots = (name) => {
      return slots[name];
    };
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1, [
        _ctx.loading ? (openBlock(), createBlock(unref(Spin), {
          key: 0,
          loading: _ctx.loading,
          class: "yc-select-dropdown-loading"
        }, createSlots({ _: 2 }, [
          _ctx.$slots["loading-icon"] ? {
            name: "icon",
            fn: withCtx(() => [
              (openBlock(), createBlock(resolveDynamicComponent(renderSlots("loading-icon"))))
            ]),
            key: "0"
          } : void 0
        ]), 1032, ["loading"])) : (openBlock(), createElementBlock(Fragment, { key: 1 }, [
          unref(slots).header && (_ctx.showHeaderOnEmpty || !unref(isEmpty)) ? (openBlock(), createElementBlock("div", _hoisted_2, [
            (openBlock(), createBlock(resolveDynamicComponent(renderSlots("header"))))
          ])) : createCommentVNode("", true),
          isVirtualList.value ? (openBlock(), createBlock(SelectVirtualList, {
            key: 1,
            "virtual-list-props": unref(virtualListProps),
            ref_key: "virtualListRef",
            ref: virtualListRef
          }, null, 8, ["virtual-list-props"])) : (openBlock(), createBlock(SelectRealList, {
            key: 2,
            scrollbar: _ctx.scrollbar,
            ref_key: "realListRef",
            ref: realListRef
          }, null, 8, ["scrollbar"])),
          unref(isEmpty) ? (openBlock(), createBlock(resolveDynamicComponent(unref(slots).empty || unref(renderEmpty)("Select")), { key: 3 })) : createCommentVNode("", true),
          unref(slots).footer && (_ctx.showFooterOnEmpty || !unref(isEmpty)) ? (openBlock(), createElementBlock("div", _hoisted_3, [
            (openBlock(), createBlock(resolveDynamicComponent(renderSlots("footer"))))
          ])) : createCommentVNode("", true)
        ], 64))
      ]);
    };
  }
});
export {
  _sfc_main as default
};
