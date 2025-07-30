import { defineComponent, computed, openBlock, createElementBlock, createVNode, unref, withCtx, Fragment, renderList, createBlock, createElementVNode, normalizeClass } from "vue";
import _sfc_main$3 from "../_shared/icons/IconArrowDown.vue.js";
import "../node_modules/tinycolor2/esm/tinycolor.js";
import "../_shared/utils/dom.js";
import "../_shared/utils/time.js";
import "../Empty/index.js";
import "../_shared/icons/_Icon.vue.js";
import _sfc_main$2 from "../_shared/icons/IconMore.vue.js";
import useContext, { isMenuItemActive } from "./hooks/useContext.js";
import _sfc_main$1 from "./MenuPopOption.vue.js";
import Dropdown from "../Dropdown/index.js";
const _hoisted_1 = {
  class: /* @__PURE__ */ normalizeClass(["yc-menu-item-wrapper", "yc-menu-item-mode-horizontal"])
};
const _hoisted_2 = { class: "yc-menu-item-title" };
const _hoisted_3 = { class: "yc-menu-icon-suffix" };
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "MenuEllipsis",
  setup(__props) {
    const {
      computedSelectedKeys,
      theme,
      triggerProps,
      popupMaxHeight,
      menuTree,
      max,
      emits
    } = useContext().inject();
    const submenus = computed(() => menuTree.value.slice(max.value));
    const isSelected = computed(() => {
      return submenus.value.some((item) => {
        return isMenuItemActive(
          menuTree.value,
          item.path,
          computedSelectedKeys.value
        );
      });
    });
    const handleSelect = (value) => {
      if (computedSelectedKeys.value == value)
        return;
      computedSelectedKeys.value = value;
      emits("menu-item-click", value);
    };
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1, [
        createVNode(unref(Dropdown), {
          "popup-max-height": unref(popupMaxHeight),
          theme: unref(theme),
          "trigger-props": {
            position: "bl",
            popupOffset: 20,
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
                "popup-max-height": unref(popupMaxHeight),
                "trigger-props": unref(triggerProps),
                "computed-selected-keys": unref(computedSelectedKeys)
              }, null, 8, ["tree-node", "popup-max-height", "trigger-props", "computed-selected-keys"]);
            }), 128))
          ]),
          default: withCtx(() => [
            createElementVNode("div", {
              class: normalizeClass([
                "yc-menu-item",
                "yc-menu-item-ellipsis",
                `yc-menu-item-theme-${unref(theme)}`,
                {
                  "yc-menu-item-selected": isSelected.value
                }
              ])
            }, [
              createElementVNode("div", _hoisted_2, [
                createVNode(unref(_sfc_main$2))
              ]),
              createElementVNode("div", _hoisted_3, [
                createVNode(unref(_sfc_main$3))
              ])
            ], 2)
          ]),
          _: 1
        }, 8, ["popup-max-height", "theme", "trigger-props"])
      ]);
    };
  }
});
export {
  _sfc_main as default
};
