import { defineComponent, toRefs, computed, watch, openBlock, createElementBlock, normalizeClass, unref, createElementVNode, Fragment, renderList, toDisplayString, renderSlot } from "vue";
import dayjs from "../node_modules/dayjs/dayjs.min.js";
import "../node_modules/tinycolor2/esm/tinycolor.js";
import "../_shared/utils/dom.js";
import { generateMonthCalendar } from "../_shared/utils/time.js";
import "../Empty/index.js";
import "../_shared/icons/_Icon.vue.js";
import useControlValue from "../_shared/utils/control.js";
const _hoisted_1 = { class: "yc-calendar-week-list" };
const _hoisted_2 = { class: "yc-calendar-month-cell-body" };
const _hoisted_3 = ["onClick"];
const _hoisted_4 = { class: "yc-calendar-date" };
const _hoisted_5 = { class: "yc-calendar-date-value" };
const _hoisted_6 = { class: "yc-calendar-date-circle" };
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "CalendarMonth",
  props: {
    computedValue: {},
    recordDate: {},
    calendar: { default: void 0 },
    small: { type: Boolean, default: false }
  },
  emits: ["cell-click"],
  setup(__props) {
    const props = __props;
    const { computedValue, calendar: _calendar, small, recordDate } = toRefs(props);
    const weekList = computed(() => {
      return small.value ? ["日", "一", "二", "三", "四", "五", "六"] : ["周日", "周一", "周二", "周三", "周四", "周五", "周六"];
    });
    const calendar = useControlValue(_calendar, []);
    watch(
      () => recordDate.value.month,
      () => {
        if (_calendar.value)
          return;
        const { year, month } = recordDate.value;
        calendar.value = generateMonthCalendar(year, month);
      },
      {
        immediate: true
      }
    );
    const isToday = (col) => {
      const { day, year, month } = col;
      const cur = dayjs();
      const _day = cur.date();
      const _month = cur.month();
      const _year = cur.year();
      return day == _day && month == _month && year == _year;
    };
    const isSelected = (col) => {
      const year = computedValue.value.getFullYear();
      const month = computedValue.value.getMonth();
      const day = computedValue.value.getDate();
      const { day: _day, year: _year, month: _month, isCurrentMonth } = col;
      const isSameDate = day == _day && month == _month && year == _year;
      return small.value ? isSameDate && isCurrentMonth : isSameDate;
    };
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", {
        class: normalizeClass([
          "yc-calendar-month",
          {
            "yc-calendar-month-small": unref(small)
          }
        ])
      }, [
        createElementVNode("div", _hoisted_1, [
          (openBlock(true), createElementBlock(Fragment, null, renderList(weekList.value, (item) => {
            return openBlock(), createElementBlock("div", {
              class: "yc-calendar-week-list-item",
              key: item
            }, toDisplayString(item), 1);
          }), 128))
        ]),
        createElementVNode("div", _hoisted_2, [
          (openBlock(true), createElementBlock(Fragment, null, renderList(unref(calendar), (row, i) => {
            return openBlock(), createElementBlock("div", {
              key: i,
              class: "yc-calendar-month-row"
            }, [
              (openBlock(true), createElementBlock(Fragment, null, renderList(row, (col, i1) => {
                return openBlock(), createElementBlock("div", {
                  key: i1,
                  class: normalizeClass([
                    "yc-calendar-cell",
                    {
                      "yc-calendar-cell-today": isToday(col),
                      "yc-calendar-cell-selected": isSelected(col),
                      "yc-calendar-cell-in-view": col.isCurrentMonth
                    }
                  ]),
                  onClick: ($event) => _ctx.$emit("cell-click", col)
                }, [
                  renderSlot(_ctx.$slots, "default", {
                    year: col.year,
                    month: col.month,
                    day: col.day
                  }, () => [
                    createElementVNode("div", _hoisted_4, [
                      createElementVNode("div", _hoisted_5, [
                        createElementVNode("div", _hoisted_6, toDisplayString(col.day), 1)
                      ])
                    ])
                  ], true)
                ], 10, _hoisted_3);
              }), 128))
            ]);
          }), 128))
        ])
      ], 2);
    };
  }
});
export {
  _sfc_main as default
};
