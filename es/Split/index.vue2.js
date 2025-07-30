import { defineComponent, toRefs, computed, ref, watch, openBlock, createBlock, resolveDynamicComponent, normalizeClass, unref, withCtx, createElementVNode, normalizeStyle, renderSlot, createVNode } from "vue";
import "../node_modules/tinycolor2/esm/tinycolor.js";
import "../_shared/utils/dom.js";
import { sleep, valueToPx } from "../_shared/utils/fn.js";
import { isNumber } from "../_shared/utils/is.js";
import "../_shared/utils/time.js";
import "../Empty/index.js";
import useControlValue from "../_shared/utils/control.js";
import "../_shared/icons/_Icon.vue.js";
import _sfc_main$1 from "../_shared/icons/IconDragDot.vue.js";
import { useDraggable } from "../node_modules/@vueuse/core/index.js";
const _hoisted_1 = { class: "yc-split-trigger-icon-wrapper" };
const _hoisted_2 = { class: "yc-split-trigger-icon" };
const _hoisted_3 = { class: "yc-split-pane yc-split-pane-second" };
const _sfc_main = /* @__PURE__ */ defineComponent({
  ...{
    name: "Split"
  },
  __name: "index",
  props: {
    component: { default: "div" },
    direction: { default: "horizontal" },
    size: { default: void 0 },
    defaultSize: { default: 0.5 },
    min: { default: 0 },
    max: { default: 1 },
    disabled: { type: Boolean, default: false }
  },
  emits: ["update:size", "moving-start", "moving", "moving-end"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emits = __emit;
    const { size, defaultSize, direction, min, max } = toRefs(props);
    const computedSize = useControlValue(
      size,
      defaultSize.value,
      (val) => {
        emits("update:size", val);
      }
    );
    const rate = computed(() => {
      const value = isNumber(computedSize.value) ? computedSize.value : getRate(computedSize.value);
      return `${value * 100}%`;
    });
    const splitRef = ref();
    const triggerRef = ref();
    const triggerSize = computed(() => {
      var _a, _b;
      const size2 = direction.value == "horizontal" ? (_a = triggerRef.value) == null ? void 0 : _a.offsetWidth : (_b = triggerRef.value) == null ? void 0 : _b.offsetHeight;
      return size2 ?? 6;
    });
    const splitSize = computed(() => {
      var _a;
      const rect = (_a = splitRef.value) == null ? void 0 : _a.getBoundingClientRect();
      const size2 = direction.value == "horizontal" ? rect == null ? void 0 : rect.width : rect == null ? void 0 : rect.height;
      return size2 ?? 0;
    });
    const { isDragging, x, y } = useDraggable(triggerRef, {
      onMove() {
        emits("moving");
        const { left, top } = splitRef.value.getBoundingClientRect();
        const pos = direction.value == "horizontal" ? left : top;
        const minValue = pos + getValue(min.value);
        const maxValue = pos + getValue(max.value) - triggerSize.value;
        let value = "";
        if (direction.value == "horizontal") {
          x.value = x.value < minValue ? minValue : x.value;
          x.value = x.value > maxValue ? maxValue : x.value;
          value = `${x.value - left}px`;
        } else {
          y.value = y.value < minValue ? minValue : y.value;
          y.value = y.value > maxValue ? maxValue : y.value;
          value = `${y.value - top}px`;
        }
        computedSize.value = isNumber(computedSize.value) ? getRate(value) : value;
      },
      onStart() {
        emits("moving-start");
      },
      onEnd() {
        emits("moving-end");
      }
    });
    const getValue = (value) => {
      return isNumber(value) ? value * splitSize.value : Number.parseFloat(value);
    };
    const getRate = (value) => {
      return Number.parseFloat(value) / splitSize.value;
    };
    watch(
      () => computedSize.value,
      async (val) => {
        if (isDragging.value)
          return;
        await sleep(0);
        const { left, top } = splitRef.value.getBoundingClientRect();
        x.value = left + getValue(val);
        y.value = top + getValue(val);
      },
      {
        immediate: true
      }
    );
    return (_ctx, _cache) => {
      return openBlock(), createBlock(resolveDynamicComponent(_ctx.component), {
        class: normalizeClass(["yc-split", `yc-split-direction-${unref(direction)}`]),
        ref_key: "splitRef",
        ref: splitRef
      }, {
        default: withCtx(() => [
          createElementVNode("div", {
            class: "yc-split-pane yc-split-pane-first",
            style: normalizeStyle({
              flex: `0 0 calc(${rate.value} - ${unref(valueToPx)(triggerSize.value / 2)}`
            })
          }, [
            renderSlot(_ctx.$slots, "first", {}, void 0, true)
          ], 4),
          createElementVNode("div", {
            class: "yc-split-trigger",
            ref_key: "triggerRef",
            ref: triggerRef
          }, [
            renderSlot(_ctx.$slots, "resize-trigger", {}, () => [
              createElementVNode("div", _hoisted_1, [
                createElementVNode("div", _hoisted_2, [
                  renderSlot(_ctx.$slots, "resize-trigger-icon", {}, () => [
                    createVNode(unref(_sfc_main$1), {
                      rotate: unref(direction) == "horizontal" ? 90 : 0,
                      size: 12
                    }, null, 8, ["rotate"])
                  ], true)
                ])
              ])
            ], true)
          ], 512),
          createElementVNode("div", _hoisted_3, [
            renderSlot(_ctx.$slots, "second", {}, void 0, true)
          ])
        ]),
        _: 3
      }, 8, ["class"]);
    };
  }
});
export {
  _sfc_main as default
};
