import { defineComponent, computed, openBlock, createElementBlock, createBlock, resolveDynamicComponent, unref } from "vue";
import "../node_modules/tinycolor2/esm/tinycolor.js";
import "../_shared/utils/dom.js";
import { isUndefined } from "../_shared/utils/is.js";
import "../_shared/utils/time.js";
import "../Empty/index.js";
import "../_shared/icons/_Icon.vue.js";
import _sfc_main$1 from "../_shared/icons/IconSeparator.vue.js";
const _hoisted_1 = { class: "yc-breadcrumb-item-separator" };
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "BreadcrumbSeparator",
  props: {
    separatorSlots: { type: Function },
    separator: {},
    itemSeparatorSlots: { type: Function },
    itemSeparator: {}
  },
  setup(__props) {
    const props = __props;
    const showSeparator = computed(() => {
      if (isUndefined(props.itemSeparatorSlots)) {
        return props.separatorSlots || props.separator;
      } else {
        return props.itemSeparatorSlots || props.itemSeparator || props.separatorSlots || props.separator;
      }
    });
    const renderSeparator = () => {
      var _a, _b, _c;
      if (isUndefined(props.itemSeparatorSlots)) {
        return ((_a = props.separatorSlots) == null ? void 0 : _a.call(props)) || props.separator;
      } else {
        return ((_b = props.itemSeparatorSlots) == null ? void 0 : _b.call(props)) || props.itemSeparator || ((_c = props.separatorSlots) == null ? void 0 : _c.call(props)) || props.separator;
      }
    };
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("span", _hoisted_1, [
        showSeparator.value ? (openBlock(), createBlock(resolveDynamicComponent(renderSeparator), { key: 0 })) : (openBlock(), createBlock(unref(_sfc_main$1), { key: 1 }))
      ]);
    };
  }
});
export {
  _sfc_main as default
};
