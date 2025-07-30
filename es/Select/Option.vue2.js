import { defineComponent, toRefs, ref, computed, withDirectives, openBlock, createElementBlock, normalizeClass, unref, renderSlot, createCommentVNode, createBlock, withCtx, createElementVNode, createTextVNode, toDisplayString, vShow } from "vue";
import "../node_modules/tinycolor2/esm/tinycolor.js";
import { getDomText } from "../_shared/utils/dom.js";
import { isUndefined } from "../_shared/utils/is.js";
import "../_shared/utils/time.js";
import "../Empty/index.js";
import "../_shared/icons/_Icon.vue.js";
import useContext from "./hooks/useContext.js";
import Checkbox from "../Checkbox/index.js";
const _hoisted_1 = {
  key: 0,
  class: "yc-select-option-icon"
};
const _hoisted_2 = {
  key: 3,
  class: "yc-select-option-suffix"
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  ...{
    name: "Option"
  },
  __name: "Option",
  props: {
    label: { default: "" },
    value: { type: [String, Number, Boolean, Object, Array], default: "" },
    disabled: { type: Boolean, default: false },
    tagProps: {},
    id: {},
    isFallbackOption: { type: Boolean, default: false }
  },
  setup(__props) {
    const props = __props;
    const { label, disabled } = toRefs(props);
    const {
      computedValue,
      multiple,
      limit,
      curIndex,
      options,
      blur,
      filterOption,
      getValue,
      emits,
      collectOption
    } = useContext().inject();
    const contentRef = ref();
    const optionValue = computed(() => {
      return `${props.value}` ? props.value : getDomText(contentRef);
    });
    const optionLabel = computed(() => {
      return props.label ? props.label : getDomText(contentRef);
    });
    const checked = computed(() => {
      if (!multiple.value)
        return false;
      const index = computedValue.value.findIndex((item) => {
        return getValue(item) === getValue(optionValue.value);
      });
      return index != -1;
    });
    const handleSingle = () => {
      if (disabled.value || isUndefined(computedValue.value))
        return;
      computedValue.value = optionValue.value;
      emits("select", optionValue.value);
      blur();
    };
    const handleMuti = (v) => {
      const curValue = computedValue.value;
      const { value } = optionValue;
      if (!v) {
        computedValue.value = curValue.filter((item) => item != value);
      } else {
        if (limit.value > 0 && curValue.length == limit.value) {
          return emits("exceedLimit", value);
        }
        emits("select", optionValue.value);
        computedValue.value = [...curValue, value];
      }
    };
    collectOption(props, optionLabel);
    return (_ctx, _cache) => {
      var _a;
      return withDirectives((openBlock(), createElementBlock("div", {
        class: normalizeClass([
          "yc-select-option",
          {
            "yc-select-option-active": ((_a = unref(options)[unref(curIndex)]) == null ? void 0 : _a.value) == optionValue.value,
            "yc-select-option-disabled": unref(disabled)
          }
        ])
      }, [
        _ctx.$slots.icon ? (openBlock(), createElementBlock("div", _hoisted_1, [
          renderSlot(_ctx.$slots, "icon", {}, void 0, true)
        ])) : createCommentVNode("", true),
        unref(multiple) ? (openBlock(), createBlock(unref(Checkbox), {
          key: 1,
          "model-value": checked.value,
          disabled: unref(disabled),
          "onUpdate:modelValue": handleMuti,
          class: "yc-select-option-content"
        }, {
          default: withCtx(() => [
            createElementVNode("span", {
              ref_key: "contentRef",
              ref: contentRef
            }, [
              renderSlot(_ctx.$slots, "default", {}, () => [
                createTextVNode(toDisplayString(unref(label)), 1)
              ], true)
            ], 512)
          ]),
          _: 3
        }, 8, ["model-value", "disabled"])) : (openBlock(), createElementBlock("div", {
          key: 2,
          class: "yc-select-option-content text-ellipsis",
          ref_key: "contentRef",
          ref: contentRef,
          onClick: handleSingle
        }, [
          renderSlot(_ctx.$slots, "default", {}, () => [
            createTextVNode(toDisplayString(unref(label)), 1)
          ], true)
        ], 512)),
        _ctx.$slots.suffix ? (openBlock(), createElementBlock("div", _hoisted_2, [
          renderSlot(_ctx.$slots, "suffix", {}, void 0, true)
        ])) : createCommentVNode("", true)
      ], 2)), [
        [
          vShow,
          unref(filterOption)({
            ..._ctx.$props,
            label: optionLabel.value
          })
        ]
      ]);
    };
  }
});
export {
  _sfc_main as default
};
