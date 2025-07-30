import { defineComponent, openBlock, createElementBlock, createElementVNode, normalizeStyle, unref, createBlock, resolveDynamicComponent } from "vue";
import "../node_modules/tinycolor2/esm/tinycolor.js";
import "../_shared/utils/dom.js";
import { isObject } from "../_shared/utils/is.js";
import "../_shared/utils/time.js";
import { getSlotFunction } from "../_shared/utils/vue-utils.js";
import "../Empty/index.js";
import "../_shared/icons/_Icon.vue.js";
import useContext from "./hooks/useContext.js";
const _hoisted_1 = { class: "yc-descriptions-item" };
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "ReuseItem",
  props: {
    data: {},
    index: {}
  },
  setup(__props) {
    const { labelStyle, valueStyle, slots, align } = useContext().inject();
    return (_ctx, _cache) => {
      var _a, _b, _c, _d;
      return openBlock(), createElementBlock("td", _hoisted_1, [
        createElementVNode("div", {
          class: "yc-descriptions-item-label",
          style: normalizeStyle({
            ...unref(labelStyle),
            textAlign: unref(isObject)(unref(align)) ? unref(align).label ?? "left" : unref(align)
          })
        }, [
          (openBlock(), createBlock(resolveDynamicComponent(
            unref(getSlotFunction)(
              ((_b = (_a = unref(slots)).label) == null ? void 0 : _b.call(_a, {
                label: _ctx.data.label,
                index: _ctx.index,
                data: _ctx.data
              })) ?? _ctx.data.label
            )
          )))
        ], 4),
        createElementVNode("div", {
          class: "yc-descriptions-item-value",
          style: normalizeStyle({
            ...unref(valueStyle),
            textAlign: unref(isObject)(unref(align)) ? unref(align).value ?? "left" : unref(align)
          })
        }, [
          (openBlock(), createBlock(resolveDynamicComponent(
            unref(getSlotFunction)(
              ((_d = (_c = unref(slots)).value) == null ? void 0 : _d.call(_c, {
                value: _ctx.data.value,
                index: _ctx.index,
                data: _ctx.data
              })) ?? _ctx.data.value
            )
          )))
        ], 4)
      ]);
    };
  }
});
export {
  _sfc_main as default
};
