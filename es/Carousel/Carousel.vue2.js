import { defineComponent, watch, onBeforeUnmount, openBlock, createElementBlock, normalizeClass, createElementVNode, unref, Fragment, renderList, createBlock, resolveDynamicComponent, createVNode, createCommentVNode } from "vue";
import "../node_modules/tinycolor2/esm/tinycolor.js";
import "../_shared/utils/dom.js";
import { isObject } from "../_shared/utils/is.js";
import "../_shared/utils/time.js";
import "../Empty/index.js";
import "../_shared/icons/_Icon.vue.js";
import useContext from "./hooks/useContext.js";
import CarouselArrow from "./CarouselArrow.vue.js";
import CarouselIndicator from "./CarouselIndicator.vue.js";
const _hoisted_1 = {
  key: 0,
  class: "yc-carousel-indicator-wrapper"
};
const _hoisted_2 = {
  key: 1,
  class: "yc-carousel-arrow-wrapper"
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  ...{
    name: "Carousel"
  },
  __name: "Carousel",
  props: {
    current: { default: void 0 },
    defaultCurrent: { default: 1 },
    autoPlay: { type: [Boolean, Object], default: false },
    moveSpeed: { default: 500 },
    animationName: { default: "slide" },
    trigger: { default: "click" },
    direction: { default: "horizontal" },
    showArrow: { default: "always" },
    arrowClass: { default: "" },
    indicatorType: { default: "dot" },
    indicatorPosition: { default: "bottom" },
    indicatorClass: { default: "" },
    transitionTimingFunction: { default: "cubic-bezier(0.34, 0.69, 0.1, 1)" }
  },
  emits: ["update:current", "change"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emits = __emit;
    const { slideTo, computedCurrent, autoPlay, carouselItems } = useContext().provide(props, emits);
    let autoPlayTimer = null;
    const setAutoPlay = () => {
      var _a;
      if (!autoPlay.value)
        return;
      autoPlayTimer = setInterval(
        () => {
          slideTo(computedCurrent.value + 1);
        },
        ((_a = autoPlay.value) == null ? void 0 : _a.interval) ?? 3e3
      );
    };
    const stopAutoPlay = () => {
      clearInterval(autoPlayTimer);
      autoPlayTimer = null;
    };
    const handleChange = async (index) => {
      stopAutoPlay();
      await slideTo(index);
      setAutoPlay();
    };
    watch(
      () => autoPlay.value,
      () => {
        if (!autoPlay.value) {
          return stopAutoPlay();
        }
        setAutoPlay();
      },
      {
        immediate: true
      }
    );
    onBeforeUnmount(() => {
      stopAutoPlay();
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", {
        class: normalizeClass([
          "yc-carousel",
          `yc-carousel-animation-${_ctx.animationName}`,
          {
            "yc-carousel-indicator-outer": _ctx.indicatorPosition == "outer"
          }
        ])
      }, [
        createElementVNode("div", {
          class: normalizeClass(["yc-carousel-slide", `yc-carousel-direction-${_ctx.direction}`]),
          onMouseenter: _cache[0] || (_cache[0] = ($event) => {
            var _a;
            return unref(isObject)(unref(autoPlay)) && ((_a = unref(autoPlay)) == null ? void 0 : _a.hoverToPause) && stopAutoPlay();
          }),
          onMouseleave: _cache[1] || (_cache[1] = ($event) => {
            var _a;
            return unref(isObject)(unref(autoPlay)) && ((_a = unref(autoPlay)) == null ? void 0 : _a.hoverToPause) && setAutoPlay();
          })
        }, [
          (openBlock(true), createElementBlock(Fragment, null, renderList(unref(carouselItems), (node, i) => {
            return openBlock(), createBlock(resolveDynamicComponent(node), {
              index: i + 1
            }, null, 8, ["index"]);
          }), 256))
        ], 34),
        _ctx.indicatorType != "never" ? (openBlock(), createElementBlock("div", _hoisted_1, [
          createVNode(CarouselIndicator, {
            "indicator-class": _ctx.indicatorClass,
            trigger: _ctx.trigger,
            "indicator-position": _ctx.indicatorPosition,
            "indicator-type": _ctx.indicatorType,
            onChange: handleChange
          }, null, 8, ["indicator-class", "trigger", "indicator-position", "indicator-type"])
        ])) : createCommentVNode("", true),
        _ctx.showArrow != "never" ? (openBlock(), createElementBlock("div", _hoisted_2, [
          createVNode(CarouselArrow, {
            type: "pre",
            onChange: handleChange
          }),
          createVNode(CarouselArrow, {
            type: "next",
            onChange: handleChange
          })
        ])) : createCommentVNode("", true)
      ], 2);
    };
  }
});
export {
  _sfc_main as default
};
