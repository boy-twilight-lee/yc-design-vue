import { defineComponent, toRefs, ref, computed, openBlock, createElementBlock, normalizeClass, unref, createBlock, withCtx, renderSlot, createCommentVNode, createElementVNode, toDisplayString, createVNode, TransitionGroup, Fragment, renderList, createTextVNode, withDirectives, isRef, normalizeStyle, withKeys, vModelText } from "vue";
import { nanoid } from "../node_modules/nanoid/index.browser.js";
import { useElementSize } from "../node_modules/@vueuse/core/index.js";
import "../node_modules/tinycolor2/esm/tinycolor.js";
import "../_shared/utils/dom.js";
import { valueToPx } from "../_shared/utils/fn.js";
import { isObject, isBoolean } from "../_shared/utils/is.js";
import "../_shared/utils/time.js";
import { getGlobalConfig } from "../_shared/utils/global-config.js";
import useControlValue from "../_shared/utils/control.js";
import Tag from "../Tag/index.js";
import IconButton from "../_shared/components/IconButton.vue.js";
import _sfc_main$1 from "../_shared/components/PreventFocus.vue.js";
import "../_shared/components/ExpandTransition.vue2.js";
const _hoisted_1 = ["disabled", "readonly", "placeholder"];
const _sfc_main = /* @__PURE__ */ defineComponent({
  ...{
    name: "InputTag"
  },
  __name: "index",
  props: {
    modelValue: { default: void 0 },
    defaultValue: { default: () => [] },
    inputValue: { default: void 0 },
    defaultInputValue: { default: "" },
    placeholder: { default: "" },
    disabled: { type: Boolean, default: false },
    error: { type: Boolean, default: false },
    readonly: { type: Boolean, default: false },
    allowClear: { type: Boolean, default: false },
    size: { default: void 0 },
    maxTagCount: { default: 0 },
    retainInputValue: { type: [Boolean, Object], default: false },
    formatTag: {},
    uniqueValue: { type: Boolean, default: false },
    tagNowrap: { type: Boolean, default: false },
    fieldNames: { default: () => {
      return {
        id: "id",
        label: "label",
        value: "value",
        closeable: "closeable",
        tagProps: "tagProps"
      };
    } },
    allowCreate: { type: Boolean, default: true }
  },
  emits: ["update:modelValue", "update:inputValue", "input", "input-value-change", "focus", "blur", "press-enter", "remove", "clear"],
  setup(__props, { expose: __expose, emit: __emit }) {
    const props = __props;
    const emits = __emit;
    const {
      modelValue,
      defaultValue,
      inputValue,
      defaultInputValue,
      allowClear,
      disabled,
      readonly,
      uniqueValue,
      retainInputValue,
      allowCreate,
      maxTagCount,
      fieldNames,
      tagNowrap
    } = toRefs(props);
    const { size } = getGlobalConfig(props);
    const inputRef = ref();
    const mirrorRef = ref();
    const fieldKey = computed(() => {
      return Object.fromEntries(
        ["id", "label", "value", "closable", "tagProps"].map((key) => [
          key,
          fieldNames.value[key] ?? key
        ])
      );
    });
    const { width } = useElementSize(mirrorRef, void 0, {
      box: "border-box"
    });
    const computedValue = useControlValue(
      modelValue,
      defaultValue.value,
      (val) => emits("update:modelValue", val),
      (val) => {
        const { id, label, value, closable, tagProps } = fieldKey.value;
        return val.map((v) => {
          if (isObject(v)) {
            const val2 = v;
            val2[id] = val2[id] ?? nanoid();
            val2[closable] = val2[closable] ?? true;
            val2[tagProps] = val2[tagProps] ?? {
              bordered: true,
              nowrap: tagNowrap.value
            };
            return v;
          }
          const tagData = {};
          tagData[id] = nanoid();
          tagData[label] = v;
          tagData[value] = v;
          tagData[closable] = true;
          tagData[tagProps] = {
            bordered: true,
            nowrap: tagNowrap.value
          };
          return tagData;
        });
      }
    );
    const computedInputValue = useControlValue(
      inputValue,
      defaultInputValue.value,
      (val) => {
        emits("update:inputValue", val);
      }
    );
    const curList = computed(() => {
      const visibleList = maxTagCount.value > 0 ? computedValue.value.slice(0, maxTagCount.value) : computedValue.value;
      return {
        visibleList,
        hideList: computedValue.value.slice(maxTagCount.value)
      };
    });
    const showClearBtn = computed(
      () => allowClear.value && !disabled.value && !readonly.value && computedValue.value.length
    );
    const clearInputValue = () => {
      if (isBoolean(retainInputValue.value) && retainInputValue.value || isObject(retainInputValue.value) && retainInputValue.value.create) {
        return;
      }
      computedInputValue.value = "";
    };
    const handleEvent = (type, e, id) => {
      var _a, _b;
      const inputVal = (_a = computedInputValue.value) == null ? void 0 : _a.trim();
      switch (type) {
        case "input":
        case "input-value-change":
          {
            const { value } = e.target;
            emits(type, value, e);
          }
          break;
        case "focus":
        case "blur":
          {
            emits(type, e);
            if (type == "blur") {
              clearInputValue();
            }
          }
          break;
        case "pressEnter":
          {
            const { label, value, id: id2 } = fieldKey.value;
            const isUnique = !uniqueValue.value || uniqueValue.value && !computedValue.value.find(
              (item) => ((item == null ? void 0 : item[value]) ?? item) == inputVal
            );
            if (!inputVal || !allowCreate.value || !isUnique) {
              return;
            }
            const tagData = {};
            tagData[id2] = nanoid();
            tagData[label] = computedInputValue.value;
            tagData[value] = computedInputValue.value;
            computedValue.value = [...computedValue.value, tagData];
            emits("press-enter", e);
            clearInputValue();
          }
          break;
        case "close":
          {
            const arr = computedValue.value;
            const value = arr.find((v) => v.id == id);
            computedValue.value = arr.filter((v) => v.id != id);
            emits("remove", value == null ? void 0 : value.value, e);
          }
          break;
        case "remove":
          {
            if (inputVal || !((_b = computedValue.value) == null ? void 0 : _b.length))
              return;
            const value = computedValue.value[computedValue.value.length - 1];
            computedValue.value = computedValue.value.slice(
              0,
              computedValue.value.length - 1
            );
            emits("remove", value.value, e);
          }
          break;
        case "clear":
          {
            computedValue.value = [];
            emits("clear", e);
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
      }
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", {
        class: normalizeClass([
          "yc-input-tag",
          `yc-input-tag-size-${unref(size)}`,
          {
            "yc-input-tag-no-value": !unref(computedValue).length,
            "yc-input-tag-disabled": unref(disabled),
            "yc-input-tag-error": _ctx.error,
            "yc-input-tag-has-suffix": _ctx.$slots.suffix || showClearBtn.value
          }
        ]),
        onMousedown: _cache[8] || (_cache[8] = (e) => e.preventDefault()),
        onClick: _cache[9] || (_cache[9] = ($event) => {
          var _a;
          return (_a = inputRef.value) == null ? void 0 : _a.focus();
        })
      }, [
        _ctx.$slots.prefix ? (openBlock(), createBlock(unref(_sfc_main$1), {
          key: 0,
          class: "yc-input-tag-prefix"
        }, {
          default: withCtx(() => [
            renderSlot(_ctx.$slots, "prefix", {}, void 0, true)
          ]),
          _: 3
        })) : createCommentVNode("", true),
        createElementVNode("div", {
          class: "yc-input-tag-mirror",
          ref_key: "mirrorRef",
          ref: mirrorRef
        }, toDisplayString(unref(computedInputValue) || (unref(computedValue).length ? "" : _ctx.placeholder)), 513),
        createVNode(TransitionGroup, {
          name: "input-tag-zoom",
          tag: "div",
          class: "yc-input-tag-inner"
        }, {
          default: withCtx(() => [
            (openBlock(true), createElementBlock(Fragment, null, renderList(curList.value.visibleList, (item) => {
              return renderSlot(_ctx.$slots, "tag", {
                key: item == null ? void 0 : item[fieldKey.value.id],
                tag: item
              }, () => [
                createVNode(unref(Tag), {
                  closable: item[fieldKey.value.closable],
                  bordered: item[fieldKey.value.tagProps].bordered,
                  nowrap: item[fieldKey.value.tagProps].nowrap,
                  checked: false,
                  onClose: (ev) => handleEvent("close", ev, item == null ? void 0 : item[fieldKey.value.id])
                }, {
                  default: withCtx(() => [
                    createTextVNode(toDisplayString(_ctx.formatTag ? _ctx.formatTag(item) : item[fieldKey.value.label]), 1)
                  ]),
                  _: 2
                }, 1032, ["closable", "bordered", "nowrap", "onClose"])
              ], true);
            }), 128)),
            unref(maxTagCount) > 0 && unref(computedValue).length > unref(maxTagCount) ? (openBlock(), createBlock(unref(Tag), {
              nowrap: unref(tagNowrap),
              checked: false,
              bordered: "",
              key: "yc-select-value-tag"
            }, {
              default: withCtx(() => [
                createTextVNode(" +" + toDisplayString(curList.value.hideList.length) + "... ", 1)
              ]),
              _: 1
            }, 8, ["nowrap"])) : createCommentVNode("", true),
            withDirectives(createElementVNode("input", {
              "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => isRef(computedInputValue) ? computedInputValue.value = $event : null),
              key: "yc-input-tag-input",
              disabled: unref(disabled),
              readonly: unref(readonly),
              placeholder: unref(computedValue).length ? "" : _ctx.placeholder,
              style: normalizeStyle({
                width: unref(valueToPx)(unref(width))
              }),
              class: "yc-input-tag-input",
              ref_key: "inputRef",
              ref: inputRef,
              onInput: _cache[1] || (_cache[1] = ($event) => handleEvent("input", $event)),
              onChange: _cache[2] || (_cache[2] = ($event) => handleEvent("input-value-change", $event)),
              onFocus: _cache[3] || (_cache[3] = ($event) => handleEvent("focus", $event)),
              onBlur: _cache[4] || (_cache[4] = ($event) => handleEvent("blur", $event)),
              onKeydown: [
                _cache[5] || (_cache[5] = withKeys(($event) => handleEvent("pressEnter", $event), ["enter"])),
                _cache[6] || (_cache[6] = withKeys(($event) => handleEvent("remove", $event), ["delete"]))
              ]
            }, null, 44, _hoisted_1), [
              [vModelText, unref(computedInputValue)]
            ])
          ]),
          _: 3
        }),
        _ctx.$slots.suffix || showClearBtn.value ? (openBlock(), createBlock(unref(_sfc_main$1), {
          key: 1,
          class: "yc-input-tag-suffix"
        }, {
          default: withCtx(() => [
            showClearBtn.value ? (openBlock(), createBlock(unref(IconButton), {
              key: 0,
              class: "yc-input-tag-clear-button",
              onClick: _cache[7] || (_cache[7] = ($event) => handleEvent("clear", $event))
            })) : createCommentVNode("", true),
            renderSlot(_ctx.$slots, "suffix", {}, void 0, true)
          ]),
          _: 3
        })) : createCommentVNode("", true)
      ], 34);
    };
  }
});
export {
  _sfc_main as default
};
