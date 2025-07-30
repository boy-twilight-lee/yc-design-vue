import { defineComponent, toRefs, computed, openBlock, createElementBlock, normalizeClass, normalizeStyle, unref, renderSlot, createBlock, createCommentVNode } from "vue";
import "../node_modules/tinycolor2/esm/tinycolor.js";
import "../_shared/utils/dom.js";
import "../_shared/utils/time.js";
import "../Empty/index.js";
import "../_shared/icons/_Icon.vue.js";
import _sfc_main$1 from "../_shared/icons/IconArrowRight.vue.js";
import _sfc_main$2 from "../_shared/icons/IconMore.vue.js";
import useContext from "./hooks/useContext.js";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "PaginationItem",
  props: {
    type: {},
    page: { default: 1 }
  },
  setup(__props) {
    const props = __props;
    const { type, page } = toRefs(props);
    const {
      computedCurrent,
      pages,
      pageItemStyle,
      activePageItemStyle,
      bufferSize,
      disabled: _disabled
    } = useContext().inject();
    const active = computed(() => {
      return type.value == "item" ? computedCurrent.value == page.value : false;
    });
    const disabled = computed(() => {
      if (["item", "more-right", "more-left"].includes(type.value)) {
        return _disabled.value;
      } else if (type.value == "pre") {
        return computedCurrent.value <= 1;
      } else {
        return computedCurrent.value >= pages.value;
      }
    });
    const handleClick = () => {
      let i = 0;
      if (type.value == "item") {
        i = page.value;
      } else if (type.value == "pre") {
        i = computedCurrent.value - 1;
      } else if (type.value == "next") {
        i = computedCurrent.value + 1;
      } else {
        const addSize = 2 * bufferSize.value + 1;
        i = type.value == "more-left" ? computedCurrent.value - addSize : computedCurrent.value + addSize;
        i = type.value == "more-left" && i <= 1 ? 1 : i;
        i = type.value == "more-right" && i >= pages.value ? pages.value : i;
      }
      if (disabled.value || type.value == "item" && i == computedCurrent.value || type.value == "pre" && i < 1 || type.value == "next" && i > pages.value) {
        return;
      }
      computedCurrent.value = i;
    };
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("li", {
        class: normalizeClass([
          "yc-pagination-item",
          {
            "yc-pagination-item-disabled": disabled.value,
            "yc-pagination-item-active": active.value
          }
        ]),
        style: normalizeStyle({
          ...unref(pageItemStyle),
          ...active.value ? unref(activePageItemStyle) : {}
        }),
        onClick: handleClick
      }, [
        renderSlot(_ctx.$slots, "default", {}, () => [
          ["pre", "next"].includes(unref(type)) ? (openBlock(), createBlock(unref(_sfc_main$1), {
            key: 0,
            rotate: unref(type) == "pre" ? 180 : 0
          }, null, 8, ["rotate"])) : unref(type).includes("more") ? (openBlock(), createBlock(unref(_sfc_main$2), { key: 1 })) : createCommentVNode("", true)
        ], true)
      ], 6);
    };
  }
});
export {
  _sfc_main as default
};
