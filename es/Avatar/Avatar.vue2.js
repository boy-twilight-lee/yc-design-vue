import { defineComponent, ref, computed, openBlock, createElementBlock, normalizeClass, unref, normalizeStyle, renderSlot, createVNode, createCommentVNode } from "vue";
import { useResizeObserver } from "../node_modules/@vueuse/core/index.js";
import "../node_modules/tinycolor2/esm/tinycolor.js";
import "../_shared/utils/dom.js";
import { valueToPx } from "../_shared/utils/fn.js";
import "../_shared/utils/time.js";
import "../Empty/index.js";
import "../_shared/icons/_Icon.vue.js";
import _sfc_main$1 from "../_shared/icons/IconImageClose.vue.js";
import useContext from "./hooks/useContext.js";
const _hoisted_1 = {
  key: 1,
  class: "yc-avatar-image"
};
const _hoisted_2 = ["src"];
const _hoisted_3 = {
  key: 1,
  class: "yc-avatar-image-icon"
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  ...{
    name: "Avatar"
  },
  __name: "Avatar",
  props: {
    shape: { default: void 0 },
    imageUrl: { default: "" },
    size: { default: void 0 },
    autoFixFontSize: { type: Boolean, default: void 0 },
    triggerType: { default: "button" },
    triggerIconStyle: { default: () => {
      return {};
    } },
    objectFit: { default: "cover" }
  },
  emits: ["click", "error", "load"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emits = __emit;
    const { size, autoFixFontSize, shape } = useContext().inject(props);
    const isLoadError = ref(false);
    const scale = ref(1);
    const textRef = ref();
    const avatarRef = ref();
    const textWithImage = computed(() => {
      var _a;
      return (_a = textRef.value) == null ? void 0 : _a.querySelector("img");
    });
    const handleError = (e) => {
      isLoadError.value = true;
      emits("error", e);
    };
    const initOvserver = () => {
      if (!autoFixFontSize.value)
        return;
      useResizeObserver(textRef, () => {
        const avatarWidth = size.value ?? avatarRef.value.offsetWidth;
        const textWidth = textRef.value.offsetWidth;
        const textScale = avatarWidth / (textWidth + 8);
        scale.value = avatarWidth && textScale < 1 ? textScale : 1;
      });
    };
    initOvserver();
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", {
        class: normalizeClass(["yc-avatar", `yc-avatar-shape-${unref(shape)}`]),
        style: normalizeStyle({
          width: unref(valueToPx)(unref(size)),
          height: unref(valueToPx)(unref(size))
        }),
        ref_key: "avatarRef",
        ref: avatarRef,
        onClick: _cache[1] || (_cache[1] = ($event) => _ctx.$emit("click", $event))
      }, [
        _ctx.$slots.default ? (openBlock(), createElementBlock("span", {
          key: 0,
          class: normalizeClass([textWithImage.value ? "yc-avatar-image" : "yc-avatar-text"]),
          style: normalizeStyle({
            transform: textWithImage.value ? "" : `scale(${scale.value}) translateX(-50%)`
          }),
          ref_key: "textRef",
          ref: textRef
        }, [
          renderSlot(_ctx.$slots, "default", {}, void 0, true)
        ], 6)) : _ctx.imageUrl ? (openBlock(), createElementBlock("span", _hoisted_1, [
          !isLoadError.value ? (openBlock(), createElementBlock("img", {
            key: 0,
            src: _ctx.imageUrl,
            style: normalizeStyle({
              objectFit: _ctx.objectFit
            }),
            alt: "avatar",
            onLoad: _cache[0] || (_cache[0] = ($event) => _ctx.$emit("load", $event)),
            onError: handleError
          }, null, 44, _hoisted_2)) : (openBlock(), createElementBlock("div", _hoisted_3, [
            createVNode(unref(_sfc_main$1))
          ]))
        ])) : createCommentVNode("", true),
        _ctx.$slots["trigger-icon"] ? (openBlock(), createElementBlock("div", {
          key: 2,
          class: normalizeClass([
            {
              "yc-avatar-trigger-icon-button": _ctx.triggerType == "button",
              "yc-avatar-trigger-icon-mask": _ctx.triggerType == "mask"
            }
          ]),
          style: normalizeStyle(_ctx.triggerIconStyle)
        }, [
          renderSlot(_ctx.$slots, "trigger-icon", {}, void 0, true)
        ], 6)) : createCommentVNode("", true)
      ], 6);
    };
  }
});
export {
  _sfc_main as default
};
