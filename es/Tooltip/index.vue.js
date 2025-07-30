import { defineComponent, toRefs, computed, openBlock, createBlock, unref, mergeProps, isRef, withCtx, renderSlot, createTextVNode, toDisplayString } from "vue";
import "../node_modules/tinycolor2/esm/tinycolor.js";
import "../_shared/utils/dom.js";
import "../_shared/utils/time.js";
import "../Empty/index.js";
import "../_shared/icons/_Icon.vue.js";
import useControlValue from "../_shared/utils/control.js";
import Trigger from "../Trigger/index.js";
const _sfc_main = /* @__PURE__ */ defineComponent({
  ...{
    name: "Tooltip"
  },
  __name: "index",
  props: {
    popupVisible: { type: Boolean, default: void 0 },
    defaultPopupVisible: { type: Boolean, default: false },
    content: { default: "" },
    position: { default: "bottom" },
    mini: { type: Boolean, default: false },
    backgroundColor: { default: "rgb(29,33,41)" },
    contentClass: { default: "" },
    contentStyle: { default: () => {
      return {};
    } },
    arrowClass: { default: "" },
    arrowStyle: { default: () => {
      return {};
    } },
    popupContainer: { default: void 0 },
    triggerProps: { default: () => {
      return {};
    } }
  },
  emits: ["update:popupVisible", "popup-visible-change"],
  setup(__props, { expose: __expose, emit: __emit }) {
    const props = __props;
    const emits = __emit;
    const {
      arrowStyle: _arrowStyle,
      contentStyle: _contentStyle,
      backgroundColor
    } = toRefs(props);
    const { popupVisible, defaultPopupVisible } = toRefs(props);
    const computedVisible = useControlValue(
      popupVisible,
      defaultPopupVisible.value,
      (val) => {
        emits("update:popupVisible", val);
        emits("popup-visible-change", val);
      }
    );
    const contentStyle = computed(() => {
      return {
        backgroundColor: backgroundColor.value,
        ..._contentStyle.value
      };
    });
    const arrowStyle = computed(() => {
      return {
        backgroundColor: backgroundColor.value,
        ..._arrowStyle.value
      };
    });
    __expose({
      show() {
        computedVisible.value = true;
      },
      hide() {
        computedVisible.value = false;
      }
    });
    return (_ctx, _cache) => {
      return openBlock(), createBlock(unref(Trigger), mergeProps({
        "popup-visible": unref(computedVisible),
        "onUpdate:popupVisible": _cache[0] || (_cache[0] = ($event) => isRef(computedVisible) ? computedVisible.value = $event : null),
        "popup-container": _ctx.popupContainer,
        position: _ctx.position,
        "arrow-class": ["yc-tooltip-popup-arrow", _ctx.arrowClass],
        "arrow-style": contentStyle.value,
        "content-class": [
          "yc-tooltip-popup-content",
          _ctx.contentClass,
          {
            "yc-tooltip-mini": _ctx.mini
          }
        ],
        "content-style": arrowStyle.value,
        "popup-offset": 10,
        class: ["yc-tooltip", _ctx.$attrs.class],
        style: _ctx.$attrs.style,
        "animation-name": "zoom-in-fade-out",
        "need-transform-origin": "",
        "show-arrow": ""
      }, _ctx.triggerProps), {
        content: withCtx(() => [
          renderSlot(_ctx.$slots, "content", {}, () => [
            createTextVNode(toDisplayString(_ctx.content), 1)
          ])
        ]),
        default: withCtx(() => [
          renderSlot(_ctx.$slots, "default")
        ]),
        _: 3
      }, 16, ["popup-visible", "popup-container", "position", "arrow-class", "arrow-style", "content-class", "content-style", "class", "style"]);
    };
  }
});
export {
  _sfc_main as default
};
