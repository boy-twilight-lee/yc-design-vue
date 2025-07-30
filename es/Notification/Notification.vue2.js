import { defineComponent, toRefs, watch, onMounted, openBlock, createElementBlock, normalizeClass, unref, normalizeStyle, createElementVNode, createBlock, resolveDynamicComponent, createCommentVNode, withCtx } from "vue";
import { TYPE_ICON_MAP } from "../_shared/constants/index.js";
import "../node_modules/tinycolor2/esm/tinycolor.js";
import "../_shared/utils/dom.js";
import { isUndefined, isFunction } from "../_shared/utils/is.js";
import "../_shared/utils/time.js";
import { getSlotFunction } from "../_shared/utils/vue-utils.js";
import "../Empty/index.js";
import "../_shared/icons/_Icon.vue.js";
import IconButton from "../_shared/components/IconButton.vue.js";
import "../_shared/components/ExpandTransition.vue.js";
import { useTimeoutFn } from "../node_modules/@vueuse/shared/index.js";
const _hoisted_1 = { class: "yc-notification-left" };
const _hoisted_2 = {
  key: 0,
  class: "yc-notification-icon"
};
const _hoisted_3 = { class: "yc-notification-right" };
const _hoisted_4 = {
  key: 0,
  class: "yc-notification-title"
};
const _hoisted_5 = {
  key: 1,
  class: "yc-notification-content"
};
const _hoisted_6 = {
  key: 2,
  class: "yc-notification-footer"
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  ...{
    name: "Notification"
  },
  __name: "Notification",
  props: {
    type: { default: "info" },
    content: { type: [String, Array, Function], default: "" },
    title: { type: [String, Array, Function], default: "" },
    icon: { type: Function, default: void 0 },
    id: { default: "" },
    style: { default: () => {
      return {};
    } },
    class: { default: "" },
    showIcon: { type: Boolean, default: true },
    closable: { type: Boolean, default: false },
    duration: { default: 3e3 },
    isReset: { type: Boolean, default: false },
    footer: { type: Function, default: void 0 },
    closeIcon: { type: Function, default: void 0 },
    closeIconElement: { type: Function, default: void 0 },
    onClose: { type: Function, default: void 0 },
    onDestory: {}
  },
  setup(__props) {
    const props = __props;
    const { type, id, duration, class: className, isReset } = toRefs(props);
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
    watch(
      () => isReset.value,
      (newVal) => {
        if (duration.value <= 0 || !newVal)
          return;
        stop();
        start();
      }
    );
    const handleClose = () => {
      stop();
      onDestory == null ? void 0 : onDestory(id.value);
      onClose == null ? void 0 : onClose(id.value);
    };
    onMounted(() => {
      if (duration.value <= 0)
        return;
      start();
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("li", {
        role: "alert",
        class: normalizeClass(["yc-notification", `yc-notification-${unref(type)}`, unref(className)]),
        style: normalizeStyle(_ctx.style)
      }, [
        createElementVNode("div", _hoisted_1, [
          _ctx.showIcon ? (openBlock(), createElementBlock("div", _hoisted_2, [
            (openBlock(), createBlock(resolveDynamicComponent(_ctx.icon ?? unref(TYPE_ICON_MAP)[unref(type)])))
          ])) : createCommentVNode("", true)
        ]),
        createElementVNode("div", _hoisted_3, [
          !unref(isUndefined)(_ctx.title) ? (openBlock(), createElementBlock("div", _hoisted_4, [
            (openBlock(), createBlock(resolveDynamicComponent(unref(getSlotFunction)(_ctx.title))))
          ])) : createCommentVNode("", true),
          !unref(isUndefined)(_ctx.content) ? (openBlock(), createElementBlock("div", _hoisted_5, [
            (openBlock(), createBlock(resolveDynamicComponent(unref(getSlotFunction)(_ctx.content))))
          ])) : createCommentVNode("", true),
          unref(isFunction)(_ctx.footer) ? (openBlock(), createElementBlock("div", _hoisted_6, [
            (openBlock(), createBlock(resolveDynamicComponent(_ctx.footer)))
          ])) : createCommentVNode("", true)
        ]),
        _ctx.closable ? (openBlock(), createElementBlock("div", {
          key: 0,
          class: "yc-notification-close-btn",
          onClick: handleClose
        }, [
          _ctx.closeIconElement ? (openBlock(), createBlock(resolveDynamicComponent(_ctx.closeIconElement), { key: 0 })) : (openBlock(), createBlock(unref(IconButton), { key: 1 }, {
            default: withCtx(() => [
              _ctx.closeIcon ? (openBlock(), createBlock(resolveDynamicComponent(_ctx.closeIcon), { key: 0 })) : createCommentVNode("", true)
            ]),
            _: 1
          }))
        ])) : createCommentVNode("", true)
      ], 6);
    };
  }
});
export {
  _sfc_main as default
};
