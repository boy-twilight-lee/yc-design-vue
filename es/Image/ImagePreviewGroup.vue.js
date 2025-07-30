import { defineComponent, toRefs, openBlock, createElementBlock, Fragment, unref, renderSlot, createCommentVNode, createVNode, mergeProps, isRef, createSlots, withCtx, createElementVNode } from "vue";
import { onKeyStroke } from "../node_modules/@vueuse/core/index.js";
import useContext from "./hooks/useContext.js";
import ImagePreview from "./ImagePreview.vue.js";
import ImagePreviewArrow from "./ImagePreviewArrow.vue.js";
const _hoisted_1 = { class: "yc-image-preview-arrow" };
const _sfc_main = /* @__PURE__ */ defineComponent({
  ...{
    name: "ImagePreviewGroup",
    inheritAttrs: false
  },
  __name: "ImagePreviewGroup",
  props: {
    srcList: { default: () => [] },
    current: { default: void 0 },
    defaultCurrent: { default: 0 },
    infinite: { type: Boolean, default: false },
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
  emits: ["update:visible", "update:current", "change", "visible-change"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emits = __emit;
    const { srcList: _srcList, infinite, keyboard } = toRefs(props);
    const { src, srcList, computedCurrent, computedVisible } = useContext().provide(
      props,
      emits
    );
    const handleCurrentChange = (type) => {
      let index = 0;
      if (!infinite.value && (type == "pre" && computedCurrent.value == 0 || type == "next" && computedCurrent.value == srcList.value.length - 1)) {
        return;
      }
      if (type == "pre") {
        index = computedCurrent.value - 1;
        index = index < 0 ? srcList.value.length - 1 : index;
      } else {
        index = computedCurrent.value + 1;
        index = index == srcList.value.length ? 0 : index;
      }
      computedCurrent.value = index;
    };
    const intLisenter = () => {
      if (keyboard.value) {
        const map = {
          ArrowLeft: "pre",
          ArrowRight: "next"
        };
        onKeyStroke(["ArrowLeft", "ArrowRight"], (e) => {
          handleCurrentChange(map[e.key]);
        });
      }
    };
    intLisenter();
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock(Fragment, null, [
        _ctx.$slots.default && !unref(_srcList).length ? renderSlot(_ctx.$slots, "default", { key: 0 }) : createCommentVNode("", true),
        createVNode(ImagePreview, mergeProps(props, {
          visible: unref(computedVisible),
          "onUpdate:visible": _cache[2] || (_cache[2] = ($event) => isRef(computedVisible) ? computedVisible.value = $event : null),
          src: unref(src),
          class: _ctx.$attrs.class,
          style: _ctx.$attrs.style
        }), createSlots({
          arrow: withCtx(() => [
            createElementVNode("div", _hoisted_1, [
              createVNode(ImagePreviewArrow, {
                type: "left",
                onClick: _cache[0] || (_cache[0] = ($event) => handleCurrentChange("pre"))
              }),
              createVNode(ImagePreviewArrow, {
                type: "right",
                onClick: _cache[1] || (_cache[1] = ($event) => handleCurrentChange("next"))
              })
            ])
          ]),
          _: 2
        }, [
          _ctx.$slots.actions ? {
            name: "actions",
            fn: withCtx(() => [
              renderSlot(_ctx.$slots, "actions")
            ]),
            key: "0"
          } : void 0
        ]), 1040, ["visible", "src", "class", "style"])
      ], 64);
    };
  }
});
export {
  _sfc_main as default
};
