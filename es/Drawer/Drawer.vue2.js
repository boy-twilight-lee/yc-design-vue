import { defineComponent, toRefs, computed, openBlock, createBlock, Teleport, unref, withDirectives, createElementBlock, normalizeClass, normalizeStyle, createVNode, Transition, withCtx, vShow, createCommentVNode, createElementVNode, renderSlot, createTextVNode, toDisplayString, mergeProps } from "vue";
import "../node_modules/tinycolor2/esm/tinycolor.js";
import "../_shared/utils/dom.js";
import { valueToPx } from "../_shared/utils/fn.js";
import "../_shared/utils/time.js";
import { getGlobalConfig } from "../_shared/utils/global-config.js";
import useModalClose from "../Modal/hooks/useModalClose.js";
import Button from "../Button/index.js";
import IconButton from "../_shared/components/IconButton.vue.js";
import "../_shared/components/ExpandTransition.vue2.js";
const _hoisted_1 = {
  key: 0,
  class: "yc-drawer-header"
};
const _hoisted_2 = { class: "yc-drawer-title text-ellipsis" };
const _hoisted_3 = { class: "yc-drawer-body" };
const _hoisted_4 = {
  key: 0,
  class: "yc-drawer-footer"
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  ...{
    name: "Drawer",
    inheritAttrs: false
  },
  __name: "Drawer",
  props: {
    visible: { type: Boolean, default: void 0 },
    defaultVisible: { type: Boolean, default: false },
    placement: { default: "right" },
    title: { default: "" },
    mask: { type: Boolean, default: true },
    maskClosable: { type: Boolean, default: true },
    closable: { type: Boolean, default: true },
    okText: { default: "确认" },
    cancelText: { default: "取消" },
    okLoading: { type: Boolean, default: false },
    okButtonProps: { default: () => {
      return {};
    } },
    cancelButtonProps: { default: () => {
      return {};
    } },
    unmountOnClose: { type: Boolean, default: false },
    width: { default: 250 },
    height: { default: 250 },
    popupContainer: { default: void 0 },
    drawerStyle: { default: () => {
      return {};
    } },
    escToClose: { type: Boolean, default: true },
    renderToBody: { type: Boolean, default: true },
    header: { type: Boolean, default: true },
    footer: { type: Boolean, default: true },
    hideCancel: { type: Boolean, default: false },
    onBeforeCancel: { type: Function, default: () => {
      return true;
    } },
    onBeforeOk: { type: Function, default: () => {
      return true;
    } }
  },
  emits: ["update:visible", "ok", "cancel", "before-open", "open", "before-close", "close"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emits = __emit;
    const {
      visible,
      defaultVisible,
      width,
      height,
      placement,
      maskClosable,
      escToClose,
      drawerStyle: _drawerStyle,
      renderToBody
    } = toRefs(props);
    const { onBeforeOk, onBeforeCancel } = props;
    const { zIndex, popupContainer } = getGlobalConfig(props);
    const drawerStyle = computed(() => {
      return {
        height: placement.value == "left" || placement.value == "right" ? "100%" : valueToPx(height.value),
        width: placement.value == "left" || placement.value == "right" ? valueToPx(width.value) : `100%`,
        // 传入样式
        ..._drawerStyle.value
      };
    });
    const {
      outerVisible,
      innerVisible,
      asyncLoading,
      handleClose,
      handleAfterLeave
    } = useModalClose({
      visible,
      defaultVisible,
      escToClose,
      maskClosable,
      onBeforeCancel,
      onBeforeOk,
      emits
    });
    return (_ctx, _cache) => {
      return openBlock(), createBlock(Teleport, {
        to: unref(popupContainer),
        disabled: !unref(renderToBody)
      }, [
        !_ctx.unmountOnClose || unref(outerVisible) ? withDirectives((openBlock(), createElementBlock("div", {
          key: 0,
          class: normalizeClass([
            "yc-drawer-wrapper",
            `yc-drawer-placement-${unref(placement)}`,
            {
              "yc-drawer-position-absolute": unref(popupContainer) || !unref(renderToBody)
            }
          ]),
          style: normalizeStyle({
            zIndex: unref(zIndex)
          })
        }, [
          createVNode(Transition, { name: "fade" }, {
            default: withCtx(() => [
              _ctx.mask ? withDirectives((openBlock(), createElementBlock("div", {
                key: 0,
                class: "yc-drawer-mask",
                onClick: _cache[0] || (_cache[0] = ($event) => unref(handleClose)("mask", $event))
              }, null, 512)), [
                [vShow, unref(innerVisible)]
              ]) : createCommentVNode("", true)
            ]),
            _: 1
          }),
          createVNode(Transition, {
            name: `slide-drawer-${unref(placement)}`,
            onBeforeEnter: _cache[4] || (_cache[4] = ($event) => _ctx.$emit("before-open")),
            onBeforeLeave: _cache[5] || (_cache[5] = ($event) => _ctx.$emit("before-close")),
            onAfterEnter: _cache[6] || (_cache[6] = ($event) => _ctx.$emit("open")),
            onAfterLeave: unref(handleAfterLeave)
          }, {
            default: withCtx(() => [
              withDirectives(createElementVNode("div", {
                class: normalizeClass(["yc-drawer-container", _ctx.$attrs.class]),
                style: normalizeStyle({
                  ...drawerStyle.value,
                  ..._ctx.$attrs.style ?? {}
                })
              }, [
                renderSlot(_ctx.$slots, "header", {}, () => [
                  _ctx.header ? (openBlock(), createElementBlock("div", _hoisted_1, [
                    createElementVNode("div", _hoisted_2, [
                      renderSlot(_ctx.$slots, "title", {}, () => [
                        createTextVNode(toDisplayString(_ctx.title), 1)
                      ], true)
                    ]),
                    _ctx.closable ? (openBlock(), createBlock(unref(IconButton), {
                      key: 0,
                      class: "yc-modal-close-button",
                      onClick: _cache[1] || (_cache[1] = ($event) => unref(handleClose)("closeBtn", $event))
                    })) : createCommentVNode("", true)
                  ])) : createCommentVNode("", true)
                ], true),
                createElementVNode("div", _hoisted_3, [
                  renderSlot(_ctx.$slots, "default", {}, void 0, true)
                ]),
                renderSlot(_ctx.$slots, "footer", {}, () => [
                  _ctx.footer ? (openBlock(), createElementBlock("div", _hoisted_4, [
                    !_ctx.hideCancel ? (openBlock(), createBlock(unref(Button), mergeProps({ key: 0 }, _ctx.cancelButtonProps, {
                      onClick: _cache[2] || (_cache[2] = ($event) => unref(handleClose)("cancelBtn", $event))
                    }), {
                      default: withCtx(() => [
                        createTextVNode(toDisplayString(_ctx.cancelText), 1)
                      ]),
                      _: 1
                    }, 16)) : createCommentVNode("", true),
                    createVNode(unref(Button), mergeProps({
                      type: "primary",
                      loading: _ctx.okLoading || unref(asyncLoading)
                    }, _ctx.okButtonProps, {
                      onClick: _cache[3] || (_cache[3] = ($event) => unref(handleClose)("confirmBtn", $event))
                    }), {
                      default: withCtx(() => [
                        createTextVNode(toDisplayString(_ctx.okText), 1)
                      ]),
                      _: 1
                    }, 16, ["loading"])
                  ])) : createCommentVNode("", true)
                ], true)
              ], 6), [
                [vShow, unref(innerVisible)]
              ])
            ]),
            _: 3
          }, 8, ["name", "onAfterLeave"])
        ], 6)), [
          [vShow, unref(outerVisible)]
        ]) : createCommentVNode("", true)
      ], 8, ["to", "disabled"]);
    };
  }
});
export {
  _sfc_main as default
};
