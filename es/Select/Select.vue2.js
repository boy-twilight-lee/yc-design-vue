import { defineComponent, toRefs, ref, computed, openBlock, createBlock, unref, mergeProps, isRef, withCtx, createVNode, createElementVNode, normalizeClass, normalizeStyle, renderSlot, toDisplayString, createCommentVNode } from "vue";
import "../node_modules/tinycolor2/esm/tinycolor.js";
import "../_shared/utils/dom.js";
import { sleep } from "../_shared/utils/fn.js";
import { isUndefined } from "../_shared/utils/is.js";
import "../_shared/utils/time.js";
import "../Empty/index.js";
import "../_shared/icons/_Icon.vue.js";
import useContext from "./hooks/useContext.js";
import SelectIcon from "./SelectIcon.vue.js";
import SelectView from "./SelectView.vue.js";
import Input from "../Input/index.js";
import InputTag from "../InputTag/index.js";
import Trigger from "../Trigger/index.js";
const _sfc_main = /* @__PURE__ */ defineComponent({
  ...{
    name: "Select"
  },
  __name: "Select",
  props: {
    multiple: { type: Boolean, default: false },
    modelValue: { type: [String, Number, Boolean, Object, Array], default: void 0 },
    defaultValue: { type: [String, Number, Boolean, Object, Array], default: (props) => {
      return props.multiple ? [] : "";
    } },
    inputValue: { default: void 0 },
    defaultInputValue: { default: "" },
    size: { default: void 0 },
    placeholder: { default: "" },
    loading: { type: Boolean, default: false },
    disabled: { type: Boolean, default: false },
    error: { type: Boolean, default: false },
    allowClear: { type: Boolean, default: false },
    allowSearch: { type: Boolean, default: (props) => {
      return props.multiple;
    } },
    allowCreate: { type: Boolean, default: false },
    maxTagCount: { default: 0 },
    popupContainer: { default: void 0 },
    bordered: { type: Boolean, default: true },
    defaultActivefirstOption: { type: Boolean, default: false },
    popupVisible: { type: Boolean, default: void 0 },
    defaultPopupVisible: { type: Boolean, default: false },
    unmountonClose: { type: Boolean },
    filterOption: { type: [Boolean, Function], default: void 0 },
    options: { default: () => [] },
    virtualListProps: { default: void 0 },
    triggerProps: { default: () => {
      return {
        contentStyle: {}
      };
    } },
    formatLabel: {},
    fallbackOption: {},
    showExtraOptions: { type: Boolean, default: true },
    valueKey: { default: "" },
    searchDelay: { default: 500 },
    limit: { default: 0 },
    fieldNames: { default: () => {
      return {};
    } },
    scrollbar: { type: Boolean, default: true },
    showHeaderOnEmpty: { type: Boolean, default: false },
    showFooterOnEmpty: { type: Boolean, default: false },
    tagNowrap: { type: Boolean, default: false },
    hotkeys: { type: Boolean },
    showEmpty: { type: Boolean, default: true }
  },
  emits: ["update:modelValue", "update:inputValue", "update:popupVisible", "change", "input-value-change", "clear", "remove", "search", "exceedLimit", "popup-visible-change", "dropdown-scroll", "dropdown-reach-bottom", "select"],
  setup(__props, { expose: __expose, emit: __emit }) {
    const props = __props;
    const emits = __emit;
    const {
      allowClear,
      disabled,
      loading,
      searchDelay,
      showFooterOnEmpty,
      showHeaderOnEmpty,
      multiple,
      allowSearch,
      allowCreate,
      virtualListProps
    } = toRefs(props);
    const inputRef = ref();
    const popupRef = ref();
    const {
      computedVisible,
      computedValue,
      computedInputValue,
      selectOptions,
      createOptions
    } = useContext().provide(props, emits, inputRef);
    const showClearBtn = computed(() => {
      const hasValue = multiple.value ? computedValue.value.length : String(computedValue.value).length;
      return allowClear.value && !disabled.value && !loading.value && !!hasValue;
    });
    const isReadonly = computed(() => {
      return (!allowSearch.value || loading.value) && !allowCreate.value && isUndefined(props.filterOption);
    });
    const handleEvent = async (type, value = "") => {
      var _a, _b, _c;
      switch (type) {
        case "create":
          {
            if (!allowCreate.value)
              return;
            const target = createOptions.value.find(
              (item) => item == computedInputValue.value
            );
            if (target)
              return;
            createOptions.value.push({
              label: computedInputValue.value,
              value: computedInputValue.value
            });
            if (allowSearch.value) {
              (_a = inputRef.value) == null ? void 0 : _a.blur();
            }
          }
          break;
        case "clear":
          {
            computedValue.value = multiple.value ? [] : "";
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
            if (disabled.value)
              return;
            if (computedVisible.value) {
              return (_b = inputRef.value) == null ? void 0 : _b.blur();
            }
            computedVisible.value = true;
            await sleep(0);
            (_c = inputRef.value) == null ? void 0 : _c.focus();
          }
          break;
        case "blur":
          {
            computedVisible.value = false;
          }
          break;
        case "updateValue":
          {
            computedValue.value = value.map(
              (item) => item.value
            );
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
      getPopupRef() {
        return popupRef.value;
      }
    });
    return (_ctx, _cache) => {
      return openBlock(), createBlock(unref(Trigger), mergeProps({
        "popup-visible": unref(computedVisible),
        "onUpdate:popupVisible": _cache[14] || (_cache[14] = ($event) => isRef(computedVisible) ? computedVisible.value = $event : null),
        "unmount-on-close": _ctx.unmountonClose,
        "popup-container": _ctx.popupContainer,
        disabled: unref(disabled),
        "popup-offset": 4,
        trigger: "focus",
        position: "bl",
        "animation-name": "slide-dynamic-origin",
        "need-transform-origin": "",
        "auto-fit-popup-width": "",
        "prevent-focus": "",
        ref_key: "popupRef",
        ref: popupRef
      }, _ctx.triggerProps), {
        content: withCtx(() => [
          createVNode(SelectView, {
            loading: unref(loading),
            scrollbar: _ctx.scrollbar,
            "virtual-list-props": unref(virtualListProps),
            "show-footer-on-empty": unref(showFooterOnEmpty),
            "show-header-on-empty": unref(showHeaderOnEmpty)
          }, null, 8, ["loading", "scrollbar", "virtual-list-props", "show-footer-on-empty", "show-header-on-empty"])
        ]),
        default: withCtx(() => [
          createElementVNode("div", {
            class: normalizeClass([
              "yc-select",
              {
                "yc-select-allow-search": unref(allowSearch),
                "yc-select-allow-clear": showClearBtn.value,
                "yc-select-no-border": !_ctx.bordered
              },
              _ctx.$attrs.class
            ]),
            style: normalizeStyle(_ctx.$attrs.style)
          }, [
            renderSlot(_ctx.$slots, "trigger", {}, () => {
              var _a;
              return [
                !unref(multiple) ? (openBlock(), createBlock(unref(Input), {
                  key: 0,
                  modelValue: unref(computedInputValue),
                  "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => isRef(computedInputValue) ? computedInputValue.value = $event : null),
                  "show-input": unref(computedVisible),
                  readonly: isReadonly.value,
                  disabled: unref(disabled),
                  size: _ctx.size,
                  error: _ctx.error,
                  placeholder: ((_a = unref(selectOptions)[0]) == null ? void 0 : _a.label) || "",
                  ref_key: "inputRef",
                  ref: inputRef,
                  onClick: _cache[2] || (_cache[2] = ($event) => handleEvent("focus")),
                  onBlur: _cache[3] || (_cache[3] = ($event) => handleEvent("blur")),
                  onInput: _cache[4] || (_cache[4] = (v) => handleEvent("search", v)),
                  onPressEnter: _cache[5] || (_cache[5] = ($event) => handleEvent("create"))
                }, {
                  label: withCtx(() => [
                    renderSlot(_ctx.$slots, "label", {
                      data: unref(selectOptions)[0]
                    }, () => {
                      var _a2;
                      return [
                        createElementVNode("span", {
                          class: normalizeClass([
                            {
                              "yc-input-placeholder": !unref(selectOptions).length
                            }
                          ])
                        }, toDisplayString(((_a2 = unref(selectOptions)[0]) == null ? void 0 : _a2.label) || _ctx.placeholder), 3)
                      ];
                    }, true)
                  ]),
                  suffix: withCtx(() => [
                    createVNode(SelectIcon, {
                      "popup-visible": unref(computedVisible),
                      "allow-search": unref(allowSearch),
                      loading: unref(loading),
                      "show-clear-btn": showClearBtn.value,
                      onClear: _cache[0] || (_cache[0] = ($event) => handleEvent("clear"))
                    }, null, 8, ["popup-visible", "allow-search", "loading", "show-clear-btn"])
                  ]),
                  _: 3
                }, 8, ["modelValue", "show-input", "readonly", "disabled", "size", "error", "placeholder"])) : (openBlock(), createBlock(unref(InputTag), {
                  key: 1,
                  "input-value": unref(computedInputValue),
                  "onUpdate:inputValue": _cache[7] || (_cache[7] = ($event) => isRef(computedInputValue) ? computedInputValue.value = $event : null),
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
                  onFocus: _cache[8] || (_cache[8] = ($event) => handleEvent("focus")),
                  onBlur: _cache[9] || (_cache[9] = ($event) => handleEvent("blur")),
                  onInput: _cache[10] || (_cache[10] = (v) => handleEvent("search", v)),
                  onRemove: _cache[11] || (_cache[11] = (v, ev) => _ctx.$emit("remove", v, ev)),
                  onPressEnter: _cache[12] || (_cache[12] = ($event) => handleEvent("create")),
                  "onUpdate:modelValue": _cache[13] || (_cache[13] = (v) => handleEvent("updateValue", v))
                }, {
                  tag: withCtx(({ tag }) => [
                    _ctx.$slots.label ? renderSlot(_ctx.$slots, "label", {
                      key: 0,
                      data: tag
                    }, void 0, true) : createCommentVNode("", true)
                  ]),
                  suffix: withCtx(() => [
                    createVNode(SelectIcon, {
                      "popup-visible": unref(computedVisible),
                      "allow-search": unref(allowSearch),
                      loading: unref(loading),
                      "show-clear-btn": showClearBtn.value,
                      onClear: _cache[6] || (_cache[6] = ($event) => handleEvent("clear"))
                    }, null, 8, ["popup-visible", "allow-search", "loading", "show-clear-btn"])
                  ]),
                  _: 3
                }, 8, ["input-value", "model-value", "placeholder", "readonly", "disabled", "size", "error", "max-tag-count", "tag-nowrap"]))
              ];
            }, true)
          ], 6)
        ]),
        _: 3
      }, 16, ["popup-visible", "unmount-on-close", "popup-container", "disabled"]);
    };
  }
});
export {
  _sfc_main as default
};
