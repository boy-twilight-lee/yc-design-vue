import { defineComponent, toRefs, ref, computed, openBlock, createBlock, unref, createSlots, withCtx, renderSlot, createElementVNode, createVNode } from "vue";
import "../node_modules/tinycolor2/esm/tinycolor.js";
import "../_shared/utils/dom.js";
import { sleep } from "../_shared/utils/fn.js";
import { isString, isFunction, isNumber } from "../_shared/utils/is.js";
import "../_shared/utils/time.js";
import "../Empty/index.js";
import "../_shared/icons/_Icon.vue.js";
import useControlValue from "../_shared/utils/control.js";
import OperaBtn from "./InputOperaBtn.vue.js";
import Input from "../Input/index.js";
const _hoisted_1 = { class: "yc-input-number-step" };
const _sfc_main = /* @__PURE__ */ defineComponent({
  ...{
    name: "InputNumber"
  },
  __name: "InputNumber",
  props: {
    modelValue: { default: void 0 },
    defaultValue: { default: "" },
    mode: { default: "embed" },
    precision: { default: 0 },
    step: { default: 1 },
    disabled: { type: Boolean, default: false },
    error: { type: Boolean, default: false },
    max: { default: Infinity },
    min: { default: -Infinity },
    placeholder: { default: "" },
    hideButton: { type: Boolean, default: false },
    size: { default: void 0 },
    allowClear: { type: Boolean, default: false },
    modelEvent: { default: "change" },
    formatter: {},
    parser: {},
    readonly: { type: Boolean, default: false },
    inputAttrs: { default: () => {
      return {};
    } }
  },
  emits: ["update:modelValue", "input", "change", "focus", "blur", "clear", "keydown", "pressEnter"],
  setup(__props, { expose: __expose, emit: __emit }) {
    const props = __props;
    const emits = __emit;
    const {
      modelValue,
      defaultValue,
      step,
      min,
      max,
      disabled,
      hideButton,
      mode,
      modelEvent,
      precision: _precision
    } = toRefs(props);
    const { formatter, parser } = props;
    const inputRef = ref();
    const computedValue = useControlValue(
      modelValue,
      defaultValue.value,
      (val) => {
        emits(
          "update:modelValue",
          modelEvent.value == "change" ? val : handlePrecision(val, "number")
        );
      },
      (val) => {
        const value = isString(val) ? val : handlePrecision(val, "string");
        return formatter && isFunction(formatter) ? formatter(value) : value;
      }
    );
    const precision = computed(() => {
      var _a, _b;
      const stepPrecision = ((_b = (_a = String(step.value).match(/\.(\d+)/)) == null ? void 0 : _a[1]) == null ? void 0 : _b.length) ?? 0;
      return Math.max(...[stepPrecision, _precision.value]);
    });
    const parserValue = (v) => {
      return parser && isFunction(parser) ? parser(v) : v;
    };
    function handlePrecision(value, type) {
      const handleValue = isNumber(value) ? value : +value;
      const numberValue = precision.value ? handleValue.toFixed(precision.value) : handleValue.toFixed(0);
      return type == "number" ? +numberValue : numberValue;
    }
    const handleStep = (type) => {
      var _a;
      const handleValue = +parserValue(computedValue.value);
      let value = type == "minus" ? handleValue - step.value : handleValue + step.value;
      value = value < min.value ? min.value : value;
      value = value > max.value ? max.value : value;
      computedValue.value = handlePrecision(value, "number");
      (_a = inputRef.value) == null ? void 0 : _a.focus();
    };
    const handleUpdateValue = (type, e) => {
      if (type == "blur") {
        emits("blur", e);
      } else {
        emits("pressEnter", e);
      }
      if (!computedValue.value)
        return;
      let value = +parserValue(computedValue.value);
      value = value < min.value ? min.value : value;
      value = value > max.value ? max.value : value;
      computedValue.value = handlePrecision(value, "number");
    };
    const handleInput = (v, e) => {
      var _a;
      if (!v) {
        computedValue.value = v;
        return;
      }
      const handleValue = parserValue(v);
      const isInValidNumber = !/^-?\d*\.?\d*$/.test(handleValue);
      const isInValidPoint = (((_a = handleValue.match(/\./g)) == null ? void 0 : _a.length) ?? 0) > 1;
      const isInValidNegative = handleValue.includes("-") && handleValue[0] != "-";
      if (isInValidNumber || isInValidPoint || isInValidNegative) {
        return;
      }
      computedValue.value = handleValue;
      emits("input", handleValue, e);
    };
    const handleClear = (ev) => {
      computedValue.value = "";
      emits("clear", ev);
    };
    __expose({
      focus() {
        var _a;
        (_a = inputRef.value) == null ? void 0 : _a.focus();
      },
      blur() {
        var _a;
        (_a = inputRef.value) == null ? void 0 : _a.focus();
      }
    });
    return (_ctx, _cache) => {
      return openBlock(), createBlock(unref(Input), {
        "model-value": unref(computedValue),
        "allow-clear": _ctx.allowClear,
        disabled: unref(disabled),
        readonly: _ctx.readonly,
        error: _ctx.error,
        size: _ctx.size,
        placeholder: _ctx.placeholder,
        "input-attrs": _ctx.inputAttrs,
        class: "yc-input-number",
        ref_key: "inputRef",
        ref: inputRef,
        onInput: handleInput,
        onChange: _cache[0] || (_cache[0] = async (v, ev) => {
          await unref(sleep)(0);
          _ctx.$emit("change", +v, ev);
        }),
        onClear: handleClear,
        onFocus: _cache[1] || (_cache[1] = (ev) => _ctx.$emit("focus", ev)),
        onBlur: _cache[2] || (_cache[2] = (ev) => handleUpdateValue("blur", ev)),
        onKeydown: _cache[3] || (_cache[3] = (ev) => _ctx.$emit("keydown", ev)),
        onPressEnter: _cache[4] || (_cache[4] = (ev) => handleUpdateValue("pressEnter", ev))
      }, createSlots({ _: 2 }, [
        _ctx.$slots.prefix ? {
          name: "prefix",
          fn: withCtx(() => [
            renderSlot(_ctx.$slots, "prefix", {}, void 0, true)
          ]),
          key: "0"
        } : void 0,
        _ctx.$slots.suffix || !unref(hideButton) && unref(mode) == "embed" ? {
          name: "suffix",
          fn: withCtx(() => [
            renderSlot(_ctx.$slots, "suffix", {}, () => [
              createElementVNode("div", _hoisted_1, [
                createVNode(OperaBtn, {
                  type: "plus",
                  mode: unref(mode),
                  "computed-value": unref(computedValue),
                  disabled: unref(disabled),
                  min: unref(min),
                  max: unref(max),
                  size: _ctx.size,
                  onClick: handleStep
                }, createSlots({ _: 2 }, [
                  _ctx.$slots.minus ? {
                    name: "icon",
                    fn: withCtx(() => [
                      renderSlot(_ctx.$slots, "plus", {}, void 0, true)
                    ]),
                    key: "0"
                  } : void 0
                ]), 1032, ["mode", "computed-value", "disabled", "min", "max", "size"]),
                createVNode(OperaBtn, {
                  type: "minus",
                  mode: unref(mode),
                  "computed-value": unref(computedValue),
                  disabled: unref(disabled),
                  min: unref(min),
                  max: unref(max),
                  size: _ctx.size,
                  onClick: handleStep
                }, createSlots({ _: 2 }, [
                  _ctx.$slots.plus ? {
                    name: "icon",
                    fn: withCtx(() => [
                      renderSlot(_ctx.$slots, "minus", {}, void 0, true)
                    ]),
                    key: "0"
                  } : void 0
                ]), 1032, ["mode", "computed-value", "disabled", "min", "max", "size"])
              ])
            ], true)
          ]),
          key: "1"
        } : void 0,
        _ctx.$slots.prepend || !unref(hideButton) && unref(mode) == "button" ? {
          name: "prepend",
          fn: withCtx(() => [
            renderSlot(_ctx.$slots, "prepend", {}, () => [
              createVNode(OperaBtn, {
                type: "minus",
                mode: unref(mode),
                "computed-value": unref(computedValue),
                disabled: unref(disabled),
                min: unref(min),
                max: unref(max),
                size: _ctx.size,
                onClick: handleStep
              }, createSlots({ _: 2 }, [
                _ctx.$slots.minus ? {
                  name: "icon",
                  fn: withCtx(() => [
                    renderSlot(_ctx.$slots, "minus", {}, void 0, true)
                  ]),
                  key: "0"
                } : void 0
              ]), 1032, ["mode", "computed-value", "disabled", "min", "max", "size"])
            ], true)
          ]),
          key: "2"
        } : void 0,
        _ctx.$slots.append || !unref(hideButton) && unref(mode) == "button" ? {
          name: "append",
          fn: withCtx(() => [
            renderSlot(_ctx.$slots, "append", {}, () => [
              createVNode(OperaBtn, {
                type: "plus",
                mode: unref(mode),
                "computed-value": unref(computedValue),
                disabled: unref(disabled),
                max: unref(max),
                min: unref(min),
                size: _ctx.size,
                onClick: handleStep
              }, createSlots({ _: 2 }, [
                _ctx.$slots.plus ? {
                  name: "icon",
                  fn: withCtx(() => [
                    renderSlot(_ctx.$slots, "plus", {}, void 0, true)
                  ]),
                  key: "0"
                } : void 0
              ]), 1032, ["mode", "computed-value", "disabled", "max", "min", "size"])
            ], true)
          ]),
          key: "3"
        } : void 0
      ]), 1032, ["model-value", "allow-clear", "disabled", "readonly", "error", "size", "placeholder", "input-attrs"]);
    };
  }
});
export {
  _sfc_main as default
};
