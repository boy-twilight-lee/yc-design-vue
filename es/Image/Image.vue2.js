import { defineComponent, toRefs, ref, watch, openBlock, createElementBlock, normalizeStyle, unref, createElementVNode, createBlock, mergeProps, isRef, createSlots, withCtx, renderSlot, createCommentVNode, createVNode, toDisplayString, normalizeClass } from "vue";
import "../node_modules/tinycolor2/esm/tinycolor.js";
import "../_shared/utils/dom.js";
import { valueToPx } from "../_shared/utils/fn.js";
import "../_shared/utils/time.js";
import "../Empty/index.js";
import "../_shared/icons/_Icon.vue.js";
import _sfc_main$1 from "../_shared/icons/IconImageClose.vue.js";
import useControlValue from "../_shared/utils/control.js";
import useContext from "./hooks/useContext.js";
import Spin from "../Spin/index.js";
import ImagePreview from "./ImagePreview.vue.js";
const _hoisted_1 = ["src", "title", "alt"];
const _hoisted_2 = {
  key: 1,
  class: "yc-image-overlay"
};
const _hoisted_3 = { class: "yc-image-loader" };
const _hoisted_4 = {
  key: 2,
  class: "yc-image-overlay"
};
const _hoisted_5 = { class: "yc-image-error" };
const _hoisted_6 = { class: "yc-image-error-icon" };
const _hoisted_7 = { class: "yc-image-error-alt" };
const _hoisted_8 = { class: "yc-image-footer-caption" };
const _hoisted_9 = ["title"];
const _hoisted_10 = ["title"];
const _hoisted_11 = {
  key: 0,
  class: "yc-image-footer-extra"
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  ...{
    name: "Image"
  },
  __name: "Image",
  props: {
    src: { default: "" },
    width: {},
    height: {},
    title: { default: "" },
    description: { default: "" },
    fit: {},
    alt: {},
    hideFooter: { type: [Boolean, String], default: false },
    footerPosition: { default: "inner" },
    showLoader: { type: Boolean, default: false },
    preview: { type: Boolean, default: true },
    previewVisible: { type: Boolean, default: void 0 },
    defaultPreviewVisible: { type: Boolean, default: false },
    previewProps: { default: () => {
      return {};
    } },
    footerClass: { default: "" }
  },
  emits: ["update:previewVisible", "preview-visible-change"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emits = __emit;
    const { src, preview, previewVisible, defaultPreviewVisible } = toRefs(props);
    const { hasGroupFather, handleClick: previewImage } = useContext().inject();
    const computedVisible = useControlValue(
      previewVisible,
      defaultPreviewVisible.value,
      (val) => {
        emits("update:previewVisible", val);
        emits("preview-visible-change", val);
      }
    );
    const isError = ref(false);
    const loading = ref(false);
    const handleLoad = () => {
      loading.value = false;
      isError.value = false;
    };
    const handleError = () => {
      loading.value = false;
      isError.value = true;
    };
    const handleClick = () => {
      if (hasGroupFather.value) {
        return previewImage(src.value);
      }
      if (!preview.value)
        return;
      computedVisible.value = true;
    };
    watch(
      () => src.value,
      () => {
        loading.value = true;
        isError.value = false;
      },
      {
        immediate: true
      }
    );
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", {
        class: "yc-image",
        style: normalizeStyle({
          width: unref(valueToPx)(_ctx.width),
          height: unref(valueToPx)(_ctx.height)
        })
      }, [
        createElementVNode("img", {
          src: unref(src),
          title: _ctx.title,
          alt: _ctx.alt ?? _ctx.description,
          style: normalizeStyle({
            width: unref(valueToPx)(_ctx.width),
            height: unref(valueToPx)(_ctx.height),
            objectFit: _ctx.fit
          }),
          class: "yc-image-img",
          onLoad: handleLoad,
          onError: handleError,
          onClick: handleClick
        }, null, 44, _hoisted_1),
        unref(preview) ? (openBlock(), createBlock(ImagePreview, mergeProps({
          key: 0,
          visible: unref(computedVisible),
          "onUpdate:visible": _cache[0] || (_cache[0] = ($event) => isRef(computedVisible) ? computedVisible.value = $event : null),
          src: unref(src)
        }, _ctx.previewProps), createSlots({ _: 2 }, [
          _ctx.$slots["preview-actions"] ? {
            name: "actions",
            fn: withCtx(() => [
              renderSlot(_ctx.$slots, "preview-actions", {}, void 0, true)
            ]),
            key: "0"
          } : void 0
        ]), 1040, ["visible", "src"])) : createCommentVNode("", true),
        (_ctx.showLoader || _ctx.$slots.loader) && loading.value ? (openBlock(), createElementBlock("div", _hoisted_2, [
          createElementVNode("div", _hoisted_3, [
            renderSlot(_ctx.$slots, "loader", {}, () => [
              createVNode(unref(Spin), {
                size: 30,
                tip: "加载中"
              })
            ], true)
          ])
        ])) : createCommentVNode("", true),
        isError.value ? (openBlock(), createElementBlock("div", _hoisted_4, [
          renderSlot(_ctx.$slots, "error", {}, () => [
            createElementVNode("div", _hoisted_5, [
              renderSlot(_ctx.$slots, "error-icon", {}, () => [
                createElementVNode("div", _hoisted_6, [
                  createVNode(unref(_sfc_main$1), { size: 60 })
                ])
              ], true),
              createElementVNode("div", _hoisted_7, toDisplayString(_ctx.alt ?? _ctx.description), 1)
            ])
          ], true)
        ])) : createCommentVNode("", true),
        !_ctx.hideFooter && (_ctx.title || _ctx.description || _ctx.$slots.extra) ? (openBlock(), createElementBlock("div", {
          key: 3,
          class: normalizeClass([
            "yc-image-footer",
            _ctx.footerPosition == "inner" ? "yc-image-footer-inner" : "yc-image-footer-outer",
            _ctx.footerClass
          ])
        }, [
          createElementVNode("div", _hoisted_8, [
            createElementVNode("div", {
              class: "yc-image-footer-caption-title",
              title: _ctx.title
            }, toDisplayString(_ctx.title), 9, _hoisted_9),
            createElementVNode("div", {
              class: "yc-image-footer-caption-description",
              title: _ctx.description
            }, toDisplayString(_ctx.description), 9, _hoisted_10)
          ]),
          _ctx.$slots.extra ? (openBlock(), createElementBlock("div", _hoisted_11, [
            renderSlot(_ctx.$slots, "extra", {}, void 0, true)
          ])) : createCommentVNode("", true)
        ], 2)) : createCommentVNode("", true)
      ], 4);
    };
  }
});
export {
  _sfc_main as default
};
