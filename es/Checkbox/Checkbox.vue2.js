import { defineComponent, toRefs, computed, openBlock, createElementBlock, normalizeClass, createElementVNode, renderSlot, createVNode, unref, withCtx, createCommentVNode } from "vue";
import "../node_modules/tinycolor2/esm/tinycolor.js";
import "../_shared/utils/dom.js";
import { isUndefined } from "../_shared/utils/is.js";
import "../_shared/utils/time.js";
import "../Empty/index.js";
import "../_shared/icons/_Icon.vue.js";
import _sfc_main$1 from "../_shared/icons/IconCheckboxChecked.vue.js";
import useControlValue from "../_shared/utils/control.js";
import useContext from "./hooks/useContext.js";
import IconButton from "../_shared/components/IconButton.vue.js";
import "../_shared/components/ExpandTransition.vue.js";
const _hoisted_1 = ["value", "disabled", "checked"];
const _hoisted_2 = { class: "yc-checkbox-icon" };
const _hoisted_3 = {
  key: 0,
  class: "yc-checkbox-label text-ellipsis"
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  ...{
    name: "Checkbox"
  },
  __name: "Checkbox",
  props: {
    modelValue: { type: Boolean, default: void 0 },
    defaultChecked: { type: Boolean, default: false },
    disabled: { type: Boolean, default: false },
    value: { type: [String, Number, Boolean], default: "" },
    indeterminate: { type: Boolean, default: false }
  },
  emits: ["update:modelValue", "change"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emits = __emit;
    const {
      modelValue,
      defaultChecked,
      value: checkboxValue,
      disabled
    } = toRefs(props);
    const {
      computedValue,
      max,
      hasGroup,
      disabled: injectDisabled
    } = useContext().inject();
    const checked = useControlValue(
      modelValue,
      defaultChecked.value,
      (val) => {
        emits("update:modelValue", val);
      }
    );
    const computedChecked = computed(() => {
      return hasGroup.value ? computedValue.value.includes(checkboxValue.value) : checked.value;
    });
    const computedDisabled = computed(() => {
      return disabled.value || injectDisabled.value || !isUndefined(max.value) && !computedChecked.value && computedValue.value.length >= max.value;
    });
    const handleCollect = (e) => {
      var _a;
      if (!hasGroup.value) {
        const curChecked = (_a = e.target) == null ? void 0 : _a.checked;
        checked.value = curChecked;
        emits("change", curChecked, e);
      } else {
        computedValue.value = computedChecked.value ? computedValue.value.filter((item) => item != checkboxValue.value) : [...computedValue.value, checkboxValue.value];
      }
    };
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("label", {
        class: normalizeClass([
          "yc-checkbox",
          {
            "yc-checkbox-disabled": computedDisabled.value,
            "yc-checkbox-unchecked": !computedChecked.value && !_ctx.indeterminate,
            "yc-checkbox-indeterminate": !computedChecked.value && _ctx.indeterminate,
            "yc-checkbox-checked": computedChecked.value
          }
        ])
      }, [
        createElementVNode("input", {
          type: "checkbox",
          class: "yc-checkbox-target",
          value: _ctx.value,
          disabled: computedDisabled.value,
          checked: computedChecked.value,
          onChange: handleCollect
        }, null, 40, _hoisted_1),
        renderSlot(_ctx.$slots, "checkbox", {
          checked: computedChecked.value,
          disabled: computedDisabled.value
        }, () => [
          createVNode(unref(IconButton), {
            "hover-size": 24,
            "hover-color": computedChecked.value || computedDisabled.value ? "transparent" : "rgb(242, 243, 245)"
          }, {
            default: withCtx(() => [
              createElementVNode("span", _hoisted_2, [
                createVNode(unref(_sfc_main$1), { size: [8, 10] })
              ])
            ]),
            _: 1
          }, 8, ["hover-color"]),
          _ctx.$slots.default ? (openBlock(), createElementBlock("span", _hoisted_3, [
            renderSlot(_ctx.$slots, "default", {}, void 0, true)
          ])) : createCommentVNode("", true)
        ], true)
      ], 2);
    };
  }
});
export {
  _sfc_main as default
};
