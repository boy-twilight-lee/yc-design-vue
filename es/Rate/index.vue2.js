import { defineComponent, toRefs, ref, computed, openBlock, createElementBlock, normalizeClass, unref, Fragment, renderList, normalizeStyle, withModifiers, renderSlot, createBlock, createCommentVNode, createElementVNode } from "vue";
import "../node_modules/tinycolor2/esm/tinycolor.js";
import "../_shared/utils/dom.js";
import { sleep } from "../_shared/utils/fn.js";
import { isObject } from "../_shared/utils/is.js";
import "../_shared/utils/time.js";
import "../Empty/index.js";
import "../_shared/icons/_Icon.vue.js";
import _sfc_main$1 from "../_shared/icons/IconFaceSmile.vue.js";
import _sfc_main$2 from "../_shared/icons/IconStar.vue.js";
import useControlValue from "../_shared/utils/control.js";
const _hoisted_1 = ["onClick", "onMouseenter"];
const _hoisted_2 = ["onClick", "onMouseenter"];
const _sfc_main = /* @__PURE__ */ defineComponent({
  ...{
    name: "Rate"
  },
  __name: "index",
  props: {
    count: { default: 5 },
    modelValue: { default: void 0 },
    defaultValue: { default: 0 },
    allowHalf: { type: Boolean, default: false },
    allowClear: { type: Boolean },
    grading: { type: Boolean, default: false },
    readonly: { type: Boolean, default: false },
    disabled: { type: Boolean, default: false },
    color: { default: "rgb(247, 186, 30)" }
  },
  emits: ["update:modelValue", "change", "hover-change"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emits = __emit;
    const {
      modelValue,
      defaultValue,
      readonly,
      disabled,
      count,
      allowClear,
      color: _color
    } = toRefs(props);
    const chars = ref([]);
    let loading = false;
    const curHover = ref(0);
    const computedValue = useControlValue(
      modelValue,
      defaultValue.value,
      (val) => {
        emits("update:modelValue", val);
      }
    );
    const color = computed(() => {
      var _a;
      if (isObject(_color.value)) {
        return ((_a = Object.entries(_color.value).find(
          ([key]) => curHover.value <= +key
        )) == null ? void 0 : _a[1]) ?? "rgb(247, 186, 30)";
      } else {
        return _color.value ?? "rgb(247, 186, 30)";
      }
    });
    const handleClick = async (index) => {
      if (readonly.value || disabled.value || loading) {
        return;
      }
      computedValue.value = allowClear.value && computedValue.value == index ? 0 : index;
      emits("change", computedValue.value);
      loading = true;
      for (let i = 1; i <= count.value; i++) {
        if (i > computedValue.value) {
          continue;
        }
        const el = chars.value[i];
        el.classList.add("yc-rate-character-scale");
        await sleep(50);
        setTimeout(() => {
          el.classList.remove("yc-rate-character-scale");
        }, 150);
      }
      loading = false;
    };
    let timer;
    const handleMouseenter = (i) => {
      if (readonly.value || disabled.value)
        return;
      if (timer)
        clearTimeout(timer);
      curHover.value = i;
      emits("hover-change", i);
    };
    const handleMouseleave = () => {
      if (readonly.value || disabled.value)
        return;
      if (timer)
        clearTimeout(timer);
      timer = setTimeout(() => {
        curHover.value = 0;
      }, 100);
    };
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", {
        class: normalizeClass([
          "yc-rate",
          {
            "yc-rate-disabled": unref(disabled),
            "yc-rate-readonly": unref(readonly)
          }
        ])
      }, [
        (openBlock(true), createElementBlock(Fragment, null, renderList(unref(count), (i) => {
          return openBlock(), createElementBlock("div", {
            key: i,
            class: "yc-rate-character",
            ref_for: true,
            ref: (el) => chars.value[i] = el
          }, [
            _ctx.allowHalf ? (openBlock(), createElementBlock("div", {
              key: 0,
              class: "yc-rate-character-left",
              style: normalizeStyle({
                color: i - 0.5 <= unref(computedValue) && !curHover.value || i - 0.5 <= curHover.value ? color.value : ""
              }),
              onClick: withModifiers(($event) => handleClick(i - 0.5), ["stop"]),
              onMouseenter: ($event) => handleMouseenter(i - 0.5),
              onMouseleave: handleMouseleave
            }, [
              renderSlot(_ctx.$slots, "character", { index: i }, () => [
                _ctx.grading ? (openBlock(), createBlock(unref(_sfc_main$1), { key: 0 })) : (openBlock(), createBlock(unref(_sfc_main$2), { key: 1 }))
              ], true)
            ], 44, _hoisted_1)) : createCommentVNode("", true),
            createElementVNode("div", {
              class: "yc-rate-character-right",
              style: normalizeStyle({
                color: i <= unref(computedValue) && !curHover.value || i <= curHover.value ? color.value : ""
              }),
              onClick: ($event) => handleClick(i),
              onMouseenter: ($event) => handleMouseenter(i),
              onMouseleave: handleMouseleave
            }, [
              renderSlot(_ctx.$slots, "character", { index: i }, () => [
                _ctx.grading ? (openBlock(), createBlock(unref(_sfc_main$1), { key: 0 })) : (openBlock(), createBlock(unref(_sfc_main$2), { key: 1 }))
              ], true)
            ], 44, _hoisted_2)
          ]);
        }), 128))
      ], 2);
    };
  }
});
export {
  _sfc_main as default
};
