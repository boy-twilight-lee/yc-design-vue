import { defineComponent, toRefs, ref, computed, watch, openBlock, createElementBlock, normalizeStyle, unref, createCommentVNode, createElementVNode, normalizeClass, renderSlot } from "vue";
import { useResizeObserver, useEventListener } from "../node_modules/@vueuse/core/index.js";
import "../node_modules/tinycolor2/esm/tinycolor.js";
import { findFirstScrollableParent, getElement } from "../_shared/utils/dom.js";
import { valueToPx, throttleByRaf } from "../_shared/utils/fn.js";
import { isUndefined } from "../_shared/utils/is.js";
import "../_shared/utils/time.js";
import "../Empty/index.js";
import "../_shared/icons/_Icon.vue.js";
const _sfc_main = /* @__PURE__ */ defineComponent({
  ...{
    name: "Affix"
  },
  __name: "index",
  props: {
    offsetTop: { default: 0 },
    offsetBottom: { default: void 0 },
    target: { default: void 0 },
    targetContainer: { default: void 0 }
  },
  emits: ["change"],
  setup(__props, { expose: __expose, emit: __emit }) {
    const props = __props;
    const emits = __emit;
    const {
      target: _target,
      targetContainer: _targetContainer,
      offsetTop,
      offsetBottom
    } = toRefs(props);
    const affixRef = ref();
    const wrapperRef = ref();
    const target = computed(() => {
      return isUndefined(_target.value) ? findFirstScrollableParent(affixRef.value) : getElement(_target.value);
    });
    const targetContainer = computed(() => {
      return isUndefined(_targetContainer.value) ? findFirstScrollableParent(affixRef.value) : getElement(_targetContainer.value);
    });
    const isFixed = ref(false);
    const style = ref({});
    const width = ref(0);
    const height = ref(0);
    useResizeObserver(
      affixRef,
      () => {
        const { width: w, height: h } = affixRef.value.getBoundingClientRect();
        width.value = w;
        height.value = h;
        handleScroll();
      },
      {
        box: "border-box"
      }
    );
    watch(
      () => isFixed.value,
      (val) => {
        emits("change", val);
      }
    );
    const handleScroll = throttleByRaf(() => {
      if (!target.value || !targetContainer.value || !wrapperRef.value)
        return;
      const { top: wrapperTop, bottom: wrapperBottom } = wrapperRef.value.getBoundingClientRect();
      const { top: targetTop, bottom: targetBottom } = targetContainer.value.getBoundingClientRect();
      isFixed.value = isUndefined(offsetBottom.value) ? wrapperTop - targetTop <= offsetTop.value : targetBottom - wrapperBottom <= offsetBottom.value;
      if (isFixed.value) {
        style.value = isUndefined(offsetBottom.value) ? { position: "fixed", top: valueToPx(targetTop + offsetTop.value) } : { position: "fixed", bottom: valueToPx(offsetBottom.value) };
      } else {
        style.value = {};
      }
    });
    useEventListener(target, "scroll", handleScroll);
    __expose({
      updatePosition() {
        handleScroll();
      }
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", {
        ref_key: "wrapperRef",
        ref: wrapperRef
      }, [
        isFixed.value ? (openBlock(), createElementBlock("div", {
          key: 0,
          style: normalizeStyle({
            width: unref(valueToPx)(width.value),
            height: unref(valueToPx)(height.value)
          })
        }, null, 4)) : createCommentVNode("", true),
        createElementVNode("div", {
          class: normalizeClass([
            {
              "yc-affix": isFixed.value
            }
          ]),
          style: normalizeStyle(style.value),
          ref_key: "affixRef",
          ref: affixRef
        }, [
          renderSlot(_ctx.$slots, "default")
        ], 6)
      ], 512);
    };
  }
});
export {
  _sfc_main as default
};
