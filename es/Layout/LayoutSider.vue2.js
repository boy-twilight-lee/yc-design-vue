import { defineComponent, useCssVars, toRefs, ref, computed, openBlock, createBlock, unref, normalizeClass, withCtx, renderSlot, createElementBlock, createVNode, createCommentVNode } from "vue";
import "../node_modules/tinycolor2/esm/tinycolor.js";
import { mediaQueryHandler } from "../_shared/utils/dom.js";
import { valueToPx } from "../_shared/utils/fn.js";
import "../_shared/utils/time.js";
import "../Empty/index.js";
import "../_shared/icons/_Icon.vue.js";
import _sfc_main$1 from "../_shared/icons/IconArrowRight.vue.js";
import useControlValue from "../_shared/utils/control.js";
import ResizeBox from "../ResizeBox/index.js";
const _sfc_main = /* @__PURE__ */ defineComponent({
  ...{
    name: "LayoutSider"
  },
  __name: "LayoutSider",
  props: {
    theme: { default: "light" },
    collapsed: { type: Boolean, default: void 0 },
    defaultCollapsed: { type: Boolean, default: false },
    collapsible: { type: Boolean, default: false },
    width: { default: 200 },
    collapsedWidth: { default: 48 },
    reverseArrow: { type: Boolean, default: false },
    breakpoint: { default: void 0 },
    hideTrigger: { type: Boolean, default: false },
    resizeDirections: { default: () => {
      return [];
    } }
  },
  emits: ["update:collapsed", "collapse", "breakpoint"],
  setup(__props, { emit: __emit }) {
    useCssVars((_ctx) => ({
      "6d1005b6": computedWidth.value,
      "c8428e7a": collapsedWidth.value
    }));
    const props = __props;
    const emits = __emit;
    const {
      collapsed,
      defaultCollapsed,
      collapsible,
      breakpoint,
      hideTrigger,
      width: _width,
      collapsedWidth: _collapsedWidth
    } = toRefs(props);
    const asideWidth = ref(_width.value);
    const computedWidth = computed(() => valueToPx(asideWidth.value));
    const collapsedWidth = computed(() => valueToPx(_collapsedWidth.value));
    const computedCollapsed = useControlValue(
      collapsed,
      defaultCollapsed.value,
      (val) => {
        emits("update:collapsed", val);
      }
    );
    const showTrigger = computed(() => {
      return !hideTrigger.value && collapsible.value;
    });
    const handleCollapse = () => {
      if (!collapsible.value)
        return;
      const value = !computedCollapsed.value;
      computedCollapsed.value = value;
      asideWidth.value = value ? _collapsedWidth.value : _width.value;
      emits("collapse", value, "clickTrigger");
    };
    mediaQueryHandler((_, order, i) => {
      if (!collapsible.value || !breakpoint.value)
        return;
      const value = i <= order[breakpoint.value];
      computedCollapsed.value = value;
      asideWidth.value = value ? _collapsedWidth.value : _width.value;
      emits("collapse", value, "responsive");
      emits("breakpoint", value);
    });
    return (_ctx, _cache) => {
      return _ctx.resizeDirections.length ? (openBlock(), createBlock(unref(ResizeBox), {
        key: 0,
        width: asideWidth.value,
        "onUpdate:width": _cache[0] || (_cache[0] = ($event) => asideWidth.value = $event),
        directions: _ctx.resizeDirections,
        class: normalizeClass([
          "yc-layout-sider",
          `yc-layout-sider-${_ctx.theme}`,
          {
            "yc-layout-sider-has-trigger": showTrigger.value
          }
        ])
      }, {
        default: withCtx(() => [
          renderSlot(_ctx.$slots, "default", {}, void 0, true),
          showTrigger.value ? (openBlock(), createElementBlock("div", {
            key: 0,
            class: "yc-collapse-button",
            onClick: handleCollapse
          }, [
            renderSlot(_ctx.$slots, "trigger", { collapsed: unref(computedCollapsed) }, () => [
              createVNode(unref(_sfc_main$1), {
                rotate: unref(computedCollapsed) && !_ctx.reverseArrow ? 0 : 180
              }, null, 8, ["rotate"])
            ], true)
          ])) : createCommentVNode("", true)
        ]),
        _: 3
      }, 8, ["width", "directions", "class"])) : (openBlock(), createElementBlock("aside", {
        key: 1,
        class: normalizeClass([
          "yc-layout-sider",
          "yc-layout-sider-translation",
          `yc-layout-sider-${_ctx.theme}`,
          {
            "yc-layout-sider-collapsed": unref(computedCollapsed),
            "yc-layout-sider-has-trigger": showTrigger.value
          }
        ])
      }, [
        renderSlot(_ctx.$slots, "default", {}, void 0, true),
        showTrigger.value ? (openBlock(), createElementBlock("div", {
          key: 0,
          class: "yc-collapse-button",
          onClick: handleCollapse
        }, [
          renderSlot(_ctx.$slots, "trigger", { collapsed: unref(computedCollapsed) }, () => [
            createVNode(unref(_sfc_main$1), {
              rotate: unref(computedCollapsed) && !_ctx.reverseArrow ? 0 : 180
            }, null, 8, ["rotate"])
          ], true)
        ])) : createCommentVNode("", true)
      ], 2));
    };
  }
});
export {
  _sfc_main as default
};
