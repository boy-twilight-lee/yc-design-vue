import { defineComponent, toRefs, ref, computed, openBlock, createElementBlock, normalizeClass, unref, createBlock, withCtx, renderSlot, createCommentVNode, createElementVNode, withDirectives, mergeProps, withKeys, vShow, createSlots } from "vue";
import "../node_modules/tinycolor2/esm/tinycolor.js";
import "../_shared/utils/dom.js";
import "../_shared/utils/time.js";
import { getGlobalConfig } from "../_shared/utils/global-config.js";
import useControlValue from "../_shared/utils/control.js";
import useLimitedInput from "./hooks/useLimitedInput.js";
import IconButton from "../_shared/components/IconButton.vue.js";
import _sfc_main$1 from "../_shared/components/PreventFocus.vue.js";
import "../_shared/components/ExpandTransition.vue.js";
import InputSuffix from "./InputSuffix.vue.js";
const _hoisted_1 = ["value", "type", "disabled", "readonly", "placeholder"];
const _sfc_main = /* @__PURE__ */ defineComponent({
  ...{
    name: "Input"
  },
  __name: "Input",
  props: {
    modelValue: { default: void 0 },
    defaultValue: { default: "" },
    size: { default: void 0 },
    allowClear: { type: Boolean, default: false },
    disabled: { type: Boolean, default: false },
    readonly: { type: Boolean, default: false },
    error: { type: Boolean, default: void 0 },
    placeholder: { default: "" },
    maxLength: { default: void 0 },
    wordLength: { type: Function, default: (value) => {
      return value.length;
    } },
    wordSlice: { type: Function, default: (value, maxLength) => {
      return value.slice(0, maxLength);
    } },
    showWordLimit: { type: Boolean, default: false },
    inputAttrs: { default: () => {
      return {};
    } },
    isPassword: { type: Boolean, default: false },
    visibility: { type: Boolean, default: void 0 },
    defaultVisibility: { type: Boolean, default: false },
    invisibleButton: { type: Boolean, default: true },
    showInput: { type: Boolean, default: false }
  },
  emits: ["update:modelValue", "update:visibility", "input", "change", "visibility-change", "pressEnter", "keydown", "clear", "focus", "blur"],
  setup(__props, { expose: __expose, emit: __emit }) {
    const props = __props;
    const emits = __emit;
    const { visibility, defaultVisibility } = toRefs(props);
    const { size } = getGlobalConfig(props);
    const inputRef = ref();
    const computedVisibility = useControlValue(
      visibility,
      defaultVisibility.value,
      (val) => {
        emits("update:visibility", val);
        emits("visibility-change", val);
      }
    );
    const type = computed(() => {
      return computedVisibility.value ? "password" : "text";
    });
    const {
      computedValue,
      showWordLimit,
      showClearBtn,
      curLength,
      maxLength,
      error,
      handleInput,
      handleComposition
    } = useLimitedInput({
      props,
      emits,
      inputRef
    });
    const handleEvent = async (type2, e) => {
      switch (type2) {
        case "input":
          {
            handleInput(e);
          }
          break;
        case "change":
          {
            emits("change", computedValue.value, e);
          }
          break;
        case "focus":
        case "blur":
          {
            emits(type2, e);
          }
          break;
        case "clear":
          {
            computedValue.value = "";
            emits("clear", e);
          }
          break;
        case "keydown":
          {
            const ev = e;
            emits("keydown", ev);
            ev.key == "Enter" && emits("pressEnter", ev);
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
        return inputRef.value;
      }
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", {
        class: normalizeClass([
          "yc-input-outer",
          `yc-input-size-${unref(size)}`,
          {
            "yc-input-disabled": _ctx.disabled,
            "yc-input-error": unref(error),
            "yc-input-has-prepend": _ctx.$slots.prepend,
            "yc-input-has-append": _ctx.$slots.append
          }
        ])
      }, [
        _ctx.$slots.prepend ? (openBlock(), createBlock(unref(_sfc_main$1), {
          key: 0,
          class: "yc-input-prepend"
        }, {
          default: withCtx(() => [
            renderSlot(_ctx.$slots, "prepend", {}, void 0, true)
          ]),
          _: 3
        })) : createCommentVNode("", true),
        createElementVNode("div", {
          class: normalizeClass(["yc-input-wrapper", { "yc-input-wrapper-disabled": _ctx.disabled }])
        }, [
          _ctx.$slots.prefix ? (openBlock(), createBlock(unref(_sfc_main$1), {
            key: 0,
            class: "yc-input-prefix"
          }, {
            default: withCtx(() => [
              renderSlot(_ctx.$slots, "prefix", {}, void 0, true)
            ]),
            _: 3
          })) : createCommentVNode("", true),
          withDirectives(createElementVNode("input", mergeProps({
            value: unref(computedValue),
            type: type.value,
            disabled: _ctx.disabled,
            readonly: _ctx.readonly,
            placeholder: _ctx.placeholder
          }, _ctx.inputAttrs, {
            class: "yc-input",
            ref_key: "inputRef",
            ref: inputRef,
            onInput: _cache[0] || (_cache[0] = ($event) => handleEvent("input", $event)),
            onChange: _cache[1] || (_cache[1] = ($event) => handleEvent("change", $event)),
            onCompositionstart: _cache[2] || (_cache[2] = //@ts-ignore
            (...args) => unref(handleComposition) && unref(handleComposition)(...args)),
            onCompositionupdate: _cache[3] || (_cache[3] = //@ts-ignore
            (...args) => unref(handleComposition) && unref(handleComposition)(...args)),
            onCompositionend: _cache[4] || (_cache[4] = //@ts-ignore
            (...args) => unref(handleComposition) && unref(handleComposition)(...args)),
            onFocus: _cache[5] || (_cache[5] = ($event) => handleEvent("focus", $event)),
            onBlur: _cache[6] || (_cache[6] = ($event) => handleEvent("blur", $event)),
            onKeydown: _cache[7] || (_cache[7] = withKeys(($event) => handleEvent("keydown", $event), ["enter"]))
          }), null, 16, _hoisted_1), [
            [vShow, !_ctx.$slots.label || _ctx.$slots.label && _ctx.showInput]
          ]),
          _ctx.$slots.label ? withDirectives((openBlock(), createBlock(unref(_sfc_main$1), {
            key: 1,
            class: "yc-input text-ellipsis"
          }, {
            default: withCtx(() => [
              renderSlot(_ctx.$slots, "label", {}, void 0, true)
            ]),
            _: 3
          }, 512)), [
            [vShow, !_ctx.showInput]
          ]) : createCommentVNode("", true),
          unref(showClearBtn) ? (openBlock(), createBlock(unref(IconButton), {
            key: 2,
            class: "yc-input-clear-button",
            onClick: _cache[8] || (_cache[8] = ($event) => handleEvent("clear", $event))
          })) : createCommentVNode("", true),
          _ctx.$slots.suffix || unref(showWordLimit) || _ctx.isPassword && _ctx.invisibleButton ? (openBlock(), createBlock(InputSuffix, {
            key: 3,
            "cur-length": unref(curLength),
            "max-length": unref(maxLength),
            "computed-value": unref(computedValue),
            "show-word-limit": unref(showWordLimit),
            "computed-visibility": unref(computedVisibility),
            "invisible-button": _ctx.invisibleButton,
            "is-password": _ctx.isPassword,
            onVisibilityChange: _cache[9] || (_cache[9] = (v) => computedVisibility.value = v)
          }, createSlots({ _: 2 }, [
            _ctx.$slots.suffix ? {
              name: "suffix",
              fn: withCtx(() => [
                renderSlot(_ctx.$slots, "suffix", {}, void 0, true)
              ]),
              key: "0"
            } : void 0
          ]), 1032, ["cur-length", "max-length", "computed-value", "show-word-limit", "computed-visibility", "invisible-button", "is-password"])) : createCommentVNode("", true)
        ], 2),
        _ctx.$slots.append ? (openBlock(), createBlock(unref(_sfc_main$1), {
          key: 1,
          class: "yc-input-append"
        }, {
          default: withCtx(() => [
            renderSlot(_ctx.$slots, "append", {}, void 0, true)
          ]),
          _: 3
        })) : createCommentVNode("", true)
      ], 2);
    };
  }
});
export {
  _sfc_main as default
};
