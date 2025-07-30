import { defineComponent, toRefs, useAttrs, computed, ref, onMounted, unref, openBlock, createElementBlock, normalizeClass, createVNode, withCtx, createElementVNode, normalizeStyle, createCommentVNode, renderSlot, withDirectives, vShow, createBlock, Fragment, renderList, resolveDynamicComponent } from "vue";
import { createReusableTemplate } from "../node_modules/@vueuse/core/index.js";
import "../node_modules/tinycolor2/esm/tinycolor.js";
import "../_shared/utils/dom.js";
import { valueToPx } from "../_shared/utils/fn.js";
import { isUndefined } from "../_shared/utils/is.js";
import "../_shared/utils/time.js";
import "../Empty/index.js";
import "../_shared/icons/_Icon.vue.js";
import useContext, { isMenuItemActive, getPopupMaxHeight } from "./hooks/useContext.js";
import _sfc_main$1 from "./MenuPopOption.vue.js";
import Dropdown from "../Dropdown/index.js";
import Tooltip from "../Tooltip/index.js";
const _hoisted_1 = {
  key: 1,
  class: "yc-menu-icon"
};
const _hoisted_2 = {
  key: 2,
  class: "yc-menu-icon-suffix"
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  ...{
    name: "MenuItem"
  },
  __name: "MenuItem",
  props: {
    path: { default: "" },
    disabled: { type: Boolean, default: false }
  },
  setup(__props) {
    const props = __props;
    const { path, disabled } = toRefs(props);
    const { reuse: ReuseTemplate, define: DefineTemplate } = createReusableTemplate();
    const attrs = useAttrs();
    const {
      computedSelectedKeys,
      computedOpenKeys,
      computedCollapsed,
      levelIndent,
      mode,
      theme,
      autoOpen,
      autoOpenSelected,
      accordion,
      triggerProps,
      tooltipProps,
      autoScrollIntoView,
      scrollConfig,
      popupMaxHeight: _popupMaxHeight,
      menuTreeNodes,
      menuTree,
      max,
      menuItemWidths,
      emits
    } = useContext().inject();
    const curNode = computed(() => {
      const node = menuTreeNodes.value.find(
        (item) => item.path == path.value
      ) || { type: "menuitem", level: 0 };
      return node;
    });
    const curIndex = computed(() => {
      return menuTree.value.findIndex((item) => item.path == path.value);
    });
    const submenus = computed(() => {
      var _a;
      return ((_a = menuTree.value[curIndex.value]) == null ? void 0 : _a.children) || [];
    });
    const isSubmenu = computed(() => {
      return curNode.value.type == "submenu";
    });
    const isRoot = computed(() => {
      return curNode.value.level === 0;
    });
    const isSelected = computed(() => {
      return isMenuItemActive(
        menuTree.value,
        path.value,
        computedSelectedKeys.value
      );
    });
    const popupMaxHeight = computed(() => {
      return !isUndefined(attrs.popupMaxHeight) ? getPopupMaxHeight(attrs.popupMaxHeight) : _popupMaxHeight.value;
    });
    const menuItemRef = ref();
    const handleSelect = (value) => {
      if (computedSelectedKeys.value == value)
        return;
      computedSelectedKeys.value = value;
      emits("menu-item-click", value);
    };
    const handleClick = () => {
      if (mode.value != "vertical" && isSubmenu.value || computedCollapsed.value) {
        return;
      }
      if (!isSubmenu.value && !disabled.value && computedSelectedKeys.value != path.value) {
        computedSelectedKeys.value = path.value;
        return emits("menu-item-click", path.value);
      }
      if (computedOpenKeys.value.includes(path.value)) {
        computedOpenKeys.value = computedOpenKeys.value.filter(
          (item) => item != path.value
        );
      } else {
        computedOpenKeys.value = accordion.value ? [path.value] : [...computedOpenKeys.value, path.value];
      }
      emits("sub-menu-click", path.value, computedOpenKeys.value);
    };
    onMounted(() => {
      var _a;
      if (isRoot.value) {
        menuItemWidths.value[curIndex.value] = menuItemRef.value.offsetWidth;
      }
      if (autoScrollIntoView.value && computedSelectedKeys.value == path.value) {
        (_a = menuItemRef.value) == null ? void 0 : _a.scrollIntoView(scrollConfig.value);
      }
      if (!isSubmenu.value || !autoOpen.value || !autoOpenSelected.value || !isSelected.value) {
        return;
      }
      computedOpenKeys.value.push(path.value);
    });
    return (_ctx, _cache) => {
      return curIndex.value < unref(max) ? (openBlock(), createElementBlock("div", {
        key: 0,
        class: normalizeClass([
          "yc-menu-item-wrapper",
          {
            "yc-menu-item-mode-horizontal": unref(mode) == "horizontal"
          }
        ])
      }, [
        createVNode(unref(DefineTemplate), null, {
          default: withCtx(() => [
            createElementVNode("div", {
              class: normalizeClass([
                "yc-menu-item",
                `yc-menu-item-theme-${unref(theme)}`,
                {
                  "yc-menu-item-selected": isSelected.value,
                  "yc-menu-item-disabled": unref(disabled),
                  "yc-menu-item-collapsed": unref(computedCollapsed)
                }
              ]),
              ref_key: "menuItemRef",
              ref: menuItemRef,
              onClick: handleClick
            }, [
              !isRoot.value ? (openBlock(), createElementBlock("div", {
                key: 0,
                class: "yc-menu-indent",
                style: normalizeStyle({
                  width: unref(valueToPx)(unref(levelIndent) * curNode.value.level),
                  height: unref(valueToPx)(unref(levelIndent))
                })
              }, null, 4)) : createCommentVNode("", true),
              _ctx.$slots.icon ? (openBlock(), createElementBlock("div", _hoisted_1, [
                renderSlot(_ctx.$slots, "icon", {}, void 0, true)
              ])) : createCommentVNode("", true),
              withDirectives(createElementVNode("div", {
                class: normalizeClass([
                  "yc-menu-item-title",
                  {
                    "text-ellipsis": unref(mode) != "horizontal"
                  }
                ])
              }, [
                renderSlot(_ctx.$slots, "default", {}, void 0, true)
              ], 2), [
                [vShow, !unref(computedCollapsed)]
              ]),
              _ctx.$slots.suffix ? withDirectives((openBlock(), createElementBlock("div", _hoisted_2, [
                renderSlot(_ctx.$slots, "suffix", {}, void 0, true)
              ], 512)), [
                [vShow, !unref(computedCollapsed)]
              ]) : createCommentVNode("", true)
            ], 2)
          ]),
          _: 3
        }),
        isSubmenu.value && isRoot.value && (unref(mode) != "vertical" || unref(computedCollapsed)) ? (openBlock(), createBlock(unref(Dropdown), {
          key: 0,
          "popup-max-height": popupMaxHeight.value,
          theme: unref(theme),
          "trigger-props": {
            autoFitPosition: false,
            position: unref(mode) == "horizontal" ? "bl" : "rt",
            animationName: unref(mode) == "horizontal" ? "slide-dynamic-origin" : "zoom-in-fade-out",
            popupOffset: unref(mode) == "vertical" ? 14 : 20,
            showArrow: true,
            ...unref(triggerProps)
          },
          onSelect: handleSelect
        }, {
          content: withCtx(() => [
            (openBlock(true), createElementBlock(Fragment, null, renderList(submenus.value, (node) => {
              return openBlock(), createBlock(_sfc_main$1, {
                key: node.path,
                "tree-node": node,
                "popup-max-height": popupMaxHeight.value,
                "trigger-props": unref(triggerProps),
                "computed-selected-keys": unref(computedSelectedKeys)
              }, null, 8, ["tree-node", "popup-max-height", "trigger-props", "computed-selected-keys"]);
            }), 128))
          ]),
          default: withCtx(() => [
            createVNode(unref(ReuseTemplate))
          ]),
          _: 1
        }, 8, ["popup-max-height", "theme", "trigger-props"])) : !isSubmenu.value && isRoot.value && unref(computedCollapsed) ? (openBlock(), createBlock(unref(Tooltip), {
          key: 1,
          position: "rt",
          "trigger-props": {
            autoFitPosition: false,
            popupOffset: unref(mode) == "vertical" ? 14 : 18,
            showArrow: true,
            ...unref(tooltipProps),
            ...unref(triggerProps)
          }
        }, {
          content: withCtx(() => [
            (openBlock(), createBlock(resolveDynamicComponent(_ctx.$slots.default)))
          ]),
          default: withCtx(() => [
            createVNode(unref(ReuseTemplate))
          ]),
          _: 1
        }, 8, ["trigger-props"])) : (openBlock(), createBlock(unref(ReuseTemplate), { key: 2 }))
      ], 2)) : createCommentVNode("", true);
    };
  }
});
export {
  _sfc_main as default
};
