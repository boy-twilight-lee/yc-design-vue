import { toRefs, useSlots, computed, ref, provide, inject } from "vue";
import "../../node_modules/tinycolor2/esm/tinycolor.js";
import { getBreakpointValue, mediaQueryHandler } from "../../_shared/utils/dom.js";
import "../../_shared/utils/time.js";
import { findComponentsFromVnodes } from "../../_shared/utils/vue-utils.js";
import { getGlobalConfig } from "../../_shared/utils/global-config.js";
import _sfc_main from "../DescriptionsItem.vue.js";
const DESCRIPTIONS_CONTEXT_KEY = "radio-group-context";
const useContext = () => {
  const provide$1 = (props) => {
    const {
      data: _data,
      column: _column,
      layout,
      labelStyle,
      valueStyle,
      bordered,
      align
    } = toRefs(props);
    const { size } = getGlobalConfig(props);
    const slots = useSlots();
    const data = computed(() => {
      var _a;
      const nodes = findComponentsFromVnodes(
        ((_a = slots.default) == null ? void 0 : _a.call(slots)) || [],
        _sfc_main.name
      );
      if (!nodes.length)
        return _data.value;
      return nodes.map((node) => {
        var _a2, _b, _c, _d;
        return {
          label: ((_a2 = node.children) == null ? void 0 : _a2.label) ?? ((_b = node.props) == null ? void 0 : _b.label),
          value: (_c = node.children) == null ? void 0 : _c.default,
          span: (_d = node.props) == null ? void 0 : _d.span
        };
      });
    });
    const breakpoint = ref("xxl");
    const column = computed(() => {
      return getBreakpointValue(breakpoint.value, _column.value, 3);
    });
    mediaQueryHandler((name) => {
      breakpoint.value = name;
    });
    provide(DESCRIPTIONS_CONTEXT_KEY, {
      size,
      bordered,
      align,
      labelStyle,
      valueStyle,
      slots
    });
    return {
      data,
      size,
      column,
      layout
    };
  };
  const inject$1 = () => {
    return inject(DESCRIPTIONS_CONTEXT_KEY, {
      size: ref("medium"),
      bordered: ref(false),
      align: ref("left"),
      labelStyle: ref({}),
      valueStyle: ref({}),
      slots: {}
    });
  };
  return {
    provide: provide$1,
    inject: inject$1
  };
};
export {
  useContext as default
};
