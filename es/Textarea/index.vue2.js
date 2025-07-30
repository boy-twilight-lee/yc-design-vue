import { defineComponent, toRefs, ref, openBlock, createElementBlock, normalizeClass, unref, toDisplayString, createCommentVNode, createElementVNode, normalizeStyle, createBlock, withCtx, createTextVNode } from "vue";
import useTextareaHeight from "./hooks/useTextareaHeight.js";
import useLimitedInput from "../Input/hooks/useLimitedInput.js";
import IconButton from "../_shared/components/IconButton.vue.js";
import _sfc_main$1 from "../_shared/components/PreventFocus.vue.js";
import "../node_modules/tinycolor2/esm/tinycolor.js";
import "../_shared/utils/dom.js";
import "../_shared/utils/time.js";
import "../Empty/index.js";
import "../_shared/icons/_Icon.vue.js";
import "../_shared/components/ExpandTransition.vue.js";
const _hoisted_1 = ["value", "disabled", "readonly", "placeholder"];
const _sfc_main = /* @__PURE__ */ defineComponent({
  ...{
    name: "Textarea"
  },
  __name: "index",
  props: {
    modelValue: { default: void 0 },
    defaultValue: { default: "" },
    placeholder: { default: "" },
    disabled: { type: Boolean, default: false },
    error: { type: [Boolean, Object], default: void 0 },
    maxLength: { default: void 0 },
    showWordLimit: { type: Boolean, default: false },
    allowClear: { type: Boolean, default: false },
    readonly: { type: Boolean, default: false },
    autoSize: { type: [Boolean, Object], default: false },
    wordLength: { type: Function, default: (value) => {
      return value.length;
    } },
    wordSlice: { type: Function, default: (value, maxLength) => {
      return value.slice(0, maxLength);
    } },
    enterPrevent: { type: Boolean, default: false },
    showMirror: { type: Boolean, default: false }
  },
  emits: ["update:modelValue", "input", "change", "clear", "focus", "blur", "keydown"],
  setup(__props, { expose: __expose, emit: __emit }) {
    const props = __props;
    const emits = __emit;
    const { autoSize } = toRefs(props);
    const inputRef = ref();
    const mirrorRef = ref();
    const {
      error,
      computedValue,
      showWordLimit,
      showClearBtn,
      curLength,
      maxLength,
      handleInput,
      handleComposition
    } = useLimitedInput({
      props,
      emits,
      inputRef
    });
    const { style } = useTextareaHeight(mirrorRef, autoSize.value);
    const handleEvent = async (type, e) => {
      switch (type) {
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
            emits(type, e);
          }
          break;
        case "clear":
          {
            computedValue.value = "";
            emits("clear", e);
          }
          break;
      }
    };
    __expose({
      getInputRef() {
        return inputRef.value;
      },
      getMirrorRef() {
        return mirrorRef.value;
      },
      focus() {
        var _a;
        (_a = inputRef.value) == null ? void 0 : _a.focus();
      },
      blur() {
        var _a;
        (_a = inputRef.value) == null ? void 0 : _a.blur();
      }
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", {
        class: normalizeClass([
          "yc-textarea-wrapper",
          {
            "yc-textarea-disabled": _ctx.disabled,
            "yc-textarea-error": unref(error),
            "yc-textarea-auto-size": unref(autoSize)
          }
        ])
      }, [
        unref(autoSize) || _ctx.showMirror ? (openBlock(), createElementBlock("div", {
          key: 0,
          class: "yc-textarea-mirror",
          ref_key: "mirrorRef",
          ref: mirrorRef
        }, toDisplayString(unref(computedValue)), 513)) : createCommentVNode("", true),
        createElementVNode("textarea", {
          value: unref(computedValue),
          disabled: _ctx.disabled,
          readonly: _ctx.readonly,
          placeholder: _ctx.placeholder,
          style: normalizeStyle(unref(style)),
          class: "yc-textarea",
          ref_key: "inputRef",
          ref: inputRef,
          onCompositionstart: _cache[0] || (_cache[0] = //@ts-ignore
          (...args) => unref(handleComposition) && unref(handleComposition)(...args)),
          onCompositionupdate: _cache[1] || (_cache[1] = //@ts-ignore
          (...args) => unref(handleComposition) && unref(handleComposition)(...args)),
          onCompositionend: _cache[2] || (_cache[2] = //@ts-ignore
          (...args) => unref(handleComposition) && unref(handleComposition)(...args)),
          onKeydown: _cache[3] || (_cache[3] = (ev) => {
            ev.key == "Enter" && _ctx.enterPrevent && ev.preventDefault();
            _ctx.$emit("keydown", ev);
          }),
          onInput: _cache[4] || (_cache[4] = ($event) => handleEvent("input", $event)),
          onChange: _cache[5] || (_cache[5] = ($event) => handleEvent("change", $event)),
          onFocus: _cache[6] || (_cache[6] = ($event) => handleEvent("focus", $event)),
          onBlur: _cache[7] || (_cache[7] = ($event) => handleEvent("blur", $event))
        }, null, 44, _hoisted_1),
        unref(showWordLimit) ? (openBlock(), createBlock(unref(_sfc_main$1), {
          key: 1,
          tag: "span",
          class: "yc-textarea-word-limit"
        }, {
          default: withCtx(() => [
            createTextVNode(toDisplayString(unref(curLength)) + " / " + toDisplayString(unref(maxLength)), 1)
          ]),
          _: 1
        })) : createCommentVNode("", true),
        unref(showClearBtn) ? (openBlock(), createBlock(unref(IconButton), {
          key: 2,
          class: "yc-textarea-clear-button",
          onClick: _cache[8] || (_cache[8] = ($event) => handleEvent("clear", $event))
        })) : createCommentVNode("", true)
      ], 2);
    };
  }
});
export {
  _sfc_main as default
};
