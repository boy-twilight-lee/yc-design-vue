import { defineComponent, toRefs, ref, watch, openBlock, createElementBlock, createElementVNode, createVNode, unref, createBlock, withCtx, createTextVNode, Fragment, createCommentVNode } from "vue";
import { parseColor } from "../_shared/utils/color.js";
import "../_shared/utils/dom.js";
import "../_shared/utils/time.js";
import "../Empty/index.js";
import "../_shared/icons/_Icon.vue.js";
import { COLOR_PICKER_FORMAT_OPTIONS } from "../_shared/constants/index.js";
import Select from "../Select/index.js";
import Input from "../Input/index.js";
import InputNumber from "../InputNumber/index.js";
const _hoisted_1 = { class: "yc-color-picker-input-wrapper" };
const _hoisted_2 = { class: "yc-color-picker-format" };
const _hoisted_3 = { class: "yc-color-picker-color" };
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "ColorInput",
  props: {
    color: {},
    baseColor: {},
    alpha: {},
    disabled: { type: Boolean },
    disabledAlpha: { type: Boolean }
  },
  emits: ["update:color", "update:baseColor", "update:alpha", "change"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emits = __emit;
    const { color, alpha: _alpha } = toRefs(props);
    const format = ref("hex");
    const hex = ref("");
    const rgb = ref({});
    const alpha = ref(_alpha.value);
    const handleSet = (type) => {
      if (type == "hex") {
        const a = parseColor(color.value).getAlpha();
        const resultColor = parseColor(hex.value).setAlpha(a).toHex8();
        emits("update:color", resultColor);
        emits("update:baseColor", resultColor);
        emits("change", resultColor, "color");
      } else if (type == "rgb") {
        const { r, g, b } = rgb.value;
        const resultColor = `rgb(${r},${g},${b})`;
        emits("update:color", resultColor);
        emits("update:baseColor", resultColor);
        emits("change", resultColor, "color");
      } else {
        const a = +(alpha.value / 100).toFixed(2);
        const resultColor = parseColor(color.value).setAlpha(a).toRgbString();
        emits("update:color", resultColor);
        emits("update:alpha", alpha.value);
        emits("change", resultColor, "alpha");
      }
    };
    watch(
      () => color.value,
      () => {
        hex.value = parseColor(color.value).toHex();
        rgb.value = parseColor(color.value).toRgb();
      },
      {
        immediate: true
      }
    );
    watch(
      () => _alpha.value,
      () => {
        alpha.value = _alpha.value * 100;
      }
    );
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1, [
        createElementVNode("div", _hoisted_2, [
          createVNode(unref(Select), {
            modelValue: format.value,
            "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => format.value = $event),
            options: unref(COLOR_PICKER_FORMAT_OPTIONS),
            "trigger-props": {
              contentClass: "yc-color-picker-format-popup-content"
            },
            size: "mini"
          }, null, 8, ["modelValue", "options"])
        ]),
        createElementVNode("div", _hoisted_3, [
          format.value == "hex" ? (openBlock(), createBlock(unref(Input), {
            key: 0,
            modelValue: hex.value,
            "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => hex.value = $event),
            "max-length": 6,
            disabled: _ctx.disabled,
            size: "mini",
            class: "hex-input",
            onBlur: _cache[2] || (_cache[2] = ($event) => handleSet("hex")),
            onPressEnter: _cache[3] || (_cache[3] = ($event) => handleSet("hex"))
          }, {
            prefix: withCtx(() => _cache[16] || (_cache[16] = [
              createTextVNode(" # ")
            ])),
            _: 1
          }, 8, ["modelValue", "disabled"])) : (openBlock(), createElementBlock(Fragment, { key: 1 }, [
            createVNode(unref(InputNumber), {
              modelValue: rgb.value.r,
              "onUpdate:modelValue": _cache[4] || (_cache[4] = ($event) => rgb.value.r = $event),
              min: 0,
              max: 255,
              disabled: _ctx.disabled,
              size: "mini",
              class: "rgb-input",
              "hide-button": "",
              onBlur: _cache[5] || (_cache[5] = ($event) => handleSet("rgb")),
              onPressEnter: _cache[6] || (_cache[6] = ($event) => handleSet("rgb"))
            }, null, 8, ["modelValue", "disabled"]),
            createVNode(unref(InputNumber), {
              modelValue: rgb.value.g,
              "onUpdate:modelValue": _cache[7] || (_cache[7] = ($event) => rgb.value.g = $event),
              min: 0,
              max: 255,
              disabled: _ctx.disabled,
              size: "mini",
              class: "rgb-input",
              "hide-button": "",
              onBlur: _cache[8] || (_cache[8] = ($event) => handleSet("rgb")),
              onPressEnter: _cache[9] || (_cache[9] = ($event) => handleSet("rgb"))
            }, null, 8, ["modelValue", "disabled"]),
            createVNode(unref(InputNumber), {
              modelValue: rgb.value.b,
              "onUpdate:modelValue": _cache[10] || (_cache[10] = ($event) => rgb.value.b = $event),
              min: 0,
              max: 255,
              disabled: _ctx.disabled,
              class: "rgb-input",
              size: "mini",
              "hide-button": "",
              onBlur: _cache[11] || (_cache[11] = ($event) => handleSet("rgb")),
              onPressEnter: _cache[12] || (_cache[12] = ($event) => handleSet("rgb"))
            }, null, 8, ["modelValue", "disabled"])
          ], 64)),
          !_ctx.disabledAlpha ? (openBlock(), createBlock(unref(InputNumber), {
            key: 2,
            modelValue: alpha.value,
            "onUpdate:modelValue": _cache[13] || (_cache[13] = ($event) => alpha.value = $event),
            min: 0,
            max: 100,
            disabled: _ctx.disabled,
            size: "mini",
            "hide-button": "",
            class: "alpha-input",
            onBlur: _cache[14] || (_cache[14] = ($event) => handleSet("alpha")),
            onPressEnter: _cache[15] || (_cache[15] = ($event) => handleSet("alpha"))
          }, {
            suffix: withCtx(() => _cache[17] || (_cache[17] = [
              createTextVNode(" % ")
            ])),
            _: 1
          }, 8, ["modelValue", "disabled"])) : createCommentVNode("", true)
        ])
      ]);
    };
  }
});
export {
  _sfc_main as default
};
