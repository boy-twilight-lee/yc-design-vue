import { defineComponent, toRefs, computed, openBlock, createBlock, unref, mergeProps, isRef, withCtx, createElementVNode, createVNode, normalizeStyle, renderSlot, createElementBlock, createCommentVNode } from "vue";
import "../node_modules/tinycolor2/esm/tinycolor.js";
import "../_shared/utils/dom.js";
import { valueToPx } from "../_shared/utils/fn.js";
import { isBoolean, isUndefined } from "../_shared/utils/is.js";
import "../_shared/utils/time.js";
import "../Empty/index.js";
import "../_shared/icons/_Icon.vue.js";
import useContext from "./hooks/useContext.js";
import Trigger from "../Trigger/index.js";
import Scrollbar from "../Scrollbar/index.js";
const _hoisted_1 = { class: "yc-dropdown" };
const _hoisted_2 = { class: "yc-dropdown-list" };
const _hoisted_3 = {
  key: 0,
  class: "yc-dropdown-footer"
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  ...{
    name: "Dropdown"
  },
  __name: "Dropdown",
  props: {
    popupVisible: { type: Boolean, default: void 0 },
    defaultPopupVisible: { type: Boolean, default: false },
    trigger: { default: "click" },
    position: { default: "bottom" },
    popupContainer: { default: void 0 },
    hideOnSelect: { type: Boolean, default: true },
    alignPoint: { type: Boolean, default: false },
    triggerProps: { default: () => {
      return {};
    } },
    popupMaxHeight: { type: [Number, Boolean], default: 200 },
    theme: { default: "light" }
  },
  emits: ["update:popupVisible", "popup-visible-change", "select"],
  setup(__props, { expose: __expose, emit: __emit }) {
    const props = __props;
    const emits = __emit;
    const {
      trigger,
      position: _position,
      popupMaxHeight: _popupMaxHeight
    } = toRefs(props);
    const { computedVisible } = useContext().provide(props, emits);
    const position = computed(() => {
      return ["top", "tl", "tr", "bottom", "bl", "br"].includes(_position.value) ? _position.value : "bottom";
    });
    const popupMaxHeight = computed(() => {
      if (isBoolean(_popupMaxHeight.value) && !_popupMaxHeight.value || isUndefined(_popupMaxHeight)) {
        return "";
      }
      return valueToPx(
        isBoolean(_popupMaxHeight.value) ? 200 : _popupMaxHeight.value
      );
    });
    __expose({
      show() {
        computedVisible.value = true;
      },
      hide() {
        computedVisible.value = true;
      }
    });
    return (_ctx, _cache) => {
      return openBlock(), createBlock(unref(Trigger), mergeProps({
        "popup-visible": unref(computedVisible),
        "onUpdate:popupVisible": _cache[0] || (_cache[0] = ($event) => isRef(computedVisible) ? computedVisible.value = $event : null),
        trigger: unref(trigger),
        position: position.value,
        "popup-offset": 4,
        "mouse-enter-delay": 150,
        "mouse-leave-delay": 150,
        alignPoint: _ctx.alignPoint,
        "auto-fit-popup-min-width": !_ctx.alignPoint && ["top", "bottom"].includes(position.value),
        class: ["yc-dropdown-popup", , `yc-dropdown-theme-${_ctx.theme}`, _ctx.$attrs.class],
        style: _ctx.$attrs.style,
        "animation-name": "slide-dynamic-origin",
        "need-transform-origin": ""
      }, _ctx.triggerProps), {
        content: withCtx(() => [
          createElementVNode("div", _hoisted_1, [
            createVNode(unref(Scrollbar), {
              style: normalizeStyle({
                maxHeight: popupMaxHeight.value
              })
            }, {
              default: withCtx(() => [
                createElementVNode("div", _hoisted_2, [
                  renderSlot(_ctx.$slots, "content")
                ])
              ]),
              _: 3
            }, 8, ["style"]),
            _ctx.$slots.footer ? (openBlock(), createElementBlock("div", _hoisted_3, [
              renderSlot(_ctx.$slots, "footer")
            ])) : createCommentVNode("", true)
          ])
        ]),
        default: withCtx(() => [
          renderSlot(_ctx.$slots, "default")
        ]),
        _: 3
      }, 16, ["popup-visible", "trigger", "position", "alignPoint", "auto-fit-popup-min-width", "class", "style"]);
    };
  }
});
export {
  _sfc_main as default
};
