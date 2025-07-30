import { defineComponent, ref, watch, unref, openBlock, createElementBlock, normalizeClass, renderSlot, createTextVNode, toDisplayString, createCommentVNode, createElementVNode, createVNode, withCtx, Fragment, renderList, createBlock, isRef, mergeProps } from "vue";
import "../node_modules/tinycolor2/esm/tinycolor.js";
import "../_shared/utils/dom.js";
import { sleep } from "../_shared/utils/fn.js";
import { isNumber } from "../_shared/utils/is.js";
import "../_shared/utils/time.js";
import "../Empty/index.js";
import "../_shared/icons/_Icon.vue.js";
import useContext from "./hooks/useContext.js";
import PaginationItem from "./PaginationItem.vue.js";
import Select from "../Select/index.js";
import InputNumber from "../InputNumber/index.js";
const _hoisted_1 = {
  key: 0,
  class: "yc-pagination-total"
};
const _hoisted_2 = {
  key: 1,
  class: "yc-pagination-jumper yc-pagination-jumper-simple"
};
const _hoisted_3 = { class: "yc-pagination-jumper-total-page" };
const _hoisted_4 = {
  key: 1,
  class: "yc-pagination-options"
};
const _hoisted_5 = {
  key: 2,
  class: "yc-pagination-jumper"
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  ...{
    name: "Pagination"
  },
  __name: "Pagination",
  props: {
    total: {},
    current: { default: void 0 },
    defaultCurrent: { default: 1 },
    pageSize: { default: void 0 },
    defaultPageSize: { default: 10 },
    disabled: { type: Boolean, default: false },
    hideOnSinglePage: { type: Boolean, default: false },
    simple: { type: Boolean, default: false },
    showTotal: { type: Boolean, default: false },
    showMore: { type: Boolean, default: false },
    showJumper: { type: Boolean, default: false },
    showPageSize: { type: Boolean, default: false },
    pageSizeOptions: { default: () => [10, 20, 30, 40, 50] },
    pageSizeProps: { default: () => {
      return {};
    } },
    size: { default: void 0 },
    pageItemStyle: { default: () => {
      return {};
    } },
    activePageItemStyle: { default: () => {
      return {};
    } },
    baseSize: { default: 6 },
    bufferSize: { default: 2 },
    autoAdjust: { type: Boolean, default: true }
  },
  emits: ["update:current", "update:pageSize", "change", "page-size-change"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emits = __emit;
    const {
      computedCurrent,
      pages,
      pagesArray,
      computedPageSize,
      size,
      total,
      sizeOptions
    } = useContext().provide(props, emits);
    const tempCurrent = ref(computedCurrent.value);
    watch(
      () => computedCurrent.value,
      () => {
        if (tempCurrent.value == computedCurrent.value)
          return;
        tempCurrent.value = computedCurrent.value;
      }
    );
    const handleBlur = async (e) => {
      if (`${tempCurrent.value}`.length) {
        computedCurrent.value = tempCurrent.value;
      }
      await sleep(0);
      const target = e.target;
      if (+target.value != computedCurrent.value) {
        target.value = computedCurrent.value;
      }
    };
    return (_ctx, _cache) => {
      return !_ctx.hideOnSinglePage || _ctx.hideOnSinglePage && unref(pages) <= 1 ? (openBlock(), createElementBlock("div", {
        key: 0,
        class: normalizeClass(["yc-pagination", `yc-pagination-size-${unref(size)}`])
      }, [
        _ctx.showTotal ? (openBlock(), createElementBlock("span", _hoisted_1, [
          renderSlot(_ctx.$slots, "total", { total: unref(total) }, () => [
            createTextVNode(" 共 " + toDisplayString(unref(total)) + " 条 ", 1)
          ], true)
        ])) : createCommentVNode("", true),
        createElementVNode("ul", {
          class: normalizeClass([_ctx.simple ? "yc-pagination-simple" : "yc-pagination-list"])
        }, [
          createVNode(PaginationItem, {
            type: "pre",
            class: "yc-pagination-item-previous"
          }, {
            default: withCtx(() => [
              _ctx.$slots["page-item-step"] ? renderSlot(_ctx.$slots, "page-item-step", {
                key: 0,
                type: "previous"
              }, void 0, true) : createCommentVNode("", true)
            ]),
            _: 3
          }),
          !_ctx.simple ? (openBlock(true), createElementBlock(Fragment, { key: 0 }, renderList(unref(pagesArray), (i) => {
            return openBlock(), createBlock(PaginationItem, {
              type: unref(isNumber)(i) ? "item" : i,
              key: i,
              page: unref(isNumber)(i) ? i : -1
            }, {
              default: withCtx(() => [
                unref(isNumber)(i) ? renderSlot(_ctx.$slots, "page-item", {
                  key: 0,
                  page: i
                }, () => [
                  createTextVNode(toDisplayString(i), 1)
                ], true) : _ctx.$slots["page-item-ellipsis"] ? renderSlot(_ctx.$slots, "page-item-ellipsis", { key: 1 }, void 0, true) : createCommentVNode("", true)
              ]),
              _: 2
            }, 1032, ["type", "page"]);
          }), 128)) : (openBlock(), createElementBlock("span", _hoisted_2, [
            createVNode(unref(InputNumber), {
              modelValue: unref(computedCurrent),
              "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => isRef(computedCurrent) ? computedCurrent.value = $event : null),
              "hide-button": "",
              size: unref(size),
              disabled: _ctx.disabled
            }, null, 8, ["modelValue", "size", "disabled"]),
            _cache[4] || (_cache[4] = createElementVNode("span", { class: "yc-pagination-jumper-separator" }, "/", -1)),
            createElementVNode("span", _hoisted_3, toDisplayString(unref(pages)), 1)
          ])),
          _ctx.showMore && !_ctx.simple ? (openBlock(), createBlock(PaginationItem, {
            key: 2,
            type: "more-right",
            class: "'yc-pagination-item-ellipsis'"
          })) : createCommentVNode("", true),
          createVNode(PaginationItem, {
            type: "next",
            class: "yc-pagination-item-next"
          }, {
            default: withCtx(() => [
              _ctx.$slots["page-item-step"] ? renderSlot(_ctx.$slots, "page-item-step", {
                key: 0,
                type: "next"
              }, void 0, true) : createCommentVNode("", true)
            ]),
            _: 3
          })
        ], 2),
        _ctx.showPageSize ? (openBlock(), createElementBlock("span", _hoisted_4, [
          createVNode(unref(Select), mergeProps({
            modelValue: unref(computedPageSize),
            "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => isRef(computedPageSize) ? computedPageSize.value = $event : null),
            options: unref(sizeOptions),
            size: unref(size)
          }, _ctx.pageSizeProps, { disabled: _ctx.disabled }), null, 16, ["modelValue", "options", "size", "disabled"])
        ])) : createCommentVNode("", true),
        _ctx.showJumper ? (openBlock(), createElementBlock("span", _hoisted_5, [
          _cache[5] || (_cache[5] = createElementVNode("span", { class: "yc-pagination-jumper-text-goto" }, " 前往 ", -1)),
          createVNode(unref(InputNumber), {
            modelValue: tempCurrent.value,
            "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => tempCurrent.value = $event),
            "hide-button": "",
            size: unref(size),
            disabled: _ctx.disabled,
            min: 1,
            max: unref(pages),
            onFocus: _cache[3] || (_cache[3] = ($event) => tempCurrent.value = unref(computedCurrent)),
            onBlur: handleBlur
          }, null, 8, ["modelValue", "size", "disabled", "max"])
        ])) : createCommentVNode("", true)
      ], 2)) : createCommentVNode("", true);
    };
  }
});
export {
  _sfc_main as default
};
