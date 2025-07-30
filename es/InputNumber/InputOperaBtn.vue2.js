import { defineComponent, toRefs, computed, openBlock, createBlock, unref, normalizeClass, withCtx, renderSlot, createElementBlock, Fragment } from "vue";
import _sfc_main$1 from "../_shared/icons/IconArrowDown.vue.js";
import "../node_modules/tinycolor2/esm/tinycolor.js";
import "../_shared/utils/dom.js";
import "../_shared/utils/time.js";
import "../Empty/index.js";
import "../_shared/icons/_Icon.vue.js";
import _sfc_main$2 from "../_shared/icons/IconMinus.vue2.js";
import _sfc_main$3 from "../_shared/icons/IconPlus.vue.js";
import Button from "../Button/index.js";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "InputOperaBtn",
  props: {
    mode: {},
    type: {},
    disabled: { type: Boolean },
    computedValue: {},
    min: {},
    max: {},
    size: {}
  },
  emits: ["click"],
  setup(__props) {
    const props = __props;
    const { disabled: _disabled, computedValue, min, max, type } = toRefs(props);
    const disabled = computed(() => {
      if (_disabled.value)
        return _disabled.value;
      return type.value == "minus" ? +computedValue.value <= min.value : +computedValue.value >= max.value;
    });
    return (_ctx, _cache) => {
      return openBlock(), createBlock(unref(Button), {
        size: _ctx.size,
        disabled: disabled.value,
        class: normalizeClass([
          {
            "yc-input-number-plus-embed": _ctx.mode == "embed"
          }
        ]),
        onClick: _cache[0] || (_cache[0] = ($event) => _ctx.$emit("click", unref(type)))
      }, {
        icon: withCtx(() => [
          renderSlot(_ctx.$slots, "icon", {}, () => [
            _ctx.mode == "embed" ? (openBlock(), createBlock(unref(_sfc_main$1), {
              key: 0,
              rotate: unref(type) == "plus" ? 180 : 0
            }, null, 8, ["rotate"])) : (openBlock(), createElementBlock(Fragment, { key: 1 }, [
              unref(type) == "minus" ? (openBlock(), createBlock(unref(_sfc_main$2), { key: 0 })) : (openBlock(), createBlock(unref(_sfc_main$3), { key: 1 }))
            ], 64))
          ], true)
        ]),
        _: 3
      }, 8, ["size", "disabled", "class"]);
    };
  }
});
export {
  _sfc_main as default
};
