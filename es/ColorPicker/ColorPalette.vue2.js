import { defineComponent, toRefs, ref, computed, watch, openBlock, createElementBlock, normalizeStyle, unref, createElementVNode } from "vue";
import { useElementBounding, useDraggable } from "../node_modules/@vueuse/core/index.js";
import { parseColor } from "../_shared/utils/color.js";
import "../_shared/utils/dom.js";
import { sleep, valueToPx } from "../_shared/utils/fn.js";
import "../_shared/utils/time.js";
import "../Empty/index.js";
import "../_shared/icons/_Icon.vue.js";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "ColorPalette",
  props: {
    color: {},
    baseColor: {},
    popupVisible: { type: Boolean },
    disabled: { type: Boolean },
    hideTrigger: { type: Boolean }
  },
  emits: ["update:color", "update:baseColor"],
  setup(__props, { expose: __expose, emit: __emit }) {
    const props = __props;
    const emits = __emit;
    const { popupVisible, baseColor, disabled, hideTrigger } = toRefs(props);
    const btnRef = ref();
    const paletteRef = ref();
    const { width, height, top, left } = useElementBounding(paletteRef, {
      updateTiming: "next-frame"
    });
    const hsv = computed(() => {
      return parseColor(baseColor.value).toHsv();
    });
    const { x, y } = useDraggable(btnRef, {
      disabled,
      onMove() {
        setColor();
      }
    });
    const handleClick = (e) => {
      if (disabled.value)
        return;
      x.value = e.pageX;
      y.value = e.pageY;
      setColor();
    };
    const setColor = () => {
      x.value = (x.value - left.value) / width.value;
      x.value = x.value < 0 ? 0 : x.value;
      x.value = x.value > 1 ? 1 : x.value;
      y.value = (y.value - top.value) / height.value;
      y.value = y.value < 0 ? 0 : y.value;
      y.value = y.value > 1 ? 1 : y.value;
      const color = parseColor({
        ...hsv.value,
        s: x.value,
        v: 1 - y.value
      }).toHexString();
      emits("update:color", color);
    };
    watch(
      () => popupVisible.value,
      async (val) => {
        if (val || hideTrigger.value) {
          await sleep(0);
          x.value = hsv.value.s;
          y.value = 1 - hsv.value.v;
        }
      },
      {
        immediate: true
      }
    );
    __expose({
      setPosition(color) {
        const { s, v } = parseColor(color).toHsv();
        x.value = s;
        y.value = 1 - v;
      }
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", {
        class: "yc-color-picker-palette",
        style: normalizeStyle({
          backgroundColor: unref(baseColor)
        }),
        ref_key: "paletteRef",
        ref: paletteRef,
        onClick: handleClick
      }, [
        createElementVNode("div", {
          class: "yc-color-picker-handler",
          style: normalizeStyle({
            transform: `translate(calc(${unref(valueToPx)(unref(x) * unref(width))} - 50%),calc(${unref(valueToPx)(unref(y) * unref(height))} - 50%))`
          }),
          ref_key: "btnRef",
          ref: btnRef
        }, null, 4)
      ], 4);
    };
  }
});
export {
  _sfc_main as default
};
