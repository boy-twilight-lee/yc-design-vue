import { defineComponent, useSlots, toRefs, reactive, ref, openBlock, createBlock, resolveDynamicComponent, withCtx, renderSlot, createElementBlock, Fragment, renderList, normalizeClass, createElementVNode, createVNode, unref } from "vue";
import { useEventListener, useResizeObserver } from "../node_modules/@vueuse/core/index.js";
import "../node_modules/tinycolor2/esm/tinycolor.js";
import "../_shared/utils/dom.js";
import { valueToPx } from "../_shared/utils/fn.js";
import "../_shared/utils/time.js";
import "../Empty/index.js";
import useControlValue from "../_shared/utils/control.js";
import "../_shared/icons/_Icon.vue.js";
import _sfc_main$1 from "../_shared/icons/IconDragDot.vue.js";
const _hoisted_1 = ["dir", "onMousedown"];
const _hoisted_2 = { class: "yc-resizebox-trigger-icon-wrapper" };
const _sfc_main = /* @__PURE__ */ defineComponent({
  ...{
    name: "ResizeBox"
  },
  __name: "index",
  props: {
    width: { default: void 0 },
    height: { default: void 0 },
    component: { default: "div" },
    directions: { default: () => ["right"] }
  },
  emits: ["update:width", "update:height", "moving-start", "moving", "moving-end"],
  setup(__props, { emit: __emit }) {
    useSlots();
    const props = __props;
    const emits = __emit;
    const { width, height } = toRefs(props);
    const computedWidth = useControlValue(width, 0, (val) => {
      emits("update:width", val);
    });
    const computedHeight = useControlValue(height, 0, (val) => {
      emits("update:height", val);
    });
    const triggeDoms = reactive([]);
    const triggerSize = reactive({
      left: 0,
      right: 0,
      bottom: 0,
      top: 0
    });
    const boxRef = ref();
    const dragDirection = ref(null);
    const x = ref(0);
    const y = ref(0);
    let cursor;
    const handleMovingStart = (dir, e) => {
      e.preventDefault();
      dragDirection.value = dir;
      const { width: width2, height: height2 } = boxRef.value.getBoundingClientRect();
      const { clientX, clientY } = e;
      computedWidth.value = width2;
      computedHeight.value = height2;
      x.value = clientX;
      y.value = clientY;
      cursor = getComputedStyle(document.body).cursor;
      document.body.style.cursor = ["left", "right"].includes(dir) ? "col-resize" : "row-resize";
      emits("moving-start", e);
    };
    const handleMoving = async (e) => {
      if (!dragDirection.value || !boxRef.value) {
        return;
      }
      const { clientX, clientY } = e;
      const movementX = dragDirection.value == "left" ? x.value - clientX : clientX - x.value;
      const movementY = dragDirection.value == "top" ? y.value - clientY : clientY - y.value;
      const minWidth = triggerSize.left + triggerSize.right;
      const minHeight = triggerSize.top + triggerSize.bottom;
      x.value = clientX;
      y.value = clientY;
      if (["left", "right"].includes(dragDirection.value)) {
        computedWidth.value += movementX;
        computedWidth.value <= minWidth && (computedWidth.value = minWidth);
        boxRef.value.style.width = valueToPx(computedWidth.value);
      } else {
        computedHeight.value += movementY;
        computedHeight.value <= minHeight && (computedHeight.value = minHeight);
        boxRef.value.style.height = valueToPx(computedHeight.value);
      }
      const { width: width2, height: height2 } = boxRef.value.getBoundingClientRect();
      if (computedWidth.value != width2) {
        computedWidth.value = width2;
      }
      if (height2 != computedHeight.value) {
        computedHeight.value = height2;
      }
      emits(
        "moving",
        {
          width: width2,
          height: height2
        },
        e
      );
    };
    const handleMovingEnd = (e) => {
      if (!dragDirection.value)
        return;
      dragDirection.value = null;
      document.body.style.cursor = cursor;
      emits("moving-end", e);
    };
    useEventListener("mousemove", handleMoving);
    useEventListener("mouseup", handleMovingEnd);
    useResizeObserver(
      () => {
        return triggeDoms;
      },
      (entries) => {
        entries.forEach((item) => {
          const direction = item.target.getAttribute("dir");
          const {
            contentRect: { width: width2, height: height2 }
          } = item;
          triggerSize[direction] = ["right", "left"].includes(direction) ? width2 : height2;
        });
      },
      {
        box: "border-box"
      }
    );
    return (_ctx, _cache) => {
      return openBlock(), createBlock(resolveDynamicComponent(_ctx.component), {
        class: "yc-resizebox",
        ref_key: "boxRef",
        ref: boxRef
      }, {
        default: withCtx(() => [
          renderSlot(_ctx.$slots, "default", {}, void 0, true),
          (openBlock(true), createElementBlock(Fragment, null, renderList(_ctx.directions, (dir, i) => {
            return openBlock(), createElementBlock("div", {
              key: dir,
              class: normalizeClass([
                "yc-resizebox-trigger",
                `yc-resizebox-direction-${dir}`,
                `yc-resizebox-trigger-${["left", "right"].includes(dir) ? "vertical" : "horizontal"}`
              ]),
              dir,
              ref_for: true,
              ref: (el) => triggeDoms[i] = el,
              onMousedown: ($event) => handleMovingStart(dir, $event)
            }, [
              renderSlot(_ctx.$slots, "resize-trigger", { direction: dir }, () => [
                createElementVNode("div", _hoisted_2, [
                  renderSlot(_ctx.$slots, "resize-trigger-icon", { direction: dir }, () => [
                    createVNode(unref(_sfc_main$1), {
                      rotate: ["left", "right"].includes(dir) ? 90 : 0
                    }, null, 8, ["rotate"])
                  ], true)
                ])
              ], true)
            ], 42, _hoisted_1);
          }), 128))
        ]),
        _: 3
      }, 512);
    };
  }
});
export {
  _sfc_main as default
};
