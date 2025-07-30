import { defineComponent, toRefs, useSlots, computed, openBlock, createElementBlock, normalizeClass, renderSlot, createElementVNode, unref, normalizeStyle, toDisplayString, createCommentVNode, createTextVNode } from "vue";
import "../node_modules/tinycolor2/esm/tinycolor.js";
import "../_shared/utils/dom.js";
import { valueToPx } from "../_shared/utils/fn.js";
import "../_shared/utils/time.js";
import "../Empty/index.js";
import "../_shared/icons/_Icon.vue.js";
import { TAG_PRESET_COLORS } from "../_shared/constants/index.js";
const _hoisted_1 = {
  key: 0,
  class: "yc-badge-stauts-wrapper"
};
const _hoisted_2 = {
  key: 0,
  class: "yc-badge-status-text"
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  ...{
    name: "Badge"
  },
  __name: "index",
  props: {
    text: { default: "" },
    dot: { type: Boolean, default: false },
    dotStyle: { default: () => {
      return {};
    } },
    maxCount: { default: 99 },
    offset: { default: () => {
      return [0, 0];
    } },
    color: { default: void 0 },
    status: { default: void 0 },
    count: { default: void 0 }
  },
  setup(__props) {
    const props = __props;
    const { text, dot, count, maxCount, offset, dotStyle, status, color } = toRefs(props);
    const slots = useSlots();
    const style = computed(() => {
      return {
        margin: `${valueToPx(offset.value[1])} ${valueToPx(-offset.value[0])} 0 0`,
        ...dotStyle.value
      };
    });
    const className = computed(() => {
      if (slots.content)
        return "yc-badge-custom-dot";
      if (color.value || status.value)
        return "yc-badge-status";
      if (text.value)
        return "yc-badge-text";
      if (dot.value)
        return "yc-badge-dot";
      else
        return "yc-badge-number";
    });
    const badgeText = computed(() => {
      if (color.value || status.value || text.value || dot.value)
        return text.value;
      else
        return count.value >= maxCount.value ? `${maxCount.value}+` : count.value;
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", {
        class: normalizeClass(["yc-badge", { "yc-badge-no-children": !_ctx.$slots.default }])
      }, [
        renderSlot(_ctx.$slots, "default", {}, void 0, true),
        className.value == "yc-badge-status" ? (openBlock(), createElementBlock("div", _hoisted_1, [
          createElementVNode("div", {
            class: normalizeClass([
              "yc-badge-stauts-dot",
              {
                [`yc-badge-color-${unref(color)}`]: unref(color),
                [`yc-badge-status-${unref(status)}`]: unref(status)
              }
            ]),
            style: normalizeStyle({
              backgroundColor: !unref(TAG_PRESET_COLORS).includes(unref(color)) ? unref(color) : "",
              ...unref(dotStyle)
            })
          }, null, 6),
          badgeText.value ? (openBlock(), createElementBlock("div", _hoisted_2, toDisplayString(badgeText.value), 1)) : createCommentVNode("", true)
        ])) : className.value != "yc-badge-number" || unref(count) > 0 ? (openBlock(), createElementBlock("div", {
          key: 1,
          class: normalizeClass([className.value]),
          style: normalizeStyle(style.value)
        }, [
          renderSlot(_ctx.$slots, "content", {}, () => [
            createTextVNode(toDisplayString(badgeText.value), 1)
          ], true)
        ], 6)) : createCommentVNode("", true)
      ], 2);
    };
  }
});
export {
  _sfc_main as default
};
