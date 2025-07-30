import { defineComponent, toRefs, ref, computed, openBlock, createElementBlock, normalizeClass, unref, createVNode, withCtx, normalizeStyle, createElementVNode, renderSlot, createCommentVNode, createBlock, createSlots, normalizeProps, guardReactiveProps, mergeProps, Fragment, renderList, resolveDynamicComponent, isRef } from "vue";
import "../node_modules/tinycolor2/esm/tinycolor.js";
import "../_shared/utils/dom.js";
import { valueToPx } from "../_shared/utils/fn.js";
import "../_shared/utils/time.js";
import { unrefElement } from "../_shared/utils/vue-utils.js";
import { getGlobalConfig } from "../_shared/utils/global-config.js";
import useControlValue from "../_shared/utils/control.js";
import useScrollReach from "./hooks/useScrollReach.js";
import Spin from "../Spin/index.js";
import Scrollbar from "../Scrollbar/index.js";
import Pagination from "../Pagination/index.js";
import Grid from "../Grid/index.js";
import _sfc_main$1 from "./ListVirtual.vue.js";
import "./ListVirtual.vue2.js";
import ListItem from "./ListItem.vue.js";
import _sfc_main$2 from "../Grid/GridItem.vue.js";
const _hoisted_1 = { class: "yc-list-content-wrapper" };
const _hoisted_2 = {
  key: 0,
  class: "yc-list-header"
};
const _hoisted_3 = {
  key: 2,
  role: "list",
  class: "yc-list-content"
};
const _hoisted_4 = {
  key: 4,
  class: "yc-list-footer"
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  ...{
    name: "List"
  },
  __name: "List",
  props: {
    data: { default: () => [] },
    size: { default: void 0 },
    bordered: { type: Boolean, default: true },
    split: { type: Boolean, default: true },
    loading: { type: Boolean, default: false },
    hoverable: { type: Boolean, default: false },
    paginationProps: { default: void 0 },
    gridProps: { default: void 0 },
    maxHeight: { default: void 0 },
    bottomOffset: { default: 0 },
    virtualListProps: { default: void 0 },
    scrollbar: { type: Boolean, default: true }
  },
  emits: ["scroll", "reach-bottom", "page-change", "page-size-change"],
  setup(__props, { emit: __emit }) {
    var _a, _b;
    const props = __props;
    const emits = __emit;
    const { data, paginationProps, virtualListProps, gridProps, bottomOffset } = toRefs(props);
    const { size, renderEmpty } = getGlobalConfig(props);
    const isBottomReached = ref(false);
    const realListRef = ref();
    const virtualListRef = ref();
    const isVirtualList = computed(() => {
      if (!virtualListProps.value || paginationProps.value || gridProps.value) {
        return false;
      }
      return virtualListProps.value.itemHeight && (!virtualListProps.value.threshold || virtualListProps.value.threshold > data.value.length);
    });
    const scrollRef = computed(
      () => {
        var _a2;
        return isVirtualList.value ? unrefElement(virtualListRef) : (_a2 = realListRef.value) == null ? void 0 : _a2.getScrollRef();
      }
    );
    useScrollReach({
      scrollRef,
      offset: {
        bottom: bottomOffset.value
      },
      onScroll: (e, arriveStauts) => {
        isBottomReached.value = arriveStauts.bottom;
        emits("scroll", e);
      },
      onReachBottom: (e) => {
        emits("reach-bottom", e);
      }
    });
    const current = computed(() => {
      var _a2;
      return (_a2 = paginationProps.value) == null ? void 0 : _a2.current;
    });
    const computedCurrent = useControlValue(
      current,
      ((_a = paginationProps.value) == null ? void 0 : _a.current) || 1,
      (val) => {
        emits("page-change", val);
      }
    );
    const pageSize = computed(() => {
      var _a2;
      return (_a2 = paginationProps.value) == null ? void 0 : _a2.pageSize;
    });
    const computedPageSize = useControlValue(
      pageSize,
      ((_b = paginationProps.value) == null ? void 0 : _b.defaultPageSize) || 10,
      (val) => {
        computedCurrent.value = 1;
        emits("page-change", val);
      }
    );
    const curList = computed(() => {
      if (!paginationProps.value)
        return data.value;
      return data.value.slice(
        (computedCurrent.value - 1) * computedPageSize.value,
        computedCurrent.value * computedPageSize.value
      );
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", {
        class: normalizeClass([
          "yc-list-wrapper",
          `yc-list-size-${unref(size)}`,
          {
            "yc-list-bordered": _ctx.bordered,
            "yc-list-hoverable": _ctx.hoverable,
            "yc-list-split": _ctx.split
          }
        ])
      }, [
        createVNode(unref(Spin), {
          loading: _ctx.loading,
          class: "yc-list-spin"
        }, {
          default: withCtx(() => {
            var _a2;
            return [
              createVNode(unref(Scrollbar), {
                scrollbar: _ctx.scrollbar,
                style: normalizeStyle({
                  maxHeight: isVirtualList.value ? "" : unref(valueToPx)(_ctx.maxHeight)
                }),
                class: "yc-list",
                ref_key: "realListRef",
                ref: realListRef
              }, {
                default: withCtx(() => [
                  createElementVNode("div", _hoisted_1, [
                    _ctx.$slots.header ? (openBlock(), createElementBlock("div", _hoisted_2, [
                      renderSlot(_ctx.$slots, "header", {}, void 0, true)
                    ])) : createCommentVNode("", true),
                    isVirtualList.value ? (openBlock(), createBlock(_sfc_main$1, {
                      key: 1,
                      data: unref(data),
                      "virtual-list-props": unref(virtualListProps),
                      style: normalizeStyle({
                        maxHeight: unref(valueToPx)(_ctx.maxHeight)
                      }),
                      ref_key: "virtualListRef",
                      ref: virtualListRef
                    }, createSlots({ _: 2 }, [
                      _ctx.$slots.item ? {
                        name: "item",
                        fn: withCtx((scope) => [
                          renderSlot(_ctx.$slots, "item", normalizeProps(guardReactiveProps(scope)), void 0, true)
                        ]),
                        key: "0"
                      } : void 0
                    ]), 1032, ["data", "virtual-list-props", "style"])) : (openBlock(), createElementBlock("div", _hoisted_3, [
                      renderSlot(_ctx.$slots, "default", {}, void 0, true),
                      unref(gridProps) ? (openBlock(), createBlock(unref(Grid), normalizeProps(mergeProps({ key: 0 }, unref(gridProps))), {
                        default: withCtx(() => [
                          (openBlock(true), createElementBlock(Fragment, null, renderList(curList.value, (item, i) => {
                            return openBlock(), createBlock(unref(_sfc_main$2), { key: i }, {
                              default: withCtx(() => [
                                renderSlot(_ctx.$slots, "item", {
                                  index: i,
                                  item
                                }, void 0, true)
                              ]),
                              _: 2
                            }, 1024);
                          }), 128))
                        ]),
                        _: 3
                      }, 16)) : (openBlock(true), createElementBlock(Fragment, { key: 1 }, renderList(curList.value, (item, i) => {
                        return renderSlot(_ctx.$slots, "item", {
                          key: i,
                          index: i,
                          item
                        }, void 0, true);
                      }), 128))
                    ])),
                    !_ctx.$slots.default && !curList.value.length ? (openBlock(), createBlock(resolveDynamicComponent(_ctx.$slots.empty || unref(renderEmpty)("List")), { key: 3 })) : createCommentVNode("", true),
                    _ctx.$slots.footer ? (openBlock(), createElementBlock("div", _hoisted_4, [
                      renderSlot(_ctx.$slots, "footer", {}, void 0, true)
                    ])) : createCommentVNode("", true),
                    _ctx.$slots["scroll-loading"] && isBottomReached.value ? (openBlock(), createBlock(ListItem, {
                      key: 5,
                      class: "yc-list-scroll-loading"
                    }, {
                      default: withCtx(() => [
                        renderSlot(_ctx.$slots, "scroll-loading", {}, void 0, true)
                      ]),
                      _: 3
                    })) : createCommentVNode("", true)
                  ])
                ]),
                _: 3
              }, 8, ["scrollbar", "style"]),
              unref(paginationProps) ? (openBlock(), createBlock(unref(Pagination), {
                key: 0,
                current: unref(computedCurrent),
                "onUpdate:current": _cache[0] || (_cache[0] = ($event) => isRef(computedCurrent) ? computedCurrent.value = $event : null),
                "page-size": unref(computedPageSize),
                "onUpdate:pageSize": _cache[1] || (_cache[1] = ($event) => isRef(computedPageSize) ? computedPageSize.value = $event : null),
                total: ((_a2 = unref(paginationProps)) == null ? void 0 : _a2.total) || 0
              }, null, 8, ["current", "page-size", "total"])) : createCommentVNode("", true)
            ];
          }),
          _: 3
        }, 8, ["loading"])
      ], 2);
    };
  }
});
export {
  _sfc_main as default
};
