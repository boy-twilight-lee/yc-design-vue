import { defineComponent, toRefs, ref, watch, openBlock, createBlock, unref, withCtx, createTextVNode, toDisplayString } from "vue";
import "../node_modules/tinycolor2/esm/tinycolor.js";
import "../_shared/utils/dom.js";
import { sleep } from "../_shared/utils/fn.js";
import { isUndefined } from "../_shared/utils/is.js";
import { formatSeconds } from "../_shared/utils/time.js";
import "../Empty/index.js";
import "../_shared/icons/_Icon.vue.js";
import _Statistic from "./Statistic.vue.js";
const _sfc_main = /* @__PURE__ */ defineComponent({
  ...{
    name: "Countdown"
  },
  __name: "Countdown",
  props: {
    title: { default: "" },
    value: { default: void 0 },
    now: { default: void 0 },
    format: { default: "HH:mm:ss" },
    start: { type: Boolean, default: true },
    easeing: { default: "quadOut" },
    valueStyle: { default: () => {
      return {};
    } }
  },
  emits: ["finish"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emits = __emit;
    const { value: _value, now: _now, format, start } = toRefs(props);
    const value = ref(0);
    const now = ref(0);
    const startValue = ref(value.value);
    const animation = ref(false);
    const handleFinish = () => {
      if (startValue.value - 1e3 <= 0) {
        animation.value = false;
        return emits("finish");
      }
      startValue.value -= 1e3;
    };
    watch(
      () => start.value,
      async (val) => {
        if (!animation.value) {
          value.value = isUndefined(_value.value) ? Date.now() + 5 * 60 * 1e3 : _value.value;
          now.value = isUndefined(_now.value) ? Date.now() : _now.value;
          startValue.value = value.value - now.value;
        }
        if (!val)
          return;
        await sleep(0);
        animation.value = true;
      },
      {
        immediate: true
      }
    );
    return (_ctx, _cache) => {
      return openBlock(), createBlock(_Statistic, {
        title: _ctx.title,
        value: startValue.value - 1e3,
        "value-from": startValue.value,
        start: unref(start),
        animation: animation.value,
        format: unref(format),
        "value-style": _ctx.valueStyle,
        easeing: _ctx.easeing,
        "animation-duration": 1e3,
        "is-countdown": "",
        onFinish: handleFinish
      }, {
        value: withCtx(() => [
          createTextVNode(toDisplayString(unref(formatSeconds)(value.value - now.value, unref(format))), 1)
        ]),
        _: 1
      }, 8, ["title", "value", "value-from", "start", "animation", "format", "value-style", "easeing"]);
    };
  }
});
export {
  _sfc_main as default
};
