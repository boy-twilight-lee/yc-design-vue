import { defineComponent, ref, useSlots, computed, openBlock, createElementBlock, Fragment, createBlock, resolveDynamicComponent, unref, withModifiers, Teleport, createVNode, Transition, withCtx, withDirectives, normalizeClass, normalizeStyle, createElementVNode, renderSlot, createCommentVNode, vShow } from "vue";
import "../node_modules/tinycolor2/esm/tinycolor.js";
import "../_shared/utils/dom.js";
import "../_shared/utils/time.js";
import { findFirstLegitChild } from "../_shared/utils/vue-utils.js";
import { getGlobalConfig } from "../_shared/utils/global-config.js";
import useTriggerVisible from "./hooks/useTriggerVisible.js";
import useTriggerPosition from "./hooks/useTriggerPosition.js";
import "../_shared/icons/_Icon.vue.js";
import "../_shared/components/IconButton.vue2.js";
import _sfc_main$1 from "../_shared/components/PreventFocus.vue.js";
import "../_shared/components/ExpandTransition.vue2.js";
const _sfc_main = /* @__PURE__ */ defineComponent({
  ...{
    name: "Trigger",
    inheritAttrs: false
  },
  __name: "index",
  props: {
    popupVisible: { type: Boolean, default: void 0 },
    defaultPopupVisible: { type: Boolean, default: false },
    trigger: { default: "hover" },
    position: { default: "bottom" },
    disabled: { type: Boolean, default: false },
    popupOffset: { default: 0 },
    popupTranslate: { default: () => [0, 0] },
    showArrow: { type: Boolean, default: false },
    popuphoverStay: { type: Boolean },
    blurToClose: { type: Boolean, default: true },
    clickToClose: { type: Boolean, default: true },
    clickOutsideToClose: { type: Boolean, default: true },
    unmountOnClose: { type: Boolean, default: true },
    contentClass: { default: "" },
    contentStyle: { default: () => {
      return {};
    } },
    arrowClass: { default: "" },
    arrowStyle: { default: () => {
      return {};
    } },
    animationName: { default: "fade" },
    duration: { default: 400 },
    mouseEnterDelay: { default: 100 },
    mouseLeaveDelay: { default: 100 },
    focusDelay: { default: 0 },
    autoFitPopupWidth: { type: Boolean, default: false },
    autoFitPopupMinWidth: { type: Boolean, default: false },
    popupContainer: { default: void 0 },
    renderToBody: { type: Boolean, default: true },
    autoFitPosition: { type: Boolean, default: true },
    updateAtScroll: { type: Boolean, default: void 0 },
    preventFocus: { type: Boolean, default: false },
    alignPoint: { type: Boolean, default: false },
    scrollToClose: { type: Boolean, default: void 0 },
    scrollToCloseDistance: { default: 1 },
    needTransformOrigin: { type: Boolean, default: false },
    autoSetPosition: { type: Boolean, default: false },
    onTriggerMouseenter: {},
    onTriggerMouseleave: {},
    onTriggerMouseclick: {},
    onTriggerFocus: {},
    onTriggerBlur: {},
    onClickOutSide: {}
  },
  emits: ["update:popupVisible", "popup-visible-change", "show", "hide"],
  setup(__props, { expose: __expose, emit: __emit }) {
    const props = __props;
    const emits = __emit;
    const { popupContainer } = getGlobalConfig(props);
    const popupRef = ref();
    const triggerRef = ref();
    const arrowRef = ref();
    const slots = useSlots();
    const vNode = computed(() => {
      var _a;
      return findFirstLegitChild(((_a = slots.default) == null ? void 0 : _a.call(slots)) || []);
    });
    const {
      computedVisible,
      mouseX,
      mouseY,
      handleClickEvent,
      handleMouseenter,
      handleMouseleave,
      handleFocus,
      handleBlur
    } = useTriggerVisible({
      props,
      emits,
      popupRef,
      triggerRef
    });
    const { position, popupStyle, contentStyle, arrowStyle } = useTriggerPosition({
      props,
      computedVisible,
      popupRef,
      triggerRef,
      arrowRef,
      mouseX,
      mouseY
    });
    __expose({
      hide() {
        computedVisible.value = false;
      },
      show() {
        computedVisible.value = true;
      },
      updatePosition(x, y) {
        mouseX.value = x;
        mouseY.value = y;
      }
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock(Fragment, null, [
        (openBlock(), createBlock(resolveDynamicComponent(vNode.value), {
          ref_key: "triggerRef",
          ref: triggerRef,
          onClick: _cache[0] || (_cache[0] = ($event) => unref(handleClickEvent)($event, "click")),
          onContextmenu: _cache[1] || (_cache[1] = withModifiers(($event) => unref(handleClickEvent)($event, "contextMenu"), ["prevent"])),
          onMouseenter: unref(handleMouseenter),
          onMouseleave: unref(handleMouseleave),
          onFocus: unref(handleFocus),
          onBlur: unref(handleBlur)
        }, null, 40, ["onMouseenter", "onMouseleave", "onFocus", "onBlur"])),
        (openBlock(), createBlock(Teleport, {
          to: unref(popupContainer),
          disabled: !_ctx.renderToBody
        }, [
          createVNode(Transition, {
            name: _ctx.animationName,
            duration: _ctx.duration,
            onAfterLeave: _cache[2] || (_cache[2] = ($event) => _ctx.$emit("hide")),
            onAfterEnter: _cache[3] || (_cache[3] = ($event) => _ctx.$emit("show"))
          }, {
            default: withCtx(() => [
              !_ctx.unmountOnClose || unref(computedVisible) && !_ctx.disabled ? withDirectives((openBlock(), createBlock(unref(_sfc_main$1), {
                key: 0,
                "prevent-focus": _ctx.preventFocus,
                class: normalizeClass([
                  "yc-trigger",
                  `yc-trigger-position-${unref(position)}`,
                  {
                    "yc-trigger-transform-origin": _ctx.needTransformOrigin
                  },
                  _ctx.$attrs.class
                ]),
                style: normalizeStyle({
                  ...unref(popupStyle),
                  ..._ctx.$attrs.style || {}
                }),
                ref_key: "popupRef",
                ref: popupRef,
                onMouseenter: unref(handleMouseenter),
                onMouseleave: unref(handleMouseleave)
              }, {
                default: withCtx(() => [
                  createElementVNode("div", {
                    class: normalizeClass(["yc-trigger-content", _ctx.contentClass]),
                    style: normalizeStyle(unref(contentStyle))
                  }, [
                    renderSlot(_ctx.$slots, "content", {}, void 0, true)
                  ], 6),
                  _ctx.showArrow ? (openBlock(), createElementBlock("div", {
                    key: 0,
                    class: normalizeClass(["yc-trigger-arrow", _ctx.arrowClass]),
                    style: normalizeStyle(unref(arrowStyle)),
                    ref_key: "arrowRef",
                    ref: arrowRef
                  }, null, 6)) : createCommentVNode("", true)
                ]),
                _: 3
              }, 8, ["prevent-focus", "class", "style", "onMouseenter", "onMouseleave"])), [
                [vShow, unref(computedVisible) && !_ctx.disabled]
              ]) : createCommentVNode("", true)
            ]),
            _: 3
          }, 8, ["name", "duration"])
        ], 8, ["to", "disabled"]))
      ], 64);
    };
  }
});
export {
  _sfc_main as default
};
