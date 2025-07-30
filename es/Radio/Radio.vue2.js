import { defineComponent, toRefs, computed, openBlock, createElementBlock, normalizeClass, unref, createElementVNode, renderSlot, Fragment, createVNode, withCtx, createCommentVNode } from "vue";
import "../node_modules/tinycolor2/esm/tinycolor.js";
import "../_shared/utils/dom.js";
import "../_shared/utils/time.js";
import "../Empty/index.js";
import "../_shared/icons/_Icon.vue.js";
import useControlValue from "../_shared/utils/control.js";
import useContext from "./hooks/useContext.js";
import IconButton from "../_shared/components/IconButton.vue.js";
import "../_shared/components/ExpandTransition.vue2.js";
const _hoisted_1 = ["value", "checked", "disabled"];
const _hoisted_2 = {
  key: 0,
  class: "yc-radio-label text-ellipsis"
};
const _hoisted_3 = {
  key: 1,
  class: "yc-radio-button-content"
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  ...{
    name: "Radio"
  },
  __name: "Radio",
  props: {
    modelValue: { type: [String, Number, Boolean], default: void 0 },
    defaultChecked: { type: Boolean, default: false },
    value: { type: [String, Number, Boolean], default: true },
    type: { default: void 0 },
    disabled: { type: Boolean, default: false }
  },
  emits: ["update:modelValue", "change"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emits = __emit;
    const {
      modelValue,
      defaultChecked,
      value: radioValue,
      disabled,
      type
    } = toRefs(props);
    const {
      computedValue: _computedValue,
      disabled: injectDisabled,
      type: injectType,
      size,
      hasGroup,
      emits: _emits
    } = useContext().inject();
    const computedValue = useControlValue(
      modelValue,
      defaultChecked.value,
      (val) => {
        emits("update:modelValue", val);
      }
    );
    const checked = computed(() => {
      return hasGroup.value ? _computedValue.value == radioValue.value : computedValue.value;
    });
    const computedDisabled = computed(() => {
      return injectDisabled.value || disabled.value;
    });
    const computedType = computed(() => {
      return type.value ?? injectType.value;
    });
    const handleChange = (e) => {
      if (computedDisabled.value)
        return;
      if (hasGroup.value) {
        _computedValue.value = radioValue.value;
      } else {
        computedValue.value = radioValue.value;
        emits("change", radioValue.value, e);
      }
    };
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("label", {
        class: normalizeClass([
          `yc-radio-button-size-${unref(size)}`,
          `yc-radio${computedType.value == "radio" ? "" : "-button"}`,
          `yc-radio-${checked.value ? "checked" : "unchecked"}`,
          {
            "yc-radio-disabled": computedDisabled.value
          }
        ]),
        onClick: handleChange
      }, [
        createElementVNode("input", {
          type: "radio",
          class: "yc-radio-target",
          value: _ctx.value,
          checked: checked.value,
          disabled: computedDisabled.value
        }, null, 8, _hoisted_1),
        renderSlot(_ctx.$slots, "radio", {
          checked: checked.value,
          disabled: computedDisabled.value
        }, () => [
          computedType.value == "radio" ? (openBlock(), createElementBlock(Fragment, { key: 0 }, [
            createVNode(unref(IconButton), {
              "hover-size": 24,
              "hover-color": checked.value || computedDisabled.value ? "transparent" : "rgb(242, 243, 245)"
            }, {
              default: withCtx(() => _cache[0] || (_cache[0] = [
                createElementVNode("span", { class: "yc-radio-icon" }, null, -1)
              ])),
              _: 1
            }, 8, ["hover-color"]),
            _ctx.$slots.default ? (openBlock(), createElementBlock("span", _hoisted_2, [
              renderSlot(_ctx.$slots, "default", {}, void 0, true)
            ])) : createCommentVNode("", true)
          ], 64)) : (openBlock(), createElementBlock("span", _hoisted_3, [
            renderSlot(_ctx.$slots, "default", {}, void 0, true)
          ]))
        ], true)
      ], 2);
    };
  }
});
export {
  _sfc_main as default
};
