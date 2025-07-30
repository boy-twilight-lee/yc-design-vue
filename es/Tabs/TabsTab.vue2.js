import { defineComponent, toRefs, onMounted, openBlock, createElementBlock, normalizeClass, unref, createElementVNode, createBlock, resolveDynamicComponent, createCommentVNode } from "vue";
import useContext from "./hooks/useContext.js";
import "../node_modules/tinycolor2/esm/tinycolor.js";
import "../_shared/utils/dom.js";
import { isUndefined } from "../_shared/utils/is.js";
import "../_shared/utils/time.js";
import "../Empty/index.js";
import "../_shared/icons/_Icon.vue.js";
import TabButton from "./TabButton.vue.js";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "TabsTab",
  props: {
    node: {},
    index: {}
  },
  setup(__props) {
    const props = __props;
    const { node, index } = toRefs(props);
    const {
      computedActiveKey,
      titleRefs,
      tabRefs,
      trigger,
      editable,
      type,
      direction,
      position,
      headerPadding,
      size,
      emits
    } = useContext().inject();
    const renderTitle = (node2) => {
      const { slots, title } = node2;
      return slots.title ?? (() => title);
    };
    const handleChange = (node2, triggerType) => {
      const { disabled, path } = node2;
      if (computedActiveKey.value == path || disabled || triggerType != trigger.value) {
        return;
      }
      computedActiveKey.value = path;
      emits("change", path);
      emits("tab-click", path);
    };
    const handleDel = async (node2) => {
      emits("delete", node2.path);
    };
    onMounted(() => {
      if (computedActiveKey.value != node.value.path) {
        if (computedActiveKey.value || index.value)
          return;
        computedActiveKey.value = node.value.path;
        return;
      }
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", {
        tabindex: "0",
        class: normalizeClass([
          "yc-tabs-tab",
          `yc-tabs-tab-type-${unref(type)}`,
          `yc-tabs-tab-${unref(direction)}`,
          `yc-tabs-tab-size-${unref(size)}`,
          {
            [`yc-tabs-tab-${unref(position)}`]: unref(position),
            "yc-tabs-tab-no-padding": !unref(headerPadding) && unref(direction) == "horizontal" && ["line", "text"].includes(unref(type)),
            "yc-tabs-tab-active": unref(computedActiveKey) == unref(node).path,
            "yc-tabs-tab-disabled": unref(node).disabled
          }
        ]),
        ref: (el) => unref(tabRefs)[unref(index)] = el,
        onMouseenter: _cache[1] || (_cache[1] = ($event) => handleChange(unref(node), "hover")),
        onClick: _cache[2] || (_cache[2] = ($event) => handleChange(unref(node), "click"))
      }, [
        createElementVNode("span", {
          class: "yc-tabs-tab-title",
          ref: (el) => unref(titleRefs)[unref(index)] = el
        }, [
          (openBlock(), createBlock(resolveDynamicComponent(renderTitle(unref(node)))))
        ], 512),
        unref(editable) && (unref(isUndefined)(unref(node).closable) || unref(node).closable) ? (openBlock(), createBlock(TabButton, {
          key: 0,
          type: "close",
          onClick: _cache[0] || (_cache[0] = ($event) => handleDel(unref(node)))
        })) : createCommentVNode("", true)
      ], 34);
    };
  }
});
export {
  _sfc_main as default
};
