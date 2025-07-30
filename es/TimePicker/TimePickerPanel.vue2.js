import { defineComponent, ref, computed, openBlock, createElementBlock, createElementVNode, Fragment, renderList, unref, createVNode, withCtx, withDirectives, normalizeClass, toDisplayString, vShow, renderSlot, createCommentVNode, createTextVNode } from "vue";
import Tween from "../node_modules/b-tween/dist/b-tween.es.js";
import dayjs from "../node_modules/dayjs/dayjs.min.js";
import "../node_modules/tinycolor2/esm/tinycolor.js";
import "../_shared/utils/dom.js";
import { sleep } from "../_shared/utils/fn.js";
import { isUndefined, isArray } from "../_shared/utils/is.js";
import "../_shared/utils/time.js";
import "../Empty/index.js";
import "../_shared/icons/_Icon.vue.js";
import useContext from "./hooks/useContext.js";
import Button from "../Button/index.js";
import Scrollbar from "../Scrollbar/index.js";
const _hoisted_1 = { class: "yc-timepicker-container" };
const _hoisted_2 = { class: "yc-timepicker" };
const _hoisted_3 = ["onClick"];
const _hoisted_4 = { class: "yc-timepicker-cell-inner" };
const _hoisted_5 = {
  key: 0,
  class: "yc-timepicker-footer-extra-wrapper"
};
const _hoisted_6 = {
  key: 1,
  class: "yc-timepicker-footer-btn-wrapper"
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "TimePickerPanel",
  setup(__props, { expose: __expose }) {
    const {
      timeColumn,
      timeColumnCells,
      curValue,
      format,
      computedValue,
      computedVisible,
      disableConfirm,
      hideDisabledOptions,
      curIndex,
      inputRefs,
      disabledHours,
      disabledMinutes,
      disabledSeconds
    } = useContext().inject();
    const scrollRefs = ref([]);
    const disabled = computed(() => {
      return !curValue.value.length || curValue.value.some((val) => !`${val}`);
    });
    const disabledTime = (value, unit) => {
      var _a, _b, _c;
      if (unit == "hour") {
        return (_a = disabledHours == null ? void 0 : disabledHours()) == null ? void 0 : _a.includes(value);
      } else if (unit == "minute") {
        return (_b = disabledMinutes == null ? void 0 : disabledMinutes(...curValue.value)) == null ? void 0 : _b.includes(value);
      } else {
        return (_c = disabledSeconds == null ? void 0 : disabledSeconds(...curValue.value)) == null ? void 0 : _c.includes(value);
      }
    };
    const handleClick = (val, i, target) => {
      curValue.value[i] = val;
      timeColumn.value.forEach((_, i1) => {
        curValue.value[i1] = isUndefined(curValue.value[i1]) ? 0 : curValue.value[i1];
      });
      const scrollContainer = scrollRefs.value[i].getScrollRef();
      new Tween({
        from: { scroll: scrollContainer.scrollTop },
        to: { scroll: target.offsetTop },
        duration: 300,
        easing: "quadOut",
        onUpdate: (current) => {
          scrollContainer.scrollTo({
            top: current.scroll,
            behavior: "instant"
          });
        }
      }).start();
      if (!disableConfirm.value) {
        return;
      }
      handleConfirm();
    };
    const hanldeJump = (timeMap) => {
      const cells = scrollRefs.value.map((el) => {
        return el.getScrollRef().querySelectorAll(".yc-timepicker-cell");
      });
      timeColumn.value.map((v, i) => {
        const time = timeMap[v];
        handleClick(time, i, Array.from(cells[i])[time]);
      });
    };
    const handleConfirm = () => {
      var _a;
      let date = dayjs();
      timeColumn.value.forEach((v, i) => {
        date = date.set(v, curValue.value[i]);
      });
      const formatValue = date.format(format.value);
      if (!isArray(computedValue.value)) {
        computedVisible.value = false;
        computedValue.value = formatValue;
      } else {
        computedValue.value[curIndex.value] = formatValue;
        if (disableConfirm.value) {
          return;
        }
        if (curIndex.value || computedValue.value[curIndex.value + 1]) {
          return computedVisible.value = false;
        }
        curIndex.value++;
        (_a = inputRefs.value[curIndex.value]) == null ? void 0 : _a.focus();
        curValue.value = [];
      }
    };
    __expose({
      async scroll(value) {
        if (!computedVisible.value || !value)
          return;
        await sleep(0);
        const date = dayjs(value, format.value);
        const timeMap = {
          hour: date.hour(),
          minute: date.minute(),
          second: date.second()
        };
        curValue.value = timeColumn.value.map((v) => timeMap[v]);
        hanldeJump(timeMap);
      }
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1, [
        createElementVNode("div", _hoisted_2, [
          (openBlock(true), createElementBlock(Fragment, null, renderList(unref(timeColumnCells), (column, i) => {
            return openBlock(), createElementBlock("div", {
              key: i,
              class: "yc-timepicker-column"
            }, [
              createVNode(unref(Scrollbar), {
                "outer-style": {
                  height: "100%"
                },
                style: {
                  height: "100%",
                  overflow: "auto"
                },
                ref_for: true,
                ref: (el) => scrollRefs.value[i] = el
              }, {
                default: withCtx(() => [
                  createElementVNode("ul", null, [
                    (openBlock(true), createElementBlock(Fragment, null, renderList(column.cells, (cell) => {
                      return withDirectives((openBlock(), createElementBlock("li", {
                        key: cell.value,
                        class: normalizeClass([
                          "yc-timepicker-cell",
                          {
                            "yc-timepicker-cell-selected": cell.value == unref(curValue)[i],
                            "yc-timepicker-cell-disabled": disabledTime(
                              cell.value,
                              column.unit
                            )
                          }
                        ]),
                        onClick: ($event) => !disabledTime(cell.value, column.unit) && handleClick(cell.value, i, $event.target)
                      }, [
                        createElementVNode("div", _hoisted_4, toDisplayString(cell.label), 1)
                      ], 10, _hoisted_3)), [
                        [
                          vShow,
                          !unref(hideDisabledOptions) || !disabledTime(cell.value, column.unit)
                        ]
                      ]);
                    }), 128))
                  ])
                ]),
                _: 2
              }, 1536)
            ]);
          }), 128))
        ]),
        _ctx.$slots.extra ? (openBlock(), createElementBlock("div", _hoisted_5, [
          renderSlot(_ctx.$slots, "extra", {}, void 0, true)
        ])) : createCommentVNode("", true),
        !unref(disableConfirm) ? (openBlock(), createElementBlock("div", _hoisted_6, [
          createVNode(unref(Button), {
            size: "mini",
            onClick: _cache[0] || (_cache[0] = () => {
              const date = /* @__PURE__ */ new Date();
              hanldeJump({
                hour: date.getHours(),
                minute: date.getMinutes(),
                second: date.getSeconds()
              });
            })
          }, {
            default: withCtx(() => _cache[1] || (_cache[1] = [
              createTextVNode("此刻")
            ])),
            _: 1
          }),
          createVNode(unref(Button), {
            type: "primary",
            size: "mini",
            disabled: disabled.value,
            onClick: handleConfirm
          }, {
            default: withCtx(() => _cache[2] || (_cache[2] = [
              createTextVNode(" 确定 ")
            ])),
            _: 1
          }, 8, ["disabled"])
        ])) : createCommentVNode("", true)
      ]);
    };
  }
});
export {
  _sfc_main as default
};
