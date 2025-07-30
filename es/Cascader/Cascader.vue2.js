import { defineComponent, ref, computed, openBlock, createBlock, unref, mergeProps, isRef, withCtx, createElementVNode, normalizeClass, normalizeStyle, createSlots, createVNode, renderSlot, normalizeProps, guardReactiveProps, toDisplayString } from "vue";
import "../node_modules/tinycolor2/esm/tinycolor.js";
import "../_shared/utils/dom.js";
import { sleep } from "../_shared/utils/fn.js";
import "../_shared/utils/time.js";
import "../Empty/index.js";
import "../_shared/icons/_Icon.vue.js";
import useContext from "./hooks/useContext.js";
import Input from "../Input/index.js";
import InputTag from "../InputTag/index.js";
import Trigger from "../Trigger/index.js";
import CascaderPanel from "./CascaderPanel.vue.js";
import CascaderSearchPanel from "./CascaderSearchPanel.vue.js";
import CascaderIcon from "./CascaderIcon.vue.js";
const _sfc_main = /* @__PURE__ */ defineComponent({
  ...{
    name: "Cascader"
  },
  __name: "Cascader",
  props: {
    pathMode: { type: Boolean, default: false },
    multiple: { type: Boolean, default: false },
    modelValue: { default: void 0 },
    defaultValue: { default: (props) => {
      return props.multiple ? [] : "";
    } },
    options: { default: () => [] },
    disabled: { type: Boolean, default: false },
    error: { type: Boolean, default: false },
    size: { default: void 0 },
    allowSearch: { type: Boolean, default: false },
    allowClear: { type: Boolean, default: false },
    inputValue: { default: void 0 },
    defaultInputValue: { default: "" },
    popupVisible: { type: Boolean, default: void 0 },
    defaultPopupVisible: { type: Boolean, default: false },
    expandTrigger: { default: "click" },
    placeholder: { default: "" },
    filterOption: { type: Function, default: (inputValue, option) => {
      const label = (option.label ?? "").toLowerCase();
      return label.includes(inputValue.toLowerCase());
    } },
    popupContainer: { default: void 0 },
    maxTagCount: { default: 0 },
    formatLabel: { type: Function, default: void 0 },
    triggerProps: { default: () => {
      return {};
    } },
    loadMore: { type: Function, default: void 0 },
    loading: { type: Boolean, default: false },
    searchOptionOnlyLabel: { type: Boolean, default: false },
    searchDelay: { default: 500 },
    fieldNames: { default: () => {
      return {};
    } },
    valueKey: { default: "value" },
    fallback: { type: [Boolean, Function], default: true },
    expandChild: { type: Boolean, default: false },
    tagNowrap: { type: Boolean, default: false }
  },
  emits: ["update:modelValue", "update:inputValue", "update:popupVisible", "change", "input-value-change", "clear", "search", "popup-visible-change", "focus", "blur"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emits = __emit;
    const inputRef = ref();
    const {
      computedValue,
      computedInputValue,
      computedVisible,
      selectOptions,
      searchDelay,
      multiple,
      pathMode,
      disabled,
      allowClear,
      allowSearch,
      loading,
      curLevel,
      curPath,
      getValueKey,
      getOption
    } = useContext().provide(props, emits, inputRef);
    const showClearBtn = computed(() => {
      let hasValue = true;
      if (pathMode.value) {
        hasValue = multiple.value ? computedValue.value.flat(1).length : computedValue.value.length;
      } else {
        hasValue = multiple.value ? computedValue.value.length : computedValue.value;
      }
      return allowClear.value && !disabled.value && !loading.value && !!hasValue;
    });
    const isReadonly = computed(() => {
      return !allowSearch.value || loading.value;
    });
    const isSearchMode = computed(() => {
      return allowSearch.value && computedInputValue.value;
    });
    const handleEvent = async (type, value = "") => {
      var _a, _b;
      switch (type) {
        case "clear":
          {
            computedValue.value = multiple.value || pathMode.value ? [] : "";
            emits("clear");
          }
          break;
        case "search":
          {
            await sleep(searchDelay.value);
            emits("search", value);
          }
          break;
        case "focus":
          {
            if (disabled.value) {
              return;
            }
            if (computedVisible.value) {
              return (_a = inputRef.value) == null ? void 0 : _a.blur();
            }
            const value2 = getValueKey(
              multiple.value ? computedValue.value[0] : computedValue.value
            );
            const option = value2 ? getOption(value2) : null;
            if (option) {
              curPath.value = option.nodePath.map((item) => item.index);
              curLevel.value = option.level;
            } else {
              curPath.value = [];
              curLevel.value = 1;
            }
            computedVisible.value = true;
            await sleep(0);
            (_b = inputRef.value) == null ? void 0 : _b.focus();
          }
          break;
        case "blur":
          {
            computedVisible.value = false;
          }
          break;
        case "updateValue":
          {
            console.log("updateValue", value);
            computedValue.value = value.map(
              (item) => item.value
            );
            console.log(computedValue.value, "value");
          }
          break;
      }
    };
    return (_ctx, _cache) => {
      return openBlock(), createBlock(unref(Trigger), mergeProps({
        "popup-visible": unref(computedVisible),
        "onUpdate:popupVisible": _cache[11] || (_cache[11] = ($event) => isRef(computedVisible) ? computedVisible.value = $event : null),
        "popup-offset": 4,
        "popup-container": _ctx.popupContainer,
        disabled: unref(disabled),
        position: "bl",
        trigger: "focus",
        "animation-name": "slide-dynamic-origin",
        "prevent-focus": ""
      }, _ctx.triggerProps), {
        content: withCtx(() => [
          isSearchMode.value ? (openBlock(), createBlock(CascaderSearchPanel, { key: 0 })) : (openBlock(), createBlock(CascaderPanel, { key: 1 }))
        ]),
        default: withCtx(() => {
          var _a, _b;
          return [
            createElementVNode("div", {
              class: normalizeClass([
                "yc-cascader",
                {
                  "yc-cascader-allow-clear": showClearBtn.value,
                  "yc-cascader-allow-search": unref(allowSearch)
                },
                _ctx.$attrs.class
              ]),
              style: normalizeStyle(_ctx.$attrs.style)
            }, [
              unref(multiple) ? (openBlock(), createBlock(unref(InputTag), {
                key: 0,
                "input-value": unref(computedInputValue),
                "onUpdate:inputValue": _cache[1] || (_cache[1] = ($event) => isRef(computedInputValue) ? computedInputValue.value = $event : null),
                "model-value": unref(selectOptions),
                placeholder: _ctx.placeholder,
                readonly: isReadonly.value,
                disabled: unref(disabled),
                size: _ctx.size,
                error: _ctx.error,
                "max-tag-count": _ctx.maxTagCount,
                "tag-nowrap": _ctx.tagNowrap,
                ref_key: "inputRef",
                ref: inputRef,
                onFocus: _cache[2] || (_cache[2] = ($event) => handleEvent("focus")),
                onBlur: _cache[3] || (_cache[3] = ($event) => handleEvent("blur")),
                onInput: _cache[4] || (_cache[4] = (v) => handleEvent("search", v)),
                "onUpdate:modelValue": _cache[5] || (_cache[5] = (v) => handleEvent("updateValue", v))
              }, createSlots({
                suffix: withCtx(() => [
                  createVNode(CascaderIcon, {
                    "popup-visible": unref(computedVisible),
                    "allow-search": unref(allowSearch),
                    loading: unref(loading),
                    "show-clear-btn": showClearBtn.value,
                    onClear: _cache[0] || (_cache[0] = ($event) => handleEvent("clear"))
                  }, null, 8, ["popup-visible", "allow-search", "loading", "show-clear-btn"])
                ]),
                _: 2
              }, [
                _ctx.$slots.label ? {
                  name: "tag",
                  fn: withCtx((scope) => [
                    renderSlot(_ctx.$slots, "label", normalizeProps(guardReactiveProps(scope)), void 0, true)
                  ]),
                  key: "0"
                } : void 0,
                _ctx.$slots.prefix ? {
                  name: "prefix",
                  fn: withCtx(() => [
                    renderSlot(_ctx.$slots, "prefix", {}, void 0, true)
                  ]),
                  key: "1"
                } : void 0
              ]), 1032, ["input-value", "model-value", "placeholder", "readonly", "disabled", "size", "error", "max-tag-count", "tag-nowrap"])) : (openBlock(), createBlock(unref(Input), {
                key: 1,
                modelValue: unref(computedInputValue),
                "onUpdate:modelValue": _cache[7] || (_cache[7] = ($event) => isRef(computedInputValue) ? computedInputValue.value = $event : null),
                "show-input": unref(computedVisible),
                readonly: isReadonly.value,
                disabled: unref(disabled),
                size: _ctx.size,
                error: _ctx.error,
                placeholder: ((_b = (_a = unref(selectOptions)[0]) == null ? void 0 : _a.label) == null ? void 0 : _b.toString()) || "",
                ref_key: "inputRef",
                ref: inputRef,
                onClick: _cache[8] || (_cache[8] = ($event) => handleEvent("focus")),
                onBlur: _cache[9] || (_cache[9] = ($event) => handleEvent("blur")),
                onInput: _cache[10] || (_cache[10] = (v) => handleEvent("search", v))
              }, createSlots({
                label: withCtx(() => [
                  renderSlot(_ctx.$slots, "label", {
                    data: unref(selectOptions)[0]
                  }, () => {
                    var _a2, _b2;
                    return [
                      createElementVNode("span", {
                        class: normalizeClass([
                          {
                            "yc-input-placeholder": !((_a2 = unref(selectOptions)[0]) == null ? void 0 : _a2.label)
                          }
                        ])
                      }, toDisplayString(((_b2 = unref(selectOptions)[0]) == null ? void 0 : _b2.label) || _ctx.placeholder), 3)
                    ];
                  }, true)
                ]),
                suffix: withCtx(() => [
                  createVNode(CascaderIcon, {
                    "popup-visible": unref(computedVisible),
                    "allow-search": unref(allowSearch),
                    loading: unref(loading),
                    "show-clear-btn": showClearBtn.value,
                    onClear: _cache[6] || (_cache[6] = ($event) => handleEvent("clear"))
                  }, null, 8, ["popup-visible", "allow-search", "loading", "show-clear-btn"])
                ]),
                _: 2
              }, [
                _ctx.$slots.prefix ? {
                  name: "prefix",
                  fn: withCtx(() => [
                    renderSlot(_ctx.$slots, "prefix", {}, void 0, true)
                  ]),
                  key: "0"
                } : void 0
              ]), 1032, ["modelValue", "show-input", "readonly", "disabled", "size", "error", "placeholder"]))
            ], 6)
          ];
        }),
        _: 3
      }, 16, ["popup-visible", "popup-container", "disabled"]);
    };
  }
});
export {
  _sfc_main as default
};
