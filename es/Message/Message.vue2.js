import { defineComponent, toRefs, watch, onMounted, openBlock, createElementBlock, normalizeClass, unref, createBlock, resolveDynamicComponent, createCommentVNode, createElementVNode, toDisplayString, createVNode } from "vue";
import "../node_modules/tinycolor2/esm/tinycolor.js";
import "../_shared/utils/dom.js";
import { isUndefined } from "../_shared/utils/is.js";
import "../_shared/utils/time.js";
import "../Empty/index.js";
import "../_shared/icons/_Icon.vue.js";
import { TYPE_ICON_MAP } from "../_shared/constants/index.js";
import IconButton from "../_shared/components/IconButton.vue.js";
import "../_shared/components/ExpandTransition.vue.js";
import { useTimeoutFn } from "../node_modules/@vueuse/shared/index.js";
const _hoisted_1 = {
  key: 0,
  class: "yc-message-icon"
};
const _hoisted_2 = { class: "yc-message-content" };
const _sfc_main = /* @__PURE__ */ defineComponent({
  ...{
    name: "Message"
  },
  __name: "Message",
  props: {
    type: { default: "info" },
    content: { type: [String, Array, Function], default: "" },
    id: { default: "" },
    icon: { type: Function, default: void 0 },
    showIcon: { type: Boolean, default: true },
    closable: { type: Boolean, default: false },
    duration: { default: 3e3 },
    isReset: { type: Boolean, default: false },
    onClose: { type: Function, default: void 0 },
    onDestory: { type: Function, default: void 0 },
    resetOnHover: { type: Boolean, default: false }
  },
  setup(__props) {
    const props = __props;
    const { type, id, duration, resetOnHover, isReset } = toRefs(props);
    const { onClose, onDestory } = props;
    const { start, stop } = useTimeoutFn(
      () => {
        onDestory == null ? void 0 : onDestory(id.value);
        onClose == null ? void 0 : onClose(id.value);
      },
      () => duration.value,
      {
        immediate: false
      }
    );
    const handleClose = () => {
      stop();
      onDestory == null ? void 0 : onDestory(id.value);
      onClose == null ? void 0 : onClose(id.value);
    };
    const handleMouseenter = () => {
      if (!resetOnHover.value || duration.value <= 0)
        return;
      stop();
    };
    const handleMouseleave = () => {
      if (!resetOnHover.value || duration.value <= 0)
        return;
      start();
    };
    watch(
      () => isReset.value,
      (val) => {
        if (duration.value <= 0 || !val)
          return;
        stop();
        start();
      }
    );
    onMounted(() => {
      if (duration.value <= 0)
        return;
      start();
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("li", {
        role: "alert",
        class: normalizeClass(["yc-message", `yc-message-${unref(type)}`]),
        onMouseenter: handleMouseenter,
        onMouseleave: handleMouseleave
      }, [
        (unref(type) != "normal" || !unref(isUndefined)(_ctx.icon)) && _ctx.showIcon ? (openBlock(), createElementBlock("span", _hoisted_1, [
          (openBlock(), createBlock(resolveDynamicComponent(_ctx.icon ?? unref(TYPE_ICON_MAP)[unref(type)]), {
            spin: unref(type) == "loading"
          }, null, 8, ["spin"]))
        ])) : createCommentVNode("", true),
        createElementVNode("span", _hoisted_2, toDisplayString(_ctx.content), 1),
        _ctx.closable ? (openBlock(), createElementBlock("span", {
          key: 1,
          class: "yc-message-close-btn",
          onClick: handleClose
        }, [
          createVNode(unref(IconButton))
        ])) : createCommentVNode("", true)
      ], 34);
    };
  }
});
export {
  _sfc_main as default
};
