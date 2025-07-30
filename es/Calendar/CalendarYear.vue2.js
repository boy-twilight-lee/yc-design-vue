import { defineComponent, toRefs, ref, watch, openBlock, createElementBlock, Fragment, renderList, createElementVNode, toDisplayString, createVNode, unref, createSlots, withCtx, renderSlot } from "vue";
import "../node_modules/tinycolor2/esm/tinycolor.js";
import "../_shared/utils/dom.js";
import { generateMonthCalendar } from "../_shared/utils/time.js";
import "../Empty/index.js";
import "../_shared/icons/_Icon.vue.js";
import MonthCalendar from "./CalendarMonth.vue.js";
const _hoisted_1 = { class: "yc-calendar-year" };
const _hoisted_2 = { class: "yc-calendar-year-cell-title" };
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "CalendarYear",
  props: {
    computedValue: {},
    recordDate: {}
  },
  emits: ["cell-click"],
  setup(__props) {
    const props = __props;
    const { computedValue, recordDate } = toRefs(props);
    const calendar = ref([]);
    const monthList = [
      "一月",
      "二月",
      "三月",
      "四月",
      "五月",
      "六月",
      "七月",
      "八月",
      "九月",
      "十月",
      "十一月",
      "十二月"
    ];
    watch(
      () => recordDate.value.year,
      () => {
        const { year } = recordDate.value;
        calendar.value = [];
        const row = [];
        for (let i = 1; i <= 12; i++) {
          row.push(generateMonthCalendar(year, i));
          if (row.length == 4) {
            calendar.value.push([...row]);
            row.splice(0);
          }
        }
      },
      {
        immediate: true
      }
    );
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1, [
        (openBlock(true), createElementBlock(Fragment, null, renderList(calendar.value, (row, i) => {
          return openBlock(), createElementBlock("div", {
            key: i,
            class: "yc-calendar-year-row"
          }, [
            (openBlock(true), createElementBlock(Fragment, null, renderList(row, (col, i1) => {
              return openBlock(), createElementBlock("div", {
                key: i1,
                class: "yc-calendar-year-cell"
              }, [
                createElementVNode("div", _hoisted_2, toDisplayString(monthList[i * 4 + i1]), 1),
                createVNode(MonthCalendar, {
                  "computed-value": unref(computedValue),
                  calendar: col,
                  "record-date": unref(recordDate),
                  small: "",
                  class: "yc-calendar-year-cell-body",
                  onCellClick: _cache[0] || (_cache[0] = (v) => _ctx.$emit("cell-click", v))
                }, createSlots({ _: 2 }, [
                  _ctx.$slots.default ? {
                    name: "default",
                    fn: withCtx(({ year, month, day }) => [
                      renderSlot(_ctx.$slots, "default", {
                        year,
                        month,
                        day
                      }, void 0, true)
                    ]),
                    key: "0"
                  } : void 0
                ]), 1032, ["computed-value", "calendar", "record-date"])
              ]);
            }), 128))
          ]);
        }), 128))
      ]);
    };
  }
});
export {
  _sfc_main as default
};
