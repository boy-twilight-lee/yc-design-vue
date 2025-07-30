import { defineComponent, toRefs, openBlock, createElementBlock, mergeProps, unref, createElementVNode, Fragment, renderList, createBlock, withCtx, resolveDynamicComponent } from "vue";
import { useVirtualList } from "../node_modules/@vueuse/core/index.js";
import "../node_modules/tinycolor2/esm/tinycolor.js";
import "../_shared/utils/dom.js";
import "../_shared/utils/time.js";
import { getSlotFunction } from "../_shared/utils/vue-utils.js";
import "../Empty/index.js";
import "../_shared/icons/_Icon.vue.js";
import useContext from "./hooks/useContext.js";
import "./index.js";
import Option from "./Option.vue.js";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "SelectVirtualList",
  props: {
    virtualListProps: {}
  },
  setup(__props) {
    var _a, _b;
    const props = __props;
    const { virtualListProps } = toRefs(props);
    const { fieldKey, renderOptions, slots, emits } = useContext().inject();
    const { list, wrapperProps, containerProps } = useVirtualList(renderOptions, {
      overscan: ((_a = virtualListProps.value) == null ? void 0 : _a.buffer) ?? 10,
      itemHeight: ((_b = virtualListProps.value) == null ? void 0 : _b.itemHeight) || 36
    });
    const renderLabel = (option) => {
      if (slots.option) {
        return () => {
          var _a2;
          return ((_a2 = slots.option) == null ? void 0 : _a2.call(slots, {
            data: option
          })) || [];
        };
      }
      const { render, label } = fieldKey.value;
      return option[render] ? getSlotFunction(option[render]) : getSlotFunction(option[label]);
    };
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", mergeProps({ class: "yc-select-dropdown-virtual-list" }, unref(containerProps)), [
        createElementVNode("div", mergeProps({ class: "yc-select-dropdown-list" }, unref(wrapperProps)), [
          (openBlock(true), createElementBlock(Fragment, null, renderList(unref(list), ({ data: v }) => {
            return openBlock(), createBlock(unref(Option), {
              key: v[unref(fieldKey).value],
              value: v[unref(fieldKey).value],
              disabled: v[unref(fieldKey).disabled],
              "is-fallback-option": v[unref(fieldKey).isFallbackOption]
            }, {
              default: withCtx(() => [
                (openBlock(), createBlock(resolveDynamicComponent(renderLabel(v))))
              ]),
              _: 2
            }, 1032, ["value", "disabled", "is-fallback-option"]);
          }), 128))
        ], 16)
      ], 16);
    };
  }
});
export {
  _sfc_main as default
};
