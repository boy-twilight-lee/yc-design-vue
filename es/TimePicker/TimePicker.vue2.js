import { defineComponent, ref, openBlock, createBlock, unref, mergeProps, withCtx, createVNode, createSlots, renderSlot, createElementVNode, normalizeClass, normalizeStyle, createElementBlock, createCommentVNode, withModifiers, Fragment } from "vue";
import "../node_modules/tinycolor2/esm/tinycolor.js";
import "../_shared/utils/dom.js";
import { isArray } from "../_shared/utils/is.js";
import { isValidTimeRange } from "../_shared/utils/time.js";
import { getGlobalConfig } from "../_shared/utils/global-config.js";
import useContext from "./hooks/useContext.js";
import IconButton from "../_shared/components/IconButton.vue.js";
import "../_shared/components/ExpandTransition.vue.js";
import "../_shared/icons/_Icon.vue.js";
import _sfc_main$1 from "../_shared/icons/IconTime.vue.js";
import Trigger from "../Trigger/index.js";
import TimePickerPanel from "./TimePickerPanel.vue.js";
const _hoisted_1 = {
  key: 0,
  class: "yc-picker-prefix"
};
const _hoisted_2 = ["value", "placeholder", "disabled", "readonly"];
const _hoisted_3 = ["value", "placeholder", "disabled", "readonly"];
const _hoisted_4 = { class: "yc-picker-suffix" };
const _hoisted_5 = { class: "yc-picker-suffix-icon" };
const _sfc_main = /* @__PURE__ */ defineComponent({
  ...{
    name: "TimePicker",
    inheritAttrs: false
  },
  __name: "TimePicker",
  props: {
    type: { default: "time" },
    modelValue: { default: void 0 },
    defaultValue: { default: (props) => {
      return props.type == "time-range" ? [] : "";
    } },
    disabled: { type: Boolean, default: false },
    allowClear: { type: Boolean, default: true },
    readonly: { type: Boolean, default: false },
    error: { type: Boolean, default: false },
    format: { default: "HH:mm:ss" },
    placeholder: { default: (props) => {
      return props.type == "time-range" ? ["开始时间", "结束时间"] : "请选择时间";
    } },
    size: { default: void 0 },
    popupContainer: { default: void 0 },
    step: {},
    disabledHours: { type: Function, default: () => [] },
    disabledMinutes: { type: Function, default: () => [] },
    disabledSeconds: { type: Function, default: () => [] },
    hideDisabledOptions: { type: Boolean, default: false },
    disableConfirm: { type: Boolean },
    position: { default: "bl" },
    popupVisible: { type: Boolean, default: void 0 },
    defaultPopupVisible: { type: Boolean, default: false },
    triggerProps: { default: () => {
      return {};
    } },
    unmountOnClose: { type: Boolean, default: false }
  },
  emits: ["update:modelValue", "update:popupVisible", "change", "select", "clear", "popup-visible-change"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emits = __emit;
    const { popupContainer, size } = getGlobalConfig(props);
    const {
      type,
      computedValue,
      computedVisible,
      showClearBtn,
      readonly,
      disabled,
      curIndex,
      inputRefs,
      format
    } = useContext().provide(props, emits);
    const panelRef = ref();
    const handleClear = () => {
      computedValue.value = type.value == "time-range" ? [] : "";
      emits("clear");
    };
    const handleOpenPicker = (i) => {
      var _a;
      curIndex.value = i;
      computedVisible.value = true;
      (_a = panelRef.value) == null ? void 0 : _a.scroll(
        isArray(computedValue.value) ? computedValue.value[i] : computedValue.value
      );
    };
    const handleClickOutSide = () => {
      computedVisible.value = false;
      if (!isArray(computedValue.value)) {
        return;
      }
      const startTime = computedValue.value[0];
      const endTime = computedValue.value[1];
      if (startTime && endTime) {
        if (!isValidTimeRange(startTime, endTime, format.value)) {
          computedValue.value = computedValue.value.reverse();
        }
        return;
      }
      computedValue.value = [];
    };
    return (_ctx, _cache) => {
      return openBlock(), createBlock(unref(Trigger), mergeProps({
        "popup-visible": unref(computedVisible),
        position: _ctx.position,
        "popup-container": unref(popupContainer),
        "popup-offset": 4,
        "unmount-on-close": _ctx.unmountOnClose,
        disabled: unref(disabled) || unref(readonly),
        "on-click-out-side": handleClickOutSide,
        "auto-fit-popup-min-width": false,
        "auto-fit-popup-width": false,
        trigger: "click",
        "animation-name": "slide-dynamic-origin",
        "prevent-focus": ""
      }, _ctx.triggerProps), {
        content: withCtx(() => [
          createVNode(TimePickerPanel, {
            ref_key: "panelRef",
            ref: panelRef
          }, createSlots({ _: 2 }, [
            _ctx.$slots.extra ? {
              name: "extra",
              fn: withCtx(() => [
                renderSlot(_ctx.$slots, "extra", {}, void 0, true)
              ]),
              key: "0"
            } : void 0
          ]), 1536)
        ]),
        default: withCtx(() => [
          createElementVNode("div", {
            class: normalizeClass([
              "yc-picker",
              `yc-picker-size-${unref(size)}`,
              _ctx.$attrs.class,
              {
                "yc-picker-disabled": unref(disabled),
                "yc-picker-error": _ctx.error,
                "yc-picker-focus": unref(computedVisible),
                "yc-picker-has-prefix": _ctx.$slots.prefix,
                "yc-picker-allow-clear": unref(showClearBtn)
              }
            ]),
            style: normalizeStyle({
              ..._ctx.$attrs.style || {}
            })
          }, [
            _ctx.$slots.prefix ? (openBlock(), createElementBlock("div", _hoisted_1, [
              renderSlot(_ctx.$slots, "prefix", {}, void 0, true)
            ])) : createCommentVNode("", true),
            createElementVNode("div", {
              class: normalizeClass([
                "yc-picker-input",
                {
                  "yc-picker-input-active": !unref(curIndex) && unref(computedVisible)
                }
              ]),
              onClick: _cache[0] || (_cache[0] = withModifiers(($event) => handleOpenPicker(0), ["stop"]))
            }, [
              createElementVNode("input", {
                value: unref(isArray)(unref(computedValue)) ? unref(computedValue)[0] : unref(computedValue),
                placeholder: unref(isArray)(_ctx.placeholder) ? _ctx.placeholder[0] : _ctx.placeholder,
                disabled: unref(disabled),
                readonly: unref(readonly),
                ref: (el) => unref(inputRefs)[0] = el,
                class: "yc-picker-start-time"
              }, null, 8, _hoisted_2)
            ], 2),
            unref(type) == "time-range" ? (openBlock(), createElementBlock(Fragment, { key: 1 }, [
              _cache[2] || (_cache[2] = createElementVNode("span", { class: "yc-picker-separator" }, " - ", -1)),
              createElementVNode("div", {
                class: normalizeClass([
                  "yc-picker-input",
                  {
                    "yc-picker-input-active": unref(curIndex) && unref(computedVisible)
                  }
                ]),
                onClick: _cache[1] || (_cache[1] = withModifiers(($event) => handleOpenPicker(1), ["stop"]))
              }, [
                createElementVNode("input", {
                  value: unref(isArray)(unref(computedValue)) ? unref(computedValue)[1] : unref(computedValue),
                  placeholder: unref(isArray)(_ctx.placeholder) ? _ctx.placeholder[1] : _ctx.placeholder,
                  disabled: unref(disabled),
                  readonly: unref(readonly),
                  ref: (el) => unref(inputRefs)[1] = el,
                  class: "yc-picker-start-time"
                }, null, 8, _hoisted_3)
              ], 2)
            ], 64)) : createCommentVNode("", true),
            createElementVNode("div", _hoisted_4, [
              unref(showClearBtn) ? (openBlock(), createBlock(unref(IconButton), {
                key: 0,
                size: 14,
                class: "yc-picker-clear-icon",
                onClick: handleClear
              })) : createCommentVNode("", true),
              createElementVNode("span", _hoisted_5, [
                renderSlot(_ctx.$slots, "suffix-icon", {}, () => [
                  createVNode(unref(_sfc_main$1))
                ], true)
              ])
            ])
          ], 6)
        ]),
        _: 3
      }, 16, ["popup-visible", "position", "popup-container", "unmount-on-close", "disabled"]);
    };
  }
});
export {
  _sfc_main as default
};
