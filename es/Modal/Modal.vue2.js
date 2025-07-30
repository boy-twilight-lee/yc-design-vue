import { defineComponent, toRefs, ref, computed, openBlock, createBlock, Teleport, unref, withDirectives, createElementBlock, normalizeClass, normalizeStyle, createVNode, Transition, withCtx, vShow, createCommentVNode, createElementVNode, withModifiers, renderSlot, createTextVNode, toDisplayString, mergeProps } from "vue";
import "../node_modules/tinycolor2/esm/tinycolor.js";
import "../_shared/utils/dom.js";
import { valueToPx } from "../_shared/utils/fn.js";
import "../_shared/utils/time.js";
import { getGlobalConfig } from "../_shared/utils/global-config.js";
import useModalClose from "./hooks/useModalClose.js";
import useModalDraggable from "./hooks/useModalDraggable.js";
import Button from "../Button/index.js";
import IconButton from "../_shared/components/IconButton.vue.js";
import "../_shared/components/ExpandTransition.vue.js";
const _hoisted_1 = {
  key: 0,
  class: "yc-modal-footer"
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  ...{
    name: "Modal",
    inheritAttrs: false
  },
  __name: "Modal",
  props: {
    visible: { type: Boolean, default: void 0 },
    defaultVisible: { type: Boolean, default: false },
    width: { default: 400 },
    top: { default: 100 },
    mask: { type: Boolean, default: true },
    title: { default: "" },
    titleAlign: { default: "center" },
    alignCenter: { type: Boolean, default: true },
    unmountOnClose: { type: Boolean, default: false },
    maskClosable: { type: Boolean, default: true },
    hideCancel: { type: Boolean, default: false },
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
    footer: { type: Boolean, default: true },
    renderToBody: { type: Boolean, default: true },
    popupContainer: { default: void 0 },
    maskStyle: { default: () => {
      return {};
    } },
    modalClass: { default: "" },
    modalStyle: { default: () => {
      return {};
    } },
    escToClose: { type: Boolean, default: true },
    draggable: { type: Boolean, default: false },
    fullscreen: { type: Boolean, default: false },
    maskAnimationName: { default: "fade" },
    modalAnimationName: { default: "zoom-modal" },
    bodyClass: { default: "" },
    bodyStyle: { default: () => {
      return {};
    } },
    hideTitle: { type: Boolean, default: false },
    simple: { type: Boolean, default: false },
    onBeforeCancel: { type: Function, default: () => {
      return true;
    } },
    onBeforeOk: { type: Function, default: () => {
      return true;
    } }
  },
  emits: ["update:visible", "ok", "cancel", "open", "before-open", "close", "before-close"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emits = __emit;
    const {
      visible,
      defaultVisible,
      width,
      top,
      alignCenter,
      maskClosable,
      escToClose,
      modalStyle: _modalStyle,
      fullscreen,
      draggable,
      renderToBody
    } = toRefs(props);
    const { onBeforeOk, onBeforeCancel } = props;
    const { popupContainer, zIndex } = getGlobalConfig(props);
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
      onBeforeOk,
      onBeforeCancel,
      emits
    });
    const headerRef = ref();
    const modalRef = ref();
    const { dragStyle, isDraggable } = useModalDraggable({
      visible: innerVisible,
      draggable,
      fullscreen,
      alignCenter,
      top,
      triggerRef: headerRef,
      modalRef
    });
    const modalStyle = computed(() => {
      return {
        width: fullscreen.value ? "100%" : width.value == "auto" ? "fit-content" : valueToPx(width.value),
        ...dragStyle.value,
        ..._modalStyle.value
      };
    });
    return (_ctx, _cache) => {
      return openBlock(), createBlock(Teleport, {
        to: unref(popupContainer),
        disabled: !unref(renderToBody)
      }, [
        !_ctx.unmountOnClose || unref(outerVisible) ? withDirectives((openBlock(), createElementBlock("div", {
          key: 0,
          class: normalizeClass([
            "yc-modal-container",
            {
              "yc-modal-simple": _ctx.simple,
              "yc-modal-position-absolute": unref(popupContainer) || !unref(renderToBody)
            }
          ]),
          style: normalizeStyle({
            zIndex: unref(zIndex)
          })
        }, [
          createVNode(Transition, { name: _ctx.maskAnimationName }, {
            default: withCtx(() => [
              _ctx.mask ? withDirectives((openBlock(), createElementBlock("div", {
                key: 0,
                class: "yc-modal-mask",
                style: normalizeStyle(_ctx.maskStyle)
              }, null, 4)), [
                [vShow, unref(innerVisible)]
              ]) : createCommentVNode("", true)
            ]),
            _: 1
          }, 8, ["name"]),
          createElementVNode("div", {
            class: "yc-modal-wrapper",
            onClick: _cache[6] || (_cache[6] = withModifiers(($event) => unref(handleClose)("mask", $event), ["self"]))
          }, [
            createVNode(Transition, {
              name: _ctx.modalAnimationName,
              onBeforeEnter: _cache[3] || (_cache[3] = ($event) => _ctx.$emit("before-open")),
              onBeforeLeave: _cache[4] || (_cache[4] = ($event) => _ctx.$emit("before-close")),
              onAfterEnter: _cache[5] || (_cache[5] = ($event) => _ctx.$emit("open")),
              onAfterLeave: unref(handleAfterLeave)
            }, {
              default: withCtx(() => [
                withDirectives(createElementVNode("div", {
                  class: normalizeClass([
                    "yc-modal",
                    _ctx.modalClass,
                    _ctx.$attrs.class,
                    {
                      // 拖拽
                      "yc-modal-draggable": unref(isDraggable),
                      // 全屏
                      "yc-modal-fullscreen": unref(fullscreen)
                    }
                  ]),
                  style: normalizeStyle({
                    ...modalStyle.value,
                    ..._ctx.$attrs.style ?? {}
                  }),
                  ref_key: "modalRef",
                  ref: modalRef
                }, [
                  renderSlot(_ctx.$slots, "header", {}, () => [
                    createElementVNode("div", {
                      class: "yc-modal-header",
                      ref_key: "headerRef",
                      ref: headerRef
                    }, [
                      !_ctx.hideTitle ? (openBlock(), createElementBlock("div", {
                        key: 0,
                        class: normalizeClass([
                          "yc-modal-title",
                          "text-ellipsis",
                          {
                            "title-align-center": _ctx.titleAlign == "center"
                          }
                        ])
                      }, [
                        renderSlot(_ctx.$slots, "title", {}, () => [
                          createTextVNode(toDisplayString(_ctx.title), 1)
                        ], true)
                      ], 2)) : createCommentVNode("", true),
                      _ctx.closable && !_ctx.simple ? (openBlock(), createBlock(unref(IconButton), {
                        key: 1,
                        class: "yc-modal-close-button",
                        onClick: _cache[0] || (_cache[0] = ($event) => unref(handleClose)("closeBtn", $event))
                      })) : createCommentVNode("", true)
                    ], 512)
                  ], true),
                  createElementVNode("div", {
                    class: normalizeClass(["yc-modal-body", _ctx.bodyClass]),
                    style: normalizeStyle(_ctx.bodyStyle)
                  }, [
                    renderSlot(_ctx.$slots, "default", {}, void 0, true)
                  ], 6),
                  _ctx.footer ? (openBlock(), createElementBlock("div", _hoisted_1, [
                    renderSlot(_ctx.$slots, "footer", {}, () => [
                      !_ctx.hideCancel ? (openBlock(), createBlock(unref(Button), mergeProps({ key: 0 }, _ctx.cancelButtonProps, {
                        onClick: _cache[1] || (_cache[1] = ($event) => unref(handleClose)("cancelBtn", $event))
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
                        onClick: _cache[2] || (_cache[2] = ($event) => unref(handleClose)("confirmBtn", $event))
                      }), {
                        default: withCtx(() => [
                          createTextVNode(toDisplayString(_ctx.okText), 1)
                        ]),
                        _: 1
                      }, 16, ["loading"])
                    ], true)
                  ])) : createCommentVNode("", true)
                ], 6), [
                  [vShow, unref(innerVisible)]
                ])
              ]),
              _: 3
            }, 8, ["name", "onAfterLeave"])
          ])
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
