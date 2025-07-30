import { defineComponent, toRefs, ref, computed, openBlock, createBlock, Transition, withCtx, withDirectives, createElementVNode, normalizeStyle, unref, renderSlot, createVNode, vShow } from "vue";
import "../node_modules/tinycolor2/esm/tinycolor.js";
import { findFirstScrollableParent, getElement } from "../_shared/utils/dom.js";
import { isUndefined } from "../_shared/utils/is.js";
import "../_shared/utils/time.js";
import { getGlobalConfig } from "../_shared/utils/global-config.js";
import "../_shared/icons/_Icon.vue.js";
import _sfc_main$1 from "../_shared/icons/IconToTop.vue.js";
import Tween from "../node_modules/b-tween/dist/b-tween.es.js";
import { useEventListener } from "../node_modules/@vueuse/core/index.js";
import Button from "../Button/index.js";
const _sfc_main = /* @__PURE__ */ defineComponent({
  ...{
    name: "BackTop"
  },
  __name: "index",
  props: {
    visibleHeight: { default: 200 },
    targetContainer: {},
    easeing: { default: "quadOut" },
    duration: { default: 200 }
  },
  setup(__props) {
    const props = __props;
    const { targetContainer: _targetContainer, easeing, duration } = toRefs(props);
    const { zIndex } = getGlobalConfig(props);
    const buttonRef = ref();
    const curScroll = ref(0);
    const targetContainer = computed(() => {
      console.log(findFirstScrollableParent(buttonRef.value));
      return isUndefined(_targetContainer.value) ? findFirstScrollableParent(buttonRef.value) : getElement(_targetContainer.value);
    });
    const handleTop = () => {
      if (!targetContainer.value)
        return;
      new Tween({
        from: { scroll: targetContainer.value.scrollTop },
        to: { scroll: 0 },
        duration: duration.value,
        easing: easeing.value,
        onUpdate: (current) => {
          targetContainer.value.scrollTop = current.scroll;
        }
      }).start();
    };
    useEventListener(targetContainer, "scroll", () => {
      curScroll.value = targetContainer.value.scrollTop;
    });
    return (_ctx, _cache) => {
      return openBlock(), createBlock(Transition, { name: "fade" }, {
        default: withCtx(() => [
          withDirectives(createElementVNode("div", {
            class: "yc-back-top",
            style: normalizeStyle({
              zIndex: unref(zIndex)
            }),
            ref_key: "buttonRef",
            ref: buttonRef,
            onClick: handleTop
          }, [
            renderSlot(_ctx.$slots, "default", {}, () => [
              createVNode(unref(Button), {
                type: "primary",
                shape: "circle",
                size: "large"
              }, {
                default: withCtx(() => [
                  createVNode(unref(_sfc_main$1))
                ]),
                _: 1
              })
            ], true)
          ], 4), [
            [vShow, curScroll.value >= _ctx.visibleHeight]
          ])
        ]),
        _: 3
      });
    };
  }
});
export {
  _sfc_main as default
};
