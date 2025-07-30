import { defineComponent, openBlock, createElementBlock, normalizeClass, Fragment, renderList, unref, normalizeStyle, createCommentVNode } from "vue";
import "../node_modules/tinycolor2/esm/tinycolor.js";
import "../_shared/utils/dom.js";
import { valueToPx } from "../_shared/utils/fn.js";
import "../_shared/utils/time.js";
import "../Empty/index.js";
import "../_shared/icons/_Icon.vue.js";
import useContext from "./hooks/useContext.js";
const _hoisted_1 = ["onMouseenter", "onClick"];
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "CarouselIndicator",
  props: {
    trigger: {},
    indicatorType: {},
    indicatorPosition: {},
    indicatorClass: {}
  },
  emits: ["change"],
  setup(__props) {
    const { length, computedCurrent } = useContext().inject();
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", {
        class: normalizeClass([
          "yc-carousel-indicator",
          `yc-carousel-indicator-shape-${_ctx.indicatorType}`,
          `yc-carousel-indicator-position-${_ctx.indicatorPosition}`,
          _ctx.indicatorClass
        ])
      }, [
        (openBlock(true), createElementBlock(Fragment, null, renderList(unref(length), (i) => {
          return openBlock(), createElementBlock("div", {
            key: i,
            class: normalizeClass([
              "yc-carousel-indicator-item",
              {
                "yc-carousel-indicator-item-active": unref(computedCurrent) == i
              }
            ]),
            onMouseenter: ($event) => _ctx.trigger == "hover" && unref(computedCurrent) != i && _ctx.$emit("change", i),
            onClick: ($event) => _ctx.trigger == "click" && unref(computedCurrent) != i && _ctx.$emit("change", i)
          }, null, 42, _hoisted_1);
        }), 128)),
        _ctx.indicatorType == "slider" ? (openBlock(), createElementBlock("div", {
          key: 0,
          class: "yc-carousel-indicator-item-slider",
          style: normalizeStyle({
            width: ["top", "bottom", "outer"].includes(_ctx.indicatorPosition) ? unref(valueToPx)(48 / unref(length)) : "",
            height: ["left", "right"].includes(_ctx.indicatorPosition) ? unref(valueToPx)(48 / unref(length)) : "",
            transform: ["top", "bottom", "outer"].includes(_ctx.indicatorPosition) ? `translateX(calc(${unref(valueToPx)(48 / unref(length) * unref(computedCurrent))} - 100%))` : `translateY(calc(${unref(valueToPx)(48 / unref(length) * unref(computedCurrent))} - 100%))`
          })
        }, null, 4)) : createCommentVNode("", true)
      ], 2);
    };
  }
});
export {
  _sfc_main as default
};
