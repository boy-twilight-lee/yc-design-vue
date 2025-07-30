import { defineComponent, toRefs, computed, openBlock, createElementBlock, normalizeClass, unref, renderSlot, createBlock, createCommentVNode } from "vue";
import "../node_modules/tinycolor2/esm/tinycolor.js";
import "../_shared/utils/dom.js";
import "../_shared/utils/time.js";
import "../Empty/index.js";
import "../_shared/icons/_Icon.vue.js";
import _sfc_main$1 from "../_shared/icons/IconLink.vue.js";
import Spin from "../Spin/index.js";
const _hoisted_1 = ["href"];
const _hoisted_2 = {
  key: 0,
  class: "yc-link-icon"
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  ...{
    name: "Link"
  },
  __name: "index",
  props: {
    href: { default: "" },
    icon: { type: Boolean, default: false },
    status: { default: "normal" },
    hoverable: { type: Boolean, default: true },
    disabled: { type: Boolean, default: false },
    loading: { type: Boolean, default: false }
  },
  emits: ["click", "dblclick", "contextmenu"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emits = __emit;
    const { disabled, loading, href } = toRefs(props);
    const resultHref = computed(() => {
      if (loading.value || disabled.value)
        return "javascript:void(0)";
      return href.value || "javascript:void(0)";
    });
    const handleEvent = (type, e) => {
      if (disabled.value || loading.value)
        return;
      emits(type, e);
    };
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("a", {
        href: resultHref.value,
        class: normalizeClass([
          "yc-link",
          `yc-link-status-${_ctx.status}`,
          {
            "yc-link-hoverable": _ctx.hoverable && !unref(disabled) && !unref(loading),
            "yc-link-loading": unref(loading),
            "yc-link-disabled": unref(disabled)
          }
        ]),
        onClick: _cache[0] || (_cache[0] = ($event) => handleEvent("click", $event)),
        onDblclick: _cache[1] || (_cache[1] = ($event) => handleEvent("dblclick", $event)),
        onContextmenu: _cache[2] || (_cache[2] = ($event) => handleEvent("contextmenu", $event))
      }, [
        _ctx.$slots.icon || _ctx.icon || unref(loading) ? (openBlock(), createElementBlock("span", _hoisted_2, [
          !unref(loading) ? renderSlot(_ctx.$slots, "icon", { key: 0 }, () => [
            _ctx.icon ? (openBlock(), createBlock(unref(_sfc_main$1), { key: 0 })) : createCommentVNode("", true)
          ], true) : (openBlock(), createBlock(unref(Spin), {
            key: 1,
            "is-size-inherit": ""
          }))
        ])) : createCommentVNode("", true),
        renderSlot(_ctx.$slots, "default", {}, void 0, true)
      ], 42, _hoisted_1);
    };
  }
});
export {
  _sfc_main as default
};
