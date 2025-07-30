import { defineComponent, toRefs, computed, unref, openBlock, createElementBlock, normalizeClass, normalizeStyle, renderSlot, createCommentVNode, createElementVNode, createBlock, withCtx } from "vue";
import { TAG_PRESET_COLORS } from "../_shared/constants/index.js";
import "../node_modules/tinycolor2/esm/tinycolor.js";
import "../_shared/utils/dom.js";
import "../_shared/utils/time.js";
import { getGlobalConfig } from "../_shared/utils/global-config.js";
import useControlValue from "../_shared/utils/control.js";
import Spin from "../Spin/index.js";
import IconButton from "../_shared/components/IconButton.vue.js";
import "../_shared/components/ExpandTransition.vue.js";
const _hoisted_1 = {
  key: 0,
  class: "yc-tag-icon"
};
const _hoisted_2 = { class: "yc-tag-label" };
const _sfc_main = /* @__PURE__ */ defineComponent({
  ...{
    name: "Tag"
  },
  __name: "index",
  props: {
    color: { default: "default" },
    size: { default: void 0 },
    bordered: { type: Boolean, default: false },
    visible: { type: Boolean, default: void 0 },
    defaultVisible: { type: Boolean, default: true },
    loading: { type: Boolean, default: false },
    closable: { type: Boolean, default: false },
    checkable: { type: Boolean, default: false },
    checked: { type: Boolean, default: void 0 },
    defaultChecked: { type: Boolean, default: true },
    nowrap: { type: Boolean, default: false }
  },
  emits: ["update:visible", "update:checked", "close", "check"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emits = __emit;
    const { visible, defaultVisible, checked, defaultChecked, checkable, color } = toRefs(props);
    const { size } = getGlobalConfig(props);
    const computedVisible = useControlValue(
      visible,
      defaultVisible.value,
      (val) => emits("update:visible", val)
    );
    const computedChecked = useControlValue(
      checked,
      defaultChecked.value,
      (val) => emits("update:checked", val)
    );
    const background = computed(() => {
      return TAG_PRESET_COLORS.includes(color.value) ? "" : color.value;
    });
    const handleEvent = (type, ev) => {
      if (type == "close") {
        computedVisible.value = false;
        emits("close", ev);
      } else if (type == "check" && checkable.value) {
        computedChecked.value = !computedChecked.value;
        emits("check", computedChecked.value, ev);
      }
    };
    return (_ctx, _cache) => {
      return unref(computedVisible) ? (openBlock(), createElementBlock("label", {
        key: 0,
        class: normalizeClass([
          "yc-tag",
          `yc-tag-color-${unref(color)}`,
          `yc-tag-size-${["small", "medium", "large"].includes(unref(size)) ? unref(size) : "medium"}`,
          unref(TAG_PRESET_COLORS).includes(unref(color)) ? "yc-tag-preset-color" : "yc-tag-custom-color",
          _ctx.nowrap ? "yc-tag-no-wrap" : "yc-tag-wrap",
          {
            "yc-tag-loading": _ctx.loading,
            "yc-tag-bordered": _ctx.bordered,
            "yc-tag-checked": unref(computedChecked),
            "yc-tag-checkable": unref(checkable)
          }
        ]),
        style: normalizeStyle({
          background: background.value
        }),
        onClick: _cache[1] || (_cache[1] = ($event) => handleEvent("check", $event))
      }, [
        _ctx.$slots.icon ? (openBlock(), createElementBlock("div", _hoisted_1, [
          renderSlot(_ctx.$slots, "icon", {}, void 0, true)
        ])) : createCommentVNode("", true),
        createElementVNode("span", _hoisted_2, [
          renderSlot(_ctx.$slots, "default", {}, void 0, true)
        ]),
        _ctx.closable ? (openBlock(), createBlock(unref(IconButton), {
          key: 1,
          "hover-size": 16,
          "hover-color": "rgba(255, 255, 255, 0.2)",
          class: "yc-tag-close-button",
          onClick: _cache[0] || (_cache[0] = ($event) => handleEvent("close", $event))
        }, {
          default: withCtx(() => [
            _ctx.$slots["close-icon"] ? renderSlot(_ctx.$slots, "close-icon", { key: 0 }, void 0, true) : createCommentVNode("", true)
          ]),
          _: 3
        })) : createCommentVNode("", true),
        _ctx.loading ? (openBlock(), createBlock(unref(Spin), {
          key: 2,
          size: 12,
          class: "yc-tag-loading-icon"
        })) : createCommentVNode("", true)
      ], 6)) : createCommentVNode("", true);
    };
  }
});
export {
  _sfc_main as default
};
