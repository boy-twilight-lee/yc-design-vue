import { defineComponent, toRefs, useSlots, computed, Fragment, Comment, openBlock, createElementBlock, normalizeClass, unref, normalizeStyle, renderSlot, createCommentVNode, renderList, createElementVNode, createBlock, resolveDynamicComponent } from "vue";
import "../node_modules/tinycolor2/esm/tinycolor.js";
import "../_shared/utils/dom.js";
import { valueToPx } from "../_shared/utils/fn.js";
import { isNumber, isUndefined } from "../_shared/utils/is.js";
import "../_shared/utils/time.js";
import { getSlotFunction } from "../_shared/utils/vue-utils.js";
import "../Empty/index.js";
import "../_shared/icons/_Icon.vue.js";
const _hoisted_1 = { class: "yc-space-item" };
const _hoisted_2 = {
  key: 0,
  class: "yc-space-split"
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  ...{
    name: "Space"
  },
  __name: "index",
  props: {
    align: { default: void 0 },
    direction: { default: "horizontal" },
    wrap: { type: Boolean, default: false },
    fill: { type: Boolean, default: false },
    size: { default: "small" }
  },
  setup(__props) {
    const props = __props;
    const { size, direction, align: _align } = toRefs(props);
    const slots = useSlots();
    const gap = computed(() => {
      const map = {
        mini: 4,
        small: 8,
        medium: 16,
        large: 24
      };
      return valueToPx(isNumber(size.value) ? size.value : map[size.value]);
    });
    const align = computed(() => {
      if (!isUndefined(_align.value)) {
        return _align.value;
      }
      return direction.value == "horizontal" ? "center" : "start";
    });
    const nodes = computed(() => {
      var _a;
      if (!slots.split)
        return [];
      const result = [];
      (((_a = slots.default) == null ? void 0 : _a.call(slots)) || []).forEach((node) => {
        if (node.type === Fragment) {
          result.push(...node.children);
        } else if (node.type !== Comment) {
          result.push(node);
        }
      });
      return result;
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", {
        class: normalizeClass([
          "yc-space",
          `yc-space-align-${align.value}`,
          `yc-space-direction-${unref(direction)}`,
          {
            "yc-space-wrap": _ctx.wrap,
            "yc-space-fill": _ctx.fill
          }
        ]),
        style: normalizeStyle({
          gap: gap.value
        })
      }, [
        !_ctx.$slots.split ? renderSlot(_ctx.$slots, "default", { key: 0 }, void 0, true) : createCommentVNode("", true),
        (openBlock(true), createElementBlock(Fragment, null, renderList(nodes.value, (node, i) => {
          return openBlock(), createElementBlock(Fragment, { key: i }, [
            createElementVNode("div", _hoisted_1, [
              (openBlock(), createBlock(resolveDynamicComponent(unref(getSlotFunction)(node))))
            ]),
            i < nodes.value.length - 1 ? (openBlock(), createElementBlock("div", _hoisted_2, [
              renderSlot(_ctx.$slots, "split", {}, void 0, true)
            ])) : createCommentVNode("", true)
          ], 64);
        }), 128))
      ], 6);
    };
  }
});
export {
  _sfc_main as default
};
