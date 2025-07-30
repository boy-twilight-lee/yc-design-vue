import { defineComponent, openBlock, createElementBlock, Fragment, renderList, createBlock, withCtx, resolveDynamicComponent, createCommentVNode, renderSlot } from "vue";
import "../node_modules/tinycolor2/esm/tinycolor.js";
import "../_shared/utils/dom.js";
import "../_shared/utils/time.js";
import "../Empty/index.js";
import "../_shared/icons/_Icon.vue.js";
import _sfc_main$1 from "../_shared/icons/IconFullScreen.vue2.js";
import _sfc_main$6 from "../_shared/icons/IconOriginSize.vue2.js";
import _sfc_main$3 from "../_shared/icons/IconRotateLeft.vue2.js";
import _sfc_main$2 from "../_shared/icons/IconRotateRight.vue2.js";
import _sfc_main$4 from "../_shared/icons/IconZoomIn.vue2.js";
import _sfc_main$5 from "../_shared/icons/IconZoomOut.vue2.js";
import ImagePreviewAction from "./ImagePreviewAction.vue.js";
const _hoisted_1 = {
  key: 0,
  class: "yc-image-preview-toolbar"
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "ImagePreviewToolbar",
  props: {
    actionsLayout: { default: () => [] }
  },
  emits: ["click"],
  setup(__props) {
    const actionMap = {
      fullScreen: {
        icon: _sfc_main$1,
        name: "全屏"
      },
      rotateRight: {
        icon: _sfc_main$2,
        name: "向右旋转"
      },
      rotateLeft: {
        icon: _sfc_main$3,
        name: "向左旋转"
      },
      zoomIn: {
        icon: _sfc_main$4,
        name: "放大"
      },
      zoomOut: {
        icon: _sfc_main$5,
        name: "缩小"
      },
      originalSize: {
        icon: _sfc_main$6,
        name: "还原"
      }
    };
    return (_ctx, _cache) => {
      return _ctx.actionsLayout.length ? (openBlock(), createElementBlock("div", _hoisted_1, [
        (openBlock(true), createElementBlock(Fragment, null, renderList(_ctx.actionsLayout, (action) => {
          return openBlock(), createElementBlock(Fragment, { key: action }, [
            actionMap[action] ? (openBlock(), createBlock(ImagePreviewAction, {
              key: 0,
              name: actionMap[action].name,
              onClick: (ev) => _ctx.$emit("click", action, ev)
            }, {
              default: withCtx(() => [
                (openBlock(), createBlock(resolveDynamicComponent(actionMap[action].icon)))
              ]),
              _: 2
            }, 1032, ["name", "onClick"])) : createCommentVNode("", true)
          ], 64);
        }), 128)),
        renderSlot(_ctx.$slots, "actions", {}, void 0, true)
      ])) : createCommentVNode("", true);
    };
  }
});
export {
  _sfc_main as default
};
