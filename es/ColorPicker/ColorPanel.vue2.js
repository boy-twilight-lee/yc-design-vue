import { defineComponent, ref, openBlock, createElementBlock, normalizeClass, unref, createVNode, isRef, createElementVNode, normalizeStyle, createBlock, createCommentVNode } from "vue";
import useContext from "./hooks/useContext.js";
import ColorPalette from "./ColorPalette.vue.js";
import ColorInput from "./ColorInput.vue.js";
import ColorList from "./ColorList.vue.js";
import ColorControl from "./ColorControl.vue.js";
const _hoisted_1 = { class: "yc-color-picker-panel-control" };
const _hoisted_2 = { class: "yc-color-picker-control-wrapper" };
const _hoisted_3 = { class: "yc-color-picker-control-bar-bg" };
const _hoisted_4 = {
  key: 0,
  class: "yc-color-picker-panel-colors"
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "ColorPanel",
  setup(__props) {
    const {
      popupVisible,
      computedColor,
      baseColor,
      alpha,
      disabled,
      disabledAlpha,
      showHistory,
      showPreset,
      hideTrigger,
      presetColors,
      historyColors
    } = useContext().inject();
    const colorBarRef = ref();
    const alphaBarRef = ref();
    const paletteRef = ref();
    const handleColorClick = (color) => {
      var _a, _b, _c;
      if (disabled.value)
        return;
      computedColor.value = color;
      baseColor.value = color;
      (_a = colorBarRef.value) == null ? void 0 : _a.setPosition(color);
      (_b = alphaBarRef.value) == null ? void 0 : _b.setPosition(color);
      (_c = paletteRef.value) == null ? void 0 : _c.setPosition(color);
    };
    const handleChange = (color, type) => {
      var _a, _b, _c;
      if (type == "alpha") {
        (_a = alphaBarRef.value) == null ? void 0 : _a.setPosition(color);
      } else {
        (_b = colorBarRef.value) == null ? void 0 : _b.setPosition(color);
        (_c = paletteRef.value) == null ? void 0 : _c.setPosition(color);
      }
    };
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", {
        class: normalizeClass([
          "yc-color-picker-panel",
          {
            "yc-color-picker-panel-disabled": unref(disabled)
          }
        ])
      }, [
        createVNode(ColorPalette, {
          color: unref(computedColor),
          "onUpdate:color": _cache[0] || (_cache[0] = ($event) => isRef(computedColor) ? computedColor.value = $event : null),
          "base-color": unref(baseColor),
          "popup-visible": unref(popupVisible),
          "hide-trigger": unref(hideTrigger),
          disabled: unref(disabled),
          ref_key: "paletteRef",
          ref: paletteRef
        }, null, 8, ["color", "base-color", "popup-visible", "hide-trigger", "disabled"]),
        createElementVNode("div", _hoisted_1, [
          createElementVNode("div", _hoisted_2, [
            createElementVNode("div", null, [
              createVNode(ColorControl, {
                mode: "color",
                color: unref(computedColor),
                "onUpdate:color": _cache[1] || (_cache[1] = ($event) => isRef(computedColor) ? computedColor.value = $event : null),
                "base-color": unref(baseColor),
                "onUpdate:baseColor": _cache[2] || (_cache[2] = ($event) => isRef(baseColor) ? baseColor.value = $event : null),
                "popup-visible": unref(popupVisible),
                disabled: unref(disabled),
                "hide-trigger": unref(hideTrigger),
                ref_key: "colorBarRef",
                ref: colorBarRef,
                onChange: _cache[3] || (_cache[3] = (v) => {
                  var _a;
                  return (_a = paletteRef.value) == null ? void 0 : _a.setPosition(v);
                })
              }, null, 8, ["color", "base-color", "popup-visible", "disabled", "hide-trigger"]),
              createElementVNode("div", _hoisted_3, [
                createVNode(ColorControl, {
                  mode: "alpha",
                  color: unref(computedColor),
                  "onUpdate:color": _cache[4] || (_cache[4] = ($event) => isRef(computedColor) ? computedColor.value = $event : null),
                  alpha: unref(alpha),
                  "onUpdate:alpha": _cache[5] || (_cache[5] = ($event) => isRef(alpha) ? alpha.value = $event : null),
                  "base-color": unref(baseColor),
                  "popup-visible": unref(popupVisible),
                  disabled: unref(disabled),
                  "hide-trigger": unref(hideTrigger),
                  ref_key: "alphaBarRef",
                  ref: alphaBarRef
                }, null, 8, ["color", "alpha", "base-color", "popup-visible", "disabled", "hide-trigger"])
              ])
            ]),
            createElementVNode("div", {
              class: "yc-color-picker-preview",
              style: normalizeStyle({
                backgroundColor: unref(computedColor)
              })
            }, null, 4)
          ]),
          createVNode(ColorInput, {
            color: unref(computedColor),
            "onUpdate:color": _cache[6] || (_cache[6] = ($event) => isRef(computedColor) ? computedColor.value = $event : null),
            "base-color": unref(baseColor),
            "onUpdate:baseColor": _cache[7] || (_cache[7] = ($event) => isRef(baseColor) ? baseColor.value = $event : null),
            alpha: unref(alpha),
            "onUpdate:alpha": _cache[8] || (_cache[8] = ($event) => isRef(alpha) ? alpha.value = $event : null),
            disabled: unref(disabled),
            "disabled-alpha": unref(disabledAlpha),
            onChange: handleChange
          }, null, 8, ["color", "base-color", "alpha", "disabled", "disabled-alpha"])
        ]),
        unref(showHistory) || unref(showPreset) ? (openBlock(), createElementBlock("div", _hoisted_4, [
          unref(showHistory) ? (openBlock(), createBlock(ColorList, {
            key: 0,
            label: "最近使用的颜色",
            colors: unref(historyColors),
            onColorClick: handleColorClick
          }, null, 8, ["colors"])) : createCommentVNode("", true),
          unref(showPreset) ? (openBlock(), createBlock(ColorList, {
            key: 1,
            label: "系统预设的颜色",
            colors: unref(presetColors),
            onColorClick: handleColorClick
          }, null, 8, ["colors"])) : createCommentVNode("", true)
        ])) : createCommentVNode("", true)
      ], 2);
    };
  }
});
export {
  _sfc_main as default
};
