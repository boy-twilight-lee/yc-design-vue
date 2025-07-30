import { defineComponent, toRefs, useSlots, provide, renderSlot } from "vue";
import "../node_modules/tinycolor2/esm/tinycolor.js";
import "../_shared/utils/dom.js";
import "../_shared/utils/time.js";
import { CONFIG_PROVIDER_PROVIDE_KEY } from "../_shared/utils/global-config.js";
const _sfc_main = /* @__PURE__ */ defineComponent({
  ...{
    name: "ConfigProvider"
  },
  __name: "index",
  props: {
    zIndex: { default: 1001 },
    size: { default: "medium" },
    popupContainer: { default: "body" },
    updateAtScroll: { type: Boolean, default: true },
    scrollToClose: { type: Boolean, default: false },
    exchangeTime: { type: Boolean, default: true }
  },
  setup(__props) {
    const props = __props;
    const {
      zIndex,
      size,
      updateAtScroll,
      scrollToClose,
      exchangeTime,
      popupContainer
    } = toRefs(props);
    const slots = useSlots();
    provide(CONFIG_PROVIDER_PROVIDE_KEY, {
      slots,
      zIndex,
      size,
      updateAtScroll,
      scrollToClose,
      exchangeTime,
      popupContainer
    });
    return (_ctx, _cache) => {
      return renderSlot(_ctx.$slots, "default");
    };
  }
});
export {
  _sfc_main as default
};
