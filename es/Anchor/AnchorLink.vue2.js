import { defineComponent, toRefs, openBlock, createElementBlock, normalizeClass, unref, createElementVNode, renderSlot, createTextVNode, toDisplayString, createCommentVNode } from "vue";
import "../node_modules/tinycolor2/esm/tinycolor.js";
import { getElement } from "../_shared/utils/dom.js";
import { isNumber } from "../_shared/utils/is.js";
import "../_shared/utils/time.js";
import "../Empty/index.js";
import "../_shared/icons/_Icon.vue.js";
import useContext from "./hooks/useContext.js";
const _hoisted_1 = ["href"];
const _hoisted_2 = {
  key: 0,
  class: "yc-anchor-sublist"
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  ...{
    name: "AnchorLink"
  },
  __name: "AnchorLink",
  props: {
    title: { default: "" },
    href: { default: "" }
  },
  setup(__props) {
    const props = __props;
    const { href } = toRefs(props);
    const { smooth, boundary, changeHash, curHref, lineLess, scrollContainer } = useContext().inject();
    const handleClick = (e) => {
      curHref.value = href.value;
      if (changeHash.value)
        return;
      e.preventDefault();
      const anchorDom = getElement(href.value);
      if (!anchorDom)
        return;
      if (isNumber(boundary.value) && scrollContainer.value) {
        const { top: anchorTop } = anchorDom.getBoundingClientRect();
        const { top: containerTop } = scrollContainer.value.getBoundingClientRect();
        const { scrollTop } = scrollContainer.value;
        scrollContainer.value.scrollTo({
          top: anchorTop - containerTop + scrollTop - boundary.value,
          behavior: smooth.value ? "smooth" : "auto"
        });
      } else {
        anchorDom.scrollIntoView({
          block: boundary.value,
          behavior: smooth.value ? "smooth" : "auto"
        });
      }
    };
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", {
        class: normalizeClass([
          "yc-anchor-link-item",
          {
            "yc-anchor-link-active": unref(curHref) == unref(href) && !unref(lineLess),
            "yc-anchor-link-lineless-active": unref(curHref) == unref(href) && unref(lineLess)
          }
        ])
      }, [
        createElementVNode("a", {
          href: unref(href),
          class: "yc-anchor-link",
          onClick: handleClick,
          ref: "linkRef"
        }, [
          renderSlot(_ctx.$slots, "default", {}, () => [
            createTextVNode(toDisplayString(_ctx.title), 1)
          ], true)
        ], 8, _hoisted_1),
        _ctx.$slots.sublist ? (openBlock(), createElementBlock("div", _hoisted_2, [
          renderSlot(_ctx.$slots, "sublist", {}, void 0, true)
        ])) : createCommentVNode("", true)
      ], 2);
    };
  }
});
export {
  _sfc_main as default
};
