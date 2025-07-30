import { defineComponent, toRefs, openBlock, createElementBlock, mergeProps, unref, createElementVNode, Fragment, renderList, renderSlot } from "vue";
import { useVirtualList } from "../node_modules/@vueuse/core/index.js";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "ListVirtual",
  props: {
    data: {},
    virtualListProps: {}
  },
  setup(__props) {
    var _a, _b;
    const props = __props;
    const { data, virtualListProps } = toRefs(props);
    const { list, containerProps, wrapperProps } = useVirtualList(data, {
      itemHeight: ((_a = virtualListProps.value) == null ? void 0 : _a.itemHeight) || 40,
      overscan: ((_b = virtualListProps.value) == null ? void 0 : _b.buffer) || 10
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", mergeProps({ class: "yc-virtual-list" }, unref(containerProps)), [
        createElementVNode("div", mergeProps({ class: "yc-list-content" }, unref(wrapperProps)), [
          (openBlock(true), createElementBlock(Fragment, null, renderList(unref(list), ({ data: data2, index: i }) => {
            return renderSlot(_ctx.$slots, "item", {
              key: i,
              index: i,
              item: data2
            });
          }), 128))
        ], 16)
      ], 16);
    };
  }
});
export {
  _sfc_main as default
};
