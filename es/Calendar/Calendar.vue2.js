import { defineComponent, toRefs, ref, watch, computed, openBlock, createElementBlock, normalizeClass, unref, createElementVNode, createVNode, withCtx, renderSlot, createTextVNode, toDisplayString, isRef, createBlock, createSlots, normalizeProps, guardReactiveProps } from "vue";
import dayjs from "../node_modules/dayjs/dayjs.min.js";
import "../node_modules/tinycolor2/esm/tinycolor.js";
import "../_shared/utils/dom.js";
import "../_shared/utils/time.js";
import "../Empty/index.js";
import "../_shared/icons/_Icon.vue.js";
import _sfc_main$1 from "../_shared/icons/IconArrowRight.vue.js";
import useControlValue from "../_shared/utils/control.js";
import IconButton from "../_shared/components/IconButton.vue.js";
import "../_shared/components/ExpandTransition.vue2.js";
import Button from "../Button/index.js";
import "../Radio/index.js";
import MonthCalendar from "./CalendarMonth.vue.js";
import YearCalendar from "./CalendarYear.vue.js";
import _sfc_main$2 from "../Radio/RadioGroup.vue.js";
import "../Radio/RadioGroup.vue2.js";
const _hoisted_1 = { class: "yc-calendar-header" };
const _hoisted_2 = { class: "yc-calendar-header-left" };
const _hoisted_3 = { class: "yc-calendar-header-value" };
const _hoisted_4 = { class: "yc-calendar-header-right" };
const _hoisted_5 = { class: "yc-calendar-body" };
const _sfc_main = /* @__PURE__ */ defineComponent({
  ...{
    name: "Calendar"
  },
  __name: "Calendar",
  props: {
    modelValue: { default: void 0 },
    defaultValue: { default: () => /* @__PURE__ */ new Date() },
    mode: { default: void 0 },
    defaultMode: { default: "month" },
    modes: { default: () => ["month", "year"] }
  },
  emits: ["update:modelValue", "update:mode", "change", "panel-change"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emits = __emit;
    const {
      modelValue,
      defaultValue,
      mode,
      defaultMode,
      modes: _modes
    } = toRefs(props);
    const computedValue = useControlValue(
      modelValue,
      defaultValue.value,
      (val) => {
        emits("update:modelValue", val);
        emits("change", val);
      }
    );
    const recordDate = ref({});
    watch(
      () => computedValue.value,
      (val) => {
        const date = val ? dayjs(val) : dayjs();
        recordDate.value = {
          year: date.year(),
          month: date.month() + 1,
          day: date.date()
        };
      },
      {
        immediate: true
      }
    );
    const computedMode = useControlValue(
      mode,
      defaultMode.value,
      (val) => {
        emits("update:mode", val);
        emits("panel-change", computedValue.value);
      }
    );
    const modes = computed(() => {
      const map = {
        month: "月",
        year: "年"
      };
      return _modes.value.map((item) => {
        return {
          label: map[item],
          value: item
        };
      });
    });
    const handleClick = (col) => {
      computedValue.value = new Date(col.fullDate);
    };
    const handleDateChange = (type) => {
      if (type == "today") {
        computedValue.value = /* @__PURE__ */ new Date();
        return;
      }
      const { year, month } = recordDate.value;
      if (type == "next") {
        const tempMonth = month + 1 > 12 ? 1 : month + 1;
        const tempYear = month + 1 > 12 || computedMode.value == "year" ? 1 : 0;
        recordDate.value.year = year + tempYear;
        if (computedMode.value == "year")
          return;
        recordDate.value.month = tempMonth;
      } else {
        const tempMonth = month - 1 < 1 ? 12 : month - 1;
        const tempYear = month - 1 < 1 || computedMode.value == "year" ? -1 : 0;
        recordDate.value.year = year + tempYear;
        if (computedMode.value == "year")
          return;
        recordDate.value.month = tempMonth;
      }
    };
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", {
        class: normalizeClass(["yc-calendar", `yc-calendar-mode-${unref(computedMode)}`])
      }, [
        createElementVNode("div", _hoisted_1, [
          createElementVNode("div", _hoisted_2, [
            createVNode(unref(IconButton), {
              class: "yc-calendar-header-icon",
              role: "button",
              tabindex: "0",
              size: 28,
              "hover-size": 28,
              onClick: _cache[0] || (_cache[0] = ($event) => handleDateChange("pre"))
            }, {
              default: withCtx(() => [
                createVNode(unref(_sfc_main$1), { rotate: 180 })
              ]),
              _: 1
            }),
            createElementVNode("div", _hoisted_3, [
              renderSlot(_ctx.$slots, "header", {
                year: recordDate.value.year,
                month: recordDate.value.month
              }, () => [
                createTextVNode(toDisplayString(recordDate.value.year) + " 年 " + toDisplayString(recordDate.value.month) + " 月 ", 1)
              ], true)
            ]),
            createVNode(unref(IconButton), {
              role: "button",
              tabindex: "0",
              class: "yc-calendar-header-icon",
              size: 28,
              "hover-size": 28,
              onClick: _cache[1] || (_cache[1] = ($event) => handleDateChange("next"))
            }, {
              default: withCtx(() => [
                createVNode(unref(_sfc_main$1))
              ]),
              _: 1
            }),
            createVNode(unref(Button), {
              onClick: _cache[2] || (_cache[2] = ($event) => handleDateChange("today")),
              size: "small"
            }, {
              default: withCtx(() => _cache[4] || (_cache[4] = [
                createTextVNode(" 今天 ")
              ])),
              _: 1
            })
          ]),
          createElementVNode("div", _hoisted_4, [
            createVNode(unref(_sfc_main$2), {
              modelValue: unref(computedMode),
              "onUpdate:modelValue": _cache[3] || (_cache[3] = ($event) => isRef(computedMode) ? computedMode.value = $event : null),
              options: modes.value,
              type: "button",
              size: "small"
            }, null, 8, ["modelValue", "options"])
          ])
        ]),
        createElementVNode("div", _hoisted_5, [
          unref(computedMode) == "month" ? (openBlock(), createBlock(MonthCalendar, {
            key: 0,
            "computed-value": unref(computedValue),
            recordDate: recordDate.value,
            onCellClick: handleClick
          }, createSlots({ _: 2 }, [
            _ctx.$slots.default ? {
              name: "default",
              fn: withCtx((scope) => [
                renderSlot(_ctx.$slots, "default", normalizeProps(guardReactiveProps(scope)), void 0, true)
              ]),
              key: "0"
            } : void 0
          ]), 1032, ["computed-value", "recordDate"])) : (openBlock(), createBlock(YearCalendar, {
            key: 1,
            "computed-value": unref(computedValue),
            "record-date": recordDate.value,
            onCellClick: handleClick
          }, createSlots({ _: 2 }, [
            _ctx.$slots.default ? {
              name: "default",
              fn: withCtx((scope) => [
                renderSlot(_ctx.$slots, "default", normalizeProps(guardReactiveProps(scope)), void 0, true)
              ]),
              key: "0"
            } : void 0
          ]), 1032, ["computed-value", "record-date"]))
        ])
      ], 2);
    };
  }
});
export {
  _sfc_main as default
};
