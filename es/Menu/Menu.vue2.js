import { defineComponent, useCssVars, unref, ref, openBlock, createElementBlock, normalizeClass, createElementVNode, renderSlot, createBlock, createCommentVNode } from "vue";
import "../node_modules/tinycolor2/esm/tinycolor.js";
import { mediaQueryHandler } from "../_shared/utils/dom.js";
import "../_shared/utils/time.js";
import "../Empty/index.js";
import "../_shared/icons/_Icon.vue.js";
import _sfc_main$1 from "../_shared/icons/IconMenuFold.vue.js";
import _sfc_main$2 from "../_shared/icons/IconMenuUnfold.vue.js";
import useContext from "./hooks/useContext.js";
import MenuEllipsis from "./MenuEllipsis.vue.js";
const _sfc_main = /* @__PURE__ */ defineComponent({
  ...{
    name: "Menu"
  },
  __name: "Menu",
  props: {
    theme: { default: "light" },
    mode: { default: "vertical" },
    levelIndent: { default: 20 },
    autoOpen: { type: Boolean, default: false },
    collapsed: { type: Boolean, default: void 0 },
    defaultCollapsed: { type: Boolean, default: false },
    collapsedWidth: { default: 48 },
    accordion: { type: Boolean, default: false },
    showCollapseButton: { type: Boolean, default: false },
    selectedKeys: { default: void 0 },
    defaultSelectedKeys: { default: "" },
    openKeys: { default: void 0 },
    defaultOpenKeys: { default: () => [] },
    breakpoint: { default: void 0 },
    triggerProps: { default: () => {
      return {};
    } },
    tooltipProps: { default: () => {
      return {};
    } },
    autoOpenSelected: { type: Boolean, default: false },
    autoScrollIntoView: { type: Boolean, default: false },
    scrollConfig: {},
    popupMaxHeight: { type: [Boolean, Number], default: 167 }
  },
  emits: ["update:selectedKeys", "update:openKeys", "update:collapsed", "collapse", "menu-item-click", "sub-menu-click"],
  setup(__props, { emit: __emit }) {
    useCssVars((_ctx) => ({
      "05704ab3": unref(collapsedWidth)
    }));
    const props = __props;
    const emits = __emit;
    const menuRef = ref();
    const { computedCollapsed, collapsedWidth, breakpoint, menuTree, max } = useContext().provide(props, emits, menuRef);
    const handleClick = () => {
      const value = !computedCollapsed.value;
      computedCollapsed.value = value;
      emits("collapse", value, "clickTrigger");
    };
    mediaQueryHandler((_, order, i) => {
      if (!breakpoint.value)
        return;
      const value = i <= order[breakpoint.value];
      computedCollapsed.value = value;
      emits("collapse", value, "responsive");
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", {
        class: normalizeClass([
          "yc-menu",
          `yc-menu-mode-${_ctx.mode}`,
          `yc-menu-theme-${_ctx.theme}`,
          {
            "yc-menu-collapsed": unref(computedCollapsed) && _ctx.mode != "horizontal"
          }
        ])
      }, [
        createElementVNode("div", {
          class: "yc-menu-inner",
          ref_key: "menuRef",
          ref: menuRef
        }, [
          renderSlot(_ctx.$slots, "default", {}, void 0, true),
          _ctx.mode == "horizontal" && unref(max) < unref(menuTree).length ? (openBlock(), createBlock(MenuEllipsis, { key: 0 })) : createCommentVNode("", true)
        ], 512),
        _ctx.showCollapseButton && _ctx.mode != "horizontal" ? (openBlock(), createElementBlock("div", {
          key: 0,
          class: "yc-menu-collapse-button",
          onClick: handleClick
        }, [
          !unref(computedCollapsed) ? (openBlock(), createBlock(unref(_sfc_main$1), { key: 0 })) : (openBlock(), createBlock(unref(_sfc_main$2), { key: 1 }))
        ])) : createCommentVNode("", true)
      ], 2);
    };
  }
});
export {
  _sfc_main as default
};
