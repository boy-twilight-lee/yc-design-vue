import { defineComponent, useCssVars, toRefs, useSlots, computed, ref, openBlock, createElementBlock, normalizeClass, unref, createElementVNode, createBlock, renderSlot, createTextVNode, toDisplayString, createCommentVNode } from "vue";
import "../node_modules/tinycolor2/esm/tinycolor.js";
import "../_shared/utils/dom.js";
import { isBoolean } from "../_shared/utils/is.js";
import "../_shared/utils/time.js";
import { getGlobalConfig } from "../_shared/utils/global-config.js";
import useControlValue from "../_shared/utils/control.js";
import Spin from "../Spin/index.js";
const _hoisted_1 = ["aria-checked"];
const _hoisted_2 = { class: "yc-switch-handle" };
const _hoisted_3 = { class: "yc-switch-handle-icon" };
const _hoisted_4 = {
  key: 0,
  class: "yc-switch-placeholder"
};
const _hoisted_5 = {
  key: 1,
  class: "yc-switch-text"
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  ...{
    name: "Switch"
  },
  __name: "index",
  props: {
    modelValue: { type: [String, Number, Boolean], default: void 0 },
    defaultChecked: { type: [String, Number, Boolean], default: false },
    disabled: { type: Boolean, default: false },
    loading: { type: Boolean, default: false },
    type: { default: "circle" },
    size: { default: void 0 },
    checkedValue: { type: [String, Number, Boolean], default: true },
    uncheckedValue: { type: [String, Number, Boolean], default: false },
    checkedColor: { default: "rgba(22, 93, 255)" },
    uncheckedColor: { default: "rgb(201, 205, 212)" },
    checkedText: { default: "" },
    uncheckedText: { default: "" },
    beforeChange: { type: Function, default: () => {
      return true;
    } }
  },
  emits: ["update:modelValue", "change", "focus", "blur"],
  setup(__props, { emit: __emit }) {
    useCssVars((_ctx) => ({
      "455e587d": background.value
    }));
    const props = __props;
    const emits = __emit;
    const {
      modelValue,
      defaultChecked,
      checkedValue,
      uncheckedValue,
      disabled,
      type,
      checkedText,
      uncheckedText,
      checkedColor,
      uncheckedColor,
      loading: _loading
    } = toRefs(props);
    const { beforeChange } = props;
    const slots = useSlots();
    const { size } = getGlobalConfig(props);
    const computedValue = useControlValue(
      modelValue,
      defaultChecked.value,
      (val) => {
        emits("update:modelValue", val);
      }
    );
    const compuedChecked = computed(() => {
      return computedValue.value == checkedValue.value;
    });
    const showText = computed(() => {
      const showCheckedText = compuedChecked.value && (checkedText.value || slots.checked);
      const showUncheckedText = !compuedChecked.value && (uncheckedText.value || slots.unchecked);
      return type.value != "line" && size.value != "small" && (showCheckedText || showUncheckedText);
    });
    const background = computed(
      () => compuedChecked.value ? checkedColor.value : uncheckedColor.value
    );
    const switchLoading = ref(false);
    const loading = computed(() => switchLoading.value || _loading.value);
    const handleBeforeChange = async (newValue) => {
      let isChange = true;
      switchLoading.value = true;
      const changeResult = beforeChange(newValue);
      if (isBoolean(changeResult)) {
        isChange = changeResult;
      } else if (changeResult instanceof Promise) {
        try {
          const _isChange = await changeResult;
          if (isBoolean(_isChange)) {
            isChange = _isChange;
          }
        } catch {
          isChange = false;
        }
      }
      switchLoading.value = false;
      return isChange;
    };
    const handleClick = async (e) => {
      if (loading.value || disabled.value)
        return;
      const newValue = compuedChecked.value ? uncheckedValue.value : checkedValue.value;
      const isChange = await handleBeforeChange(newValue);
      if (!isChange)
        return;
      computedValue.value = newValue;
      emits("change", newValue, e);
    };
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("button", {
        class: normalizeClass([
          "yc-switch",
          `yc-switch-shape-${unref(type)}`,
          `yc-switch-size-${unref(size)}`,
          compuedChecked.value ? "yc-switch-checked" : "yc-switch-unchecked",
          {
            "yc-switch-loading": loading.value,
            "yc-switch-disabled": unref(disabled)
          }
        ]),
        "aria-checked": compuedChecked.value,
        role: "switch",
        onFocus: _cache[0] || (_cache[0] = ($event) => _ctx.$emit("focus", $event)),
        onBlur: _cache[1] || (_cache[1] = ($event) => _ctx.$emit("blur", $event)),
        onClick: handleClick
      }, [
        createElementVNode("span", _hoisted_2, [
          createElementVNode("span", _hoisted_3, [
            loading.value ? (openBlock(), createBlock(unref(Spin), {
              key: 0,
              "is-size-inherit": ""
            })) : renderSlot(_ctx.$slots, compuedChecked.value ? "checked-icon" : "unchecked-icon", { key: 1 }, void 0, true)
          ])
        ]),
        showText.value ? (openBlock(), createElementBlock("span", _hoisted_4, [
          renderSlot(_ctx.$slots, compuedChecked.value ? "checked" : "unchecked", {}, () => [
            createTextVNode(toDisplayString(compuedChecked.value ? unref(checkedText) : unref(uncheckedText)), 1)
          ], true)
        ])) : createCommentVNode("", true),
        showText.value ? (openBlock(), createElementBlock("span", _hoisted_5, [
          renderSlot(_ctx.$slots, compuedChecked.value ? "checked" : "unchecked", {}, () => [
            createTextVNode(toDisplayString(compuedChecked.value ? unref(checkedText) : unref(uncheckedText)), 1)
          ], true)
        ])) : createCommentVNode("", true)
      ], 42, _hoisted_1);
    };
  }
});
export {
  _sfc_main as default
};
