import { defineComponent, toRefs, computed, ref, openBlock, createElementBlock, normalizeClass, unref, Fragment, renderList, createVNode, createBlock, resolveDynamicComponent, createCommentVNode } from "vue";
import "../node_modules/tinycolor2/esm/tinycolor.js";
import "../_shared/utils/dom.js";
import { sleep } from "../_shared/utils/fn.js";
import { isNumber, isString, isFunction } from "../_shared/utils/is.js";
import "../_shared/utils/time.js";
import { getSlotFunction } from "../_shared/utils/vue-utils.js";
import { getGlobalConfig } from "../_shared/utils/global-config.js";
import useControlValue from "../_shared/utils/control.js";
import { nanoid } from "../node_modules/nanoid/index.browser.js";
import Input from "../Input/index.js";
const _sfc_main = /* @__PURE__ */ defineComponent({
  ...{
    name: "VerificationCode"
  },
  __name: "index",
  props: {
    modelValue: { default: void 0 },
    defaultValue: { default: "" },
    length: { default: 6 },
    size: { default: void 0 },
    disabled: { type: Boolean, default: false },
    masked: { type: Boolean },
    readonly: { type: Boolean, default: false },
    error: { type: Boolean, default: false },
    separator: {},
    formatter: {}
  },
  emits: ["update:modelValue", "input", "change", "finish"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emits = __emit;
    const { modelValue, defaultValue, length: _length } = toRefs(props);
    const { formatter } = props;
    const { size } = getGlobalConfig(props);
    const computedValue = useControlValue(
      modelValue,
      defaultValue.value,
      (val) => {
        if (val.length == _length.value) {
          emits("finish", val);
        }
        emits("update:modelValue", val);
      }
    );
    const length = computed(
      () => new Array(_length.value).fill("").map(() => nanoid())
    );
    const formatValue = ref([]);
    const inputValue = computed(() => {
      const base = [...computedValue.value];
      for (let i = base.length; i < _length.value; i++) {
        base[i] = "";
      }
      return base.map((item, i) => {
        const format = formatter == null ? void 0 : formatter(item, i, formatValue.value.join(""));
        return item && (isNumber(format) || isString(format)) ? format : item;
      });
    });
    const inputList = ref([]);
    const isWritable = (i) => {
      for (let k = 1; k < i; k++) {
        if (!inputValue.value[k])
          return false;
      }
      return true;
    };
    const handleInput = async (v, ev, i) => {
      const value = v ? v.at(v.length - 1) : " ";
      const format = formatter == null ? void 0 : formatter(value, i, formatValue.value.join(""));
      if (isFunction(formatter) && !isNumber(format) && !isString(format)) {
        return;
      }
      emits("input", value, ev, i);
      computedValue.value = computedValue.value.slice(0, i) + value + computedValue.value.slice(i + 1);
      if (v && !inputValue.value[i + 1] && i < _length.value - 1) {
        inputList.value[i].blur();
        await sleep(0);
        inputList.value[i + 1].focus();
      }
    };
    const handleMousedown = (e, i) => {
      if (isWritable(i))
        return;
      e.preventDefault();
    };
    const handleClick = async (i) => {
      var _a;
      if (isWritable(i))
        return;
      const index = inputValue.value.findIndex((item) => !item);
      await sleep(0);
      (_a = inputList.value[index]) == null ? void 0 : _a.focus();
    };
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", {
        class: normalizeClass(["yc-verification-code", `yc-verification-code-size-${unref(size)}`])
      }, [
        (openBlock(true), createElementBlock(Fragment, null, renderList(length.value, (v, i) => {
          var _a;
          return openBlock(), createElementBlock(Fragment, { key: v }, [
            createVNode(unref(Input), {
              "model-value": inputValue.value[i],
              size: unref(size),
              disabled: _ctx.disabled,
              error: _ctx.error,
              "invisible-button": false,
              visibility: _ctx.masked,
              readonly: _ctx.readonly || !isWritable(i),
              class: normalizeClass([
                {
                  "yc-input-disabled-write": !isWritable(i)
                }
              ]),
              ref_for: true,
              ref: (el) => inputList.value[i] = el,
              onClick: ($event) => handleClick(i),
              onMousedown: ($event) => handleMousedown($event, i),
              onInput: (v2, ev) => handleInput(v2, ev, i),
              onChange: _cache[0] || (_cache[0] = ($event) => _ctx.$emit("change", unref(computedValue)))
            }, null, 8, ["model-value", "size", "disabled", "error", "visibility", "readonly", "class", "onClick", "onMousedown", "onInput"]),
            ((_a = _ctx.separator) == null ? void 0 : _a.call(_ctx, i, inputValue.value[i])) ? (openBlock(), createBlock(resolveDynamicComponent(unref(getSlotFunction)(_ctx.separator(i, inputValue.value[i]))), { key: 0 })) : createCommentVNode("", true)
          ], 64);
        }), 128))
      ], 2);
    };
  }
});
export {
  _sfc_main as default
};
