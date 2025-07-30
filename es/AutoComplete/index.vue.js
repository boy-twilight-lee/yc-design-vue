import { defineComponent, toRefs, ref, openBlock, createBlock, unref, createSlots, withCtx, renderSlot, mergeProps, isRef, normalizeProps, guardReactiveProps, nextTick } from "vue";
import "../node_modules/tinycolor2/esm/tinycolor.js";
import "../_shared/utils/dom.js";
import { isObject } from "../_shared/utils/is.js";
import "../_shared/utils/time.js";
import "../Empty/index.js";
import "../_shared/icons/_Icon.vue.js";
import useControlValue from "../_shared/utils/control.js";
import Select from "../Select/index.js";
import Textarea from "../Textarea/index.js";
import Input from "../Input/index.js";
const _sfc_main = /* @__PURE__ */ defineComponent({
  ...{
    name: "AutoComplete"
  },
  __name: "index",
  props: {
    modelValue: { default: void 0 },
    defaultValue: { default: "" },
    disabled: { type: Boolean, default: false },
    data: { default: () => [] },
    popupContainer: { default: void 0 },
    strict: { type: Boolean, default: false },
    filterOption: { type: Function, default: void 0 },
    triggerProps: { default: () => {
      return {};
    } },
    allowClear: { type: Boolean, default: true },
    vistualListProps: {},
    isSelectSetValue: { type: Boolean, default: true },
    isSearch: { type: Boolean, default: true },
    type: { default: "input" }
  },
  emits: ["update:modelValue", "change", "search", "select", "clear", "dropdown-scroll", "dropdown-reach-bottom", "blur", "focus", "input", "keydown"],
  setup(__props, { expose: __expose, emit: __emit }) {
    const props = __props;
    const emits = __emit;
    const { modelValue, defaultValue, data, strict, isSelectSetValue, isSearch } = toRefs(props);
    const { filterOption } = props;
    const inputRef = ref();
    const selectRef = ref();
    const popupVisible = ref(false);
    const computedValue = useControlValue(
      modelValue,
      defaultValue.value,
      (val) => {
        emits("update:modelValue", val);
      }
    );
    const curOptions = ref([]);
    const defaultFilter = (inputValue, option) => {
      const labelValue = option.label;
      const label = strict.value ? labelValue : labelValue.toLowerCase();
      const value = strict.value ? inputValue : inputValue.toLowerCase();
      return label == null ? void 0 : label.includes(value);
    };
    const handleEvent = async (type, ev, value = "") => {
      switch (type) {
        case "input":
          {
            emits("input", value, ev);
            emits("search", value);
            const oldOptions = [...data.value];
            await nextTick();
            if (JSON.stringify(oldOptions) == JSON.stringify(data.value) && isSearch.value) {
              curOptions.value = data.value.filter((v) => {
                const option = isObject(v) ? v : { label: v, value: v };
                return (filterOption == null ? void 0 : filterOption(value, option)) ?? defaultFilter(value, option);
              });
            } else {
              curOptions.value = data.value;
            }
            popupVisible.value = !!curOptions.value.length;
          }
          break;
        case "select":
          {
            popupVisible.value = false;
            if (isSelectSetValue.value) {
              computedValue.value = value;
            }
            emits("select", value);
          }
          break;
        case "focus":
          {
            popupVisible.value = !!curOptions.value.length;
            emits("focus", ev);
          }
          break;
        case "blur":
          {
            popupVisible.value = false;
            emits("blur", ev);
          }
          break;
        case "clear":
          {
            computedValue.value = "";
            emits("clear", ev);
          }
          break;
      }
    };
    __expose({
      focus() {
        var _a;
        (_a = inputRef.value) == null ? void 0 : _a.focus();
      },
      blur() {
        var _a;
        (_a = inputRef.value) == null ? void 0 : _a.blur();
      },
      getInputRef() {
        var _a;
        return (_a = inputRef.value) == null ? void 0 : _a.getInputRef();
      },
      getMirrorRef() {
        var _a;
        return (_a = inputRef.value) == null ? void 0 : _a.getMirrorRef();
      },
      updatePosition(x, y) {
        var _a, _b;
        (_b = (_a = selectRef.value) == null ? void 0 : _a.getPopupRef()) == null ? void 0 : _b.updatePosition(x, y);
      }
    });
    return (_ctx, _cache) => {
      return openBlock(), createBlock(unref(Select), {
        "popup-visible": popupVisible.value,
        options: curOptions.value,
        "popup-container": _ctx.popupContainer,
        "trigger-props": _ctx.triggerProps,
        "virtual-list-props": _ctx.vistualListProps,
        "show-empty": false,
        hotkeys: "",
        ref_key: "selectRef",
        ref: selectRef,
        class: "yc-auto-complete",
        onDropdownScroll: _cache[14] || (_cache[14] = (ev) => _ctx.$emit("dropdown-scroll", ev)),
        onDropdownReachBottom: _cache[15] || (_cache[15] = (ev) => _ctx.$emit("dropdown-reach-bottom", ev)),
        onSelect: _cache[16] || (_cache[16] = (v) => handleEvent("select", null, v))
      }, createSlots({
        trigger: withCtx(() => [
          renderSlot(_ctx.$slots, "trigger", {}, () => [
            _ctx.type == "input" ? (openBlock(), createBlock(unref(Input), mergeProps({
              key: 0,
              modelValue: unref(computedValue),
              "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => isRef(computedValue) ? computedValue.value = $event : null),
              disabled: _ctx.disabled,
              "allow-clear": _ctx.allowClear
            }, _ctx.$attrs, {
              ref_key: "inputRef",
              ref: inputRef,
              onInput: _cache[1] || (_cache[1] = (v, ev) => handleEvent("input", ev, v)),
              onChange: _cache[2] || (_cache[2] = (v) => _ctx.$emit("change", v)),
              onClear: _cache[3] || (_cache[3] = (ev) => handleEvent("clear", ev)),
              onKeydown: _cache[4] || (_cache[4] = (ev) => handleEvent("keydown", ev)),
              onFocus: _cache[5] || (_cache[5] = (ev) => handleEvent("focus", ev)),
              onBlur: _cache[6] || (_cache[6] = (ev) => handleEvent("blur", ev))
            }), null, 16, ["modelValue", "disabled", "allow-clear"])) : (openBlock(), createBlock(unref(Textarea), mergeProps({
              key: 1,
              modelValue: unref(computedValue),
              "onUpdate:modelValue": _cache[7] || (_cache[7] = ($event) => isRef(computedValue) ? computedValue.value = $event : null),
              disabled: _ctx.disabled,
              "allow-clear": _ctx.allowClear,
              "enter-prevent": "",
              "show-mirror": ""
            }, _ctx.$attrs, {
              ref_key: "inputRef",
              ref: inputRef,
              onInput: _cache[8] || (_cache[8] = (v, ev) => handleEvent("input", ev, v)),
              onChange: _cache[9] || (_cache[9] = (v) => _ctx.$emit("change", v)),
              onClear: _cache[10] || (_cache[10] = (ev) => handleEvent("clear", ev)),
              onKeydown: _cache[11] || (_cache[11] = (ev) => _ctx.$emit("keydown", ev)),
              onFocus: _cache[12] || (_cache[12] = (ev) => handleEvent("focus", ev)),
              onBlur: _cache[13] || (_cache[13] = (ev) => handleEvent("blur", ev))
            }), null, 16, ["modelValue", "disabled", "allow-clear"]))
          ])
        ]),
        _: 2
      }, [
        _ctx.$slots.option ? {
          name: "option",
          fn: withCtx((scope) => [
            renderSlot(_ctx.$slots, "option", normalizeProps(guardReactiveProps(scope)))
          ]),
          key: "0"
        } : void 0,
        _ctx.$slots.footer ? {
          name: "footer",
          fn: withCtx(() => [
            renderSlot(_ctx.$slots, "footer")
          ]),
          key: "1"
        } : void 0
      ]), 1032, ["popup-visible", "options", "popup-container", "trigger-props", "virtual-list-props"]);
    };
  }
});
export {
  _sfc_main as default
};
