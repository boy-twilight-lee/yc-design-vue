import { defineComponent, toRefs, ref, computed, onMounted, openBlock, createBlock, unref, mergeProps, isRef, createSlots, withCtx, renderSlot, nextTick } from "vue";
import "../node_modules/tinycolor2/esm/tinycolor.js";
import "../_shared/utils/dom.js";
import { isArray, isNull } from "../_shared/utils/is.js";
import "../_shared/utils/time.js";
import "../Empty/index.js";
import "../_shared/icons/_Icon.vue.js";
import useControlValue from "../_shared/utils/control.js";
import useCursor from "../Input/hooks/useCursor.js";
import AutoComplete from "../AutoComplete/index.js";
const _sfc_main = /* @__PURE__ */ defineComponent({
  ...{
    name: "Mention"
  },
  __name: "index",
  props: {
    modelValue: { default: void 0 },
    defaultValue: { default: "" },
    data: { default: () => [] },
    prefix: { default: "@" },
    split: { default: "" },
    type: { default: "input" },
    disabled: { type: Boolean, default: false },
    allowClear: { type: Boolean, default: false }
  },
  emits: ["update:modelValue", "change", "search", "select", "focus", "blur", "clear", "input"],
  setup(__props, { expose: __expose, emit: __emit }) {
    const props = __props;
    const emits = __emit;
    const {
      modelValue,
      defaultValue,
      allowClear,
      disabled,
      prefix,
      split,
      data,
      type: mentionType
    } = toRefs(props);
    const computedValue = useControlValue(
      modelValue,
      defaultValue.value,
      (val) => emits("update:modelValue", val)
    );
    const cursor = ref(0);
    const popupVisible = ref(false);
    const autoCompleteRef = ref();
    const inputRef = ref();
    const prefixTexts = computed(() => {
      return isArray(prefix.value) ? prefix.value.map((ch) => data.value.map((op) => ch + op.value)).flat(1) : data.value.map((op) => prefix.value + op.value);
    });
    const { recordCursor, getCursor } = useCursor(inputRef);
    const showPopup = async (value, ev) => {
      var _a;
      await nextTick();
      recordCursor();
      const { selectionStart } = ev.target;
      cursor.value = getCursor() ?? selectionStart;
      if (isNull(cursor.value) || !data.value.length) {
        return;
      }
      const ch = !cursor.value ? "" : value[cursor.value - 1];
      popupVisible.value = isArray(prefix.value) ? prefix.value.includes(ch) : prefix.value == ch;
      if (!popupVisible.value || mentionType.value != "textarea") {
        return;
      }
      const el = autoCompleteRef.value.getMirrorRef();
      const range = document.createRange();
      const textNode = el.childNodes[0];
      range.setStart(textNode, cursor.value);
      range.setEnd(textNode, cursor.value);
      const { bottom: y, left: x } = range.getBoundingClientRect();
      const { bottom } = inputRef.value.getBoundingClientRect();
      (_a = autoCompleteRef.value) == null ? void 0 : _a.updatePosition(x, y > bottom ? bottom : y);
    };
    const handleEvent = async (type, ev, value = "") => {
      switch (type) {
        case "input":
          {
            emits("input", value, ev);
            showPopup(value, ev);
          }
          break;
        case "select":
          {
            emits("select", value);
            popupVisible.value = false;
            const needSplit = prefixTexts.value.some((prefixText) => {
              return computedValue.value.includes(prefixText);
            });
            if (needSplit) {
              const preValue = computedValue.value.slice(0, cursor.value - 1);
              const prefixCh = computedValue.value.slice(
                cursor.value - 1,
                cursor.value
              );
              const curValue = computedValue.value.slice(cursor.value);
              computedValue.value = preValue + split.value + prefixCh + value + curValue;
            } else {
              computedValue.value = computedValue.value.slice(0, cursor.value) + value + computedValue.value.slice(cursor.value);
            }
          }
          break;
        case "focus":
          {
            emits("focus", ev);
          }
          break;
        case "blur":
          {
            popupVisible.value = false;
            emits("blur", ev);
          }
          break;
        case "keydown": {
          const e = ev;
          if (!["Backspace"].includes(e.key)) {
            return;
          }
          showPopup(
            e.key == "Backspace" ? value : computedValue.value,
            ev
          );
        }
      }
    };
    onMounted(() => {
      var _a;
      inputRef.value = (_a = autoCompleteRef.value) == null ? void 0 : _a.getInputRef();
    });
    __expose({
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
      return openBlock(), createBlock(unref(AutoComplete), mergeProps({
        modelValue: unref(computedValue),
        "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => isRef(computedValue) ? computedValue.value = $event : null),
        popupVisible: popupVisible.value,
        data: unref(data),
        disabled: unref(disabled),
        "allow-clear": unref(allowClear),
        "is-select-set-value": false,
        "is-search": false,
        type: _ctx.type,
        "trigger-props": {
          autoFitPopupWidth: _ctx.type == "input",
          autoSetPosition: _ctx.type == "textarea"
        },
        class: "yc-mention",
        ref_key: "autoCompleteRef",
        ref: autoCompleteRef
      }, _ctx.$attrs, {
        onInput: _cache[1] || (_cache[1] = (v, ev) => handleEvent("input", ev, v)),
        onChange: _cache[2] || (_cache[2] = (v) => _ctx.$emit("change", v)),
        onSearch: _cache[3] || (_cache[3] = (v) => _ctx.$emit("search", v)),
        onClear: _cache[4] || (_cache[4] = (ev) => _ctx.$emit("clear", ev)),
        onSelect: _cache[5] || (_cache[5] = (v) => handleEvent("select", null, v)),
        onFocus: _cache[6] || (_cache[6] = (ev) => handleEvent("focus", ev)),
        onBlur: _cache[7] || (_cache[7] = (ev) => handleEvent("blur", ev)),
        onKeydown: _cache[8] || (_cache[8] = (ev) => handleEvent("keydown", ev))
      }), createSlots({ _: 2 }, [
        _ctx.$slots.option ? {
          name: "option",
          fn: withCtx(({ data: data2 }) => [
            renderSlot(_ctx.$slots, "option", { data: data2 })
          ]),
          key: "0"
        } : void 0
      ]), 1040, ["modelValue", "popupVisible", "data", "disabled", "allow-clear", "type", "trigger-props"]);
    };
  }
});
export {
  _sfc_main as default
};
