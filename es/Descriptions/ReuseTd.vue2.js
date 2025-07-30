import { defineComponent, openBlock, createElementBlock, normalizeClass, unref, normalizeStyle, createBlock, resolveDynamicComponent } from "vue";
import "../node_modules/tinycolor2/esm/tinycolor.js";
import "../_shared/utils/dom.js";
import { isObject } from "../_shared/utils/is.js";
import "../_shared/utils/time.js";
import { getSlotFunction } from "../_shared/utils/vue-utils.js";
import "../Empty/index.js";
import "../_shared/icons/_Icon.vue.js";
import useContext from "./hooks/useContext.js";
const _hoisted_1 = ["colspan"];
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "ReuseTd",
  props: {
    data: {},
    index: {},
    type: {},
    colspan: {}
  },
  setup(__props) {
    const { labelStyle, valueStyle, bordered, size, align, slots } = useContext().inject();
    return (_ctx, _cache) => {
      var _a, _b, _c, _d;
      return openBlock(), createElementBlock("td", {
        class: normalizeClass([
          _ctx.type == "label" ? "yc-descriptions-item-label" : "yc-descriptions-item-value",
          `yc-descriptions-item-cell-size-${unref(size)}`,
          {
            "yc-descriptions-item-cell-bordered": unref(bordered)
          }
        ]),
        style: normalizeStyle({
          ..._ctx.type == "label" ? unref(labelStyle) : unref(valueStyle),
          textAlign: unref(isObject)(unref(align)) ? unref(align)[_ctx.type] ?? "left" : unref(align)
        }),
        colspan: _ctx.colspan
      }, [
        (openBlock(), createBlock(resolveDynamicComponent(
          unref(getSlotFunction)(
            _ctx.type == "label" ? ((_b = (_a = unref(slots)).label) == null ? void 0 : _b.call(_a, {
              label: _ctx.data.label,
              index: _ctx.index,
              data: _ctx.data
            })) ?? _ctx.data.label : ((_d = (_c = unref(slots)).value) == null ? void 0 : _d.call(_c, {
              value: _ctx.data.value,
              index: _ctx.index,
              data: _ctx.data
            })) ?? _ctx.data.value
          )
        )))
      ], 14, _hoisted_1);
    };
  }
});
export {
  _sfc_main as default
};
