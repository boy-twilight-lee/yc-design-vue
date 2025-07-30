import { defineComponent, toRefs, ref, computed, openBlock, createBlock, unref, mergeProps, isRef, withCtx, createElementVNode, normalizeClass, createVNode, normalizeStyle, renderSlot, createElementBlock, createCommentVNode, nextTick } from "vue";
import "../node_modules/tinycolor2/esm/tinycolor.js";
import "../_shared/utils/dom.js";
import { valueToPx } from "../_shared/utils/fn.js";
import { isBoolean, isUndefined } from "../_shared/utils/is.js";
import "../_shared/utils/time.js";
import { unrefElement } from "../_shared/utils/vue-utils.js";
import "../Empty/index.js";
import useControlValue from "../_shared/utils/control.js";
import "../_shared/icons/_Icon.vue.js";
import _sfc_main$1 from "../_shared/icons/IconArrowRight.vue.js";
import useContext from "./hooks/useContext.js";
import "./index.js";
import Trigger from "../Trigger/index.js";
import Scrollbar from "../Scrollbar/index.js";
import Doption from "./Doption.vue.js";
const _hoisted_1 = { class: "yc-dropdown-list" };
const _hoisted_2 = {
  key: 0,
  class: "yc-dropdown-footer"
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  ...{
    name: "Dsubmenu"
  },
  __name: "Dsubmenu",
  props: {
    disabled: { type: Boolean, default: false },
    trigger: { default: "click" },
    position: { default: "rt" },
    popupVisible: { type: Boolean, default: void 0 },
    defaultPopupVisible: { type: Boolean, default: false },
    triggerProps: { default: () => {
      return {};
    } },
    popupMaxHeight: { default: 200 }
  },
  emits: ["update:popupVisible", "popup-visible-change"],
  setup(__props, { expose: __expose, emit: __emit }) {
    const props = __props;
    const emits = __emit;
    const {
      defaultPopupVisible,
      popupVisible,
      trigger: _trigger,
      position: _position,
      popupMaxHeight: _popupMaxHeight
    } = toRefs(props);
    const { theme } = useContext().inject();
    const computedVisible = useControlValue(
      popupVisible,
      defaultPopupVisible.value,
      (val) => {
        emits("update:popupVisible", val);
        emits("popup-visible-change", val);
      }
    );
    const optionRef = ref();
    const triggerRef = ref();
    const position = computed(() => {
      return ["rt", "lt"].includes(_position.value) ? _position.value : "rt";
    });
    const trigger = computed(() => {
      return ["hover", "click"].includes(_trigger.value) ? _trigger.value : "hover";
    });
    const popupMaxHeight = computed(() => {
      if (isBoolean(_popupMaxHeight.value) && !_popupMaxHeight.value || isUndefined(_popupMaxHeight)) {
        return "";
      }
      return valueToPx(
        isBoolean(_popupMaxHeight.value) ? 200 : _popupMaxHeight.value
      );
    });
    const handleCalcStyle = async () => {
      var _a;
      await nextTick();
      const dom = unrefElement(optionRef);
      if (!dom)
        return;
      const { left, top, right, width } = dom.getBoundingClientRect();
      const x = position.value == "rt" ? right : left - width;
      const y = top - 5;
      (_a = triggerRef.value) == null ? void 0 : _a.updatePosition(x, y);
    };
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
        trigger: trigger.value,
        position: position.value,
        "popup-offset": 4,
        disabled: _ctx.disabled,
        "mouse-enter-delay": 150,
        "mouse-leave-delay": 150,
        "on-trigger-mouseenter": handleCalcStyle,
        "on-trigger-mouseclick": handleCalcStyle,
        "need-transform-origin": "",
        "auto-set-position": "",
        "auto-fit-popup-min-width": "",
        ref_key: "triggerRef",
        ref: triggerRef
      }, _ctx.triggerProps), {
        content: withCtx(() => [
          createElementVNode("div", {
            class: normalizeClass(["yc-dropdown", `yc-dropdown-theme-${unref(theme)}`])
          }, [
            createVNode(unref(Scrollbar), {
              style: normalizeStyle({
                maxHeight: popupMaxHeight.value
              })
            }, {
              default: withCtx(() => [
                createElementVNode("div", _hoisted_1, [
                  renderSlot(_ctx.$slots, "content", {}, void 0, true)
                ])
              ]),
              _: 3
            }, 8, ["style"]),
            _ctx.$slots.footer ? (openBlock(), createElementBlock("div", _hoisted_2, [
              renderSlot(_ctx.$slots, "footer", {}, void 0, true)
            ])) : createCommentVNode("", true)
          ], 2)
        ]),
        default: withCtx(() => [
          createVNode(unref(Doption), {
            disabled: _ctx.disabled,
            theme: unref(theme),
            class: normalizeClass(_ctx.$attrs.class),
            style: normalizeStyle(_ctx.$attrs.style),
            "is-submenu": "",
            ref_key: "optionRef",
            ref: optionRef
          }, {
            suffix: withCtx(() => [
              createVNode(unref(_sfc_main$1))
            ]),
            default: withCtx(() => [
              renderSlot(_ctx.$slots, "default", {}, void 0, true)
            ]),
            _: 3
          }, 8, ["disabled", "theme", "class", "style"])
        ]),
        _: 3
      }, 16, ["popup-visible", "trigger", "position", "disabled"]);
    };
  }
});
export {
  _sfc_main as default
};
