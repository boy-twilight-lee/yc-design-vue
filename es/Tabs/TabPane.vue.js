import { defineComponent, computed, openBlock, createElementBlock, unref, renderSlot, createCommentVNode } from "vue";
import "../node_modules/tinycolor2/esm/tinycolor.js";
import "../_shared/utils/dom.js";
import { isUndefined } from "../_shared/utils/is.js";
import "../_shared/utils/time.js";
import "../Empty/index.js";
import "../_shared/icons/_Icon.vue.js";
import useContext from "./hooks/useContext.js";
const _hoisted_1 = { class: "yc-tabs-content-item" };
const _hoisted_2 = {
  key: 0,
  class: "yc-tabs-pane"
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  ...{
    name: "TabPane"
  },
  __name: "TabPane",
  props: {
    title: { default: "" },
    path: { default: "" },
    disabled: { type: Boolean, default: false },
    closable: { type: Boolean, default: void 0 },
    destoryOnHide: { type: Boolean, default: void 0 }
  },
  setup(__props) {
    const props = __props;
    const { computedActiveKey, destoryOnHide: _destoryOnHide } = useContext().inject();
    const destoryOnHide = computed(() => {
      return !isUndefined(props.destoryOnHide) ? props.destoryOnHide : _destoryOnHide.value;
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1, [
        !destoryOnHide.value || unref(computedActiveKey) == _ctx.path ? (openBlock(), createElementBlock("div", _hoisted_2, [
          renderSlot(_ctx.$slots, "default")
        ])) : createCommentVNode("", true)
      ]);
    };
  }
});
export {
  _sfc_main as default
};
