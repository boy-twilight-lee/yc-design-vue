import { defineComponent, computed, openBlock, createBlock, TransitionGroup, normalizeClass, withCtx, createElementBlock, Fragment, renderList, mergeProps } from "vue";
import _Notification from "./Notification.vue.js";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "NotificationList",
  props: {
    notificationList: { default: () => [] },
    position: { default: "topRight" }
  },
  setup(__props) {
    const props = __props;
    const animationName = computed(() => {
      const dir = props.position.includes("Right") ? "right" : "left";
      return `slide-${dir}-notification`;
    });
    return (_ctx, _cache) => {
      return openBlock(), createBlock(TransitionGroup, {
        name: animationName.value,
        class: normalizeClass(["yc-notification-list", `yc-notification-list-${_ctx.position}`]),
        tag: "div"
      }, {
        default: withCtx(() => [
          (openBlock(true), createElementBlock(Fragment, null, renderList(_ctx.notificationList, (notification) => {
            return openBlock(), createBlock(_Notification, mergeProps({
              key: notification.id,
              ref_for: true
            }, notification), null, 16);
          }), 128))
        ]),
        _: 1
      }, 8, ["name", "class"]);
    };
  }
});
export {
  _sfc_main as default
};
