import { defineComponent, computed, openBlock, createElementBlock, normalizeClass, unref, renderSlot, createTextVNode, toDisplayString, createCommentVNode, createElementVNode, Fragment, renderList, createVNode, createBlock } from "vue";
import ReuseTd from "./ReuseTd.vue.js";
import ReuseItem from "./ReuseItem.vue.js";
import useContext from "./hooks/useContext.js";
const _hoisted_1 = {
  key: 0,
  class: "yc-descriptions-title"
};
const _hoisted_2 = { class: "yc-descriptions-body" };
const _hoisted_3 = { class: "yc-descriptions-table" };
const _hoisted_4 = { class: "yc-descriptions-row" };
const _hoisted_5 = { class: "yc-descriptions-row" };
const _sfc_main = /* @__PURE__ */ defineComponent({
  ...{
    name: "Descriptions"
  },
  __name: "Descriptions",
  props: {
    data: { default: () => [] },
    column: { default: 3 },
    title: { default: "" },
    layout: { default: "horizontal" },
    align: { default: "left" },
    size: { default: void 0 },
    bordered: { type: Boolean, default: false },
    labelStyle: { default: () => {
      return {};
    } },
    valueStyle: { default: () => {
      return {};
    } },
    tableLayout: { default: "auto" }
  },
  setup(__props) {
    const props = __props;
    const { column, size, data, layout } = useContext().provide(props);
    const renderArr = computed(() => {
      var _a, _b;
      let count = 0;
      const rowArray = [];
      for (let i = 0; i < data.value.length; i++) {
        const newCount = count + (((_b = (_a = data.value) == null ? void 0 : _a[i]) == null ? void 0 : _b.span) ?? 1);
        if (newCount >= column.value) {
          const pre = rowArray.length ? rowArray[rowArray.length - 1][1] : 0;
          rowArray.push([pre, i + 1]);
          count = 0;
        } else {
          count = newCount;
        }
      }
      if (rowArray.length && rowArray[rowArray.length - 1][1] != column.value) {
        rowArray.push([rowArray[rowArray.length - 1][1]]);
      }
      return rowArray.map((v) => data.value.slice(...v)).filter((item) => item.length);
    });
    function getSpan(data2) {
      const _span = data2.span || 1;
      const span = layout.value == "horizontal" ? _span * 2 - 1 : _span;
      const totalSpan = layout.value == "horizontal" ? 2 * column.value : column.value;
      return span >= totalSpan - 1 ? totalSpan - 1 : span;
    }
    const calcSpan = (i, array) => {
      return i == array.length - 1 ? array.reduce((pre, cur, index) => {
        if (index < array.length - 1) {
          return pre + getSpan(cur);
        } else {
          const totalSpan = layout.value == "horizontal" ? 2 * column.value : column.value;
          const span = totalSpan - pre;
          return span <= 1 ? 1 : span;
        }
      }, 0) : getSpan(array[i]);
    };
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", {
        class: normalizeClass([
          "yc-descriptions",
          `yc-descriptions-size-${unref(size)}`,
          `yc-descriptions-layout-${unref(layout)}`,
          {
            "yc-descriptions-bordered": _ctx.bordered,
            "yc-descriptions-table-layout-fixed ": _ctx.tableLayout == "fixed"
          }
        ])
      }, [
        _ctx.$slots.title || _ctx.title ? (openBlock(), createElementBlock("div", _hoisted_1, [
          renderSlot(_ctx.$slots, "title", {}, () => [
            createTextVNode(toDisplayString(_ctx.title), 1)
          ])
        ])) : createCommentVNode("", true),
        createElementVNode("div", _hoisted_2, [
          createElementVNode("table", _hoisted_3, [
            createElementVNode("tbody", null, [
              unref(layout) == "horizontal" ? (openBlock(true), createElementBlock(Fragment, { key: 0 }, renderList(renderArr.value, (v, i) => {
                return openBlock(), createElementBlock("tr", {
                  key: i,
                  class: "yc-descriptions-row"
                }, [
                  (openBlock(true), createElementBlock(Fragment, null, renderList(v, (item, i1) => {
                    return openBlock(), createElementBlock(Fragment, { key: i1 }, [
                      createVNode(ReuseTd, {
                        type: "label",
                        data: item,
                        index: v.length + i1
                      }, null, 8, ["data", "index"]),
                      createVNode(ReuseTd, {
                        type: "value",
                        data: item,
                        index: v.length + i1,
                        colspan: calcSpan(i1, v)
                      }, null, 8, ["data", "index", "colspan"])
                    ], 64);
                  }), 128))
                ]);
              }), 128)) : unref(layout) == "vertical" ? (openBlock(true), createElementBlock(Fragment, { key: 1 }, renderList(renderArr.value, (v, i) => {
                return openBlock(), createElementBlock(Fragment, { key: i }, [
                  createElementVNode("tr", _hoisted_4, [
                    (openBlock(true), createElementBlock(Fragment, null, renderList(v, (item, i1) => {
                      return openBlock(), createBlock(ReuseTd, {
                        key: i1,
                        type: "label",
                        data: item,
                        index: v.length + i1,
                        colspan: calcSpan(i1, v)
                      }, null, 8, ["data", "index", "colspan"]);
                    }), 128))
                  ]),
                  createElementVNode("tr", _hoisted_5, [
                    (openBlock(true), createElementBlock(Fragment, null, renderList(v, (item, i1) => {
                      return openBlock(), createBlock(ReuseTd, {
                        key: i1,
                        type: "value",
                        data: item,
                        index: v.length + i1,
                        colspan: calcSpan(i1, v)
                      }, null, 8, ["data", "index", "colspan"]);
                    }), 128))
                  ])
                ], 64);
              }), 128)) : (openBlock(true), createElementBlock(Fragment, { key: 2 }, renderList(renderArr.value, (v, i) => {
                return openBlock(), createElementBlock("tr", {
                  key: i,
                  class: "yc-descriptions-row"
                }, [
                  (openBlock(true), createElementBlock(Fragment, null, renderList(v, (item, i1) => {
                    return openBlock(), createBlock(ReuseItem, {
                      key: i1,
                      data: item,
                      index: v.length + i1,
                      colspan: calcSpan(i1, v)
                    }, null, 8, ["data", "index", "colspan"]);
                  }), 128))
                ]);
              }), 128))
            ])
          ])
        ])
      ], 2);
    };
  }
});
export {
  _sfc_main as default
};
