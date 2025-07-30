import { defineComponent, toRefs, ref, openBlock, createBlock, Teleport, unref, createElementBlock, normalizeClass, normalizeStyle, createVNode, Transition, withCtx, withDirectives, createElementVNode, vShow, withModifiers, createSlots, renderSlot, createCommentVNode } from "vue";
import "../node_modules/tinycolor2/esm/tinycolor.js";
import "../_shared/utils/dom.js";
import { isUndefined } from "../_shared/utils/is.js";
import "../_shared/utils/time.js";
import { getGlobalConfig } from "../_shared/utils/global-config.js";
import useControlValue from "../_shared/utils/control.js";
import "../_shared/icons/_Icon.vue.js";
import _sfc_main$1 from "../_shared/icons/IconClose.vue.js";
import { useEventListener, onKeyStroke } from "../node_modules/@vueuse/core/index.js";
import useModalClose from "../Modal/hooks/useModalClose.js";
import ImagePreviewToolbar from "./ImagePreviewToolbar.vue.js";
const _hoisted_1 = { class: "yc-image-preview-mask" };
const _hoisted_2 = { class: "yc-image-preview-wrapper" };
const _hoisted_3 = ["src"];
const _sfc_main = /* @__PURE__ */ defineComponent({
  ...{
    name: "ImagePreview",
    inheritAttrs: false
  },
  __name: "ImagePreview",
  props: {
    src: { default: "" },
    visible: { type: Boolean, default: void 0 },
    defaultVisible: { type: Boolean, default: false },
    maskClosable: { type: Boolean, default: true },
    closable: { type: Boolean, default: true },
    actionsLayout: { default: () => [
      "fullScreen",
      "rotateRight",
      "rotateLeft",
      "zoomIn",
      "zoomOut",
      "originalSize"
    ] },
    popupContainer: { default: void 0 },
    escToClose: { type: Boolean, default: true },
    wheelZoom: { type: Boolean, default: true },
    keyboard: { type: Boolean, default: true },
    defaultScale: { default: 1 },
    zoomRate: { default: 1.1 }
  },
  emits: ["update:visible", "close"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emits = __emit;
    const {
      visible,
      defaultVisible,
      maskClosable,
      escToClose,
      defaultScale,
      zoomRate,
      wheelZoom,
      keyboard,
      popupContainer: _popupContainer
    } = toRefs(props);
    const { zIndex, popupContainer } = getGlobalConfig(props);
    const imageRef = ref();
    const scale = useControlValue(ref(), defaultScale.value);
    const rotate = ref(0);
    const { outerVisible, innerVisible, handleClose, handleAfterLeave } = useModalClose({
      visible,
      defaultVisible,
      escToClose,
      maskClosable,
      onBeforeOk: () => true,
      onBeforeCancel: () => true,
      emits
    });
    const handleAction = (action) => {
      switch (action) {
        case "rotateRight":
          {
            rotate.value += 90;
          }
          break;
        case "rotateLeft":
          {
            rotate.value -= 90;
          }
          break;
        case "zoomIn":
          {
            scale.value *= zoomRate.value;
          }
          break;
        case "zoomOut":
          {
            scale.value /= zoomRate.value;
          }
          break;
        case "originalSize":
          {
            scale.value = defaultScale.value;
            rotate.value = 0;
          }
          break;
        case "fullScreen":
          {
            const { offsetWidth, offsetHeight } = imageRef.value;
            if (offsetWidth > offsetHeight) {
              scale.value = window.innerHeight / offsetHeight;
            } else {
              scale.value = window.innerHeight / offsetWidth;
            }
          }
          break;
      }
    };
    const intLisenter = () => {
      if (wheelZoom.value) {
        useEventListener("wheel", (e) => {
          e.preventDefault();
          const delta = e.deltaY < 0 ? 1 : -1;
          scale.value *= Math.pow(zoomRate.value, delta);
        });
      }
      if (keyboard.value) {
        const map = {
          ArrowUp: "zoomIn",
          ArrowDown: "zoomOut",
          " ": "originalSize"
        };
        onKeyStroke(["ArrowUp", "ArrowDown", " "], (e) => {
          handleAction(map[e.key]);
        });
      }
    };
    intLisenter();
    return (_ctx, _cache) => {
      return openBlock(), createBlock(Teleport, { to: unref(popupContainer) }, [
        unref(outerVisible) ? (openBlock(), createElementBlock("div", {
          key: 0,
          class: normalizeClass([
            "yc-image-preview",
            _ctx.$attrs.class,
            {
              "yc-image-preview-absolute": !unref(isUndefined)(unref(_popupContainer))
            }
          ]),
          style: normalizeStyle({
            zIndex: unref(zIndex),
            ..._ctx.$attrs.style ?? {}
          })
        }, [
          createVNode(Transition, { name: "fade" }, {
            default: withCtx(() => [
              withDirectives(createElementVNode("div", _hoisted_1, null, 512), [
                [vShow, unref(innerVisible)]
              ])
            ]),
            _: 1
          }),
          createVNode(Transition, {
            name: "fade",
            onAfterLeave: unref(handleAfterLeave)
          }, {
            default: withCtx(() => [
              withDirectives(createElementVNode("div", _hoisted_2, [
                createElementVNode("div", {
                  style: normalizeStyle({
                    transform: `scale(${unref(scale)}, ${unref(scale)})`
                  }),
                  class: "yc-image-preview-img-container",
                  onClick: _cache[0] || (_cache[0] = withModifiers(($event) => unref(handleClose)("mask", $event), ["self"]))
                }, [
                  createElementVNode("img", {
                    src: _ctx.src,
                    style: normalizeStyle({
                      transform: `translate(-50%, -50%) rotate(${rotate.value}deg)`
                    }),
                    class: "yc-image-preview-img",
                    ref_key: "imageRef",
                    ref: imageRef
                  }, null, 12, _hoisted_3)
                ], 4),
                createVNode(ImagePreviewToolbar, {
                  actionsLayout: _ctx.actionsLayout,
                  onClick: handleAction
                }, createSlots({ _: 2 }, [
                  _ctx.$slots.actions ? {
                    name: "actions",
                    fn: withCtx(() => [
                      renderSlot(_ctx.$slots, "actions", {}, void 0, true)
                    ]),
                    key: "0"
                  } : void 0
                ]), 1032, ["actionsLayout"]),
                renderSlot(_ctx.$slots, "arrow", {}, void 0, true),
                _ctx.closable ? (openBlock(), createElementBlock("div", {
                  key: 0,
                  class: "yc-image-preview-close-btn",
                  onClick: _cache[1] || (_cache[1] = ($event) => unref(handleClose)("closeBtn", $event))
                }, [
                  createVNode(unref(_sfc_main$1))
                ])) : createCommentVNode("", true)
              ], 512), [
                [vShow, unref(innerVisible)]
              ])
            ]),
            _: 3
          }, 8, ["onAfterLeave"])
        ], 6)) : createCommentVNode("", true)
      ], 8, ["to"]);
    };
  }
});
export {
  _sfc_main as default
};
